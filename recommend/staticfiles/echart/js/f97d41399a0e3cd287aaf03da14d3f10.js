(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('横峰县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"361125","properties":{"name":"横峰县","cp":[117.596452,28.407117],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BB@@@BC@GD@@A@@@@@@B@@B@@B@@@@@B@@@B@@A@@@@B@@@@@BA@@B@@A@@AA@AB@@C@A@@@@D@@@@B@@@@B@@A@@@@@@@@B@@B@@@@@@@@@@B@@BB@@@B@@@B@B@@@@A@@@A@@B@@@@@@@@A@@@@@@@@@DB@@@@@BA@@B@@BB@B@@@@@AB@@@@B@@@@@@@B@B@@@@@@@@B@@B@@@BB@@@@B@B@B@D@@@BA@@@@BA@@BA@@@BBB@@@@@@@@DA@@@@A@@A@B@@BC@@B@@@@BAB@@@@B@@@BA@@@@@B@@@@B@@A@@@@@@@@BB@@@@B@B@B@@AB@@@@@B@@@BBB@@@@AD@@A@A@AAA@C@@AA@@AA@AACAA@AA@AA@AAA@@@A@A@AAAAA@C@A@@A@AAA@AA@@AAC@@A@A@A@A@A@ABA@@@A@@@@B@@@B@@@A@@A@@A@@@B@@@B@@@@@@@BAB@AAB@@@@@BA@@@A@@@AB@@C@A@@B@A@@@@@@@A@@A@@A@@@A@A@@@@GA@@@@@A@@C@A@@@@B@@@@@D@B@@BB@B@@@D@@@B@DABAB@@CDAB@@@BA@A@A@@@@@CDCDABCBCBABCF@B@@B@@BBBBB@B@BB@DB@B@@BB@@@B@@@BBB@@D@@@BB@@BBB@B@@B@@@BB@@B@@B@@B@@B@B@@BBBB@B@@@B@B@@@BA@@@@@@@AB@@@@@@@FAFA@@@BB@@BB@@@@@@B@@@B@@@B@@B@B@@B@@BB@@BBBBB@@BB@BB@@B@@BBBBBD@@@A@@@ABA@CA@@A@@@A@@B@B@@A@AB@AAB@@@@BB@@@@A@@@A@ABAAA@A@@@A@A@AAA@A@@@A@@B@@@BA@ABAB@B@BA@AB@B@@CD@B@@@@@@BB@@BB@@A@@BB@@@@@BB@@A@@B@@@@BB@@@@@@@@@B@@@@@@@D@B@@@@@BB@@BAD@@@B@@B@BD@@@BBB@@BD@@B@BB@@@@B@BBB@@B@@@BABA@CB@@@B@BAB@@A@AB@BA@A@AB@BA@@@@B@@@@@B@BBB@@@@@B@BB@@B@D@B@@@B@BBBBB@@@@BAB@@AB@BA@@B@@@B@BBB@@@@@B@B@@@BB@@BDBBB@@@B@@@@B@@B@@@@@BA@A@A@@B@@@@@BB@@BA@A@A@@@@@@B@B@@@BBB@@B@@@@@B@B@@@@B@D@@AB@D@@@BB@@@@@@@@BBB@@@B@@@ABBBAD@@@@B@@B@@@@B@@BBB@@@BBBB@A@BB@@A@@B@A@@@@@AAB@@@@@B@DBB@@@B@@B@B@@B@B@@@@DBBB@BD@B@B@BB@@BBB@BBB@B@@@@@@@D@B@B@DB@@BBDB@B@@B@@@B@@B@@B@@@BABA@@BAB@@@@BB@B@D@@@@@BB@BB@BBB@BB@B@@BB@@@@BBDB@@B@@@BB@@@BB@BB@@B@@@@B@@BB@@@@@BBB@B@@A@AB@B@@@B@BBB@@@BB@@@@B@@@BA@@@@B@@AB@BAD@@ADA@@@@B@@@B@@BDBBBBB@@B@@@@ABA@@@AB@@@@BB@@B@BAB@@BB@B@BD@@B@@@B@@AB@BB@@@@D@@@@@@BBB@B@@@B@@@@BB@@@@BB@BBB@B@@B@@BBB@@@B@BBBB@BB@@@@B@BAB@@BB@@@B@@@@B@@D@BBBBA@@B@@AB@BAB@@@BAD@@BB@@AB@@@@A@BB@@DBBBD@@@C@@@@BA@@@A@A@A@@B@B@@@B@D@BBBBB@B@B@@BBBBB@@BB@@@@B@@@BE@A@A@@BA@@@C@@@@BBB@B@B@@A@ABADAB@B@B@BA@@@@@A@AAA@@@A@A@ADA@ABADA@C@@BCBAB@@@BAB@@ABA@AB@@C@@@AB@@@@A@A@@@@@@AA@@@@BABABA@AB@B@@@AA@@BA@CB@@ABB@BBBB@@B@AB@B@B@@@B@@@@AB@@@@@B@D@@@BBDB@B@@@@B@BB@@B@B@BB@@BB@@BB@BBB@@@BB@B@@@@BB@B@@@B@@@D@@@D@@@B@@@B@@@B@@@B@B@@@BBAD@@@@@@@@BBD@BBBB@@DB@@@@@@@@B@BA@AB@@A@@@@B@@A@@@A@AD@B@@@BBB@@@@BB@@B@@@@BB@DDD@B@@@B@@@B@@@@BA@@@A@@B@@AB@B@B@@@@D@@@B@DB@@B@@BB@@B@B@@@@DBBBD@B@@@@@B@B@@@BBB@B@@BD@B@@@@AB@@CB@@A@@@A@AB@@AD@@A@@@@AA@@@A@ABA@A@@BA@@B@@@B@BB@AB@B@@@B@BA@@D@@A@ABAB@BA@@BA@@F@BA@@@@BBB@BB@@B@BA@@@AAA@@@A@@@A@@@@AAA@@@B@@@B@B@@@ACBA@@B@@AB@@@@BBB@@@@A@@B@@@@BBB@@@BA@@B@@@@A@@BAB@@@@@B@@A@A@@@A@C@@B@D@BABBBAD@FCDC@@@A@@BC@@@AB@BAB@@@@ABA@@@@B@CAAAE@A@A@@A@@BA@@@A@@FABAB@@@B@DBBB@BF@@@B@B@BAB@@@B@B@@AD@@@B@@AD@@@@AB@B@@@DBBBB@@BB@@BB@@BB@B@@@@@@DB@@B@D@FAD@B@@BDB@@B@B@@@@@B@@@B@B@@BAD@BAB@BA@ABA@@B@@@@AB@@@B@BAB@@A@@B@BBB@@@AB@B@BA@@BAB@@B@@@@@@B@@@@@@B@@@@@B@B@@B@@AD@BA@CB@@@@DDB@HF@@@AB@@@@ABA@@@A@@@A@@@A@@AA@@@A@A@@@A@@@@AAB@@A@@BA@@@A@@@@AA@@CA@A@@AA@A@A@C@A@@@A@@@A@@@A@@@A@@@ABA@@A@@A@A@@@AB@BA@@@@AA@@BA@@BA@@A@A@C@AB@@A@@BC@AA@@A@@AA@@@A@@@AA@@AA@@@AB@@B@@B@@@B@@@@@@C@@DBB@B@@AB@@@@AB@B@@ABA@@@@@A@@@@@@A@@@@AB@D@@@@A@@@CAA@A@A@A@@@@@@BC@@@C@@@@AACAA@@A@@@A@A@A@@B@@A@@@A@@@@A@@AA@C@AA@@@@D@@@@A@A@@B@@AB@@AB@@@BA@@@AB@@@B@@A@@@@@A@@@@@CBAB@@@B@B@FBB@DBFBB@B@B@B@@@BAB@@A@@AAAA@@@@@@@@B@BD@@B@@@@ABA@@@C@@AC@A@@C@@@A@@A@ABBB@@@BA@@A@@@@@AA@A@@AC@@BA@@AAA@@@A@AA@@A@A@@AA@A@@@@@B@@@@AA@A@@@@@A@@@A@@BAB@@@@@@A@@@@@@@A@@AB@@A@@AA@@B@@@@@AA@@@@@@@@@@@A@@@@@@@@BAB@A@@@AA@@A@@A@@@A@@@@A@@@@A@@@A@@AA@@@AA@@@CB@@A@@@@A@@@@@AB@@BA@@@@@B@@@B@@@B@@A@@A@@@@AAA@AA@@@AA@@@@A@@AA@@A@@CD@@A@BA@A@@@@@@@A@@A@@B@@AAA@@BB@A@@@AACAA@@@@@A@@AAAA@A@@@@@@@@A@A@@B@DABA@@@@@A@@B@@A@@@@@ACA@@@@@@@AB@BA@@@AB@@A@@A@BA@@@@AA@@BABA@@@@BA@A@@@@@A@@@@B@B@@@@@@AB@@@@A@@B@@@@@@@B@BA@@@A@@B@@AAA@@@AB@B@@@BC@@A@@@@@AA@@@@@@@A@@@AA@@@@@@A@CA@@A@@@@AA@@@@BA@@CA@@A@@@A@@A@@@@@A@@A@@@AAA@@@A@@@AAA@@AA@@AB@@A@@@@B@@@@@@@@AA@@A@@@@@@@A@@@@BA@@B@B@@@DABA@@BAB@BAB@B@@@@A@@BCBA@@BA@@@@AC@AEC@@AA@A@@@@BAB@@@@@B@B@B@B@@@B@BAB@@@B@BAB@B@@@D@@@@A@A@@@@AAA@AA@@AA@A@EBA@A@CA@@A@@@@@AA@@@@@@@AA@@A@AA@@A@A@CA@@A@@@AACA@@AAAAA@AAA@@A@AA@AAAA@@A@AAAA@@@A@@CA@A@AAC@AAE@AA@@@@AA@@A@@@@AA@A@@B@@@@A@A@@@@BAB@BBBB@ABA@@F@B@BBBBB@B@DBBBB@@@BB@@FBB@BA@@DBD@B@@@BABABA@@BA@@@A@@AAA@A@@A@AB@@@AAAC@@@ABA@@@@@AAAA@@A@@@AB@@@BB@B@@B@B@BB@@BABA@AB@B@B@@AA@AA@@@AA@@AA@@@A@@@@A@@@A@@@@@@@@A@@@@A@@BA@@@A@@B@@@@A@@AA@@@A@@@@@AA@AA@@@A@@@C@AB@@BBB@@BB@@B@@A@AB@@BB@B@BAB@@@B@@@AAA@@AB@@AB@@@B@@@@@@A@@@@@@@B@@@BAB@@@@@@B@@CB@@@@A@@B@@A@@@@BAB@@A@ABC@@@@DDB@@@BBB@BA@@B@BB@@DBDA@BB@D@@@B@@@@B@B@@B@BBB@@BB@@B@@@B@@D@B@BDBBB@@BB@@@@BB@@B@@B@@AB@BADA@ABA@@@@@@A@ABA@AB@AA@@@@A@@@A@BB@@A@ABABABABA@@@@AAA@@A@@B@@@B@@@@@@@@@@A@C@@@@@AA@@AB@@@BA@A@C@A@@@@@AB@@@AA@@CAC@@@A@@@A@A@A@@@@BD@@@@@A@@B@@B@@@A@A@@BA@AA@@A@@A@A@@@A@@A@AACAAAA@C@A@A@AAA@@AAB@@A@@@AB@@@AA@@AAAA@@A@@@@@AB@BA@@B@BA@@@@AA@@@B@@@A@@C@@@@@@A@@B@@@@@@@AACA@@@@A@A@@@@@@C@@BA@@AABA@@AA@@B@@@@@@@AA@@B@@AA@A@BA@@@@@A@@AB@BA@@@AA@@@@@@B@@@B@@@@@AA@@A@A@@A@B@@@BA@@@BC@@@@@@@A@@@@A@A@@@@@@@@A@@@A@@@A@@A@A@@A@@@@@A@@@E@@@@@A@@BB@@@A@@@@A@@@@A@@@A@@@@@A@@B@AA@@@@@@@@@@B@@A@@@AA@@@A@@@@B@B@@@@@A@@@A@@AA@@@ABB@@B@@@@AB@@A@@@A@A@@@A@@@@@ABA@@@@@A@@@@@A@A@A@A@@@AA@@B@@@@AA@@B@@@@@@A@@A@@@A@@@BC@@A@@@@@@@@@@@A@@@@@ABAAA@@@@A@@@A@@@@@A@@@@@@A@@@@@@AAA@@BAA@@@@A@@@AB@@@@A@@@A@A@@@@@A@@A@AAA@@A@@@A@@@@@AA@ABAB@BAAA@@@AA@@CA@@A@@@@@AB@@@B@@@@A@@B@B@B@@A@@BA@@@A@@@AB@@@BC@@@@@@@@@BBA@B@@@AB@@A@@B@B@B@@@BBB@@B@@@BA@BB@@BB@@@@B@@@B@BB@A@@@@B@@@@@B@@@B@B@@AB@@@@AB@@@@@BB@@@AB@AA@@@CB@@@BAA@A@@@AA@@AEA@@@@A@@B@@@BA@@B@@AB@AA@@@@A@@@@@@A@@@A@@@@@A@@@@@AA@@CA@@@@A@@AA@@@A@AA@@A@@@@@A@@@A@A@@@A@@AA@@@@@CB@@@@AD@B@@@B@B@BA@@A@@@@@@@@A@@A@@@@AB@B@@@AA@@@AA@AA@@@A@@@AB@@@@@@A@@A@@@@@@AB@@@@@AA@@@@@AB@@@@@B@@AA@@@AA@A@A@@A@@AA@@@A@@A@@AA@B@@ABA@@@A@@AA@@@A@@@@A@AA@@@@@@@@@@B@@@@A@@@@@A@@@@A@AA@@ABAAA@@@AAA@@@@A@@@@@@BA@@@A@@@@@A@@@AA@@@@B@@@BAA@@@@A@@@A@@@@@A@@A@@A@@AA@@@AA@@A@@@@@A@@@@@@AABAB@@AA@@@A@@B@@@@ACA@@@@C@@AB@B@A@@@A@@@@@@B@A@@@A@@@A@@@@@A@@@@@A@@BAB@@@@A@@BA@A@@BB@@@B@@@BB@B@@@@@@AB@A@@A@@@@@A@@AC@@A@A@A@AA@@@CBA@C@A@@BA@@A@@@BA@BB@@@@@@@B@@@B@@B@@@B@@B@@A@@@AB@@@B@@A@@@AA@@A@A@@@@@A@@@@@A@A@@@@@@@@@@A@A@@@@@BABA@@@AA@A@@AB@@@@@@@@A@@AA@@@AA@@AAAA@@@@A@@@@@A@@@@@@@@AA@A@@@A@@A@@@@@@@C@@@A@A@AAA@@B@@@B@B@@@@@@@BA@@@A@@@@A@@C@@A@@@@@A@A@@AAAA@@@@A@@@A@@@@AA@A@ABA@A@A@@@@@@A@@@AA@@@A@E@@@A@@@@@@@A@AA@@@@@@BAA@@@AA@@A@@@A@@@@@@BA@@@@@@@A@@@A@@A@@@AA@@@@A@@@AB@@@A@@@AB@@C@@@A@A@@@A@@@@@@@@@A@A@@@@@@@@@AA@@@@@@AA@@@C@@@@ACA@A@CA@@@@@BA@A@@@AB@A@@@@@@@@A@@@@@@@@AAA@@@AB@A@BA@@B@AAB@@A@A@@@@B@@@@@@@BBB@B@BB@@@B@@@@BA@A@@B@@AA@@@@AB@@A@@@@@A@@B@@A@@B@@A@@BABA@@@@B@B@@A@A@@A@C@@A@@@@@AB@@@@A@@@A@@@@@C@@@@@@@@@A@@A@BA@@B@@@BAAA@@@@@@@A@@@A@@B@@@AA@@B@@@B@@AB@@@BA@@AA@@@AA@CAA@CAG@@@C@A@@@@DA@ABABEBEFA@CHCD@@@@CFEBCDCBEBC@GDCBA@C@ABEBCDEDCBCDABCBABA@A@A@CBCBAB@B@@@D@B@B@@@BB@DB@@BB@@HD@@B@B@D@@@B@BA@AD@B@B@BB@@B@BA@@B@@A@@BBBA@@BBB@@@BD@B@@@@@@B@@@B@BABBBBB@@B@@@@AB@@@BBB@B@FB@@@BBB@@@B@@@@BAB@@@BDB@B@@@B@@AB@@BB@@A@@@A@@@@@@AAA@@@@@@@AA@@@AB@@@@@AB@B@@AB@@AA@ABA@A@@@@B@@@@@BA@@@@@@@@@@@@A@A@@@@A@@@@BA@@@A@BB@@@@B@@B@@@B@B@@@@@BB@@@@@@@A@@B@@@@@B@B@@@BB@BBD@BB@B@@B@BBB@@@BB@@AD@@@B@@@@@B@@@@@DA@@B@@A@@@AD@B@@BB@B"],"encodeOffsets":[[120396,29057]]}}],"UTF8Encoding":true});}));