(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('同安区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"350212","properties":{"name":"同安区","cp":[118.152041,24.723234],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@CCEAGGHABAB@BCAEAGCU^GJAB@@AB@BB@A@@B@@@@AA@@A@BBA@@@@@@B@@@@B@A@@@@B@@@@@@@@@@@@@@BB@@A@@@@B@@@@A@@B@@@B@@@@@@@@@@@@@B@@@@@@@@@B@@@A@@@@B@@@@@@@@@@B@@@B@@@B@@B@BB@A@BB@@@A@@@@@@@ABB@@@@@ABBB@@CF@@D@@@B@BB@@@@@@@@@@A@@@@B@@@@@@@@A@@@@BB@@@@@@B@@AB@@@A@BA@@@@@@@@B@@@@@BA@@B@@AA@@@@@A@@A@@BA@@@@@@@A@A@@@@BAA@BAB@@@DA@@BA@@@CAAB@@A@@@@@@@@B@@AB@@A@A@@@A@@@A@A@AB@@@@ABAB@B@@A@A@@@C@CF@@ABA@ABA@AB@@AB@@B@@B@@@@@B@@A@@BABBHCD@@@BBBBBB@@BA@@@ED@B@@@@AB@@A@A@@A@@AB@@AA@@A@@@A@A@@B@@@BA@@BA@@@@B@@A@AAABA@@@@@A@@@@@A@AA@BAA@@A@@@@A@@A@@@ABA@@@@@ADA@AA@@@BAA@@A@@@@@AA@@A@@B@@AB@@@BA@@@@@@B@@@@@@AB@BA@A@A@@B@B@BA@@@@@AB@@A@@@A@@@A@@B@@@@@@@B@@@@@B@@@@@B@@BB@BA@@B@@@BA@@@@B@@A@AB@BA@BBAB@BA@@BAA@BA@@@A@AB@@A@@B@@A@@BA@@@@@@D@@AB@@@@BB@@@@@B@@AB@@AB@@@@@@AB@@A@A@@@@B@@@@AB@@A@@B@@@B@@ABA@@@@@A@@@@B@@@@@BB@@@@B@BB@@B@B@@B@@BB@@@B@@@B@@BBB@@@@@BA@@@AB@BA@A@@B@@@@@BA@@BAB@@@@AB@@@B@@@BA@@@AB@@A@@@@@A@@@@BA@@@@B@@A@A@A@AB@@A@A@@@@@A@@@ABA@@@AB@@@@@B@@@B@@@@AB@@@@@BA@B@@B@@AB@@@B@@@@@B@@@@@BAB@@@@@BA@@A@@A@AB@@A@@@A@@AE@AA@@A@A@@@A@A@@@@@AACABA@AC@A@A@@@A@@BA@@B@@AB@@AB@@@@A@@B@@@B@@@B@B@@@B@B@@@@A@AB@@CB@@ADA@@@A@A@A@@@AAABA@@B@@AB@@A@@@@@ADA@A@@@@@C@@@BA@ABA@@@@@@A@@@@@@@@@@@@A@@A@B@@@@@@@B@@A@@@@@@@AEAAA@AA@CA@AA@@AA@@@@@@A@@A@@B@@AB@@@B@@A@@B@@ABAB@@A@@BA@@BCBABA@@BA@A@ABAB@@@@@B@@A@@B@BB@@D@@@B@@@BBB@@@@@B@B@@A@ABAB@@@@BB@@B@B@B@@@B@@BB@@@B@B@BB@@BB@@B@@@@@@BA@@B@@@BB@AB@@@@@B@@B@@B@@@@@@@BB@B@@B@BB@@B@@@BB@@B@@@B@@B@@@@B@@@BBDABBB@@@B@@@@@B@@ABBB@@@B@@@@B@@@@B@@@@@@@B@@ABB@@B@@B@@B@B@@@BABA@@B@@@@@BA@@B@@@B@@@B@@@B@@@B@@@BABBBABBBAB@B@@AB@B@BB@@@B@@@B@@B@D@@@BBB@B@@@BABADABB@@D@@B@@B@BAD@@@@BB@B@@@D@@B@ADBD@@@@BD@@@@BB@BA@@B@B@@A@A@@@@@@BA@@@@@A@AB@@A@C@@@@B@@AAB@@@@AA@A@A@A@B@AA@@@@A@@@A@@@A@@@AAA@AA@@@AABA@EB@@@@@@@@BB@@@B@@@@A@@@@@A@@@@@@B@B@@ABABAB@BABAB@BA@@F@@A@@BA@AB@@A@@B@@@BA@@@@BA@@@@@A@@B@@@@A@@@@@AB@@AAA@@@AB@@@BA@@B@@A@@@A@@@A@AB@@AB@DA@@@A@A@@@@@BD@BBB@@BD@BB@@BB@@FB@BD@@@@BA@@@A@@D@B@BABCBAB@@AB@B@@@B@@AB@@AB@@@@@@ABABA@ABA@A@AD@@@@BB@D@@@BB@@B@B@@BB@B@@@@B@@B@B@@@@BBA@@BBB@@AD@@A@@@BB@BB@@@@@@B@BAB@@@BA@@@ADABAB@@@BA@A@@@A@@B@@@AABA@@@A@A@AB@@@@@B@@@@@@@@@@A@ABAA@@@@A@@@@B@@@B@@A@@B@@@@@@@B@@A@@@A@@@@@AB@@@BA@AB@D@@@@@@@@BA@@B@@@@BBB@D@@@BA@@@@DBB@BBBBD@BBBBB@@@B@@@@@BB@@@BB@@@B@@@B@B@@@@@B@B@BB@@@@B@@@@B@@@@@B@@@@BB@@BB@@@BA@@A@@@@A@@@@@ED@@@@AB@BA@@BA@@B@H@@@@BB@BB@@B@@B@B@@BB@@@@@@@@B@@@BB@@@B@@@B@B@BB@@@@B@@@B@@@@AB@@A@@B@BA@@B@@@@@BA@@B@@@BAB@@@B@BB@@B@@@@A@@BBBDB@@@CB@B@B@@@BABA@AB@@@BCB@@A@@@A@@@@BA@@@A@@@@@AB@@B@@@@@BBA@@@BBA@@BABA@@@A@@@@ACA@B@@ADA@@BAA@B@BA@@@@A@@@@AA@@A@@BA@@@@@A@@@A@ABABA@@@@B@B@@@BB@@@B@B@BB@@@@@B@@@@@B@@@@B@B@BA@B@@@@B@@AB@D@D@@A@@@@BA@A@@@ABA@@@@B@@@B@B@B@@@@@@ABA@@@A@@B@B@@@BB@@B@B@@@B@@@B@@@B@@BB@A@BBA@@@@@AB@@A@@@BBAB@B@@@@BB@@@@@B@@@@@BA@BB@BB@@@@B@@BAB@B@@@BA@@@@B@@AB@B@@@B@@@@@B@B@@@BABA@@BABA@ABB@B@@B@B@@@@@B@@B@@B@@@B@@@B@B@@@BA@@BA@@@@@A@AB@@ABA@@@A@@@A@@@@A@@@A@@@AA@@@@@C@@@@BC@@BAA@@@BA@AB@@@@@@@AA@@@@@@@A@@@@BAB@BA@@B@BADA@@B@D@@A@@@@@AA@@A@A@ABAA@@A@@BAB@BAB@@@BA@@BA@@BAB@@@B@BBBA@BB@@B@BBB@@ADBB@@@B@@@@BB@@@B@@B@@@@@@@BAB@B@@@B@B@@@@@@@B@@@B@@@B@@@@ABB@@@A@@@@@AAA@A@@@AA@@A@ABA@A@A@@@@AA@@@@AAB@@AA@@@@A@@@@@A@@@@@A@@B@@A@@@@@A@@@@@@@@@A@@@@A@@@@A@@@@@A@@@@@@B@@@B@@@B@B@@A@@B@B@D@@B@B@@@@BB@@@BB@@@@BBB@@@BBBBB@BB@B@@@@BB@B@@@BBBB@@B@@@BBDB@@B@@BB@@@@@@@@B@@B@@B@B@@B@D@D@B@B@@@B@@B@@BA@@B@@@BBA@@B@@@@@B@@D@@@BAB@B@B@B@@@@@BDBB@@@@@BBB@@BBDD@@BBBB@@B@B@@@BB@B@BB@@BB@BBB@@BB@@@B@BB@@B@@BB@@@@@B@@@@BB@@@B@B@@@@B@@@@@@@@B@@@BB@A@@B@B@BAB@@@B@@@B@DAB@@@@@B@@@B@B@B@@@B@B@B@B@@@BBBBBD@@DBDB@@BA@@B@@@B@B@@@@@B@@@@@B@B@@@B@BB@@DABADA@@@A@ABAB@@@D@B@B@@@BD@@@@B@@@@@B@@AB@BAB@DB@@@AB@@@@ADB@@B@@BB@B@@@@ABA@AB@B@@A@@@@@@@ABABA@@BAB@@ABC@@BAC@A@A@A@AA@@@A@AA@@AA@@@AA@@@@@AACA@@AAA@@BA@@BABA@@BABA@@B@B@BA@@@@DABAB@@@@ABA@@@BB@@@@@DBBA@CB@@A@@DC@@D@@@B@@@@A@@@ABA@@B@B@@@@@BA@@B@@A@@B@@@@@@@BA@@B@@AB@@@@BB@@A@@B@@@@@BA@@@@@@@@@AA@@@AA@@@ABA@@BABA@@AA@@A@A@@@@@A@BA@AA@@A@AB@@A@@BA@A@@@@BA@@BA@@@@@AB@BA@@BA@@@AA@@C@@BA@@@A@@@A@@@A@@@A@@@@BA@@@AAA@@@@C@@@AA@@@@A@@A@@A@AB@ABA@AD@@@B@D@B@@BB@B@@@D@B@@@B@B@B@@BB@B@@@@@BA@@B@@@B@@@B@@@@@B@B@@@B@@A@C@AB@B@@@B@B@BABA@@BA@@@@@@BB@@@AB@@@@@BA@@@A@@@@B@B@@@@@B@BA@@@@@A@@@@BAAA@A@@AA@@@@BA@@@A@@@AA@@AB@B@A@@A@A@@@AB@A@BAB@AAA@@@A@@A@@BAA@@@BC@@B@@CA@A@A@@A@A@@AAA@@AA@AA@A@@BA@@@A@@AAB@@@BA@@BA@@A@@AA@@@@@@A@@@ABA@@B@BCBAB@@@B@@A@@B@@@@@@A@@@@@@B@@@@A@A@@@@@@@@A@@@A@@A@AAA@@@@CA@@AA@@AA@@AB@@A@@@@@@@@A@@@A@@@A@@@@@A@A@@@@AAA@@@@@@@@@A@@@A@@@@@A@@@@@A@@@@B@@@@@@A@@@@@@@A@@@@@AA@BA@@@@@@@AA@@@@A@@@@@@@@@@@@@@AAB@@@@@@A@@@@@A@@@@@@B@@AA@@@@A@@@@@A@@A@A@@@@@@@@BA@@@A@@B@A@@CC@@AA@@A@@CGB@BA@@@A@AAA@A@@AACBAACCA@AA@ABA@@@A@@@@@A@@B@@@BAB@BAB@@@@@B@@@D@@@B@@@B@B@B@@@@A@BBB@@@@B@@@@@B@AAB@@@@@@@@@@@B@@@B@@A@B@AB@@@@@@@B@@A@@@A@@@@@AAB@AB@@@@@@@A@@@@@@A@@@@B@@@@@BA@A@BB@B@@@@@@A@@B@@@@A@@@A@@B@AA@@@@@@@A@@@@@@B@@@@@@@@@@AB@@@AA@AA@@A@B@@@@A@B@@@@@AA@@@@@@A@@@@@@@@@@@@@@@@BA@@@@@@@@@A@@@@@@@@@A@B@AA@B@@@@@@@@@@A@@@@@@@@@A@@@@B@AA@@@@A@BA@@A@@@@B@@@B@@@@@@@@A@AA@@B@@@@ABA@@@@@@@@AA@@@@A@@@@@@@@@A@C@@@@@AA@@@@@@@@@@@A@@@@@@@@@B@@A@@@@A@@A@@@@@@@A@@A@@C@@@A@@@@@@@@@A@@B@A@@@B@@ABA@@@AAM@@A@@@@B@@@AABB@A@BBA@B@AB@@@@@@@@@@@@AB@@@@A@@@@@@@A@@B@@A@@@@@@@A@@@@@@@@@@@A@@@@AA@@B@@A@AA@@@BAA@@@A@@A@@@@AA@@@B@@@@@@@@A@@@@A@@@@@@@@@@@@@@A@@@@A@@@@@A@@@@A@@@@A@BA@@@@@@@@@@@@B@@A@@@A@@@@@A@@@A@@@@@A@B@A@@@@AB@AB@@@@@@@@@@@AA@@@@@BA@@B@@@@A@@@@AA@@@@BA@@@@B@@@@@@@@ABAA@@ABB@@BA@@B@B@@C@@@A@@A@@@@@@A@B@@A@@A@C@BA@A@@C@@A@@@@@@@@A@@@@AB@CA@@@@@@@@@A@@A@@@@@@A@@@@A@@AAB@@BAA@@@@A@@@@@@B@@AA@A@@@@@@@@@A@@CA@@@@A@@@A@BAA@@@@@@@@A@@AB@@@A@@@A@@@@@@@@A@@@@@@@@A@@@@AA@@@@@@@@@@@A@@@@@AA@@@@@@BAA@@@@C@AB@@C@@A@@AK@BE@@@CB@@@@@@A@@@@@@@@AA@@AACA@AFEBEBIAECIEAEEIOCM@CCGAEIQEMIQ"],"encodeOffsets":[[120996,25176]]}}],"UTF8Encoding":true});}));