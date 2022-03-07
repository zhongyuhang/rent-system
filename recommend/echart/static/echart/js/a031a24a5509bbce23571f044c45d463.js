(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('阳明区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"231003","properties":{"name":"阳明区","cp":[129.635615,44.596104],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@G_GUYm][YQUKECsICiIkGm@A@DF@@@BGLADABA@C@A@A@MIGE@AQ@A@CBCBCBEDABCF@@ABEA@A@@BA@ABABC@@@ABAB@BA@@BABABA@A@ABA@A@@@A@A@@@A@@@ABA@A@@BA@ABA@AB@BA@A@A@@BA@@BAD@BABABAB@@ABA@@BA@@BAB@@A@A@A@@@AAAAA@A@@@@ACA@AAAA@AA@AAAE@AAA@CA@@A@ABA@@BC@@BA@A@A@@A@@@AAA@A@A@@@AA@@@@AA@A@A@AAAAA@AAAA@@AAA@@AA@@AC@@AAABC@@@I@A@A@@@A@@@A@ABA@A@ABC@@@AB@DA@@@@B@@AB@BAB@BA@@B@@@@A@@@AB@@@@@@@B@@@B@@@@@BB@@@@@BBD@@@BB@@B@@@BB@@@@BB@@@@AB@@@B@BAB@@@BA@@B@BAB@B@@@@AB@B@@@@@B@@@@B@@B@@BB@@@@@B@@@B@B@@@B@@@B@@@@@B@@A@@B@@@@AB@@@@AB@@A@@@A@@@A@A@A@ABA@@@A@@@ABA@AB@@A@@BA@A@A@@BA@@@@@A@@@@BA@A@@BA@@B@@@@@BA@@@@@ABA@A@@@A@@BA@A@@BA@A@CBCBCBA@ABC@AB@@ABA@@@@B@@A@@@@B@@@@A@@BA@@@AB@@A@@B@@@@A@@B@@A@@@@B@@A@@AA@A@A@C@@@CBA@A@ABCB@BA@AB@@AB@@A@@BA@@@ABA@A@@@A@A@@BA@AB@@@@AB@@@BA@@BA@@B@@@BA@@B@@@B@B@@@@@B@@@@@BAB@@@@@B@@@@AB@@@@A@@BA@@@AB@@A@A@ABA@A@AB@@A@@@A@@@A@@@@@A@A@@@@@A@@@A@@@@@CBA@@@@@@@AB@@@@@@A@@B@@A@@@A@A@A@@BA@A@@@@BA@@@A@A@A@A@@@AB@@A@@@AB@@ABA@@@@BA@@@@B@BA@A@@BA@A@A@@@A@@@@@@AA@@@@@A@@@@@@@A@@@A@@@A@@@@BA@@@ABABCB@@ABA@@BA@@@@@AB@@A@A@@@AB@@A@AB@@A@@BA@AD@@ADADA@AB@BABA@CD@@ABABA@A@@@ABC@C@@@A@@BAB@@@BA@@B@@AB@B@@@B@@A@@B@B@B@BAB@@AB@@@B@@@@ABA@@BA@@BA@A@@@A@A@AB@@A@@BA@A@ABA@A@@@@@A@@@ABABA@@B@@ABAB@@ABABAB@@@B@@A@@B@@@@@@AB@@A@AAE@E@C@A@AB@@AB@@@BCF@BAD@@ABCD@@@@@@@@A@C@@AAB@@@@AB@DAD@BAB@@@@@@@@@@@BAB@@@BBB@D@BBBBF@@@B@@CBC@CBG@ICIECBCB@@@@@B@@@@@@@BBBDHBDIBA@E@@@@@@@@@@@AAC@AAA@@@C@AA@@EA@@@@@@A@A@AA@BA@@@@B@@@@@@ABAD@@ABAD@BA@@B@@@@AB@@@@B@BB@@B@B@B@@@@@@@@@DB@@DBBBB@@@@B@@B@@@BDBBBB@@@BDBBB@B@@@@@@HHHLGB@@IDFLBBB@LB@FNB@B@BBB@B@BBB@BAB@@AD@@AFABABAFAD@BA@@B@@@BBBBDBFBDFJ@@BDBD@B@@BB@@B@@B@@B@D@@@FB@@@DBH@DBFDFBBBBD@D@F@FB@@B@DBHDDBDBBBBFCHCHCHMVEN@@AB@B@@B@@BB@@@BBB@@@BB@@BBB@B@BBB@BB@@@@B@B@BA@@B@B@BB@@@@B@B@@@BAB@B@BB@@@@@B@BB@@B@B@@@BB@@B@@@@@B@@@@@B@@@@AB@@A@@@@@@B@@BB@@@BA@@@A@@@A@A@@B@@@B@B@B@BB@@@BB@@B@DB@@@@B@B@B@B@B@B@B@B@@@B@@@B@@@B@@@@BB@B@BBBB@@B@BB@@BB@@B@BB@@@B@@B@@B@@BB@@@@@@@B@@AB@@@B@@@@@@AB@@@BB@@B@@BB@B@@@BB@@BB@@@@@AB@@@@AB@@A@A@A@@@@B@@@B@@@@@B@@@B@@A@@@A@@BA@AB@@AB@@@@BB@@@@@@@B@@@@@BA@@BA@@@@@@B@@@@A@@B@@AB@B@@@B@@@@AB@@A@@BA@@@@BA@@@AB@@ABA@@B@@@@@B@B@@@B@@@@@BA@@B@@@@BB@@@B@@@B@@@@@B@@@B@B@@@@B@@@@@B@@@B@@B@@B@@B@@AB@@@@@B@@B@@@@@@B@@@@@@AB@@@B@@@@@B@@@@AB@@@@@@@B@@@@@B@@@B@@@B@@AB@@@BA@@@A@A@A@@@C@@@A@@@@@@@@@A@@@@B@@@B@@@BA@@@@B@@@@@B@@@BA@@B@@@B@@@@A@@@@@A@@@A@A@@@A@@@A@@@A@@@AB@@A@@B@@A@@@A@AA@BA@@@ABA@@B@@@B@@@@@B@B@BB@@B@@@B@@@@@B@B@D@B@@@D@B@@@D@B@@@@A@A@@@@@ABA@@@A@A@@@A@B@@B@@B@@B@@AB@@AB@B@@@B@@B@ABB@@@BB@@@B@B@@@@@@B@BB@@@@@BA@@@@BB@@@B@B@B@@@@B@@@B@@B@@@@@@@@B@@@B@@@@@B@@@@@B@@@B@@@@AB@@@@AB@@@D@B@@@@@@B@@BB@B@B@B@@@@@B@@@B@B@@@BB@@B@B@BB@@B@@@@@BB@@@B@@@@@B@B@@@B@@@B@@@B@@@BAB@@@@@BB@@@@@@BB@@@@BB@@@@@@B@@@D@@@DA@@B@@@@@B@@@@@B@B@@@BAB@B@B@@@@@@@BB@@@BBB@@BB@@@@@@B@@@@@BA@@@A@@BA@@BA@@BA@@@A@A@@@@BA@@B@@A@@B@@A@AAABA@AB@@@@@B@@A@@B@@@B@@@@A@@BA@A@@@@@@@@BA@@@@BA@@@A@@@A@@BA@A@@BA@A@A@@@ABA@@@ABA@@BA@@@A@@BA@A@@B@@@B@BAB@@@BA@@B@@@@@@B@B@B@@@B@BA@@BB@@B@B@BB@BB@@@@B@@@B@@@B@@@@@B@B@@BB@@@B@@AB@@@B@B@@@@@B@@@@@B@B@@@@@BA@@B@B@@B@@@B@B@@@B@B@B@@@BBB@B@@BBB@@@@B@B@B@@@B@B@@@B@@@B@B@B@@@B@@@@@B@BB@@BB@@BB@@@BB@B@@@BA@BB@@@@@@B@@@BB@@BB@@@B@B@@@B@@@BB@@@BB@@B@@@B@@B@@B@@B@@BB@@@B@@@B@BA@@@@B@@@B@@BB@@BB@@@BB@@@BB@@B@@BB@@@BB@@@@B@@@B@@@B@@@@BB@@@@BB@@@B@B@@BB@@B@@B@@@@@@ABA@@B@@AB@@@BAB@@@@@BB@@@RGXIJKLMCIQGIMES@OVIfUNETIJGDAXQ@@TM@@DALK@AXWNKBCXWZO\\KVBbJR@@ENILAHDZIjGZALDf_FIDKFYBSCO@E@EHINKFIHMJMLSXeJKNMnoDKBCZMDLJFRHlQ\\G\\MHKBAAKQEeAeCEEFmZ{Dg"],"encodeOffsets":[[133256,45626]]}}],"UTF8Encoding":true});}));