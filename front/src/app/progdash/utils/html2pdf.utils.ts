import * as html2pdf from 'html2pdf.js';


export const a4WidgetsStyles = {
  'svg-connections': {
    width: 746,
    height: 200,
  },
  'svg-mline-chart': {
    width: 700,
    height: 300,
  },
};


export const realStyle = function ( _elem, _style ) {
  let computedStyle;
  if ( typeof _elem.currentStyle !== 'undefined' ) {
    computedStyle = _elem.currentStyle;
  } else {
    computedStyle = document.defaultView.getComputedStyle( _elem, null );
  }
  return _style ? computedStyle[_style] : computedStyle;
};

export const copyComputedStyle = function ( src, dest ) {
  const s = realStyle( src, null );
  for ( const i in s ) {
    // Do not use `hasOwnProperty`, nothing will get copied
    if ( typeof i === 'string' && i !== 'cssText' && !/\d/.test( i )) {
      // The try is for setter only properties
      try {
        dest.style[i] = s[i];
        // `fontSize` comes before `font` If `font` is empty, `fontSize` gets
        // overwritten.  So make sure to reset this property. (hackyhackhack)
        // Other properties may need similar treatment
        if ( i === 'font' ) {
          dest.style.fontSize = s.fontSize;
        }
      } catch ( e ) {}
    }
  }
};

export enum PrintStatus {
  Success = '1',
  Failure = '0',
  Empty = '-1',
}


export const printPdfReport = ( selectedWidgets ): PrintStatus => {
  if ( !selectedWidgets ) {
    return PrintStatus.Empty;
  }

  let widgetEl, cloneEl, tmpWrapper;
  // TODO replace tmpContainer div by a iframe
  const tmpContainer = document.createElement( 'div' );
  tmpContainer.setAttribute( 'id',  'pdf-container' );

  selectedWidgets
    .forEach( widgetId => {
      try {
        widgetEl = document.getElementById( widgetId );
        cloneEl = widgetEl.cloneNode( true );
        tmpWrapper = document.createElement( 'div' );

        copyComputedStyle( widgetEl, cloneEl );

        tmpWrapper.appendChild( cloneEl );
        tmpWrapper.setAttribute( 'style', `
          border: 1px solid #eee;
          margin: 6px;
        ` );
        // tmpWrapper.setAttribute( 'class', 'avoid' );
        tmpContainer.appendChild( tmpWrapper );
      } catch ( error ) {
        console.error( error + ' ' + widgetId );
        return PrintStatus.Failure;
      }
    });

    try {
      document.body.appendChild( tmpContainer );
      // TODO Add class name, prof etc.
      // to the name of the report
      html2pdf()
        .from( tmpContainer )
        .set({
          filename: 'rapport-' + +new Date() + '.pdf',
          pagebreak: { mode: [ 'avoid-all' ] },
          jsPDF:  {  format: 'letter' },
        })
        .save();
      return PrintStatus.Success;

    } catch ( error ) {
      console.error( error );
      return PrintStatus.Failure;
    }

};

export const printPdfReportCleanup = () => {
  const tmpContainer = document.getElementById( 'pdf-container' );
  tmpContainer.parentNode.removeChild( tmpContainer );
};
