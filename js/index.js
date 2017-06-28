(function( mapPreviewer, $, undefined ) {
  $( document ).ready(function() {
    // Handler for .ready() called.
    //Private Property
    var isHot = true;

    //Public Property
    // var container = document.getElementsByClassName('map');
    var container = document.getElementById('map');
    mapPreviewer.map = L.map(container, {
      minZoom: 2,
      maxZoom: 20,
      layers: [
          // L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',{
          //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy;<a href="https://carto.com/attribution">CARTO</a>'
          // })
        L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/base/{z}/{x}/{y}.png', {
          maxZoom: 18, 
          attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        })
      ],
      attributionControl: false,
      scrollWheelZoom: false
    });

    mapPreviewer.map.fitWorld();

    //Public Method
    mapPreviewer.fry = function() {
        var oliveOil;

        addItem( "\t\n Butter \n\t" );
        addItem( oliveOil );
        console.log( "Frying " + skillet.ingredient );
    };

    //Private Method
    function addItem( item ) {
        if ( item !== undefined ) {
            console.log( "Adding " + $.trim(item) );
        }
    }

  });
}( window.mapPreviewer = window.mapPreviewer || {}, $ ));