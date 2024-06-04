import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [4495906, 5288289],
    zoom: 7,
    maxZoom: 9,
    minZoom: 5,
  })
});


// window.onload = init;

// function init(){
//   const map = new ol.Map({
//     view: new ol.View({
//       center: [0, 0],
//       zoom: 2
//     }),
//     layers: [
//       new ol.layer.Tile({
//         source: new ol.source.OSM()
//       })
//     ],
//     target: 'js-map'
//   })

//   map.on('click', function(e){
//     console.log(e);
//   })
// }