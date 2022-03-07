(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('龙泉驿区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"510112","properties":{"name":"龙泉驿区","cp":[104.274632,30.556506],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@ABA@C@@AA@@A@CACAA@@@ACACAIEIGEAA@CAA@MA@@AAE@CCEEAC@A@@@@BCDED@BA@C@@AACAE@ICCAMBEBA@@@@@EBC@GBC@CB@BA@@BADB@@@@B@@@@@@@@@@@B@@@@@@@@@@A@A@@@@@@@@@B@AB@@@@@@@@@AA@@@@@@@@B@@@@@@A@@@@@@B@@@@@@@@@B@@A@@AA@@@@@AB@@@@@@A@@B@@@@@@@@@@@@A@B@@@AA@@@@@B@@@@@B@@@@@@@@@@A@A@@@@@@@@@B@@@@AA@@@@@@@AB@@@@@@@@@@@@@@@@@@@@AB@@@@@@@@@@A@@@@@@@@B@@@@@@A@@@@@@@@A@@@@@A@@AB@@@@@@A@@B@@@@@@@A@@@@A@@@@@@B@@@@@@A@@@@B@@B@@@@A@@B@@@@B@@@@@@@@@@@@@@@@@B@@@@B@@@@A@@@@@B@B@@@@@@@@@@@@A@@@@@@B@@A@@@@@AA@@@@@@@@@@@@@@A@@@@@@B@@@@@@@@A@@@@@@@@B@@B@@B@@BB@@@@A@@@@@@@@@AA@@@@A@@B@@AB@@@@@@@@@@BB@B@@@@@@@B@@@B@@AB@@@B@@@B@@@@@B@@A@@@@@@@BB@@@@@@@@A@BDA@@@A@@BB@@@@@@@@@@@@@AB@@@B@@@@AA@@@@@@@B@@@@A@@@@@@@@@@@A@@D@@@BCF@@ELEF@BAB@D@@@@@@AF@DADAB@B@@AB@@AB@@ABA@@@@@A@@AA@@@A@@BA@@BAD@@@BAB@BAB@@AB@@A@CBA@E@CBA@MJABAB@B@B@B@@@BBF@BBB@BA@@BABBBB@@BB@BA@@BB@@@AB@B@@@H@@BB@ABABC@AB@@@@B@D@B@@@B@@B@@B@BA@@B@@BAD@@@BBBAB@BCBAB@A@@BE@A@AAA@@A@@@@B@D@B@BA@AB@@A@A@ABB@BBB@BB@@@@@@BDBBBDBBBB@D@DDB@@@@@@@@B@@@@@BB@@@@@B@@@@@@@@@@@@A@@B@@@@@@@@@@@B@@@@@@AB@@@@@@@@A@@@@@@@@A@@@@@A@@@@@@@@@A@@@@@@@@@B@BA@@@@@@@@@A@@A@@@@@@BA@@@@@@@A@@A@AA@@@@@@@@A@ED@@A@C@@BC@@B@B@@@@@BCB@BC@DFBB@@B@@B@@@@@B@@B@BBED@@@@@@@AAB@@A@A@@@A@@@A@@@@@A@@B@@AB@B@@@@@@ABEB@@@@@@@@@B@@@@@B@@@B@@@@@@A@@B@@A@@@@@@B@@@@@@@@@B@@@@@@@@A@@@@@@@@@@@@@@B@@A@@@A@@@@@DD@BDBB@@@B@@@HBH@D@BABA@@BCB@B@D@@B@BB@@B@B@@@B@@ABAB@B@B@@@B@@EB@@@D@@BAB@DA@@@B@DB@@DB@@@@B@BAFAF@BA@@@CBC@A@@B@BBB@BB@D@@@@@@@@BC@@B@@A@@BCB@B@B@H@@ABB@@DAB@BA@A@@@CCA@@@AB@@AB@D@BBB@@B@@@@@B@B@B@BAB@BA@@@CBAB@D@@@@BA@@BAB@@@D@@BBBBBFDB@@DBDBBA@@@@@@BCBC@@B@@@D@B@@@B@DDD@HB@@@@FBDBB@DDBF@DBBFBFBB@@@@@B@@@@AB@@@@@B@@@@@@@B@@@BB@@B@@@@@@@B@@A@@B@@@@@@@@@BA@@B@@@@A@@DB@@B@BBB@D@BAH@@AB@DBB@B@B@BBBBB@BBBB@BB@BBB@BAB@@AAC@A@A@A@AB@B@F@B@BABA@@@ABA@@@@B@D@@@BBB@BB@@@@@@@@A@@@A@@@@B@@@B@BB@D@@@@@B@BA@B@@@@@B@@@@@F@@@B@@A@@@@@@B@@@@B@@@B@@@@@B@@A@@B@@@@B@@@B@@@@@@@BA@@@AB@B@@@@@@BB@@B@@@BB@@@@@B@@@@@@@BB@@B@@HC@B@AFA@B@F@@@@@@BB@@ABA@AA@D@@A@@@@BAB@@B@@BB@@@B@@BB@@@@@BB@@@@@B@@@BBB@@@BB@A@BBA@BB@@BA@@BB@@@BA@@BB@@@@@@B@@@BA@@@@B@@B@@@B@@@@B@@B@BB@@B@@@@BB@@AB@@@@@@@AA@@@@BA@@@BB@@@@A@@B@@A@@B@B@@@@@B@@A@@@BB@@A@@@BB@@@BA@@B@B@@A@@@@BB@@@@DHLCB@B@BBFDB@B@B@D@D@JCD@B@@@BAJAB@@B@@@B@H@BBBB@B@D@DALKDC@@@@@@DABABAB@PGRE@@@@BAB@@@@@ZIB@BBDBFAZCDABA@ABCAO@CBA@@@AB@@@BAPEFABA@@DABA@@B@B@@@BB@BBBBPBDB@BBD@D@FAFAFCHCDCBEBE@G@@@A@C@A@A@@CCAAAA@ACICG@A@@@C@A@E@AAGA@@AB@@A@A@@B@@@@AB@@@B@FBB@@BB@BB@BBBBNBBBDDDFDBBB@BA@@BABI@CBC@C@C@C@C@A@E@AACAAAA@@CA@AAA@AAA@A@A@C@A@@@@ECCCAAA@CCA@A@A@ABA@CB@BA@A@A@@AAA@A@@@E@@@AACAA@AAA@@CAGCC@A@EAEAA@@@@@AAAA@@@@@@CC@AAC@C@AACACAG@CBE@@@EBA@AHI@A@AGG@CAA@AAE@C@M@I@AAACA@A@A@A@@@ADEFEFABAB@DBB@BADABC@A@CACACCA@@GCGCKCAAAAAA@ABCBGBA@CAE@@@@@@AACACCA@AAYFGBC@E@C@@@A@@AEI@@CAC@@@GBC@A@AACAMAA@A@@B@B@DBBFDBB@B@DADCJAFELCFADGFCB@@A@A@@BA@AAA@@AAC@C@A@AB@D@D@B@D@@ABA@@@AEIBCFG@@CCGAC@I@C@EAA@CBIHABCDE@ABAFAB@@"],"encodeOffsets":[[106803,31237]]}}],"UTF8Encoding":true});}));