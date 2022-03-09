(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('沙湾县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"654223","properties":{"name":"沙湾县","cp":[85.619416,44.326388],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@@@CA@@A@@CB@BA@@@AA@AAA@AAA@@@A@CAAAAA@AAA@ABA@@@A@CAA@@@C@A@A@EA@@AA@BA@@BC@@@A@@A@AA@@AA@@@AA@A@CAA@AA@@@AB@@A@@@AA@@A@@@AB@AC@E@AAAA@A@@@CB@@A@@AAA@@@A@A@A@CAGAA@C@ABA@ABABA@AB@BABADA@A@@BAAAB@@ABC@@AA@@@EBA@AB@@AAA@A@A@ABC@@@AAA@AAA@@A@A@A@@@AAAA@@AAA@AAEAA@AA@@@A@A@AAA@@ECAA@A@@@A@ABABAB@@@CAC@A@EBA@@A@@AAB@@ABABA@A@@AA@@AAA@A@@ABABABA@@@AA@AA@@A@ABABC@ABCAGBC@@@AA@AB@BCB@AACA@A@A@AAA@A@AA@AAAAAC@A@@B@BADABA@A@A@CAGAA@A@AA@AC@C@C@A@AAA@@ECCCAAAC@C@@AACAAAAAAA@C@A@ADCB@@AAA@CAAAAAA@AAABC@ABCBAAEB@@ABA@A@AAA@AA@@ABA@@@AA@CC@@AA@C@@@ABABA@A@@@AAACCA@AAAA@@A@EAA@AA@@AA@A@C@@@CAAECA@A@AAA@AA@@G@C@CBA@A@C@C@A@A@@BA@@BCB@@CBA@AB@AA@C@AAMA@@@@BA@@@ACAAAEAAAAA@A@AA@ACC@@@E@A@A@@AACB@@A@CACA@KCA@AA@ACCAAAAA@CEAAAAEAGCAAAA@AA@DI@@@AAAA@@A@AC@A@A@CBA@A@A@@AAA@EAA@AA@A@A@A@CAC@A@CBABEAA@AAA@@E@AAAAACCCAAEAA@@CAAA@@@A@@BA@A@ABA@ABA@@@AAA@@@A@@CA@AAAAC@A@@B@@ABAB@D@FAB@D@@A@@@@AA@A@@B@@ADAB@D@B@B@@A@@CAAAA@A@A@EBA@EBA@CBCAA@A@A@A@C@C@G@E@E@C@C@C@CBABG@CBE@CBA@CAE@EAA@A@A@ABABIBE@ABAAA@CACAAACAAAAA@ACEAA@AAA@@A@C@EBEBC@@@AAAACCAA@@@A@A@@AA@CAE@@@@@AB@@AB@@A@A@@AC@@@CCAAAA@CC@@BA@A@@@@AAA@G@E@A@CBA@CAEAC@C@C@A@@@AAAA@A@A@AA@AAA@G@AACAAC@C@AA@AACA@AGAC@CAA@E@E@EBE@A@C@@@C@CBA@A@AAG@ABC@CAC@E@CBE@E@A@ABA@A@A@AAC@C@GBG@EBABCBC@C@E@A@A@@CAA@@A@A@ABA@I@A@EBIBA@@@C@C@A@CBCBC@@@CBCB@@AB@BADBB@@BB@B@B@B@B@@@D@B@B@@AB@@AB@@@BBDBB@DBD@B@DB@@DB@@BAB@@ABABA@A@@DAB@BA@CDCBABA@@@A@EAIAA@A@A@ECAACCA@@C@A@ABCBA@A@AAA@A@A@A@@@A@@@@AA@@AAAAA@CAAAEAA@@@CBCBCD@@@@GBCBA@GBABAB@BA@A@GAC@ABA@@BAAABA@CB@@AB@@@D@BA@@D@B@@A@C@EBA@AAA@A@@@AAAAACCC@@A@A@@@CBEBA@A@AAC@CAC@EAAACCAA@A@@A@ABCBA@CAC@A@A@A@@BA@@@A@A@ABC@A@E@C@ABA@@@@DAB@@@@C@@@AA@@E@A@C@@@CACAA@EA@@AA@@@@ABABA@CB@@AB@@DDBD@B@@@BAB@@@BB@ABGDABAB@@@B@@@B@@@B@BABABA@@@AB@B@BABBBALBB@B@@@@@BC@ABC@C@A@CAA@G@GBAAG@IBOBA@CBA@ABA@CBABA@C@ABA@AB@@C@C@GAC@EAA@A@@@CBCBABABA@CAA@G@@@A@A@@@A@CBCBEDCB@@@FA@ABA@ABA@@BA@@@@BB@@BB@@@@B@@C@@@CAAAC@@@BG@A@@AA@AC@AACCA@AC@@AACEEACAAAAAA@@A@@BC@@AA@C@@A@@AG@A@@@A@@CA@CE@@@A@C@C@CAA@ACACCA@@A@@@A@A@@CAAAA@@A@A@@@AB@BE@@@A@@CAA@EACC@@AAAA@A@@KBA@CCAAGCAA@@AC@@AAC@AAA@@ABA@C@CBABADC@A@@A@GAC@CCEAAAAA@AA@@@E@C@A@ABEB@@EDABA@CBABC@ABA@AAC@AACAA@AAA@@BC@A@A@A@A@AB@AA@A@AAA@AAA@@@A@@@A@AB@@@BA@@@@BA@ADABAB@@A@@@AB@@A@@@@@ABA@@@@BAB@@@B@B@@@B@@@B@@BB@@@B@@B@@@WROL@B@@@@ABCDABAB@@ABAB@@@B@D@BAB@@@DAF@@ABC@ABCB@@BD@B@B@@AB@D@B@B@@@BA@@@AH@@@B@B@@BBB@BBBDBB@BA@@BCDA@@@@B@@B@FBBB@B@B@@AD@D@@BBFB@B@BB@@BA@@B@DAB@@CBC@EAM@@@ABA@@@A@AAABKASAAAAACAAAC@@@A@E@AAA@AACBA@C@ABA@@@A@EBA@CDAB@B@@@D@@H@B@DBD@B@BBDBF@FBBB@@@B@@@BAB@@@B@BAB@BABAFCDAB@BEF@@AD@@@B@D@B@B@B@B@@@@@B@D@@@B@B@B@@BB@@A@@D@@@D@BB@AD@@@B@BBB@@@B@@@@@BBD@@ABBB@D@BB@@@BB@B@B@BDB@BB@DB@@@BB@B@BBBBBB@@DBB@BB@@BD@@BBB@@BB@@@B@BBB@B@BBB@@B@@@@@B@@B@@DB@@B@@BBB@BB@BBBBBB@@BBB@@@BBB@@BB@B@@@@@B@@B@@B@BB@ABBBBBDDB@BDBBBB@B@D@B@@@B@@@@@BBB@B@B@@@B@BB@@BBB@D@B@F@@@BB@@B@B@@BB@@@BDD@@@BAB@@BBAD@@B@@BDB@@@B@B@BAB@B@B@B@B@BB@BB@BBD@@@BB@@B@BBBBDBB@@BB@B@@@BBBDDBD@@@BBBBBDBB@@B@@DBD@D@B@B@BBB@BB@@@B@B@BAD@B@@BB@@@B@@@B@B@@@B@B@@AB@DBBBD@BAB@B@B@B@B@BCB@B@@@@@@@B@B@B@B@B@@@@BB@B@D@@@@@B@@@BBBA@@@@BA@@@AB@BAB@B@B@@@B@@@@@BAB@@@B@BB@DD@B@@DD@B@B@@BB@@B@@D@BB@BBBB@B@@BB@@@@BBDBDD@@BBB@BB@@@BA@BBBBDBDDDBBBBB@@BD@@BBB@BB@@@B@B@DBB@BBBBD@B@@BBB@D@B@D@B@@BAD@B@@CB@@@B@DBB@@CBADA@CDCBC@CB@@A@ABAD@@CB@@AB@@@B@BABCB@@@@AD@BABABA@@DAB@B@BBB@BB@@B@B@@BB@@@B@@AB@B@@@BBB@B@@AB@@@@FD@@BB@B@B@@B@B@B@@@FBBBB@B@B@DBBBD@@@BBB@BBB@BB@@@B@BAB@B@@BB@@@B@B@BBDA@@B@@@BDB@B@@@BAB@BB@@@@B@@@@@B@@@B@@@B@@@@@BB@DD@B@B@B@@CD@B@D@@A@AB@@A@EBA@@B@@@B@B@B@@ABILED@BAB@@ADAD@@BB@DAB@@@BBB@D@B@B@B@D@@@B@BBBAD@DAF@@@B@FBB@B@@BB@BBBBB@B@BB@@BDBDFDD@@DD@@@DBB@B@B@D@BBB@DBD@BFFDHJHJLHJLFD@D@DBDDNHDBJAHBHFFFFFD@B@B@DB@BDBH@DBF@FDFF@@ADAB@DBB@DDBD@BB@BDBF@BB@BHDPJHBDBDBB@LFBBTLJJBB@B@B@D@B@BBH@D@B@BBDAJ@N@DAF@HAHCH@D@D@H@BB@AB@@@B@B@@@B@@AB@B@B@BAB@B@@BB@@A@ADA@AD@BB@@BBB@B@BAB@@@@@B@@AD@B@B@B@BBDB@@BBB@@@@BD@@@B@@@@BB@D@@@B@@BB@@@B@BBB@B@@@@@DAB@B@B@BB@@BB@ABBBAB@@@@@B@@@B@@BH@@@@@B@@@B@@@@@@@B@@@@AB@B@B@BBB@@@B@@@B@B@@@B@@BB@BBBBB@BBB@@@@@BB@@B@@@B@@@@BB@@AB@@BB@@ABBDAB@@BB@B@B@D@BBB@B@B@B@@BB@@BB@@BDABB@@@@B@@@@@BBD@DB@@B@@@H@F@B@F@HBH@F@D@B@@@D@BBBB@@@BBBB@@@B@BB@@BABBB@B@@@B@@@B@@AB@@@D@@@B@@@B@@B@@@AB@@@BBBAB@BAB@@AB@B@B@BBB@@B@@B@B@@BF@B@DBB@D@B@@@B@B@B@BAD@@B@@B@BBB@@@B@B@B@B@@@D@HAF@@VEREzO@@@ANCFAF@B@B@B@@@BADB@@@@@@BD@D@DBB@B@BADBD@@@B@D@D@FBJBJBFBF@B@DBF@HBBBN@BBF@DBH@BBFBFADDH@FBFBLDL@B@DBD@B@B@B@D@DBD@BBDFDBD@FBD@DBBADDD@DBB@BBHBD@@@D@D@B@@@BBD@@@BBD@B@@@B@B@BBD@BB@BBP@LAB@L@L@RAHABDCB@BB@@FABDH@D@BGDIBABCHAB@D@BCDAD@D@B@BGF@BFD@@CBAAABAD@HBF@BAB@FA@ABCBAF@DBBAF@DB@@BAD@DBB@BD@@B@BA@DDB@B@@FA@BDBBCB@F@BFD@B@@AB@BB@@DFBAF@DBBADBB@DBD@DBBAD@@@B@@@DABAHGD@@@B@@@@A@ABA@@@ABA@@B@@@B@@AB@BCBA@@B@@B@@BABABC@@B@@@B@B@@@@@@ABC@@@@BA@@@A@@@@@A@@BAB@BBB@B@BE@@BC@@@@B@BABA@@@@@@B@@AB@@A@@B@@@BA@@B@@ABA@ABA@@BABC@CAWBMCcEC@UCO@UAW@AAE@E@S@G@KBW@EASAGASAQAyGBZFd@FDZ@B@D@D@HBB@F@B@D@BBHABBBBBBDBBBBHBHBD@DBD@DBPBAHCV@B@@D@@B@DBBBB@BBHA@AB@FCLCFCFABIFEBEBGBIFEBCBEBGBCDC@ABRFPDHBNF@@NHDDB@@@@FAJ@L@H@BAD@@@B@@C@A@@@CD@BC@CDA@A@@BA@CDAFABABCFABCD@BAB@DAB@BAF@BAF@H@J@FBDABBBJPHHDT@B@BARCVAFAD@@BDBDBD@DBBBDBHBB@BBD@@BF@BBDBDBBBDDFDFNRBB@BRDJDVHJBHDND`NPFJDPFHBJDXJPF@BFNDPBHBHFPLlpNfCB@LEDAF@^GB@BBB@ZPFFBFBFCNGNADCB@DDH@BCFAPABABAB@@A@@@A@EDCBCF@@@F@D@@ABAB@@@@@B@FBVBP@L@D@BDRBD@HBBBDBDBDBFBBBL@B@BBDBF@D@@A@ABEFGHCDA@@BKJW\\ILKPGJAB@F@H@N@H@F@BAF@DAFCL@B@BFHBDBDDDBBHFBDFBBDDBDDDDBBBD@@DDPZ@@DHDF@BBFBHBF@FBH@FBFBH@D@H@FJBLBJ@B@JBJ@J@L@JBH@L@J@J@J@L@H@L@JBĦ@L@JAJ@H@J@J@J@J@LAJ@J@@@L@J@J@J@L@J@J@D@J@L@J@J@J@JAJBL@J@J@F@JBJ@J@L@¢@JAD@BG@G@A@EAEBG@EBG@EBG@E@G@C@EBE@G@E@E@G@G@G@E@G@G@E@G@G@E@G@G@G@E@G@G@E@G@G@G@E@G@G@E@G@G@E@G@GAG@E@G@G@E@G@G@G@E@G@G@E@G@G@G@E@G@G@E@G@G@E@G@G@G@E@G@G@E@G@G@G@E@G@G@EAG@G@G@E@G@G@E@G@G@G@E@G@G@A@E@S@Y@ĨHLCF@LCNGDAHCDCHGDEBCFEDCFEHEFCLGHAPIFCPKLGDCDEHIHI@ABCBGFIDE@CBC@@@E@E@ABC@EFMBEFEFEDAFEfYTULKDIHSECUMUMOIEAAADAHC@@BI@EAA@@B@BA@@@@@AA@@A@@B@B@BB@BB@@@@ABABABABAB@BA@@AACAAAC@A@AB@BA@ABA@A@A@CA@@@AB@DADAB@@C@CCC@A@AB@@A@@B@B@B@@B@@ABA@A@@@@B@@B@@BB@BABCB@@AB@@B@B@BBB@B@@B@@ADABABAA@CA@A@@@@DAB@B@B@@DBBB@B@BA@A@@@AAAAAC@@@AA@@@A@AAE@@CAABA@@AA@@A@AB@BAB@@BJD@BBBB@B@BADABCBABA@AAA@A@A@A@@F@@@BA@AB@@@H@BAB@BABAAAA@I@E@A@AA@CBA@A@AB@D@BDBB@BB@B@@A@A@C@A@@A@A@AAA@AAE@CAAA@A@@DAD@@@@D@@BBB@B@@ABA@A@ABABABAF@F@@@@A@@@A@@FCDAD@F@BC@C@AAA@@A@@BCB@@A@AA@@@ABKAC@A@ABA@E@AF@DA@@@@BA@@B@@AB@@@@@B@BA@@BA@@@@@A@@@@A@@@A@@@@BA@ABA@@BA@AA@@@@BAB@@@BA@@@A@@@A@@@AB@@@@A@@A@A@@@AB@@A@@BA@AAA@@@@A@@@@@AA@AA@@A@A@AAA@@AA@@A@@@@@A@@B@BAB@B@@@D@B@BB@@B@B@@@B@@A@@B@AA@@A@@C@@@@B@BA@@@@@@@A@AA@A@@@AA@@@@@A@@@@BA@@BA@@@@@@@A@@B@@A@@@@@AB@@@@A@@@AA@@A@@@@@@@A@@A@A@@@A@A@@BA@@B@@ABA@ABA@@@AAA@A@@AAA@A@@@A@@@A@@BA@@B@B@@@@@B@@BB@@BD@@A@@@@@A@@@@A@@AA@@A@@@A@@@A@@@@@@B@B@BB@@@@@B@@B@B@@BB@@@B@@@BA@@B@@@@A@@@A@@@@@A@@A@@AABA@A@A@A@AA@A@@@@@A@@BA@@@A@@@AB@BABBB@B@@AB@@A@AA@A@A@A@A@A@@@A@C@@@A@@AA@@@AA@@AA@@AA@@A@A@AAAA@@A@@@@A@@A@A@@AA@@@@A@AB@@@B@@@B@B@BBB@BBB@BAB@@@AAA@A@A@@AA@@AA@@@@A@@@@A@@A@@AA@@AA@@A@@@A@@A@@B@@@B@B@@AB@@@B@@AB@@AB@@@@@B@B@@@BA@@B@BA@@@@@AA@@@@A@@@@@A@@@@A@A@@@@@A@@@A@@@A@@A@A@@@@@A@@@@BA@@@@BA@@@@CAC@A@@@CB@@@@@@@@CAMG@AA@@A@@A@GA@@@AAAA@@AAA@A@@@AAC@AB@A@BA@@CA@AAA@@@A@@AAAA@AB@@A@CBC@C@CAAACJ[MEEFMCA@C[EEE@AMAABAAQWU@IBANIN@DGDADAD@BBBBD@B@BA@A@AAAB@D@BAB@@A@@CA@AAAB@ACA@AA@A@AAACAAA@ABA@A@@@AD@DAAK@CCBCBCBK@M@@E@EA@@AA@@@@AA@AG@A@@@ABA@AEECADCNCBAA@BA@@DA@@@@DCDE@A@G@C@C@A@@BB@@B@@@B@BBD@DB@AAa@I@@@KCcAG@ARGJKPELCF@GgHAPAH^PAC_FADEDABA@E@@@QDW@KFA@CBG@E@@B@BADABA@A@@@AAAA@@@@@@@EA@@@CB@@A@ABADEAA@ABABABGHS@ABC@E@ABC@ABABA@AAABAAAAC@A@AAA@@@A@ABAA@@AAAA@AA@AAA@ABE@C@@BAB@F@B@@@BABAB@@ABA@E@ABABA@ABA@AAA@A@A@C@A@A@E@@@@BA@@@AA@@@@@BA@@H@B@@@B@B@BBD@D@BAB@B@BABBDCB@DBDAD@HAD@BBB@@B@@@@B@HBDABBB@@@D@D@@@B@BADBBABBB@B@B@B@@@HAHBB@B@BBB@DAF@B@BBBBD@@@@BB@BBB@B@DAB@BADAHAB@B@BAF@D@D@B@B@@ABAAA@@@AYQECAA@A@A@@B@@@B@HDDBB@B@@@@A@@@CIM@@@ABAB@LATCBA@@AAA@@AAAAAA@AAAAAA@@AAAAAAA@AA@AAAA@@A@AAA@@@AAA@AA@AAAAA@AA@AAAA@AAAAA@AAA@AAA@@AA@AAAAA@@AAA@A@@AAGGCIMOIMIKCIGGKEGGMKKIKKMIIGIEKEMIEEAAEE@@@A@AB@BA@AA@@AE@AA@A@AA@AA@A@ABA@AA@@AC@C@AAAA@ABABC@@AC@A@ACC@A@ABABAAA@AAAA@@A@ABA@A@@AACAA@C@AA@@BABABEDAD@@ADBB@B@BA@A@EBC@@@A@ACAAA@ABA@A@ABAB@B@@@BA@AB@@C@@BAD@DA@@BABA@@@A@@AAA@A@CAA@A@C@EBC@AAA@A@@BA@C@@@C@A@C@E@EBA@C@@@E@A@E@C@G@A@E@C@@@A@@@@AB@D@BAB@@A@@@AA@@@A@@@A@CBA@A@@@AA@A@@@@A@@@CBA@A@AA@@CC@AA@AAA@A@AB@@@BBB@@A@@@A@ACCAC@AA@@A@@A@A@@AAA@C@C@A@AA@@E@A@@CA@AAA@@AC@A@@@@A@A@ACC@C@@A@@AG@CBA@@AAA@AAA@@AAA@A@@AAAA@A@A@AA@@@@@AAAAAAAC@@AAA@@@AA@A@@@A@A@AB@@A@AAA@@@@A@AA@C@A@AA@@AA@AA@AA@@AA@@@ABADA@@@AA@@AA@AAA@@@C@A@@AA@@@AC@ACA@@@C@AAAAAA@BCAA@ABAA@@AAAA@AAKCCAACAA@@AAAAAA@@@A@A@@BA@@@AAA@@A@A@I@A@@@@A@AA@@@A@AB"],"encodeOffsets":[[87858,44903]]}}],"UTF8Encoding":true});}));