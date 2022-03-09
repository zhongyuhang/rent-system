(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('乐清市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"330382","properties":{"name":"乐清市","cp":[120.983906,28.113725],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@_HEB_JA@MDMFMFMD@@CBE@MDE@C@CBC@I@C@CBI@M@IBC@C@A@GAK@C@A@KC@@QGMECAA@GAG@IDC@EBA@A@IDCDC@@@CBABABED@BABAFABAFABAD@BAF@BAD@@CFCFCB@BBBDB@BB@B@@@@@B@@@@@@@B@@B@@B@@@B@@B@@@B@@@@@@B@B@@@@@@@B@@@@B@@@@BBA@B@@@CB@@B@@B@@@B@@@B@@@B@@@@@B@B@@B@@@@A@A@@@@@@B@@@@@B@@@@B@@B@@@@@B@B@@@B@@B@B@@A@A@@@A@@B@@A@@@@B@@B@@B@@@@@@@@B@ABB@@@B@@@@BBB@@@@@@AB@@@B@@B@@@@B@@@@@B@@@@@@BBB@@B@@AB@@AB@@@@@B@@D@@@BB@@@B@B@@BB@@@ABA@AB@@A@BB@@@@@AB@@@@@@@B@@@BB@@@@@B@@@A@@B@@@@D@@@@@@B@@@@A@@@C@@@@BBB@@BB@@B@@A@@B@@B@@@@@B@@C@@B@DB@@@@B@B@@@B@BAB@@@BB@@A@@B@@B@B@@@B@@@@A@@@@@@@@B@B@@@@AA@@A@@B@@B@@@A@@@@@@BA@@@B@@@@BA@@@B@@@BAB@@@BBBB@@B@BB@@B@D@@@BBB@B@@@B@BA@@F@@@B@@B@@AB@BA@A@A@@@@BA@@@@@@@@@@AA@@BAB@@@@ABA@A@A@@@A@@@@@AA@@@@A@@@@BA@@@@B@@@B@B@@@@@@@@@AA@@A@@@A@@@@@A@@@@B@@A@@@@@@@@@@@AA@@@A@@@@@A@@AA@@BBB@B@BA@AB@B@@@@@@AB@@@B@B@@@@@B@@@@@B@@@B@@BABBB@@BA@@B@@AB@@@BB@@@@BB@B@@@@B@@@B@@@@@B@@@B@@BB@@B@@@@BB@B@@@AB@@@@@@@@@BD@@@@BA@@@@@@@B@@@@@B@@BA@A@@@A@@BB@B@@@BB@@@@B@@B@@@@@B@@@@A@@BBBA@BB@@@@ABB@@@@@B@@A@B@@@@AB@@@B@@@@@@BB@@@@@@@B@@@@BBB@@@@BBB@@BB@@@@B@@B@@@@@B@@@@@@@B@@B@@BB@@@B@@@@@B@@@@@B@B@@B@@DB@BB@@@@@@AB@@B@BAB@@@B@B@B@B@@B@@@@B@@A@@@@@@@@BB@@@@@@@A@@@@@@@@B@@AB@@BBBBA@B@@BB@@@BBB@@BA@@BB@@BA@CB@B@BB@@@B@@B@@B@BBBBB@D@@@@@BD@@@BA@A@@@AB@@A@@@@BB@@@B@@@@BBB@@@@@B@@ABA@@@A@@@@B@@BBB@BBB@@@BB@@@BBB@@B@B@@@@@B@@A@@B@B@@@D@@@B@@@@@@@BB@B@@@@@B@@BD@@BB@@DBB@@@@BBB@@A@@B@@@@B@@B@@B@@@BB@@@@B@@@@B@@B@BBB@@B@@A@@BA@A@@BB@BB@@A@@@@@@@@@BB@@@@@@@B@@D@B@@B@@B@@BBB@@A@AD@@B@@B@@A@A@@@@@AAC@@@A@CBA@@@@B@B@B@@B@DBB@BBB@@BB@@@B@@@@@@A@@@@@@@@@@B@@@@@@@@@@BB@@ABB@@@@@@@BB@B@@@@@@@@@B@@@@@@@B@@@@@B@@@@@@BB@@@@@@@@@A@@BA@@@@@BB@@B@BAB@BB@@B@@@AB@BA@@B@@@@@B@@@@@@@@@B@@@B@@B@@B@@@B@@@@@@@B@@@B@@@@@BB@B@@BB@BBD@B@B@@B@@DBB@@@B@@@@@B@@BB@@@B@@@B@B@@BB@BB@@B@@@@ABBB@@B@@B@@@@@@B@B@@@B@@@@AAABBB@@A@@@@@A@B@@@B@@B@B@B@@@B@@@B@@BB@@AB@@@B@@@@A@BDBB@@@BA@@B@@@@BD@@@@@BB@B@BB@@B@@@@BB@@B@@@BA@@BA@@@AA@@@@A@AA@@B@@@A@@AA@@@@B@@@@ABA@@@A@A@@@@@AA@@AA@@AB@@B@@@AD@@B@@@@@@B@AA@A@A@@@@@@B@@@@A@@@A@@AA@@@AA@@@@@A@@@@@@A@@A@@@@A@CAAB@@A@@BAB@B@@@BB@@@@BB@@B@@@@@B@@A@@B@@@B@B@BB@@@@BD@@@@@@BB@@@@@B@B@B@@@@@B@@@BB@@B@@@@@@@@@BBBBB@BB@@@BD@B@@@B@B@BB@@@B@@A@@@@BBBBB@@@@BB@@@B@B@@BB@@@@@B@@AB@@@@@BAB@BB@@B@B@@@B@BA@@BABC@@B@@B@@B@@BB@@@BBBA@@B@@@BA@@@@B@@@B@B@@B@@B@@@@@B@B@@@@@B@@@@@@@@@B@@B@@B@@@@@@@BB@@@@BB@@B@BA@A@A@A@A@A@@@@@AA@@@@A@ABA@@@B@@D@@B@BB@@@@A@@B@@@@@@@@@BA@@BA@@@@B@@B@@@@B@@B@BB@BBBA@BB@@BB@@@@B@@@@@@BAB@@@B@@BB@@@@CB@@AB@@A@@@ADA@@@@@@B@@@@ABC@@BABA@@@@@@B@B@B@@A@@@@@@@@@@@A@@B@@BB@B@B@B@@@B@@@ACA@@AACA@@A@@@CA@@@B@@A@@@@@@@@B@@@@A@@B@@@@BBB@@B@@A@@@AB@@@B@@B@@@B@@@@B@@@@@BB@@@@@B@B@B@@BB@@@@@B@B@@DA@AB@B@@@B@@@B@BB@BB@@@@BBB@@B@@DBBBBB@@BBA@@B@@@@B@@@D@@@B@@@@@B@@@B@B@@@B@BB@@@BB@B@B@@@@@B@B@@AB@B@@@B@B@B@@@B@@@B@@@BA@@BAB@@@@@@@BA@@B@@A@@BA@@AA@@@@BEA@CC@@BA@@@@@@@A@A@AB@@@F@BBB@BBDB@@@AB@@B@@@@@AD@@@@@@B@@B@@@@@B@@@@@B@@@B@B@BB@@B@@@@@B@@AB@@B@@@@B@@@AA@@B@@@B@@@@@@@@B@@BB@@BB@BB@@@A@@B@@@@A@A@@@@B@@@@BB@@B@@BB@@A@B@@B@@B@@@@B@@@B@@AB@@AB@@@@@@@@@@B@@@A@@@@B@@@@@BB@A@@@@@@@@@@@@@@B@@@@@B@B@@@@@@@@@B@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@B@@@B@A@@B@@@@ABAB@@@@@B@@B@B@B@B@@B@@@@CB@@@B@@B@@@B@@@BBB@@@@B@@@@@B@B@@B@@@@@B@@B@@@@B@@@@B@@B@B@@B@@@@@B@@@@@@B@BB@@@BA@@@@@@B@@@@@B@@@@@@@D@B@@@@A@A@@BA@@@A@@@@@A@@@A@@B@@@BAA@BA@A@A@@@@B@@@BB@BB@BBB@B@D@B@B@@@@B@B@B@@@B@B@@@B@BBBB@@BB@@@@B@@@BB@B@@B@@B@@B@B@B@@B@@BBB@BBB@B@B@@@@@BBB@@BB@@@@@AB@BA@ABA@@B@@A@@B@@B@@@BB@@BBB@@BB@@B@BB@@@AD@@@BB@B@@@B@@B@B@@@@AB@B@BA@@B@@AB@@@@AAA@A@A@@AA@AB@@@@AAA@@@A@A@@AAA@@A@@@A@@@@@@@@B@@AD@@A@A@@@@BA@@@@@AAA@@@@B@@@@A@AA@B@@A@ABA@@@@B@@@B@@@B@@@BAB@@@B@@@@B@B@BB@@@@A@A@@@@B@@BB@@@@B@@@B@@B@@@@@BBB@@@@@B@@@@B@BB@@@@BD@BA@@@@@@@A@@B@AA@@B@@@@A@@@@A@BA@A@@@CB@@AB@@A@B@@B@@@@@B@@B@@@B@@@B@A@AB@@@@@@A@B@@@@BB@@B@@B@BD@B@D@@BB@@B@@@BB@@@BB@@@AB@@B@@@B@ABB@B@@@@@B@@@B@@@B@B@@@@AB@@@@@@@B@@@@@@@@@@@@@BA@@@BB@@B@@A@@B@B@@@@@BDB@@@A@@@@@@B@@B@@@@@A@@@@@BB@@A@@@@@@AA@A@@@@B@@BBB@@B@@B@@BB@@@D@@@@B@@@@@@@B@@@@@BB@@@@@B@@@BA@@B@BA@@@@BA@BB@@ADA@@@@B@@@BA@@B@B@@@@@@@F@B@B@B@BA@@@A@A@@B@@@@AA@@A@@@@@A@A@@@@@A@A@A@@@@@@@@BAB@@B@B@@@@BB@@@@@BB@B@@ABB@@DB@@@@B@D@@A@@@@A@@AB@B@@A@AB@@A@BB@BB@@@@A@@BDB@@@B@@@@@@B@@ABA@A@ABA@@AA@A@AB@@@BA@@B@@B@@@B@@@B@B@B@@@@@@@@@B@@@@@@@@@B@@@B@@@@@@@BB@@@AB@@A@@BA@@@@BAB@@@B@@@@@BB@B@@B@@@BA@@@@@@B@B@B@BB@@@@B@@@@@BADA@@BA@@BA@@@@@A@@B@@A@@@@@@@@B@@@B@@@@@B@@@@AA@@@@A@@BA@@@@@@@@@@B@@@B@@@@A@@@@BB@@@@BA@BBAB@@B@@B@@@@B@B@@@B@@@BB@@@@@@B@@@@A@@@@BB@@B@@B@@@@@B@BA@@B@@@B@@@BA@@B@B@@@B@@@B@BB@@B@@@B@@@B@@@B@@A@@@A@AB@@A@ABA@@B@B@@@@@B@D@BA@B@@B@@@@@A@@@@@@B@@B@@B@B@@B@@@@@@A@@B@@@BB@@@@A@@@A@@BBBB@@BB@@@BA@@B@@@@@@@BB@@@B@@@@@@BBBA@@@B@@@@@BB@@@@@D@@AB@@@@A@@@@BA@@@@@BA@@B@@B@@AB@@@@@AAA@@@@AB@@@@@@@@A@A@@B@@@B@B@@B@@@BB@@@B@@@BB@@B@@@@@B@B@@@B@@@@A@@@A@@A@@@@A@@@A@@@@@@BB@@B@@@B@B@@BB@BB@@@@BBDBB@B@D@BBB@@A@@B@@BB@BAB@@BB@BA@@B@@@BB@@BBB@@@BB@@B@B@B@@BAB@@@DAB@@@@BD@@B@@B@@@@BBA@@BA@A@A@A@AA@BAAA@@BA@@@@@BBB@@@@B@@B@B@@A@@D@B@B@BB@B@@B@@@@@B@BBB@B@@@BBB@@@@B@@@@A@@@AB@@ABBB@@@@B@@@B@@@B@@@@A@@@@@@B@@BB@@B@@BB@@B@@@@@@BA@@@DB@@@@B@@@@@ABAB@AC@@A@BA@@B@@@@B@@@BB@B@@@@@B@@B@@A@@@@BB@@@@@@A@AB@@@@@@AB@@@B@A@B@@@B@@@@@B@B@B@@@@@@B@@@A@@@BB@BB@@B@BBBBBBB@@B@@@B@@A@BBB@@@B@@BB@BBAB@BA@B@@B@@B@B@@@B@BB@@B@B@BBBBB@B@@BBBBB@@@B@@A@A@@BA@@@@B@B@BB@@B@BB@@@AB@@@@@@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@B@@@@BA@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@@B@@@B@B@B@@AB@@AB@@@AABA@A@@BA@@@AB@@AB@@@@BB@@@AABC@@@@@@B@D@@@@@B@@@BA@@@B@@@@B@@@@B@@@@@@BA@@BB@@@@B@@@D@@A@B@@BB@@A@@@@@@B@@B@@AB@@BD@@@B@BA@@@@@AA@@@@A@@B@AA@@@AB@@@B@@@B@@@B@@@@@@@B@@@@@@@BB@@B@@BBB@@@A@A@@@@@A@B@@@@B@@@@@@@BB@@@@B@@@@@@@A@@AB@@@@@@@B@@A@@@@@A@@B@@@AA@@@@BA@@@AB@@@AA@@@ABB@A@@@AB@@@BB@@@@@@BA@@B@B@@@B@@AB@@@@A@@BA@@@A@@@@@@B@@@BA@@B@@@@A@@@@@@A@@@@@@CBABBD@@@@@@@@C@A@A@A@@@ABAAB@AA@@A@@AA@@@@@@@A@@@@B@@@B@@@@ABA@BBA@@B@@A@@BA@@@A@@@ABABA@A@@@@B@@A@@A@@A@@BAB@@@@AA@@@@@A@@AB@@@B@@@@@@A@A@@BA@A@B@A@@@@@@D@@@BA@ABC@@@@B@@BB@@@@A@@BB@@B@@@@BB@@@@A@@@AA@@@D@@@@@@@@@BA@BB@@@BADM@@BAB@@AB@@A@@@@@@B@@@BA@@B@@A@@B@B@@A@@BBB@BA@@B@BA@@B@@AA@@@A@@@@@@@@A@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@AA@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@A@@B@@@@@@@@@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@BA@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@BA@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@ABA@A@AA@@AA@@@@@A@@@@@@@@@@A@@@@AA@A@@@A@A@@A@@@@@@@A@@@@AAA@A@@@@B@@A@@B@AA@@@@BA@@B@@A@@BB@B@@A@@@@@B@@@@B@@@@@@@B@@B@@@B@@A@@A@@@@@B@BA@@@@@@B@@@@@@@@@B@@@@@@@@@@B@@B@@@@@@A@@A@BA@@@B@@B@@@@@@@@A@@BB@@@@@@@@@B@@B@@@@@@AB@@A@@@@BB@@B@@AB@@@B@@@A@@AF@@AB@@AA@@@B@@@BA@@BA@@@@@@BAB@@@@@@@@@B@@@B@@@@A@@@A@@DAB@B@@@B@@AB@@@DABA@@@A@@DABA@@A@@AA@@@A@A@AAAAA@C@@@CB@@B@@A@ABA@@BAD@B@AAA@A@@@@A@@@@BA@@AA@@@AA@@AAA@@BA@@@@AAA@@AAA@@@@@A@@@A@@AA@@@AB@@AA@@A@@A@A@@@AAA@@@A@A@A@@@A@A@A@A@A@A@CB@@@AC@@B@@@@@@@@A@@@BBA@@@@@@@AA@@@@@@@@BA@@@@A@@@@A@@@@@@A@@@BAA@@@@@@@@@A@@@@@@AA@@@@@A@@@@@@A@@@@A@AAAA@@@@@A@AB@@@B@B@@GA@A@A@A@@@@@A@@@@@AAC@@AABCACB@@@@@B@@@@@B@@@@A@@@AA@@@A@A@AEAJKFGFEAI@C@@@@@AACA@@C@AAC@CAE@@CK@@@C@A@@@ABAA@@@AAAA@AAC@c@KAO@eEBG@EBCBKDGBC@C@C@GBKAUCCAA@AAECAAAC@CAA@AAGAO@E@E@K@IBA@ABA@@AA@@CE@@@AAO@GAC@A@OCUCUEeACIKMSECKEIECAGEIECAMIIIMIOMOUEEAAACAEISEKSgK_EMGkCQAACGK]ACIOCCamMV"],"encodeOffsets":[[123889,28632]]}}],"UTF8Encoding":true});}));