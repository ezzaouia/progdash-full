import { Pipe, PipeTransform } from '@angular/core';
import { get, join } from 'lodash';
import * as moment from 'moment';
import 'moment-duration-format';

@Pipe({ name: 'formatAttr' })
export class FormatAttrPipe implements PipeTransform {
  transform ( value: number, key: string, options?: string ): string {
    return this.keyFormat( value, key );
  }

  keyFormat ( value, key ) {
    let kf = null;
    switch ( key ) {
      case 'score': {
        kf = this.pluralFormater( value, 'règle' );
        break;
      }
      case 'time': {
        kf = this.timeFormater( value );
        break;
      }
      case 'activeUsers': {
        kf = this.pluralFormater( value, 'actif' );
        break;
      }
      case 'inactiveUsers': {
        kf = this.pluralFormater( value, 'inactif' );
        break;
      }
      case 'widget': {
        kf = this.pluralFormater( value, 'widget' );
        break;
      }
      default: {
        kf = value;
      }
    }
    return kf;
  }

  timeFormater ( value ) {
    return moment.duration( value, 'minutes' ).format( 'h[ ][h][ ]mm[ ][min]' );
  }

  pluralFormater ( value, ...labels ) {
    return value && value > 1
      ? `${value || 0} ${join( labels, 's ' )}s`
      : `${value || 0} ${join( labels, ' ' )}`;
  }
}
