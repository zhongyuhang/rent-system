(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('西固区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"620104","properties":{"name":"西固区","cp":[103.627951,36.088552],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@B@@AB@@@BABA@@@@BA@@A@ACAA@@@@@CAE@@AAAA@AE@AAA@A@@@AA@A@@C@A@@@AA@A@AAA@@AA@@BCAAAA@@@@C@@@AA@@A@ABC@A@@BAB@BA@@@ABAD@@A@A@@@@BAB@@ABAAC@EAE@CAA@AA@B@@BB@@JDBDBB@@@B@BA@@BEDABAB@@CAA@A@@@AB@@@B@@DD@@@BA@@@@B@@@B@@A@A@@@@BAB@@@@A@@B@@BBBBBB@B@J@B@@DBB@B@B@@B@@DF@B@@BBDB@@@B@DAB@BABCBABA@A@ABA@@@@@@D@@@@@@A@A@AB@BAB@BAD@DEFCB@BAB@@@DAD@@@BA@A@@DA@@BAB@B@B@@@B@D@B@@CD@BABABA@@DAD@BADCDABCB@@E@@@A@CACAA@A@GAA@ECCAA@@AA@@B@@AB@DBBBF@@@DADAHBF@BA@CB@BA@@@@B@@@BA@@@@BBJAB@@@@A@A@A@C@A@@@AB@@A@GDEBABA@CBA@GB@@EDABCB@@AB@@ABA@C@@@CAA@A@A@@@CAA@A@C@CAA@A@@@A@E@@BA@A@C@ABA@@AA@@@A@A@A@C@A@CB@@@@AB@@A@@BCBCBCB@AA@@@@@@A@@@@AA@@@@@A@@@ABA@A@@BA@@@A@@@@ECA@A@ABA@A@A@A@AAC@@@@BA@@BAB@BA@A@BBABA@@B@@AF@@CF@BA@AA@@C@A@AA@@EA@@AAA@AAAA@AAA@C@A@@@E@E@EAA@CCGA@AAAAC@@A@AAA@@@AA@CAAAAA@AA@ACCA@@AAAAA@ACA@@@A@ABABC@@@AB@AA@A@A@A@A@@@C@A@A@CBA@C@@@@B@B@BA@ABA@ABA@A@A@ABA@AB@@@@@BBB@B@@AB@@@B@B@BCB@@A@@B@BB@@BB@@DBBBB@@@B@B@D@@@D@@@BAB@B@@AB@@BB@@@@@BBABB@@@@@B@BB@@B@BBB@@@B@BB@ABB@@D@B@@@@@B@@AB@@@BBB@@AB@@AB@BABAB@@ABAB@@C@@@@@C@A@AAA@@@ABA@@@A@@@@@@B@BA@A@A@@@@@CACCCACAEAGBC@GAC@@@AAC@AAA@A@C@ABEBGBGAC@A@C@E@ABA@@@AB@@@DADAFABADB@B@@BB@@@@@B@@@@ABB@@B@@@@@@@B@B@@@@@@@@BBA@@@@@@@BB@BBBBB@@@@B@@B@@B@@@B@@@@DDFBBB@@@B@B@BBDB@@B@@@BB@BB@@@BA@@BB@@@@@B@@B@@A@BB@@BBBBBB@@AD@@@B@@BD@BB@@BD@@D@@@B@@@@@BB@@B@@@@A@B@@B@@@@@@@B@@@B@@B@@@AB@@BB@B@@BD@@AB@B@B@@@@@B@@@BBB@@@@@@@@A@@BB@@@AB@@@B@@@B@@@B@@@B@BAB@B@@ABA@@B@B@@@@@@AB@BAB@@@B@@AB@@BD@@AB@B@B@B@B@@BBBBBB@@AB@B@@@D@@@D@BB@BBDBB@@B@@B@@@F@DBD@@B@@BB@BB@FBB@BB@@@@BBFDBB@@D@B@B@@@BAB@B@B@@@BAB@BA@@@@@A@@@A@@BAB@@@B@D@BAD@D@B@@@BABAB@D@@@B@@@@@B@BBB@@@BABBB@DBB@@AB@@ABE@@AA@AA@@@DC@AB@B@BAD@@A@@@A@A@AAAAA@A@A@AB@BCFCBAD@@@BA@@@ABB@@B@@D@BB@@BB@D@BB@@D@D@@@BBB@B@B@@@B@D@B@BB@@B@D@@@DBBBB@BAB@@AFBB@DB@BDB@@BBB@BBB@D@D@B@B@DBB@B@@@DBB@@BDBB@B@DBF@D@BB@@D@B@@AB@BA@@DAB@FBD@B@B@B@BAB@B@F@B@HD@@@@FABAD@BADA@@B@B@B@DBBB@@B@@@DA@@D@@@BABA@A@@BAFA@@@ADA@@@@FA@@@@B@BE@A@A@AB@DC@@DADC@@BA@@B@@CBA@@BA@AB@BA@@@AAE@CA@@A@@B@@ABC@@B@BCFADC@@@@@AA@A@@A@@AAA@AAA@AACA@@AA@@BCB@@AD@@A@A@AB@@AB@@@BA@@@C@A@@BA@@@A@A@A@AA@@A@@@A@@A@AAAA@@@@BA@@@@@A@@A@AC@@@@@A@@@AA@@AA@@@@AA@@@@A@@A@@@@@@A@@@@B@@AB@@A@@@AB@@A@@@A@@B@@@B@@@B@@@BAB@BA@@@@BAB@BA@@@@B@@@BAD@DA@@@@BBDDDBB@@BBBBBDBFDB@DBF@FB@@D@B@F@B@B@DAD@DAJAB@JCHAFAB@BAB@@AFA@AD@BAB@@@DABCD@BAB@@CB@@C@@BA@A@CBA@ABA@@BABAB@BA@ADADA@A@@@@BCDAA@ACBA@@@A@A@A@@AA@A@C@@@@CA@A@A@C@@AACCB@@AFCDABAB@B@HAH@F@AA@A@@@C@A@@@@AAEC@@@@@A@A@A@ACA@ABA@@@A@A@@A@@@CAA@@AB@@AA@@A@@@A@@@@@@@@@A@@@@@@@@@A@@@@@@@A@@@A@@@@@@@A@@AAA@@AA@@AA@@@@@BA@@B@@@BABADC@@FAHAF@BA@@@A@@@@@@@A@@@@A@A@@@@A@@@@@@@AA@@A@@@@@@@@@@@@A@@@AAA@@@@@CA@@A@@A@@@BA@AA@@@@@@BC@A@A@A@I@C@A@AAE@A@C@AAACC@@A@CA@@AAAA@A@AA@AA@@@A@AAA@C@C@A@A"],"encodeOffsets":[[106158,36860]]}}],"UTF8Encoding":true});}));