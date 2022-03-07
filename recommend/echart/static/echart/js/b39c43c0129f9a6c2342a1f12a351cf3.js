(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('西岗区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"210203","properties":{"name":"西岗区","cp":[121.612324,38.914687],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AC@@@@@@@@@@@@@@AA@@AA@@@@@AA@@@@@CC@@ACA@@A@A@E@@AB@@@@A@@@@@C@@@A@A@@@AAA@A@@@@@A@@BA@A@@BAB@BA@A@@@A@@B@@AB@BA@GDA@@F@@AB@B@@@B@B@@A@@@@@A@@B@@@@@@@@@@@@@@@@@@B@@B@@@@@@@B@@@@A@@@@@@@@@@@@@@@@@@B@@@@@@@@@@B@@@@@@@@@@@@@@BB@@@@@@@A@@@@B@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@BB@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@A@@@@@@A@@@@@@A@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@B@@@@@@@@@@@@@@B@@@@B@@@@@@@@@@@@@@B@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@B@@@@@B@@@@@@@@@@@@@@@A@@A@@@@@@@@B@@@@@@@@@@@@@@@B@@@BB@@@@@@@B@@@@ABAAA@GA@B@@@@@BA@B@AB@@@@@B@@@@AB@@A@@@@@AB@@@@@BB@@B@@@@B@DB@@@@AB@@AB@@@@@@AB@B@@AD@@@@A@@@@@@@B@DBDB@@@@@@@@@@@@B@DD@@@@@@@@@B@B@@@BAD@B@@@@@@@@@B@@@@@B@@@@@@@@@B@@@@@B@@ABE@@@@@@@@BA@@B@@@@@B@@@@@@@@@@@@A@@@@BA@@@A@ABA@A@@@C@@@AB@B@@@@EF@@@@@@A@@@@@@BA@@@A@BB@@B@@B@@B@BDBBB@@@@BB@AB@BB@B@B@B@@@ADB@@@@BAB@BBB@@@B@B@@@@BBB@BAB@B@@@B@DB@@RBL@@A@ABCBGBEBAB@BA@@F@HDhPF@D@D@M[CAAAICA@AAAACA@@A@CCA@@@@AA@@AA@@@CAA@AAA@A@@AB@@@@@@@ACF@DA@@@@AA@AA@@A@@@@@@@@DBBA@@AA@A@A@@@A@@@@@A@@B@@A@@B@@@AA@@@@@@@@@A@@@@@@@@A@@AA@@@@@@AB@@@@AB@BA@@BAAA@A@@@@BAB@@@DAB@BCB@BCBA@A@@@@@ABB@@B@@@@@@@@@BA@@B@@@@BBA@@@@B@@@@@@AB@@@@@@@@A@@@@@@@@B@@@@@@@@A@@@A@@@A@@@@@@@A@@@@@@@@AAB@@AA@@A@@@@@A@@@@A@@@A@@@A@C@A@@@AAA@A@@@A@@@@@A@@A@@A@ABA@@@@@@A@@AC"],"encodeOffsets":[[124554,39810]]}}],"UTF8Encoding":true});}));