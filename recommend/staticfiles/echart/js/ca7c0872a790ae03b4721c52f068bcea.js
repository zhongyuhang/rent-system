(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('丰宁满族自治县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"130826","properties":{"name":"丰宁满族自治县","cp":[116.646051,41.209069],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@f@@@LNBBB@@BBB@@DBF@@@TVBBCDAB@B@@B@BBB@@@@BFBB@B@@@B@@D@B@B@@AD@@@B@@AB@BABADCB@@GFAD@@ABAB@BA@A@IFCBABAD@@@B@B@@@B@@BFB@@FBDDB@@@@@B@@AB@@C@@@AB@@@BBDDDBBD@BBHF@BBBJDJBLBF@F@LCL@J@HBFDBFBDF@DAB@FEDCDAHAJ@HBBAB@B@DBB@BBDB@@@@AB@@BBB@DBBDBB@B@B@B@BB@AB@B@@@@@BDBB@BB@@@@BDD@@DB@@B@@@@@B@@@BEB@@@@@B@BABAB@BB@BBDFB@BBBB@B@@@@@BA@@B@B@BADAD@@@@@@D@BBB@@@DDB@@@@B@BB@BB@@BB@BAD@B@@BBBB@B@@BBD@DBD@@@BBBFAB@BA@@BA@ABC@AD@BD@DB@@@B@@@BBDB@DB@@BD@BTBfPJFFFJBVDJFLFFFDHBLFPDLBBFJFDHDVHJBDADAB@VBNDJBJBH@JBFCLEJKNENCJ@FAJGBEAIAKAGIKGIECGEGCEAEA@GDCJGHAJANBJ@JAJCH@J@LDFBJDFBJBLFLHDFJHFJDJFHFFHBFBHBFBHALCJEFGDEBEHKHIBEDGFGFGFEHCNGLCN@LBRBJBFBNFD@LBHANCLAJ@JAL@D@BAF@B@F@B@BBB@DFFFBDDD@B@@@@BB@@DBB@FDD@DBB@@@B@@@DBF@D@B@@@B@@A@@B@B@@@B@B@@@FA@@B@B@@@B@@@B@B@@@@@B@B@BBDA@BBABBBABAB@B@@@BAB@HANDRAJIJGDACAGBEAGADCFCLEVCJAJ@PEHGFILONEPERAHCJGFMFIBG@ICE@ECGAK@GBGFEHIDCDEBIDEBGBGJKLELGNGHIFGDGBGBKBGAEAICIAI@A@KBI@KDMDGBGDIAGCIAKBGBKDEHIJIJKFKJGNILERI@GDG@GGIOEOMGECCACBEDQBK@MKIQMOCYKQCQCS@K@I@IEAEBGJKRGRCRARCTGPCPENELEFIDQ@MAICMBEDGHARDLFRJNCNAPGNGNCJCTGPCJAN@PBRFPDNFFDHLDDJFJDLBJCREPCRCD@J@TBPBN@TALCNKNGDGFGLKLGPGHAJABEFGBGHMHIFCHELIHKBAHCLGJCNAHCJCHAHCDADCDEAGDCBCBALEFCJEFCLGHMBGAMBEHIHGHGDE@IAKCIDEDADAFENEHCDADEBEAGAKCI@AHKHILELILCHEDKAIIIIIEKEKAMBMBABKDEBCFIFGDGFINQHKTOLERMNINKFAFCLELADCFCBCDGBC@CCEAGEMAE@MAQCKBK@EAEACECQGK@OAOGKGKMGIIGGGIEKCO@O@IBKBM@KDMFKFCBIFMBS@QCMEMCGECCAEAGAGCGCEEAEEEEEEEIGGOGOGMEGCIAGGCIBGHK@GBGACCCAAKEIAKGIKEKIGGIIEGCICICECQEO@QA[@UDOFOJKFMDGDIBIBGAIAIAI@IBMDE@GCEAMCE@EAICI@MBYJGDKFSFQHODIDKFKFGDMBQAKCIEMAMAQCK@K@MDGFCJEDEFKHOFIFMHGHCFEFAD@BGHCDKFI@IAIAIDIHKJAB@@A@@@AB@@@BABA@@B@@@@@BA@ABA@A@ABA@@@A@@@AB@BABA@A@A@@@AB@BABAB@@@DA@@BBB@B@B@@@@@BAB@B@@@@AB@@A@@B@@A@@B@@AB@@@B@@@BB@@B@@@@@BA@@@@BAD@@A@@@@@C@AAA@AAA@@AA@A@A@AB@@A@@@A@@@@@@@AB@BA@@BA@AB@@@@A@@@@@AA@@A@@B@@A@A@A@@@A@A@@@A@@B@@@@A@@B@@A@@@@@ABA@@@A@@BA@@BA@A@@@@@@B@@@@@B@@ABAB@BA@@@AB@@A@@BA@@@A@@@A@@@A@@@@B@@@@A@@@@@A@@@A@A@@BA@@@AAA@@A@@AB@@A@@@AB@@AB@@@@AA@@@@A@A@A@@@A@@@A@@B@@@@A@@@@A@@AA@@@@A@@@AA@@@A@@A@@AAA@@A@@AA@@@A@@@A@@@A@A@A@AAA@@@A@@@@@@@BA@@B@@A@A@A@@@A@@@@A@@A@A@@@AA@@A@@A@@@@@@A@@AC@A@@@A@C@@@A@@@AB@@@BAD@@@@@BABA@A@@@@@@@@@A@@B@@@@@@@B@@@@A@@@@@@@A@@@A@@@@@@@A@@@A@A@A@@@@AA@@@@@@@AB@BA@@@@@@@@@AAA@@@A@@@@@A@A@@@@@AA@@@AA@@@@A@@A@@@A@@@A@@@@@AA@@@AA@@@@@@@A@A@@@A@AA@@@@AAA@A@@@A@@@@@@@A@@BA@@B@@A@@@@B@AA@@@@@@@A@@@A@@@A@@@A@@@AA@@A@@@A@@@@@A@@@A@@@A@@@A@@@AA@@@@A@A@@@A@@A@@@A@@A@@A@AA@@A@@@AA@@@@A@@@@@AA@@A@@@AA@@A@@A@@A@@@@AA@@@A@@AA@@@A@@@A@@@A@@@A@A@@BA@@@A@@@AB@@A@@@@@A@@@@@A@@@A@@@AB@@A@@BA@@B@@A@@@@@A@@@AB@@A@@BA@@@@BA@@@@@@B@@A@@B@@A@@BA@@@@@A@@@A@@B@@A@@B@@@@@@AB@@AB@@@@A@@BA@@@@BA@@@@@A@@BA@@@A@AB@@A@@@A@@@A@@@@@A@@AA@@@@A@A@@@AA@@A@@@@A@AA@@A@A@@@A@@@@@A@@@A@A@@@AB@@A@@A@@A@A@@@AB@@A@@B@@A@@@A@@@AB@@@@A@@A@@@@A@@@AA@@A@@@A@A@@@A@@@@A@@A@@A@@@@A@@A@@@@A@@@AA@@@@AAA@@@A@@A@@@@AA@@A@@@A@@AA@@@A@@@A@@@A@A@@@A@@B@@AA@@@A@A@@@@@A@@@@@AA@@@@@@@@AA@@@@A@@A@@@A@@@A@@@@@A@@@A@@@@@A@@@AB@@A@@@A@@@@@A@@@@@A@@@@@A@@@A@A@A@ABA@A@A@@B@@A@@@A@@@A@A@@@A@@@@@@@@@@@A@@@@@@@ABA@@@AB@@A@@@@@@@@B@@A@@@AB@@A@@B@@A@@A@@@@A@@AA@@@A@@@A@@@@@A@@A@@AA@@@@A@@@@@A@@@AAA@@@AB@@A@@B@@A@@B@@A@A@A@AB@@@@@@@@@@@BA@@@@@@@A@@@@@AB@@A@@@@BAA@@A@AA@@AAA@A@@AA@@@A@@@@@A@@@@@@@@A@@@A@@@A@@@A@@@@@@@@AA@@A@@A@@@@@A@A@@@A@@@@@@@AA@@AA@@@@A@@@A@@@@BA@@BA@@@A@@@AA@@A@@A@@A@@@@AA@@@A@A@@@A@@AA@AAAAA@@@@@A@@@@@@@@BAB@@AB@@@B@BAB@@AB@@@@@@A@@@@@@@AB@@@@A@@@@@A@@@A@@B@@A@@B@@A@@BA@@@A@AB@@A@@@@B@@@@AB@@@@AB@@A@A@A@@AA@@@@@A@@@@B@@@B@B@B@B@BA@@@A@A@@@C@@BA@@@A@@@ABAB@BA@@BA@@BA@@@AB@@A@A@@@C@@@A@A@@@@@AB@@A@@@A@@@A@@BA@@@A@@@@B@@A@@@@@AA@@@@A@@@@B@@A@@@AB@@AAA@@@AA@@AA@@@@AA@@A@@@A@@@@@@@@@@@@A@@@@@A@A@C@C@A@A@A@@@@@AB@@@@@@@BA@@B@@@@AB@@@@A@A@@BA@A@A@C@@@A@A@@@A@@@A@@@@@@@@@A@@@AA@@@@A@A@A@@@A@A@A@A@@@@@A@A@@@A@@@A@@@AA@@@@@@AB@@@@A@@BCB@@A@@BA@@B@@A@@@@A@@A@@@A@@@A@@@A@@@A@@@@A@@A@@@@@@@A@@BA@@@A@A@@@A@@@AAA@@@AA@@CA@@A@@@@@@@@@@@@@A@@@AB@@A@@BA@@B@@@@AB@@@@A@A@@B@@A@@@AB@@@@A@A@A@@@@@A@@@@@A@A@@@@@A@@B@BA@@B@@@B@@@@@BA@@B@@@@A@A@@B@@A@@BA@@BA@@@AB@D@@A@@BA@@B@@A@@@@BA@@BA@@B@@AB@@@B@@@@@B@B@B@@@@@B@@@@ABA@@@@@A@@B@@AB@B@@@@@BA@@@@B@@@B@@B@@BA@@@A@@@@BA@@@@BAB@@@B@@A@@BA@A@AB@@AB@@@@AB@@A@A@CA@@A@A@@@@BKJEFMLEDIJAJCL@HCDABCFC@CBI@S@S@MBGDEDEFCDBJANAFCHEDGHCB@@@@@BA@@B@@@@@@@B@@@@@B@@@@@B@B@@@B@@@@@@@BAB@@AB@@@B@@A@A@@@A@A@@@@BA@@@@@@B@@@B@@ABAD@@@@@B@@@@@@@@@BBDBB@@@@@@B@B@BBB@@@B@@@B@@@@BB@@B@@B@@B@B@@@BB@@BB@@@BB@@BBBDBBBB@@B@@BBB@@B@@@BBB@@@BBB@@@B@@BB@BB@@B@@@B@B@BB@@B@@@@@@@@BA@@BABAB@@@@@@@B@@@BAB@@AB@BA@A@ABA@A@AB@@AB@@@@@B@D@@AB@@CDABA@AB@@A@@B@@@B@@@B@@BB@B@B@@@B@@@B@B@@@B@@A@A@@BA@@BAB@@ABC@ABA@@DA@@B@B@BB@@BA@@@@BC@AB@@ABA@A@ABGDGFGBIDONCHAFCFJLDFHJDNANBF@FEHIBE@G@GFGFCH@L@DFJFDLPFF@NABEFCFGHGHQPELMVCHEL@JCHAJEJ@JALBHBBB@B@B@BBB@@B@@@B@B@@@B@B@D@@BB@@@BB@@@B@B@@@DB@@BBB@@BB@B@@BB@@@@B@@@@@B@@AB@@@B@B@@@@AB@@@B@@@B@@@@@BB@@B@BB@@B@B@@@BB@@B@@B@BBB@@B@@@@@@@@@@@@A@@@A@ABA@C@ABA@A@@@A@@@AB@@@BAB@@@B@BB@@BA@@@@@@@ABA@A@@B@@@@@BAB@@@@@B@@AB@@ABCBABAB@@A@@@A@A@E@A@AB@@A@@B@@@D@D@@@B@@A@@BA@AB@BAB@@CBAB@BAB@@AB@@A@@@A@ABA@A@@BA@AB@@@BA@@@A@@@AB@@A@A@ABABIFOFKHOB_AM@MBMBI@KBKLIFMDMBK@QDKDGFCFCHEJ@JCJGLEFODG@GFEF@FCH@D@HCH@JEFEFIHSFEH@FBDDFBFBF@PAL@HETEJ@F@LAHKNGLKPMJKHGFEDIDKBGD@J@B@BBBBBDBDD@B@B@BAB@B@@ABA@AB@@@BBD@B@@BB@@BD@B@@@BEPEPENM^AFAFCHHDNHPHPHJFHFFFJHHDJFJDNHTNLJLNJHJHTRFDHBLDRDDBJFPHLHJLHJFLBNFHHNBFDDBBBF"],"encodeOffsets":[[118867,42780]]}}],"UTF8Encoding":true});}));