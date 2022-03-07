(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('佳木斯市郊区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"230811","properties":{"name":"郊区","cp":[130.327194,46.810085],"childNum":3},"geometry":{"type":"MultiPolygon","coordinates":[["@@A@A@A@ABA@C@CBA@A@CB@@A@@@@@A@@@A@@@A@A@@@CA@@A@A@AAA@A@@@A@A@A@@@C@@@A@@@@@CB@@BDDBB@@DB@BDBF@D@DBBADAB@BBDBBB@@B@BAB@BBB@BABCDABBBBBADDD@DAH@@BB@BCBBD@@@BDF@B@DBBDF@@AD@BB@FF@B@DBBDB@B@FDFBDB@BB@B@@BB@BBB@F@BDBBD@D@BADBBD@BBFDDHFD@B@@B@BF@B@BHHBDDDFH@BBB@@@B@BABAB@@AB@@CB@BABA@ABA@@@@@AC@A@AAAA@CCA@A@A@C@A@A@A@A@@@CAAAC@EACAA@AAA@AAAA@CAAAAACAA@AAAA@AACA@@@@@@A@@@CCA@A@EAA@AA@@A@@AA@@@A@@@@@@B@@AA@@@@@BA@@@A@A@A@A@@BA@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@AA@@A@@@A@A@A@AA@@AA@@AA@AA@@A@@CA@A@@A@@@@A@@@@@@AA@@@AA@@A@@AA@A@C@A@A@@AA@A@@AA@A@A@A@A@ABA@ABA@@@@B@@A@@@@@A@@@@BA@A@A@AB@@A@@@@@ABA@AB@@@BAB@BABA@@@@AA@@@ABA@ABCBABABA@@@@@A@@AAA@AA@AA@@A@A@A@A@A@AB@@A@ABA@AB@B@@AB@@A@@@@AA@@A@@A@AB@@@@A@@@A@@BA@@@AB@@@B@@ABA@A@A@@@A@@BA@A@@@ABA@A@AB@@AB@@A@@@ABA@AB@@A@@@A@A@@@A@A@@BA@@@@@A@@@@A@@@A@CBABABCBA@ABA@AAA@@@A@@@A@A@@BAB@B@B@@A@@@C@ABA@A@AB@@@BA@@B@BA@A@ABA@@@C@A@@@ABA@A@AA@@A@@BA@@@A@@@A@@AA@A@@BA@AB@@@@AB@B@@@B@@A@@@A@@B@@@@@@A@A@@@A@@AC@CCAAI@CAECA@A@A@@@@@@BADCBBDBB@D@@@@A@C@G@C@A@C@A@C@A@C@A@C@A@A@A@A@A@A@A@A@A@@@A@@@A@@B@@BB@B@B@@A@ABA@A@A@A@AB@@BB@B@@BB@BAB@@@BA@@BA@@B@@@BBBD@D@FBD@DBBBD@D@BBDBDBB@@BB@@@AB@@@@AB@@@B@@@BB@BBDB@BDBD@@BB@DD@B@BBB@B@B@BBD@BBB@B@B@B@D@B@D@D@B@B@B@B@B@B@@AB@@@B@@AB@@B@B@B@B@B@B@@@@B@@@B@@B@@BB@BBBB@@BB@@@@BB@B@@B@@BB@@@@BB@@B@@@@@B@B@@@@@@BB@@@@B@@B@@B@BB@@@B@@@B@B@BBD@@@B@@A@A@A@@@A@A@@@A@ABA@@@@B@@A@@@A@A@A@A@A@A@A@A@@A@AAAA@AAA@@@@@@@@A@@BA@A@@BA@A@@B@@AB@B@@@AAACAAAACAAAA@@A@A@@AA@@@AAA@AAAAAA@A@@AA@A@A@@@A@@@A@@@AB@B@@AB@@ABABA@@BA@@@AB@@AB@@A@ABC@ABC@ABA@ABA@C@C@@@A@@@@A@A@CBA@A@@@AB@@A@@@A@@@A@A@@@A@AA@@A@@AAA@A@@@A@C@@@CA@@A@@@@@@@@A@@AA@@@AA@A@@@ABA@@@C@A@@AA@A@@@A@@AAAAA@@A@C@@@@@A@@A@@@@@@@A@@@@@AAA@@@A@@A@@A@@@@A@@A@@@A@AA@@A@@@A@@A@@@@@@@A@@BC@@@AB@@A@@@A@@@@@C@@@@@@@A@@@@@AA@@A@@@@A@@@@@A@@A@@@A@ABA@@@ABAB@@AB@@@@A@@@@B@@A@@@@B@@@@@BA@@B@@@B@B@@A@@B@@@@@@@BA@@@@BA@@@@@@B@@A@@@AB@@@@@@BB@@@@@BA@@@A@AB@@@@@B@@@@@@A@@@A@@BA@@@AB@@A@@B@@@@@@@BA@@@AB@@@@A@@B@@@@@B@@AB@@@BA@@@@BAB@@@@@@@B@B@@@BA@@BA@@BA@@BAB@@@B@B@D@@BB@@@BA@@@A@@@@@@@@@A@@@A@@@A@@@@@AA@@@A@@A@@@@@A@@@A@@@@BA@AB@@A@ABA@@BA@@@@@C@A@A@@@@@@B@@@@@B@BA@@@@BAB@BA@@BA@A@@BA@ABC@@BA@@@@BA@@BA@AB@@AB@@ABAB@@AB@@ABAB@BAB@@@B@@@@DL@DBD@BBL@DCV@HAH@DDDFH@@BB@@B@BBBB@@B@BB@@BBB@@@BBB@BBB@BBB@@BB@@@BBB@BB@@B@BB@@BBB@@BB@@@BB@BB@@BB@@@BB@BB@@BB@BB@BB@BB@B@@BB@@JL@@HL@B@@@BB@@B@@@BBB@@@B@@BB@@@B@BB@@B@B@@@B@BBB@B@B@@@B@B@@@B@BAB@B@@@B@B@@@BA@@B@B@B@@@B@@@BAB@B@@@@@B@B@@@@@BAB@B@@@B@B@BAB@B@B@@@B@B@B@B@B@B@BB@@B@BB@@B@B@@BB@@@BB@@B@BB@@@@BBB@@B@BBB@B@D@D@B@D@BAB@B@B@D@BAB@B@BAD@@@B@B@VB@@B@RBTH@@@@BBB@B@@@B@BBB@@@B@B@D@B@B@B@B@@@B@B@@@BAB@B@B@BAB@B@@@BAB@B@BAB@@@BAB@BAB@BAB@BADAB@BAB@BA@@B@BAB@BAB@BA@@BAB@@ABAHEHCVEP@XBHFFDBDBH@FCFCDMPQPCJAFD^@@EDAB@@C@@@A@BBA@@@A@@AA@@@@@@B@@A@@@@B@@EB@@AAA@@@@@@B@@@@@BA@@@BB@@B@@B@@@B@@@@@B@@@B@@BBB@@BB@@BB@@BC@@@BB@@@B@@A@@BB@@B@@@@@BAA@@@@AA@@A@@B@@@@@@@B@@B@@BA@@@@@@BA@@A@@AB@B@@@BB@@B@@A@C@@@@B@@AB@@@BB@@@B@@BA@@@A@@@@@ABA@@BAB@BA@AB@D@@AD@B@@@@CB@@@B@@@@ABAB@B@@BB@@ABA@@@@@@D@@@@B@B@BB@@@@@BA@@@@@@@@@@B@@EAWCCBA@ABABA@@@C@CAABAB@B@@@B@@AB@@BBAB@@@@@@@B@@@@ABA@@@@@A@@B@@B@@@@B@@A@A@@@BB@@A@@@@B@@@@@BB@@@@@@BA@A@@B@@@@@@AB@@B@B@@@A@A@@@@B@@B@@B@B@@B@@B@@@@A@@B@@AAA@@B@@@B@@AB@B@@DB@@@B@BBB@@@BB@D@@B@B@B@@AB@BrLBRAVETqIBB@@@BA@@BAB@BB@BB@@AF@D@@@BAB@BA@@BD@@BB@@B@@AB@@@B@@AB@@A@CBAB@BBD@@A@@B@B@@@BBBBB@@BBBB@@ABCDCB@B@@@BAB@BA@@BB@@BD@B@B@BBA@@BA@ABCBAB@@@@A@@@A@@BA@@@@@A@@@A@@BA@@@@@@A@@@@A@A@A@@BA@@@AB@@@@BB@BA@@BB@@@@@@@AB@@@A@@@@A@@@A@@@@@@BBB@@@@@BB@@@@@@B@@AB@@A@@@@@@@AB@@@@@BB@A@@B@@@AA@@BA@@@B@@B@@@@@@BB@@@@A@@@@B@@@@AA@@A@@B@@@@@BA@@@@BA@@@@@AB@@@@A@BDA@@@@@@BA@@@B@@@@@@@@BB@@@@@@BA@@@@@A@@@@BA@BB@B@@@@A@@BAB@BA@AB@@A@BBA@@B@@@BA@@@AB@@@@@@A@@@@B@@@@@@@@A@@@AB@@@@@@@B@@@@A@@AA@@B@@@@ABA@@A@@@@B@@@@@A@@@@@A@@@@@@B@@@AA@@BA@@@@@@B@@@@A@@@@@@A@@@@A@@@@@@@@@ABA@A@@B@@@@A@@@A@@@@@@@@B@@@@@@@@@@@@A@@B@@A@A@@BA@@@@@@B@@A@@@@@@B@@@@A@@@@@@@BB@@@@A@@@@@@@@B@@@@@@A@@@@@A@@@@B@@@@@@@@@@@@@@@@@B@@A@@@@@@@A@@B@@A@AA@@A@@@B@@B@@@@@@@@A@C@A@AB@@@@@@@@A@@@@@@@@@A@A@AB@@A@A@FDB@B@DAH@BAF@JCD@HAD@BAD@@@@BB@D@FAFAFC@A@@@AA@DAB@DADABC@@D@D@DAD@B@NEHCfMLEB@@@DAB@BB@BBB@@BBB@BBB@@BFBBB@@EFCD@@B@BDDDDDDF@@B@BADCDCDCDAB@FAFABAFC@@@AB@@@@@@@@AB@@@@@B@@@@AB@@@@@BA@@B@@AB@@@@AB@@@@@@AB@B@@@B@@AB@@@@@@@B@@A@@@@@@@@B@@A@@B@@@B@@@@@@@B@@@@@BA@@@@@@@@BA@@@@@@@@@@BA@@@@@@@@@@@@@@@@@@@@@@B@@@@@BA@@@@@@@@B@@@@@@@@@@@@@B@@@@@B@@@@@B@B@@@B@BAB@@@BA@@@@DABA@@B@@AB@@@BA@@B@@@@@@AB@@@@A@@B@@AB@@@@A@@BA@@BAB@@A@@BA@@@AB@@AB@@A@@B@@A@@BA@@@AB@BADCBADC@AB@DCDC@@DA@AB@@AB@@AB@@ABA@AB@@AB@@AB@@@@BBBBD@@@@@B@@@B@B@@@@@@BB@@@@@@@A@@@ABA@@@A@@@AB@@A@@@@@AB@@@@A@@B@@@BAB@B@B@D@@@B@B@B@@@BAB@B@B@DA@@@@@@B@D@B@B@BA@@B@BABAB@@@@@@@B@@@D@B@@@B@B@B@B@B@D@BBB@B@B@B@B@BBB@@@B@B@BA@@@@B@@@@@@@@A@@BA@@@@@@@@B@@@@@B@@A@@@@@@B@@@@@@@@@@@@@@@BA@@@@B@@@@AB@BBDBLFDB@@DB@@@@B@@@@@BB@@B@@BB@@@@@BB@@@@BB@@B@@@@BB@@@@@@@@@B@@@@@@@@B@@B@@@@@@@@@@@B@@B@@@@@@B@@@@@@@@@@@BB@@ABEFCDA@IAA@A@SN@BAB@@@@ABA@@BAB@@AB@B@@A@@B@BABDAHAD@D@BBDBBBFDBB@B@BCB@B@BBBD@FBHBHDBB@@@@@@B@@@BBB@@@BB@@@@@@@@@@@B@@AB@@@B@B@BAB@B@DAB@B@B@@@@@@@@ADH@F@@@@@@@@@B@@@BBB@F@FBLBPBDBHBRBFBB@D@@A@ABC@CBA@C@@@ABA@EB@@E@ABCBEBE@EBC@AAAC@A@@@WAGAUAA@@EBC@A@CBA@C@A@A@A@@@ABA@@@C@ARBRAJCBAFA@@B@DGBA@C@@B@@AA@AC@A@C@C@EBEF@F@@@@bB@HBF@D@F@D@B@TBB@B@D@DBAB@@B@B@BBBADA@@B@BBBD@@DA@@@@B@B@@@@B@D@@@B@@@@@@@D@D@B@@B@B@BBJDDD@@B@@B@BB@@BB@@BB@A@B@@@@@B@@@@@B@@@B@BB@@@@@@ABB@@@@@A@@@@BB@B@B@@@B@@@@@@@@@@AB@@@B@@@@@@@@BB@@@@@B@@@@@@@B@@@@@B@@@@@AA@@B@B@@@@@@@A@@@@@@A@@BB@@@@B@@B@@@A@@B@@@@@B@@B@@@@@@ABB@@@B@@@@@B@@@B@@@@@B@@@B@@A@@@A@@@@@@B@@@@@BA@@@@B@@@@@B@@@AB@@@@@@@@B@B@@B@@A@@@@@@@B@@@B@@@@@@AB@@@@BB@@@@@B@@A@@BB@@@AB@@@@@B@@@B@@BB@@@A@@B@@@@@@D@BB@@A@@@A@A@@@BB@@A@BB@@@@B@@@B@@@BA@@@@B@BBB@B@@@B@B@@@@@BAB@@@B@B@@@B@B@@@B@@ABA@@@@@A@@@@@A@@@@A@@@B@@@B@@@B@@@@@@@@@@@@@B@@@@BB@@@@@BA@@B@@@B@@@@@@@@@@A@@B@@B@@BA@@B@@@AA@@@@@A@@@AA@@ABAB@@@@B@@B@@A@@B@B@@@BA@@@A@@@ABB@@@@B@@@@@AB@@@@@@B@@@@@BB@@@@@@B@@@@@A@@@@A@@@@B@B@@@BA@@@BB@@@@@B@@@@@@@B@@@@@@B@@@@@@BA@@@@@B@B@@B@@@@BB@ABB@B@@@@B@@A@@@A@@@@@@@@@B@B@B@@B@@@@A@@@A@@@@@@@@@A@@@@@@BA@@@@@A@@@@@@B@@@@B@B@@@@@@@@@AB@@@@@@B@@@@@@B@@A@@@A@@@A@@@@@B@@B@@@@@@A@@@AB@@@@A@@@@@@@BB@@@@B@B@B@@@@@@@BA@@@@BB@@A@AB@B@@A@@@@@@A@@@@A@@B@@B@@B@@@@B@@@@BB@B@@@@@@@@@B@@@@A@B@@@@@@@B@@@@DB@A@@@@@A@@@@B@@@@B@@@@@@@@B@@@@@@A@@@@B@@B@@A@AB@@@@BB@@B@@AB@@@@@@@BBB@@@BB@@@@@@@@@@A@@@@B@@@@@@B@@@@BD@BBD@BBB@B@DB@@DBB@B@BB@@B@DBB@BBB@BBB@B@BB@@B@@@@B@@@B@@@@@@@B@@@@@@@@@B@@@@DBDBDBDBDBB@@BD@BBBBB@FDB@BBB@B@@@DBBBLKJD@BBB@@@@BBBBB@B@@BB@BB@@B@@@B@BBB@B@B@BB@@@@B@@BB@@BB@@B@@B@@@BABAFE@BDB@@BBB@@@@@@B@B@BABA@CBAB@B@@@B@@@B@B@@BB@@BBDB@@B@@BB@FBBBB@B@DBDBB@D@B@BBD@D@D@D@BAB@@@B@B@BAB@B@@AB@BAB@@@BAB@B@@A@@B@@@B@@AD@BAB@@@BA@@B@BAB@@AB@B@B@B@@@@ACC@@@AECCCJCJAJCH@ACA@CAA@AA@AA@C@A@@@@ADA@A@A@@CCCCAC@@@ABABA@AA@C@CA@@ACAAAAA@@B@BABA@A@A@@@A@ABA@A@@@A@A@A@A@A@C@@@C@A@A@A@@@ABA@A@A@@@A@A@AB@@AAAAA@@AA@AAA@AAA@AAA@A@CAA@@EAC@E@COiFaIUGQIOIKOUWaGEGIaIUAK@IEAAEGCCGCQA[AID@@C@IBQBA@E@CAC@EA@@CAC@A@CBCBA@CBE@E@E@E@GACAA@AACACCCC@C@A@A@A@A@E@@@ACCAAE@KC@@EA@AAA@@EACBMDQHIDOBOAO@EAAAEAEEAA\\MDA@@DALG@ATKHC@@BA@@FCHCB@@ADA@@FCBAFCB@@@@@@@FCDA@@@@CAAAAAA@CC@@A@O@@I@@@EA@@AF@AA@AB@@@N@@IE@@IBA@@D@@G@A@CAC@@JDHCB@LAB@@D@@AFB@BB@B@BB@B@BAB@BAGADIH@D@FBJ@BB@@@@H@@@B@@@@@@@F@BCE@TKDIDI@A@IJ@@FRDDETFHMFArS^Hi`¤GD@XFAFKHUP@@CT@B@B@B@B@B@B@B@BAD@BADB@@AF@BBJ@JBJ@BB@AB@BAB@@@FCHGHEDCDABABABADAHGBADCFEHEDCDCBA@@AAAC@ACCCEACAECECGCECCAC@@@@JCHEDAJEDAFA@A@ABC@ABE@EBA@E@ABGBC@C@A@AC@C@A@EAC@A@@@@A@@EAKEKCCAICEACAC@EA@A@@@ABA@A@AB@@A@@BA@@@@BA@@BA@A@C@C@CAA@A@@C@AA@@AAA@@AA@AAC@A@@AA@AA@@A@@A@@@@@A@@@@@A@@@@@A@@@@@A@@@A@@@@@@@AA@@A@@@@AA@AA@@@@@@A@@@A@@@A@@@A@@@@AA@@@A@@@AA@@A@@AA@@@@AAA@AA@@A@@@A@@A@@@@AA@A@@@@A@AA@@@AA@A@@@A@AB@@A@@@@@A@A@@@@@A@@@A@@@A@@@@@@@@A@@@@@A@@@@@ABA@@BA@@B@@@@AB@@@B@@A@@@@B@@AA@@A@@@@@@@@@@@AA@@A@@@A@@@A@@@@@@BA@@@@B@@@B@@@BA@@@AB@@@@A@@@@B@@A@@@@@@@@BA@@BA@@@@BA@@@@@AB@@@@A@@@AB@@@@A@@@@BA@@@@BA@@@@B@B@B@@@B@B@@@BA@@B@@AB@@@B@B@@@B@@@DABAB@BA@ABA@A@A@@BAB@@AB@A@@@A@A@@@A@@@A@A@AB@@A@@@A@@@AAA@AA@@A@@@A@@@A@@AA@@@AA@@@@AA@@@AA@@@A@@@A@A@A@A@A@@@AA@@@@A@@A@@@A@@@A@@BAB@BA@@B@@A@@@@AA@@B@@A@@@@@@@A@@@@@AAA@@AA@AA@@@A@@AA@@@A@A@@AA@@@@A@@@@@@@@A@@@A@A@C@A@@@A@@@@@A@@@@@@A@A@A@@@@@A@@@A@@AA@@@@@A@@@@@A@@@A@@@@@@@@@@@A@@@@A@@@@@@@@@@@@@A@@@A@@@CB@@ABA@@BA@@@A@@@A@@AA@@@@AA@@@AAA@@@A@A@A@A@@AA@A@@@A@@@AA@@A@A@@@@@@@@@@@A@@@@@@B@@@D@@@B@BA@@B@@@B@B@BA@@B@@@@A@@BA@A@AB@@A@@@AB@@AB@@A@@@A@@@A@@@A@@@A@@@A@@@@@A@@@AB@@AB@@A@A@@@@@A@@@AB@@@@AB@@@@A@A@A@A@A@@@CB@@A@A@@@AA@@C@@@A@A@@@A@AA@@A@A@A@ABA@@@A@@A@@A@AA@@C@@AA@A@AB@A@@@@@@A@@@@@@@@@@A@A@@AA@@AA@@@@AA@@@@@@@A@@A@AA@AA@@AAA@@A@@AA@A@A@A@A@@@A@@@A@@@A@@@A@@@AA@@A@@@AAA@AB@@A@@@@@AA@@A@@@@AA@A@@@AB@@A@@@@@A@@@@BB@@@A@@B@B@@A@@@@@@BA@@B@@@@AB@BA@@@A@@@@@AA@A@@AA@@AAA@AAA@@AA@@A@@@@@AA@A@A@@@A@@@@@AA@@@A@@A@@@A@@@ABAB@BA@@@@@@BA@@@@@AB@@A@A@@@@@AB@@@@@B@@@@@@@@AB@B@BA@@@AB@@C@@@A@@@@@@@@@A@@@AB@@@@A@A@@@A@@@A@@BA@A@@BAB@@@B@B@D@@@B@B@@@BA@@BAB@@A@ABABA@@BABABA@@BC@A@A@C@A@C@A@C@A@AAA@A@A@C@A@A@@BA@A@A@@BA@@@@@AB@@@@CBC@ABCBAB@BBB@@@BCBA@G@@@AAA@A@A@C@A@A@A@A@CBA@A@ABA@@A@@@@AC@A@AA@AA@@AA@A@A@A@@AAA@@@CA@AA@CACAA@CA@@AA@B@B@BA@@BA@@BA@ABABA@@B@@@B@@BB@@@B@@ABADCB@BAB@@@@@@A@@@@@@B@@@@@BBB@@@B@B@BAB@@A@ABA@A@@@AB@@@B@@@BB@@B@BA@@BAB@BAB@@@B@@@BBB@@@B@@@BA@@BABA@A@ABA@A@@BA@@B@@A@@@@BA@@B@B@@AB@@@B@@AB@@@B@@@@@BCAA@CCA@CA@AA@AAAA@AAAAAB@@@B@@@@ABABCBC@@@A@C@@CEA@@@@A@@@AB@@ADABA@@BAF@B@@A@A@ABC@CB@@ABA@A@CBEE@@@AEEK@C@ABI@A@C@AA@@@@@C@A@@A@@@@@I@GAE@G@A@I@@CEAA@AAA@@EC@@AG@AAACC@@AC@@IK@@@C@@BC@AB@@A@@A@@@@@BA@@@@AA@@@@@A@@B@@@AC@A@AAC@ABA@CB@@ABABE@A@@B@BAB@@A@@AAAC@AB@@@@A@@@@@A@@BA@AB@BA@ABA@@BA@@BA@A@@A@C@A@A@A@A@@@A@AB@@@@CA@@A@ABA@@@@@A@ABA@@@@B@@AB@@@BAB@BA@@B@B@@@BA@@@@B@@A@@@@@A@@@A@@AA@@@A@C@@AA@@@A@A@"],["@@KAGC@BOZ@P@@A\\@FAJ@JA@ANJHNEJ@@BL@T_JMWIBOBG_GLMD@DG"],["@@NCJE^sJBNaKGBALGEMTMTOAcZAHADUEGJABS^^JGFGHCVFHNNP@TAT@^KTMIIEAHKDECANU"]],"encodeOffsets":[[[133304,47607]],[[133152,48189]],[[133281,48194]]]}}],"UTF8Encoding":true});}));