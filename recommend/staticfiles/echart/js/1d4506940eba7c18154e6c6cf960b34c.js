(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('西充县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"511325","properties":{"name":"西充县","cp":[105.90087,30.995683],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@C@CCGCAAA@C@A@A@ABA@AAAA@@A@A@@@AB@BABCBCDABABCFAD@BADABABCBA@C@C@CAC@C@C@@@E@EBCBC@ADAB@BBD@FCBCBCB@@@@EDAB@@CB@FAB@F@DADA@A@CAAAAAA@A@@BABABC@@A@ABA@C@A@AAAAACAC@A@A@C@@@A@@AAA@ABA@CBABA@@AAA@EAE@CBCBCDAD@B@B@@BB@DB@B@@BBBAH@D@BBFAFABCBG@G@CBCDCB@BCH@@CFAB@BA@@BAB@BAB@BAB@@ABA@ABAB@@ABAD@H@@C@A@A@C@A@C@AD@B@D@@@B@DBDADABCBCB@B@B@DD@DBF@FDBBBDB@@B@BBBB@D@BBBBBBD@B@JAD@F@D@FAFAB@HAB@DBD@DBDBBBBDABA@A@ABAB@@BBBB@D@DABCB@B@B@BDBD@FBF@D@B@BABADAFAD@DAD@B@BBBDBB@B@DBBB@DBD@B@B@FDBBDB@B@DBDBBD@BBDB@BBD@BAD@D@B@B@F@F@FAD@D@@B@B@DB@@BBBDAB@BCBEDCBC@@BABBBB@BAB@DBB@BBBBBDBDDBBD@BBFABAFADCB@BCBCDADAD@DBDBDBDBBB@BA@AAI@CBA@@D@B@DDBDBB@DDJ@B@@@BAB@@CBC@A@@BAB@D@D@B@B@D@BADCD@B@BB@B@DBB@DB@DBB@D@B@BADABA@ABAD@B@BDBBBABCDABABA@ABAB@B@DABA@ABABAD@B@F@@@B@@ABA@@@AA@@AAAAA@@@A@CD@@@BAB@B@BA@A@@@AA@@AAA@ABA@A@A@@@AA@@A@@@A@ABC@@@@BC@CBAA@AAAC@A@CBADAD@D@D@@@BB@B@BBB@@B@BAB@BCB@BADBB@BB@B@B@B@D@@@B@@@B@B@@AB@B@B@B@@B@BB@@@BB@@B@@BBBA@AB@@A@AB@BA@ABCAA@CAA@ABA@@B@BB@BB@B@DABAD@D@D@DBDABADABBBAF@DAFADABABCBADADBD@BDBBBBB@BBDBD@DBBB@@@B@DBB@B@@AB@@ABC@@@ABADAD@B@F@BAB@@BF@B@@B@@@B@@BBDBDAB@@BB@@B@BABGFAB@B@BB@B@DAB@BADAD@B@D@@@@@@@B@BABABA@C@@BA@@BBDFB@B@@A@@BA@@B@@@DBBBB@BAB@B@BB@@@B@@D@B@B@B@B@@BBBBDBBB@D@BA@C@G@ABABA@A@A@AA@BCBEDEDIDCDAD@BB@@AB@BBBB@DBD@BDDDB@B@BABAB@BAD@B@D@@ABAACBABAD@BBFBB@D@D@@@@@F@B@DABA@A@@BAB@@A@@EC@A@@BCBCBA@@BABADAB@B@BBBB@@A@@BBBDB@@@@B@@@BA@BD@BBB@B@@@B@@A@AB@B@BA@A@@DAD@B@D@@A@AAC@A@A@ABADABAAA@CAA@@@CAA@A@A@C@ABABAB@@A@@@@@@AA@@@@A@C@CCAA@ABCDADBB@@A@C@A@ABABAD@BDDBBB@@@A@AA@@A@A@AB@BDB@BB@AB@@ABAB@B@B@B@B@B@@@@BBB@@BBDHDBD@DBB@D@FAD@HC@@DADABAB@F@B@DBDBD@D@BBD@@@B@B@@AB@@@@A@@@@@@H@B@B@B@BB@@@B@HB@@BB@B@B@@AD@@@@@@@B@B@DBB@DBBBFBB@DAF@@@BA@@BA@AD@BA@@DAB@B@B@@B@@@BBBD@DABBB@@@@B@BAF@BBD@BAB@B@BA@@@ADCBADABAB@D@DBBBBBBB@B@D@B@DA@@@@@@B@@A@@@CAABI@ABABAB@D@@BB@@B@BAB@@@B@@DBBB@@B@@@BCBA@AB@B@D@@B@@AF@D@B@BB@BBBAB@B@B@BBB@@A@@@AAG@ABAB@D@BABAB@B@@@BB@B@B@BBDBBB@BBB@B@B@BAB@BADABABCB@BA@@BADCD@DBB@@BB@@@@D@@@B@@B@BA@ABA@A@A@C@@@ABA@@DAB@D@H@D@B@DABCDADAB@BC@ABA@AB@@A@@BAAAACAA@@@@@CBABABADABAB@BADBDA@@BA@E@A@ACCAAA@CBCAEAA@CI@A@A@CBA@C@ACACAA@IAAA@A@@@A@ABABAB@BAB@@@@@@AB@@@@@@@@@B@@@@@@A@@@@B@@A@@B@@@@@@@BA@@@A@ACACAA@ACBC@@@AB@D@HBHBD@DAB@BBBBDBPCF@BAB@AA@ACC@CAAAAA@@A@A@ABA@CBABABABAB@D@BDBBB@DADADAHCDAD@DB@@B@BBD@B@@@@ABE@ABADAD@D@DBD@@@BA@@@A@AB@@@B@@CA@A@IAA@@@AABA@CBA@A@A@AAAAAA@ABC@A@A@@BA@@@A@A@AAA@A@@A@CAC@A@CBAB@D@D@DAB@AA@IA@AAA@A@@ACCAKAA@@A@A@ABA@A@A@ACAABA@ABADC@A@@@A@AA@@AAA@A@@@@AAAAAA@@@@C@@A@AAA@@A@AAEAAA@ABAB@BBDBB@BAB@@ACAAAA@C@C@A@C@@@AA@@AI@A@ABCBA@A@A@@AAAAAA@A@ABA@A@@@@AAC@A@CA@ABCEO@@ACAAEEAC@@AA@AAAC@ABAB@B@@@BCBA@ABA@AA@@A@AAAA@ADCBCBCBI@I@E@GDGFCBCB@@A@@@A@ACGACAAACAAACCAE@A@C@A@CBCACCECECCACAEAAAC@ABAB@DCBCBA@C@CA@CAA@@@C@C@A@AAC@@AAC@C@A@C@ACAA@CBCDEBCDA@ABA@C@A@AACCEACCCA@C@A@AABA@A@@A@@A@@@A@@DC@A@ACCEAEACAAAA@@@CCA@AAC@CC@@A@AC@CBABA@C@AACACAACACBCDEDCDCDCBCDA@CBEBCBCBCDABCDABABCDABCDABADADADABA@C@@@A@AA@@@@ACAACEAAACA@AAGAE@E@IBACA@AA@C@A@A@ABABA@A@@@AA@A@A@@@CD@@AN@FADADADA@@BA@@BAB@D@B@B@@EDE@CBM@A@C@AD@D@JADAB@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@ECCECAE@EDC@C@EAGBCBE@EAEAEAEBCD@@C@KCAAAC@EAICAEACAAAAC@CAA@@@@@@AB@@A@CBA@@@@@A@@@@@@@A@@@@@A@@@@@@AA@@@@@@@@A@@@@@@@A@@@@@@BE"],["@@A@A@@@AF@@BA@@@@@@B@@@@AB@@@@@B@B@B@B@@@@@B@@@@@@BB@@@@@@@@@@BB@@@@@@@@B@@A@@@BBBADCRCDABA@CCCG@E@EBEBA@A@@BBB@BAB@@@@AAC@A@AB"]],"encodeOffsets":[[[108302,31638]],[[108304,31638]]]}}],"UTF8Encoding":true});}));