(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('湘东区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"360313","properties":{"name":"湘东区","cp":[113.733047,27.640075],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CCCGKGECICICKAM@G@G@MDKJGJIH@@YFK@CAGCGCGCIBGBCDADCH@BGJ@BGLALAL@JBHBBDDJHPJBB@@DB@@HBD@D@BBBBBD@BABIBCBA@BBB@BD@D@DABCBA@CBG@E@EAE@A@CBCBABAB@B@DCFA@@B@B@B@H@DBP@JBDA@EPEJAD@DA@BBB@DBF@DB@@BDBB@@BBBBL@DBFBAD@D@B@B@BHHBD@@DHBBDBB@DD@@B@@DA@EFAB@@BD@BBDBDFD@B@BAH@BA@A@A@AB@@ABBJ@BA@A@@AA@ACACCEEGEAA@CBC@EBC@CD@@ABIBKDEDABGNAJ@B@PBBLVNRBBBFHPFNBDBJ@FDNBFAT@@DP@HJPFHBBHHRJDBNHBBNJNLDDBBJLFL@@FPHRHJ@@DBHFNLFFFDJJ@@@DJA@A@@B@@@B@B@B@B@B@B@B@@BBA@BB@BB@@B@@@B@@ABA@@B@BBBBB@B@@@BB@B@@@@@@BBBB@@BD@@@@@@BA@@@@BA@B@@@BB@@BB@B@@AB@@AB@@@B@BBB@@@BBBB@@BAD@D@B@DB@@BC@@@@B@BBB@@@DBB@@@@A@@BA@@@@@A@A@@BCBABA@@@AAAAAA@@@@A@@A@AAA@@@@@@AA@@A@@@@CB@A@@AA@@A@@@@AAA@AAA@@A@@@@A@@@@@A@@AA@@@A@@@A@@B@@A@A@@@@@@@@B@@@@A@@@@@@A@@AA@@@A@@@@A@@A@@A@@BAB@BA@@@AA@AC@@A@@@@CA@@AA@AA@@@A@@AC@@BABAB@@A@@@@A@@@A@@A@@B@B@B@BB@@@@@@@B@@BBB@@@@B@@@@B@@BB@@B@B@@B@@@B@B@@BB@@@BB@@D@B@B@BB@@B@@@B@@@B@@@@BB@@@B@@B@@BB@@DB@B@BB@@@B@B@@B@@@@BB@@B@@@D@@B@@@B@@@@B@B@@@B@@B@@B@B@@BB@@@BB@@BB@@B@B@@BB@@BB@@@BB@@@@B@B@B@@BDB@@B@B@@@B@@AA@@ACCAACA@@@A@@@ABAB@@A@@AAAAAAA@CA@A@@@@@AA@EACA@@A@@A@A@@DA@A@@@AA@@A@@@ABC@@BA@@@@@@AAA@AC@@@@BA@@B@@@B@@@B@@A@A@A@AA@@@CAC@@@@A@@@ABAB@@@@A@@@@A@A@@A@@@@@A@@AA@@BA@A@AAC@@BAB@D@B@@@B@BB@@@BB@@@B@@ABAB@@@@@B@B@@@B@B@@AB@@AAA@A@A@ABA@@AAAAA@AA@@@@@E@A@AAACC@@@@@AB@@@B@@@@@@A@@AAAA@@@A@@@@A@@@ACAA@@@@@@B@@@@@@A@@BA@@@AAK@AA@@A@@DC@@@ABAB@BA@@BA@@@A@A@AB@@CBA@@@@B@@@B@B@@@@BABB@@@@@B@B@@@B@@ABA@A@ADCB@@@@@DBBBB@B@BBDDDB@BB@B@FADBB@@A@@@@@AAE@A@@DA@@@@@C@@BA@A@@@A@@A@@@@A@@D@BAB@BABA@CBA@A@AB@@AB@@@@A@@@A@@@@@@B@@@BD@@B@@@DB@BB@D@BA@@@@@A@A@A@@B@D@@@B@@@@ABA@@DA@@B@@A@@AA@@CAA@ECCC@@CAAAA@A@AB@@@A@@@@@@BA@@@@@AB@@A@@B@@@DADC@@B@B@BA@BB@B@@@B@@@@@@A@@@@BAB@@ABC@@B@@ABEBEBC@@BA@@BABADABAB@@AB@@ABABABA@C@@B@@AB@@@@ABABA@@BADAB@@A@@@A@C@A@AA@@AA@@@@AB@AAAAA@@A@AA@@A@A@E@G@@@A@@B@BA@A@@A@@A@A@@@ABABCB@BABAB@@@@BB@@@B@@BBBBB@BB@@AB@BAB@D@B@BBB@@@FBB@@@B@BA@@D@@@B@@A@A@A@AA@EAAAA@CCA@@A@@B@@@D@@A@@@@@AC@CA@AA@@A@@@C@A@@AA@CAA@@BA@@@AB@@ABAB@BABCBABA@@@AB@@AA@C@@AA@@@A@@@A@ABGBCBABABA@C@C@A@A@A@ABABC@ABA@G@A@CBA@@@@CB@@AB@DAB@B@@A@@@A@@@AA@A@ABCBA@AB@BA@@@A@@@@A@@@A@ADABAB@@@@A@@A@@AA@ABCBA@CBA@@@@@@ABA@A@@@AA@@A@@@@BA@@BBBBB@@@@@@AAA@@AE@A@@@@@ADA@@@A@@@@@A@@@@@A@@@@A@@A@@@@AA@@@AB@@AB@@@@@@A@@@@@A@@@A@A@@@A@AB@BABA@C@@BA@@@A@AAE@@@@@@DAB@@@@A@A@@BAB@@A@A@AACBA@A@@BA@@B@BBBBBBB@B@B@B@B@BBB@B@@@DA@@DA@@@@@A@@AAC@@@@@@@@AB@B@@AB@B@@@A@@A@@@A@A@A@@A@@@A@@@A@@A@AA@@@C@A@@@@A@@DABABA@AB@B@@AB@BADCBAB@@AAA@@@@BAB@@@@AB@@@B@BA@@BA@@BAB@F@B@BBBB@@B@B@B@@@@@@@@AB@AA@@CCAAAAA@A@@B@@CCAA@@@AAAAC@ABA@@@@BA@@@AB@B@BA@@B@@A@@AA@AAA@A@AAA@AAAAAAC@AAAACCC@@AC@@GCKEOCMCAAKCIEECAACAG@GBEBIDMAIAGAMAEACCSAIBGAC@OECAGCGGAAAAECKBEDG@IAAA"],"encodeOffsets":[[116452,28005]]}}],"UTF8Encoding":true});}));