import React from "react";
import Seed from "./js/Seed";

// export default function(){
//   var app = 
// }

export default React.render(
  <Seed />,
  document.getElementById('seed')
)

// require('./fonts/stylesheet.css');
// require('./sass/styles.scss');
// require('./icons/style.css');
// require('script!./js/externals/native.history.js');

// var Sakay = require('./js/App');
// var Util = require('lib/util');
// var fastclick = require('fastclick');
// var LocaleStore = require('./js/stores/LocaleStore');

// module.exports = function(config) {
//   React.initializeTouchEvents(true); // doesn't seem to be necessary.
  
//   document.addEventListener('DOMContentLoaded', function() {
//     fastclick.attach(document.body);
//   });

//   var app = React.render(
//     <Sakay 
//       isNarrow={Util.isNarrow()} 
//       isMobile={Util.isMobile()} 
//       isEmbed={config == 'embed'}
//       isCordova={window.cordova != undefined}
//       {...LocaleStore.data} />
//     ,
//     document.getElementById('sakay')
//   );
  
//   Util.registerMediaListener(function(event) {
//     app.setProps({isNarrow: event.matches});
//   });
  
//   LocaleStore.bind('localeChanged', function() {
//     app.setProps(LocaleStore.data);
//   });
//   return app;
// }
