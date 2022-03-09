(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('略阳县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"610727","properties":{"name":"略阳县","cp":[106.156718,33.327281],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@@AAA@@@@@AA@CBA@CA@@ABC@C@E@CAE@AAAA@A@@B@@AB@BABBB@DADA@ADA@@BCBA@A@@C@@A@@CAC@AB@@@@A@@@@BA@@BA@A@@@@A@@A@A@@@A@@@A@A@@@@@A@@@@A@AA@@@AB@A@A@@AB@@AB@@A@@B@@@@ABAB@@A@C@A@C@AAC@@@A@A@A@A@EAA@A@AB@@A@@@C@C@IC@@A@@@@DCB@B@@AB@F@BADAB@@ADCBCBCDAF@B@B@BABAB@DAB@D@BBBBDBDBD@B@@@BAB@@@BAD@BAB@@A@A@AACA@@CAA@AAEAAA@@@@GCGHBF@D@FADBH@LAH@HBH@H@@AFBFAH@HCJEFMH@@GDKDCBGDKJKLEHABABCBABEBGBGBE@K@E@I@EAG@GCO@KAKC@@OBEBCDEBEFEFCHGFMFG@A@S@IBEBGBEBEDGF@BABAH@HDDAHCBIDGBM@M@KFABCBCDEFEFEHAH@BAD@JDDLFBF@DDHAHCDEDCDEFEDCBGHEDADABEHEHINCHEHGHCFCDBFDDDBLDHDJBB@H@DABADAFCFAD@F@@@HAJ@L@L@J@@@@@L@B@FAJCRAJC@@@@J@JBD@B@HAHBJBDFBDBD@DDNBFDF@JDH@LAJ@D@FAJ@BAF@HELANAJDFBFDFDFHJBFBH@H@FAFDHBBBBJHHBTNHDDDHHFD@BJPBJBJHDJDDDDPDFBDFDH@FAB@N@D@JDLJDDFDDFFDBDFFDHDFBDDBFDDDDDBDBFBFBBAFBBBFKL@@@@BBD@D@DCFBL@F@J@JABAD@FEBCD@BA@@D@DABBD@HDD@FBF@BD@@FBBAB@@E@G@GBCDAF@BAB@D@BBDFFB@@DBFFDHB@BBDBD@D@FAFAB@B@HEBAD@@@NFBDHFB@FBJFBBB@FABAHA@@DAD@B@BCBATABAFGFABAB@DB@@D@LBDI@CIGGEA@C@ABOBAC@ABABAGMCIAA@@@ADEDAB@D@F@FBF@B@D@B@HBF@D@@@AFAFABBBJDH@L@D@@BBBDB@@@AB@B@BA@A@@AA@@AACBCACAAAAAA@AAA@@ABADABA@EAC@C@ABAB@DAD@@C@ABABABAB@FBB@B@DAHADADEF@JAHCHAFAD@HBNBHDJLLFH@@@HBJBLDJBHFHFFFDDHFFFHHHHNJLHLFHBJBB@J@JDLAHAFCDEFAFEDCLCHCHAH@H@B@FBHDHDJDHHHDFDHHHJFDPFJ@F@LFL@H@L@JBH@RCB@HEDABA@A@CDGBEBIBIBI@KAKDIBO@Q@aDIFEHEJEAC@@@ABA@ABA@@BABA@@D@@@B@BA@ABC@C@A@A@C@@BADEBAB@@CDC@@@A@A@@AA@A@AB@@C@A@A@@@@@A@@B@BA@A@@@A@A@@B@BA@@BAB@B@@@@@BA@@@A@A@A@@@A@ABA@@@@B@@@@A@@BA@ABC@@BA@A@@@@AAAA@AAAA@@AA@AC@@AA@AAA@@BA@AA@@A@A@AA@@AAA@CB@@AAA@C@@AA@@@A@@@@B@B@BADAB@BA@@B@@@BA@@@@AA@@BA@A@A@A@@@A@A@@BAB@BABAD@@A@AB@@@B@B@BABE@ABA@A@A@AAA@C@A@ABA@A@@B@DC@@@A@C@C@A@A@@@@@A@@@A@A@ADA@A@@@C@ABA@@@AA@@A@A@AAAB@@A@ABCB@@A@@@C@AAC@A@A@A@AAA@@@A@@@AAA@@@@@@@AD@BAB@BAB@@@B@@@DA@@B@@A@@BA@@@A@@@C@@A@@A@@@@@A@@@AAC@A@@A@A@@A@@A@A@@@A@@AAABA@AA@@A@A@A@ABC@@A@@A@A@A@@A@@AAA@@AAAAACA@@@@@CD@@@@A@C@@@AA@@EA@A@E@A@@@A@C@@A@AC@AAA@@A@A@@A@A@@AA@A@@@AA@@AA@@@A@BA@A@@@AAA@ABA@ABA@ABA@A@A@@@@AA@AA@@@A@AB@@@@A@A@@@@@A@G@A@A@E@AAAA@@B@DCBA@AA@@CAA@AA@@A@@@A@E@@@A@@CA@@A@A@@@AAA@@AAC@CA@GCCAAA@@AC@C@@AAAE@@@A@@@AB@B@@ABA@CB@@AB@BADA@ADA@A@@@CAC@AA@@A@A@@AA@@AC@A@A@@@AAA@A@@@@@A@A@C@AB@BAB@BA@ABA@@B@BA@@@@B@@@BABA@AB@BADCDCB@@@@A@@@AB@BA@@DCBAB@B@DA@@D@@AB@B@@A@A@@@AA@@@@@@B@@@B@@A@@@@@@@AA@AA@A@A@AB@AC@@@AAA@@@ACAAAA@@C@@@@BADAB@@@@AA@@A@@BA@@BA@@@@@@@AA@ABA@@A@AAAAAAA@@A@A@C@@@A@@BABA@ABAH@@A@@@AA@G@A@A@GBA@A@A@A@A@ABCFA@A@@@@@AA@A@A@A@@BA@ADE@@@ABA@A@A@A@@@ABAD@D@B@@A@A@CAA@AA@A@@A@@@C@C@@AA@@AAAACCAACCA@@AAA@@AA@@@@@A@@BA@@@@AC@A@A@@@A@@B@@@BA@A@@CA@AA@AA@@A@C@@@@@AA@@@@A@@@A@A@@@@BAB@@C@ABC@A@@B@@AB@@C@CA@@A@AA@@A@@@ADA@@@@AA@@@@@EACA@@@@@A@A@A@@AA@@A@EDA@AAA@AAA@A@CAA@AAAAACAAAAA@@B@@B@@BABAB@@AB@@A@@@@@AB@@CAEAAA@AAAA@@AA@A@A@@@A@@CAAAAA@@AAAAA@@A@C@A@@BCDA@AB@@AB@BBB@BABABABA@@BAB@@BB@B@@B@@B@B@B@@CBC@C@A@A@AA@A@@A@@@A@AD@B@BA@ADA@ABA@A@@@A@G@@@A@A@A@@@@@@@CFAB@B@BB@@B@BAB@BCBA@@B@B@B@@@BAB@@A@A@C@@@@@@BA@A@A@A@CBA@CB@@C@AAC@@@@@AB@BADA@@DABCD@@A@A@C@C@@@CBA@@B@BABABA@@B@@A@A@A@@@A@EBA@ABC@@BA@@B@BA@@@A@AB@@AB@@A@@BA@@@ABCBCBABAAE@AAA@A@A@E@A@ABA@A@@@C@CDA@AAA@CA@@@@C@CDA@A@A@A@C@G@A@ABA@@@@@ACCAAA@@AAABA@A@AAA@AACA@@A@@AAC@@@@E@C@A@@@ABA@@@GC@@@@AC@@@@A@AAA@AA@@AACA@@@@A@AAC@CAC@C@AAA@A@@@C@A@@@A@A@C@A@A@A@ABA@@@A@@@AA@@@@A@AB@@A@AA@@@@A@AB@@AAA@AA@@AAEAA@@@@A@AC@A@CAA@A@A@@@@A@@@A@@@@ACACA@@AA@CCAAAA@@A@C@A@CA@ACACA@@A@@AA@@@A@AA@@A@@@EAAA@@@A@AA@AAAAA@A@A@ACA@ACBC@E@AAACC@AB@@AA@ACA@CAAA@@A@A@AA@@A@@@@AA@CEAAAAA@ABA@@AA@@@A@A@@@@BA@A@C@@@ABA@@@C@A@@AAAACAAAA@@A@@@C@A@A@A@C@@@@@EGAAA@AAA@A@AAAACA"],["@@A@@@@@E@A@C@C@ABA@A@A@AACACCA@@@CDABCB@@AB@@A@AB@@@BBBDDB@DDDD@@@B@@AB@@AB@@@@A@@@KNCH@@@@BBDDDDDBB@FDB@CBAD@B@F@B@@@BBD@BBBD@BBDAD@BABAB@@ABAACFEHADA@C@ACAEBC@@AIGCAAA@A@A@ADAB@D@D@FBFBB@BA@@@A@AAAACAAAAAABABAB@BABC@@@C@I@A@@BAA@"]],"encodeOffsets":[[[108610,33920]],[[108489,33950]]]}}],"UTF8Encoding":true});}));