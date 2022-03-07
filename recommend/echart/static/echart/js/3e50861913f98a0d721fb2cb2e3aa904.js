(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('突泉县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"152224","properties":{"name":"突泉县","cp":[121.593799,45.38193],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@AB@AA@AE@gUaHEBRaJiPsTwBOBaN@BKDGDCBEBEBIFWBSBe\\@@MBC@kDABMF[PIFC@CBCBABADAB@F@HCHEDADAB@DABGLADAB@@AB@BA@@DBB@BABAB@@CHCFABCJON@BA@CD@D@D@HAFBBA@@D@BCFAB@@CBG@A@C@C@A@C@ABGDAB@BABA@EFABEDABeCAD@BGT@@AB@BDJLZIR@BADCBEHABEFWTMLC@]EI@GBIBAB@@A@AN@@@B@@DBDBB@@BB@DDJLBBBBDBHFDDBBFJB@@B@B@B@@CBEJCBIBC@E@G@AAKIAAEACA@@GAABA@KHGJ@BCBCBEDEB@@@BA@@@BD@B@B@BFBFBJDBDB@FBFBD@JB@@B@BDBBBDDB@B@B@@AB@B@B@BA@AD@BA@@@A@GBC@A@CAC@ABAAA@A@AB@@@B@B@@@BA@CBGBE@GBA@A@KAC@EAAAEAAACAA@@AC@C@CAAAAA@AA@C@CAACGACAA@CCAAC@A@CBC@@BA@@@EAABCBCBAB@@A@A@C@AAC@CBA@A@CACACCA@@AA@@AA@ABED@@A@A@A@A@ABAB@BAB@B@D@BA@@@A@A@A@AAA@A@A@A@@@AB@@A@@@A@@@A@EDABA@A@AB@@@B@@@B@@@B@BBDBB@B@@ABA@C@C@GBCB@@@B@@BB@@B@BB@@@BCD@B@@ABADAB@@A@C@A@ABE@A@@@ED@D@@A@A@AB@@A@@B@BBBBB@BB@BBB@@@@@@BEDAF@B@D@B@B@BABADA@EF@BAB@@@B@BDB@L@B@@CF@@@B@@AFABCBCBA@C@CA@@I@C@A@G@CDCBED@@AB@B@@I@@@A@ACAACA@AAACE@@C@AB@BA@ABC@C@CA@@C@@@A@AB@@@BA@@BA@ABA@CAA@@@A@CD@@@B@B@@BF@B@B@B@B@@BD@@BB@@AB@@@@E@AB@@ABAD@DAB@B@B@B@B@BB@@BDBB@@B@@ABAB@@@F@D@B@@@B@@@@EBEDKBCBAD@DBBBDBF@B@BBBBDBB@BA@C@@BA@A@A@CBAB@@CBA@ABC@A@AAKBA@@BAB@B@@@BA@@BA@@BE@A@C@@@@B@B@@ABA@@@IACAA@EB@@CAA@EBA@CDCD@DEBABA@C@@FADAFABCD@@A@MHCBBD@@@@AB@@@B@B@D@B@HABCBADA@E@A@AB@BGHIAA@A@ADCBABA@ABAB@@E@E@E@@@CAABAAA@@@CBABCDILCDEDCBCBIHSH@@CBA@AAA@A@AEE@@@AACAOACAI@C@EBGHIFKJGDQLQVGFGBABEBMJMJWRCBIFWLIJEDABCD@BABCBE@@@C@AAA@M@A@A@@B@@@@C@@@A@A@@BA@GA@@CBA@@BA@@@EAC@A@AB@BAB@@A@A@@@AB@BA@A@AA@@ABA@A@A@@BA@AB@@C@@@@@A@C@CB@@@BABCB@BC@ABI@A@@BAB@B@D@@@B@@C@@@A@A@A@A@@@AA@@ABAB@@AB@B@@A@AB@@@BAB@@@@@BB@@BB@ABBBLNDAHBFJAFFDJ@FJNJBHFDJADHHFDCNLDHFBFCHDJBDFL@HALBJEDBBABBBFD@D@BB@@BD@@BBB@LCH@D@@AB@BADAF@B@D@DADBFBBBD@FB@@B@F@F@BDBD@B@DH@FAJBD@LDDBDDDFJBBDD@@@HHDDJJFDB@B@HAB@@@FFLFBBD@@@BNDDB@DBF@D@F@BAB@D@DFJHB@H@H@B@D@@@B@B@DBB@D@B@@BBB@B@B@BHDBBF@B@FBD@BBB@BBB@FDD@DBB@BBFD@BLHFDF@B@B@BBBDBBD@F@BBBBBBBB@BBBB@F@FAD@BABB@@@HBBJHBBBBKFADBD@BBBCB@@BDBH@B@BCBEFAF@DAFA@GBABE@ABDFDDHDF@B@BB@BH@@B@FBBBBDBFD@@@D@B@B@D@B@@EJCBAHAHED@FEDAFDBF@DFRF@@DAFGB@B@D@F@D@B@B@BBB@HCF@BBB@@B@@@@@B@BBBDFBBJC@@B@B@B@D@D@B@HBDBBDDB@@B@HB@A@@AA@A@C@EBABA@C@C@G@CBA@A@@BA@C@ABAAAA@AABCDA@@REDAHBBABE@@FCFADAHEB@BB@@BBD@B@BBB@B@BAB@BC@C@A@@@EBA@A@ABA@ADA@@@C@@@ABAB@B@B@B@D@H@BABABAF@DA@@BA@@@BD@BBBAB@H@BAB@BA@AB@B@DBBBJBB@BAB@@AB@BBB@B@D@BAD@BBDBDBF@D@B@FA@AB@B@DBB@FADADCBCBAFCDEHCBABI@A@@@AACAA@A@@DADC@CAC@@@C@A@@BAJCBA@C@ABCB@DC@@@AAA@A@@@CBABABE@A@C@A@ABA@AAC@ABADE@@BAB@FABAB@B@B@DBB@@@@A@A@EBADCBAB@B@DBF@@@DADAF@HADAD@@@B@DBBBDBDDBFBB@@@@DBDA@@B@@BB@BBF@DBBADAFA@@B@BBBBB@HADABAB@BADA@AB@D@BA@@@AAE@C@@AA@CA@AC@A@A@@@AA@AA@@DEBAB@HAF@@@BA@A@@BAB@@A@@@A@@@@@AB@D@BA@@@C@A@@BA@ABA@AAA@AAC@A@E@ABA@A@CB@@@BABABABABABABA@AB@BABAFAB@BABAFAB@@@FDD@BADCD@BAB@BABCBA@@DAB@B@B@BBBBBBDB@@BBB@BB@@B@@CB@B@B@HC@@BBDD@@@@HBBBB@B@BAH@B@BC@A@@DCBA@@BAB@B@@A@@D@HAB@F@DAB@@@DC@ABA@A@@B@@@B@@@B@B@B@BAB@B@B@FABABCD@D@@@B@BBD@DDB@B@F@@BB@BABABAD@F@B@DB@@B@DAFCFCB@DAD@BAFAB@B@B@B@@@B@@@B@@@B@@DD@DBHB@@HBD@D@B@BBDFB@D@B@B@D@TDLDB@B@@B@B@FAF@BADAD@B@BDDFFHDLFB@DBD@@@B@B@D@J@B@B@D@D@D@D@DBFDB@B@D@D@@@BAFED@BAH@DAD@F@D@BA@BL@BBD@BA@@B@BANKBC@A@CBAB@BAHCD@B@FAB@B@DC@AFA@@DC@@@AAAAACC@A@@@G@ADCDCBCDABAB@@@B@@@B@B@LAD@B@BBDBB@@@@@B@@A@G@EAA@C@@@A@A@ABABAD@B@FBB@D@BAHCBCB@BABA@@B@B@B@B@B@BADA@@@AC@@A@@@@DADEDCB@FA@@BA@AB@B@DABA@ABACCAAACACBC@CBABC@C@CAA@B@BADA@AB@@BG@@BCBA@@@GEB@AA@EAA@A@AAEA@@@@DEECE@CA@@CBE@@DA@ADB@EHG@FKD@BCA@EAE@@AGC@@AAA@A@CAECAAA@@A@ACC@@AAAACA@AA@AAC@CAAAA@@ABABCB@A@@@A@A@C@E@C@IDA@CBA@ABAB@BA@A@@@A@A@C@AAA@C@@BA@@@E@A@CDA@A@A@AA@@@CAA@A@A@AAAA@C@AAA@@AAC@AGGA@@A@AFEBABADAFAF@BA@ABA@@B@B@B@BA@@@AB@B@D@BADA@@@ABA@@BA@AA@GCACAADEBBF@@INED@DEFEDC@@F@tUTARAJCDADAD@B@DCB@B@D@LEB@TDDBP@J@VERCD@LC@@D@ENFFDBAH@F@@HBJ@B@@BB@@B@B@@D@B@TFPFB@D@D@BBD@@@@BBB@@BB\\DHCBA@@DBB@B@TENADAHHBBLAFAHAB@DBDBFCDCDBB@F@@@B@B@@@@CB@DABAB@@@BBDDB@B@@B@BB@B@HABCBAD@d]HGHYBCFGBEBCBCDGBCBCJUBEDIAA@ED@NG@@DOBCAEM_@GBCC@[EAAEDK@C@EA@@H[@E@A@@@ABEBG@CF@@CD@BE@CJ@VQ@KBE@AAC@A@ABAB@@AHMHMA]@AFEFCBA^YTCNGnUBALAbIYfGH@B@HABAD@LCDAHABADADC@ABCAE@C@CTaBCBC@@A@@@@@ACIGAAGIECIM[]AI@EAIAG@G@c@[@CFsB@AEMAE@C@GAG@C@CAE@G@AAA@E@C@A@EAE@CAG@A@E@E@AA@@@C@E@CBGA@@A@@K@KAoAAAOIWOUOOKAA@CAGACAAAE@@EAE@CAKACAaICAGAC@ASAK@IAiEQAUAC@IAUAMA]AMD"],"encodeOffsets":[[124757,46297]]}}],"UTF8Encoding":true});}));