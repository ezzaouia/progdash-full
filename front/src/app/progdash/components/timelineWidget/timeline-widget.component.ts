import {
  Component,
  OnDestroy,
  Input,
  Output,
  ViewChild,
  ElementRef,
  AfterViewInit,
  EventEmitter
} from '@angular/core';
import { select, scaleBand, scaleLinear } from 'd3';
import { map, get, startsWith } from 'lodash';
import { BehaviorSubject, Subscription, merge } from 'rxjs';
import * as moment from 'moment';
import 'moment-duration-format';
moment.locale( 'fr' );

/* tslint:disable component-selector  */
@Component({
  selector: 'TimelineWidget',
  template: `
    <mat-card #parent class="widget-card" id="{{id}}">
      <mat-card-header>
        <mat-card-title>{{ title }}</mat-card-title>
        <PrintWidget
          *ngIf="isStartPrintReport"
          [widgetId]="id"
          [checked]="selectedWidgets.includes(id)"
          (checkWidgetHandler)="checkWidgetHandler.emit($event)">
        </PrintWidget>
      </mat-card-header>
      <mat-card-content>
        <div #svg class="widget-content">
          <svg
            id="svg-{{id}}"
            preserveAspectRatio="xMidYMid meet">
            <g #grid class="axis"></g>
            <g #bars class="chart"></g>
          </svg>
       </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [ `
    :host {
      display: flex;
      width: 100%;
      height: 100%;
    }
    .widget-card {
      width: 100%;
      height: 100%;
      padding: 12px;
      box-sizing: border-box;
    }
    mat-card-content {
      padding: 12px 0px;
      height: 80%;
    }
    .widget-content {
      width: 100%;
      height: 100%;
    }
    svg {
      // width: 100%;
      // border: 1px solid #eee;
    }
    svg .tick text {
      display: none;
    }`,
  ],
})
export class TimelineWidgetComponent implements AfterViewInit, OnDestroy {
  @ViewChild( 'svg' ) svgRef: ElementRef;
  @ViewChild( 'grid' ) gridRef: ElementRef;
  @ViewChild( 'bars' ) barsRef: ElementRef;

  @Output() checkWidgetHandler = new EventEmitter();

  @Input() title;
  @Input() id: string;
  @Input() isStartPrintReport;
  @Input() selectedWidgets;

  updateSub: Subscription;
  timescale$ = new BehaviorSubject<string>( '' );
  values$ = new BehaviorSubject<any[]>([]);
  update$ = merge( this.values$, this.timescale$ );


  timer = null;
  width;
  height = 200;
  barWidth = 20;
  margin = { topBottom: 30, leftRight: 50 };
  xScale = scaleBand();
  yScale = scaleLinear();

  constructor () {}

  onAllDone () {
    this.width = this.svgRef.nativeElement.offsetWidth;
    this.height = this.svgRef.nativeElement.offsetHeight;

    if ( this.timer ) {
      clearTimeout( this.timer );
      this.timer = null;
    }

    if ( !this.width || !this.height ) {
      this.timer = setTimeout( this.onAllDone.bind( this ), 1000 );
      return;
    }

    select( this.svgRef.nativeElement )
      .select( 'svg' )
      .attr( 'viewBox', `0 0 ${ this.width } ${ this.height }` );

    this.render();
  }

  ngAfterViewInit (): void {
    this.updateSub = this.update$
      .subscribe( _ => {
        this.onAllDone();
      });
  }


  ngOnDestroy (): void {
    this.updateSub.unsubscribe();
  }

  render () {
    this.updateScale();
    this.renderGrid();
    this.renderBars();
  }

  updateScale () {
    this.xScale
      .domain( map( this.values, 'x' ))
      .range([ 0, this.width - 2 * this.margin.leftRight  ]);
    this.yScale
      .domain([ 0, 100 ])
      .range([ this.height - 2 * this.margin.topBottom, 0 ]);
  }

  renderBars () {
    const barWidth = 20;
    const group = select( this.barsRef.nativeElement )
      .attr(
        'transform',
        `translate(${this.margin.leftRight / 2 }, ${this.margin.topBottom})`
      )
      .selectAll( '.bars' )
      .data( this.values );

    const enter = group
      .enter()
      .append( 'g' )
      .classed( 'bars', true )
      .merge( group )
      .attr(
        'transform',
        ( d, _ ) =>
          `translate(${this.xScale( get( d, 'x' ))}, 0)`
      );

    enter.append( 'rect' );
    enter.append( 'text' );

    enter
      .select( 'rect' )
      .attr( 'width', barWidth )
      .attr( 'height', d => this.yScale( 0 ) - this.yScale( get( d, 'y' )))
      .attr( 'y', d => this.yScale( get( d, 'y' )))
      .attr( 'x', this.xScale.bandwidth() / 2 )
      .style( 'fill', '#ccc' )
      .style( 'stroke', 'none' );

    enter
      .select( 'text' )
      .text( d => get( d, 'y' ))
      .attr( 'class', 'text-label middle' )
      .attr( 'x', this.xScale.bandwidth() / 2 + barWidth / 2 )
      .attr( 'y', d => this.yScale( get( d, 'y' )) - 5 );

    group.exit().remove();
  }

  renderGrid () {
    const group = select( this.gridRef.nativeElement )
      .attr(
        'transform',
        `translate(${this.margin.leftRight}, ${this.margin.topBottom})`
      )
      .selectAll( '.grid' )
      .data( this.values );

    const enter = group
      .enter()
      .append( 'g' )
      .classed( 'grid', true )
      .merge( group )
      .attr( 'transform', ( d, _ ) => `translate(${ this.xScale( get ( d, 'x' )) }, 0)` );

    enter.append( 'line' );
    enter.append( 'text' );

    enter
      .select( 'line' )
      .attr( 'y1', -20 )
      .attr( 'y2', this.yScale.range()[0])
      .style( 'stroke', ( d, i ) => {
        const stroke = '#777';
        const text = moment( get( d, 'date' )).format( 'ddd DD/MM/YY' );
        if ( this.timescale !== 'lastWeek' ) {
          if ( startsWith( text, 'ven.' ) || startsWith ( text, 'lun.' )) {
            return stroke;
          } else {
            return '#ccc5';
          }
        } else {
          return stroke;
        }
      });

    enter
      .select( 'text' )
      .attr( 'y', -20 )
      .classed( 'text-label', true )
      .text(( d, i ) => {
        const text = moment( get( d, 'date' )).format( 'ddd DD/MM/YY' );
        if ( this.timescale !== 'lastWeek' ) {
          if ( startsWith( text, 'ven.' ) || startsWith ( text, 'lun.' )) {
            return text;
          } else {
            return null;
          }
        } else {
          return text;
        }
      });

    group.exit().remove();
  }

  @Input()
  set values ( value ) {
    this.values$.next( value );
  }

  get values () {
    return this.values$.getValue();
  }

  @Input()
  set timescale ( value ) {
    this.timescale$.next( value );
  }

  get timescale () {
    return this.timescale$.getValue();
  }
}
