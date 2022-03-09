(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('禹州市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"411081","properties":{"name":"禹州市","cp":[113.488478,34.140701],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@AAA@@C@A@A@@A@E@A@@ABA@A@@@@A@C@@@@E@@@C@@@@BE@@AA@BD@@@BBH@@KBC@@@@AC@@@@BE@@FD@@@A@@BABAB@@@@BB@@@BBB@@@@D@@@D@@D@@@@DDF@@D@BD@F@@B@DBF@@C@C@@DA@A@BFI@@BAB@@IB@@G@@B@BA@@BA@@DA@@BB@B@@BA@@BB@@BB@@B@LB@@BB@@@@B@BG@@B@DA@E@@BE@@E@A@AAA@A@@AA@@@@A@G@A@@B@@@AC@@@@@@BA@A@A@@@@@@AEB@@A@@@AAA@BDA@A@@CA@@DA@@BE@@B@BE@CA@D@@@BA@@BA@@C@@BAA@@BA@@@A@A@A@AAA@CAAC@@@ECB@ED@@EB@@@B@AI@@G@C@C@G@@BA@A@BFA@@FC@@F@BC@@B@BC@@B@BA@@@@@@BEB@DA@@@ADABA@@@A@@B@@@@@BB@@@@BB@@BBB@B@BBB@@@BB@@@@BB@@D@BFA@BB@@BD@@@A@@BB@BB@B@@@DC@@BI@@@@HA@A@A@@BA@@BA@@FG@@@GB@BAC@BAAC@@@C@@BAB@@EB@B@@A@GBC@@B@@@@@BA@A@@DC@@@@BA@@@CB@A@@@AA@AD@@@@A@A@BBEBA@A@BB@@A@AB@@@@@@@@@B@@@B@@@BCBB@@B@@@@@@AD@@A@A@C@A@@@@@@BC@@@@@@BA@@AA@A@@DAA@DA@@BB@EB@@CA@BA@@B@B@@@@CB@@A@@BAB@@@D@@AB@B@@A@ABEAA@A@C@A@CAA@A@AA@AAA@@D@@A@@AA@@@@@@BA@A@@@@@@@@@A@@@AB@@@@AB@@@@C@@AAA@A@@@A@@@@A@A@@@AA@@@@A@C@@@@A@@@@@GA@@A@@@@AA@CC@@A@@@@B@B@@@@@@@BAB@@A@@@AB@@@@@@@@@D@D@BA@@@E@E@@@ADADGL@@@@A@A@GAE@CACAEAC@@AA@A@AAA@AAA@CAA@GCCAACAA@@@@ADAB@@A@CBA@C@A@@@@@B@@@AA@@A@@@@B@@@BA@@@AC@A@@D@@@@@C@A@AAA@CB@@ABAHA@@@ABA@CAA@ADA@@DAB@@@@@@C@A@@B@@@@@D@D@@CBA@@B@@@B@B@BB@@BA@@@ABA@A@A@E@@AABABADAB@@@B@@AB@@A@A@AAA@AB@@@@@@@BADBBAB@B@D@@A@AB@@A@A@@@@@@BBBBB@@@B@@@B@@@BB@@@@DB@BB@@@B@B@BA@@BA@AB@@ABABCDABCDA@AD@BA@CH@DA@@BA@A@AB@@A@@@AB@@@BA@CD@B@@B@BB@@@B@@CB@B@B@@@BA@A@A@@B@@BD@BAD@BBB@B@@@B@@ABAB@B@@@@F@BBB@BBB@BD@B@BABCFAD@@A@C@@BA@ABAB@B@@@@BB@B@@CD@@C@@BA@@BCBA@A@ABA@ABA@C@@@@@AB@B@@A@A@@@CAA@AAEBAAAAAAA@@@@BCDA@@DABABA@@B@@BB@BB@BB@@D@@B@@@D@@@BBB@@BB@@@B@BA@@BC@A@CAA@@A@@@@AB@BA@AB@@@@@@BBB@@@@D@@@B@B@B@@@BB@BB@D@BDD@@@B@B@F@@@B@@DB@B@@@B@@@B@@BBDBBB@B@@@@@B@B@D@BFBBB@BB@B@BB@@BBBABA@@B@B@D@@AB@@@D@F@F@@@BAB@BA@@B@B@DB@@B@B@FABB@@@@@BB@@@BBB@@BB@BBB@D@BA@@B@@@BB@@@BBBB@JBB@DBFDB@@@D@F@D@B@@ABCB@BAB@B@B@B@DCBA@@B@B@FD@B@BB@@@B@B@@@DB@@@B@@@B@@@B@DB@@BB@@@B@@@BAB@@@@B@B@@@B@@@@DA@@BB@@DB@@B@BB@@@@AD@@AD@B@@BB@@@@B@BAB@D@B@@B@BB@@B@@DBBB@BB@@B@@@@CDA@@@@BB@BBB@@BB@B@@D@@@@@DABB@DBBB@@BB@@BB@BBB@B@@BB@@BBBB@@B@BABAB@@@@@BB@@@B@@FABAB@@@B@BBB@B@B@@@B@@D@@DDDDBB@@B@B@@BAB@@BB@BBBBBB@FB@@@D@@A@AB@@BF@B@B@BDBDBDBBBFBD@F@D@B@B@HADAF@D@F@B@B@ZB@@BBB@BDB@@@DBBB@@B@DA@@B@@B@@@B@BCBAB@BAB@B@B@BB@@@@BDAD@B@B@@@@@BD@@B@@@D@D@BAFAH@HA@@BB@@B@@@BBB@BAH@BABB@@DBB@@BB@BA@B@@@@@BCFABAB@@@D@D@D@@@B@B@@@BBBBB@@@BA@AB@@@B@@BBBBDBBDBB@BBBBBBD@B@@ABA@AD@BA@@@ADAB@B@@@BBBBBBDB@D@DB@@@B@DB@@BBB@D@B@@B@B@BAB@BBB@@@BAB@B@@@@BB@@B@@B@@ABA@@B@@@@@BBBBB@B@B@B@B@FCBABADA@AB@@CBA@AB@@@B@D@B@B@@AB@BABAB@BAB@@@BA@AB@D@B@@@DA@AB@@AA@@A@AAA@@EA@A@@@E@A@@B@BAB@DADAB@B@B@B@B@@BBD@@BB@@@@B@@@B@BADABABC@@@@B@@@D@BBB@B@B@BA@@@@B@@@BBBBB@B@H@@@B@BABB@@B@BAB@@A@@B@DA@@B@@A@@@@CA@A@CAC@A@@CE@@@AA@A@@@@A@@@@DE@@@@@@EE@@@A@@B@BAB@BA@@DA@A@@@A@@@@B@@AB@B@F@B@B@@@BAD@@@B@DBDBB@@@B@@@BABABA@@FAD@BADCB@@CB@@@@AD@B@@A@@@A@AB@@AD@BB@@BBBBB@@@B@BA@A@AB@@@BAD@D@B@HA@@BABAB@DA@@D@BA@@DDDB@B@@@BAB@@@B@@B@@BDBBBDBBBBBD@@@D@B@B@DCBAB@BAB@B@BAD@D@@@FB@@B@@BBBB@HD@@DEBABCBAB@@@BABA@@@A@A@AA@@A@@@@@A@@@AB@BC@A@@BADABAB@BC@@BAB@BA@@@A@@@@B@B@BA@@D@B@B@BCB@B@@@B@B@BA@@@@B@BAB@B@BBB@BA@@D@@@BAB@BAD@B@B@@@@B@B@B@@BBBB@@BBB@B@DBB@BBB@@@D@@@B@B@@@B@BBHBB@@@B@DA@@FAB@@@B@@@BBB@@AB@@@@@B@@@B@@@DA@@B@B@@@@@DCB@BA@AB@B@DA@@B@B@B@D@@@@@B@B@B@@ABA@@FAB@BAD@@@@@BABABABCB@DA@@@CBC@@B@@C@AF@@@@AB@@A@@@@D@@@@@B@@@ACB@@AB@B@@@@AB@@@BA@@@A@@@@@@BBB@B@@ABA@@BB@@BAB@@@@@@@@@BA@@@AB@@C@AA@AA@AA@@A@C@@CCAAAAC@A@@@AA@@A@A@@@A@C@@@AB@@A@@@@A@@@C@@@AA@@@A@@@AA@@A@@C@@A@@BA@@@A@AA@@A@C@@@@@@BABA@@@@@@@@B@B@@AB@@A@@@@CA@@@@@A@BDA@@@@A@@A@@@@BCAAACAA@@@@AA@AA@@A@@@A@A@@B@@A@@AACACAA@A@AB@@@@A@@AA@@BAB@@@@A@@@@@@@@@A@@AA@@@AA@@ABAAAAC@AAAA@@A@@@@AA@@AB@@@@AB@A@@AB@@A@@A@@A@@@ABAA@@AA@@AB@@@@BB@@@@CA@@AB@@A@@@@@@@AA@A@@A@@@AACCB@DC@@BA@@FAB@@AB@AA@@BA@AB@@A@@AA@@A@@@@@A@@C@A@@B@D@@A@@BC@A@@B@B@@@@@@A@A@@@@@@B@@B@@@@D@@@AA@A@@B@BAHAFA@AB@AA@@B@BA@@B@@@BB@@B@HAB@@@BB@@B@B@B@@AD@@A@AA@B@@A@@B@@@BAB@BAB@BA@@B@@@@A@@HAB@DAAC@ADABABADA@@@@BB@@B@B@@AD@HAB@@A@@AA@A@@RCB@HAFCAECIAGAGA@@@A@@@@AAA@@BAAA@@C@@@@@A@@BAA@@ABA@ADA@@@@@@@A@@AA@A@@@@@AEA@@@AA@@A@@@@@@@BA@@@A@@@AB@@@@A@@B@@@@@@A@@@@@@AA@A@@A@@A@@A@AA@AA@@AA@E@@@@@DA@@@@@@AA@AACAC@@A@@@@ACC@@@A@@@A@AA@@AAA@@@A@AAA@@@@AA@A@@@@B@@@@A@@ABA@@A@@AA@@C@@@@ACAA@@@@D@@A@@@A@AE@@A@A@@@@@@@HA@@@A@@B@@@@@@A@@AC@@A@AB@@@AAA@A@@AB@A@@@@B@DA@@AA@@BA@@@A@@@@@A@@@@D@@@@@@A@@@A@@@C@@A@@C@@@@BA@@@A@@@A@@@@@@@A@@AA@@@@AA@@A@@ABA@@A@@@@@B@@A@@@@A@@AB@@@@@BA@A@A@@B@AC@C@@@A@A@@B@B@@@@A@A@@@AA@A@@@A@AB@@@@A@@@@AA@@AAAAA@@CB@@@@@A@@@@@@@@@AB@BAB@A@@A@@B@B@@A@AAAAA@A@@B@B@@A@@@@@A@AGB@@@@@A@A@@@@@@@@B@@@@@AA@@@@@A@@EC@A@@B@@@@A@@B@@@@A@@@A@@@@BC@@@@BAD@@@@@@A@@@@DA@@@@@C@@@@B@@@@A@@AA@@@@B@@@@A@AB@B@@@@@@A@A@@A@A@@@@@@@AA@A@@@@A@@@@AA@@A@@@A@A@@A@@@@@A@A@@@AAAA@@@AAA@@@AA@@ACA@AA@AAA@MCAA@@AA@@BA@@@ABAB@BAB@B@B@B@@A@@@A@A@@A@@A@I@@DABA@@@AAA@AAC@@B@B@AAA@@@BA@AC@@@BA@CGBA@A@@@@A@@A@A@C@C@A@@@A@A@@@AAC@@@A@@@@@@@@B@@@@@@A@@A@@@@@A@A@@@@C@C@A@A@@@@A@@@@A@CA@@@@@@CAA@@@AA@@A@@A@A@@@BA@@A@A@@C@@@@A@@A@@@@B@@CB@@@@@@@@A@@@@B@B@@AB@B@@A@@@@@@B@@A@A@C@A@@@A@@@A@@@@@@@@B@@B@@@BB@F@@@BB@@@@D@@A@BBA@AB@@@@BD@D@@C@@@@B@B@@@@@@@@C@@@@B@B@@@@ABA@@@@A@@@AC@@@@@@@B@B@@AA@@@A@@@@C@@@C@@@@BA@@@A@@@AB@@@@@@@@@@AA@@@@A@@AB@@@@A@AA@CAA@@A@@@AA@@A@@@A@@@@AA@A@A@A@@@AA@@A@@@@@AA@A@@ABA@@@@AA@AB@@@@AA@@@@EBC@@@A@@@BD@@@BE@@@@BB@@BA@A@@@A@A@ABA@A@@@AA@@@@A@@B@@AB@@@@A@A@@@@B@@A@CBA@A@@A@AA@@@A@A@AB@@E@E@C@C@A@@A@@@A@@A@A@A@@@AC@@@@C@AB@A@@AA@@@AAB@@@@@BA@@@AA@@@@A@CBAA@@@@@AB@@@AA@A@@@AA@@AAA@@A@@@@@@@AA@@@@C@E@KB@@@@AA@@@AA@@@@C@@@@A@@@@@@CA@@@A@@@A@@@@@A@A@A@C@@@@B@@BB@@@@A@A@EB@@@D@@A@KBC@ABA@A@@AA@@A@@AA@A@A@@@@@C@@@@@C@A@@@A@@@A@A@A@@@@@ACBAA@@@@@C"],"encodeOffsets":[[116148,34811]]}}],"UTF8Encoding":true});}));