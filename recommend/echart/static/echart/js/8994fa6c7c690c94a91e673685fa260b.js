(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('桃山区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"230903","properties":{"name":"桃山区","cp":[131.020202,45.765705],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@BA@A@C@@AAA@@AGAEAE@@@CAA@ECA@AACAA@EAAAA@A@A@A@A@A@A@A@A@A@A@@BA@A@@@A@@@AB@@A@A@ABA@AB@@A@@BA@@BAB@@AB@@A@AAA@A@@@AAA@AAA@@@A@@@A@A@@@A@A@C@@@A@@@@@A@@@@BA@@B@@ABA@A@ABA@A@A@@@AB@@@B@B@BA@@B@@@@@B@B@@A@@@@B@@@B@@A@@@@@A@AB@@@@A@@BA@@B@@A@@BA@@BA@@@@B@@A@@@@B@@@@@B@@@@A@@B@BA@@B@@@B@B@F@@@@@@@B@@AB@@A@@@@@ABA@A@A@@@A@A@@@AB@@@@@B@@@@A@@BA@A@C@ABA@@@@@@F@B@BA@@@ABCAA@A@A@@BA@AB@B@@@F@FBD@BB@@BEDGD@F@B@B@F@DADABM@@B@H@@@DABB@@BDBDDB@DDBBBB@BBB@DBBB@BA@@DAB@@ADAD@D@B@BAB@@ABAF@DAFBB@D@@@HAD@DBBBBBFBFDC@CBCBCBA@ABA@@B@@BBDDBBBD@D@B@@@B@B@B@@B@B@B@JAF@BA@@@@BC@A@ABC@C@ABABC@C@A@@BAB@BAD@HAB@F@B@@@D@BCB@@@@@XFXH@@BABCFGBCDEK@K@LEA@@AACAAH@B@P@@@BA@CBC@A@ABA@@@A@@@@@E@@@A@A@@@@@CBC@AB@@@@A@@@@BABC@@BA@AACBE@ABCBA@A@CAAAACAC@@@@@BA@@D@FAD@DCBAHCB@BAD@BA@@AAAAAAECACC@A@AA@@AAAC@C@A"],"encodeOffsets":[[134194,46819]]}}],"UTF8Encoding":true});}));