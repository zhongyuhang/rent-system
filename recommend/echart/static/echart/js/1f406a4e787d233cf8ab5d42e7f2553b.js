(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('轮台县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"652822","properties":{"name":"轮台县","cp":[84.252156,41.777702],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@G@E@A@A@AAA@CC@@A@A@A@A@A@A@A@E@MAMAK@OAIAA@A@A@@BA@@BABCD@@IDEDE@AAAADCAAE@ECICC@C@AA@ECCMCGDC@CCCAABBD@BABC@C@KAG@CC@CBCHCBCAC@@EA@AC@@@A@A@@BA@AB@DAF@@A@@@CBG@C@A@@A@@@ABGFK@@AAA@CBCDCNANAH@B@B@BBDBB@BA@A@@@A@C@AAAAAQAG@A@@AAA@@@ABCBAFADAJCFCFABCBEBCBA@@@@B@B@BAB@D@@A@A@CECG@EBE@@@AA@C@A@A@@@EAA@@BA@@@@@@B@B@@BD@@@BA@CBI@EAAACECCC@@@A@A@A@A@@@A@@BAB@@@@BB@BHDHD@@@@@BA@EBKBE@C@CAA@AAA@A@C@A@C@A@A@@AA@@@@@@ACE@@@@A@A@EBC@C@A@A@GCCAAA@A@ABK@@AA@@A@ABKRELADC@A@A@@AC@@A@AACBE@A@AAA@@A@A@@BABAD@FAFBD@BABABEDC@A@A@G@G@IAEAOAOCKC@@K@C@A@@AAEBE@@A@A@CBGHA@AB@AA@@@AC@I@I@G@E@A@@A@A@GHCLCDCJEDGFEBMHGFGDCBG@C@A@EAAAGA_KG@ECMEGEA@AACBA@ABG@A@A@A@CEEO@@AAC@GLEJGHABGDI@IBE@GACAAA@EBEDE@A@AAAA@CAA@A@CB@@CD@@CBA@A@C@CAA@A@A@@@@@@BAB@@@B@B@DBNBD@DCBCBIAQBA@CBCBEBC@A@A@GAEAG@K@E@A@@@C@ABC@ABC@@AA@A@ACEGCCCC@A@C@CAAAA@@A@A@A@@BAB@BAB@D@F@@BHBP@F@BABABA@ABA@AA@@AA@AAC@GAE@ACEEC@@AA@B@@A@@B@B@BADBD@BAB@B@BA@@@A@@@A@CCGEQKKEUGC@A@A@@BA@@BAD@@IAMG]UWSIIWKE@AAG@IBE@K@GECACACBC@ADABCDCJCFCBC@ABE@EAICIICE@IBIDIBA@@@ABA@CBE@AA@@AA@AAC@C@G@A@E@E@EAA@EBA@I@CACAC@A@A@A@@BA@@B@@@@@BBB@DDDDDHFNL@B@BABA@C@C@C@CAIEGECAGIEIAQAKAAAA@@CAC@EBGDC@@@ABABMB@@ABEBCBABCBCDABCB@@EBAB@@CBCD@B@@EFCD@@GJADINADCD@@CJ@@AB@@AHCFCJAJAF@D@@ADAJ@F@@ALAX@N@@ATBb@L@F@NBJ@NBL@L@JBD@F@HBF@F@BBJ@F@DBHBN@B@B@D@B@B@@AL@H@BAB@@AD@B@@@DAB@@@BAD@FAF@@AFADAH@@@DAH@J@@@@AD@FAH@HAF@DANAJ@H@@@@@B@B@FAD@B@BBN@F@F@B@B@D@B@BAFABCD@BCBCDABCFCBADABEFEJIRCFETAHCFAFCFCDCDIBEDGBGDEDEDCDCD@BCDAF@D@F@DBP@DBFBFBHBH@F@BCBEBKBKBUDGDEBCBCFINGNELCF@F@F@L@LBLBHANBJ@N@FDLBJDR@HCJ@LBPFPDLBR@^DRF\\HTL\\FLJNJLPJLJJHHJDFHXDRDJDJBNALETENALBJBHDJLXFPJXF\\BZAPGH@BAB@@@B@B@@@B@@ABAB@BABBDAD@FBF@FAB@B@JADAFCFAD@B@DEFMLCFM^EXI^K\\ITBT@PANCRGdI\\ENEHMFEDCDDFBDAD_XYRED@DBDDF@BED@BBBJPFJBH@NCNGJ@BBBBL@P@DKNAD@DBBPDVF@@LBFB^@`AR@BBVVDHVPFFDP@DADCBA@@BFH@DADEDCFAB@@CDCJ@@BB@BAD@DCHABCF@BBFBJDH@DEDGHCBGB@@GBCBCHCD@@M@A@ABBH@BAD@D@BANCT@LBBNNBD@BAF@DBDDH@F@H@HILADBD@BBDAFAL@FBDDJJLDDBJAFCFINIL@BBFHT@BAF@F@FDDHDJHJCHA@CDCFCFEHCDCFCBAHEFCB@HCHEB@LAF@HA^BdA`BL@XEXMNKVCVB\\AZQPOZU`G^EZM\\OPMZGZB`J^JxJnFp@fBtBbAjAfIjExEbKnSbI\\KlU`MdENA`G^A^@^EZGrOLGHCB@B@@AB@FBF@F@T@H@@EEEAGAGAGBEHEFEFCB@@A@@@@B@@@AA@@@@B@@A@@@@B@AA@@BA@A@@@A@A@@AA@A@@A@@A@@@@@@@@@A@@@@@A@@@A@@@A@@AA@@@A@A@A@AAA@@B@@@@AD@@@B@@AB@NATBXJRJHBXHPDPHJLDP@PDPNNNDTAVE\\IPChSVOnU\\I\\QRI@@BBB@@@B@@AB@BAB@B@B@BAF@@@BAD@@@@@F@DCHEHEJEJ@F@HBNFH@HBB@FAF@DBD@DABABCFCDCL@V@NBH@JDHFFDD@F@DAHCHCPIHCTGPGLEFALAJ@F@RBLBJDFDHFFBDBDAFCFAJCHAJ@FBJBH@H@LBJ@F@P@F@AG@GBEACAA@@@ACEAEAMAE@EBG@E@ABCBC@CAEDCDE@C@CACBCAK@GH@JFHBDBFBJBFAJCDGDEHCHGBCAC@AHGDCH@F@DADCDCDCD@FCDEFE@C@G@G@CBABAAACC@ADE@EBCAGAECA@ECG@GAEAI@CBAF@DADEBC@ADC@ABE@@@@CCACCCCCACAACAA@C@A@@CAACAAACAACCAAC@@@CBC@ABE@A@ABA@ABABC@@AAAA@ABABABA@ACAA@CACAEAG@E@A@EBCBCB@@C@CAAACCEAAC@AACA@EAA@AAAAAAC@C@A@CAAAAAAECC@C@AAAACAC@A@CBABCB@DCBA@C@AAAAA@AAA@@@A@E@Q@K@O@CIiIqEY@EAEAKCUE]Im@AAGE]E_@G@@AA@C@@@ACQ@AE[IyIoCQE[GiCU@I@[@_@C@[@M@G@c@[@}@W@w@S@K@S@[@A@Y@U@U@U@E@G@A@A@@@@@@@A@AAA@A@@AA@@B@@A@@A@@@@A@@BA@C@A@A@A@@@A@@@AA@@A@@AA@@@@CACAA@@@@AA@@@A@AA@@A@@@@A@@@A@ABA@@BAB@B@BBB@BBBBB@F@BB@@B@B@BAB@BA@@BAA@@A@A@@@@@AB@@@B@H@@@@@BA@@@@@@B@@@@@B@@@B@@@@@@A@@@@@@AAAAAA@@AAA@A@@@A@@@@A@@@A@@@@@@A@@A@@@@@@BAB@B@BAB@BAB@BAD@B@@@FC@@B@B@ACAACAGBG@C@@A@A@OEAeAGCEGCAC@GAECAC@GAEECD@D@JDB@@AAAGCCACBGJA@AACKAC@CBCBCCEAABAB@HDB@@AACECA@ACECIECCA@ADA@@BCC@ADG@A@AEB@BA@C@E@CBABG@@ADAFCB@HABA@AGAE@GDA@@ABC@AEBA@CBE@CACCCDA@@A@EAE@ADACC@@AACBAABG@C@@CAEACEB@D@DBB@BA@A@A@GAAEBEDADABAAEG@AAEA@C@CD@BB@ABA@EBC@A@BE@@@AG@ABCFED@BE@EDC@EAA@C@E@C@EAAA@CACCACEA@A@EBIBAAI@AA@AC@AACDCBA@@AACACGAE@AAAAA@@BAFABC@AA@ACCA@A@A@AB@B@BBF@BAB@D@BB@FABDCDEFABAAC@@F@DABCAC@KIAAAACCECBAD@@@@@AAAAECC@G@@A@ACCA@ABCBA@@ABC@EAAA@CBAB@@CFEFCBCAC@CBGFIBC@C@GCC@EBA@ECC@EBC@E@CAOAAAACE@QB@@CBA@A@CAECKEAA@@A@A@@@C@A@A@ACCEAAA@"],"encodeOffsets":[[86930,42184]]}}],"UTF8Encoding":true});}));