(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('鄂温克族自治旗', {"type":"FeatureCollection","features":[{"type":"Feature","id":"150724","properties":{"name":"鄂温克族自治旗","cp":[119.755239,49.146592],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EFI@KAKBEDGAC@AFGDGF@HABCDGRODKFC@WWCACGC@K@GC@EAAIEAEAE@C@@EBMAEA@BBBBBDPDDBBBB@D@DA@ADCBI@IDCBCBCBAB@@@DEJEHGFQFILADE@GBAACBBBGBAAI@ODIB[DABBD@DB@BBC@@DD@@BGHDB@BCAADEBCDBBCB@DADDDCDFBCD@FEHAFAHIDBFE@CDCHBA@DC@AFFDA@A@CHDHGD@JGF@AMHCDBDBBCHFLJJCBBBAB@BIDC@KDIH@DA@BDA@@DB@ABBDA@C@CLD@GF@DCB@HE@ADKH@BEBGHOFEHFBELEBEDDFB@@BEDCBABBDAB@@BD@@@FCA@DDB@FCBABIJGNEDCJC@@DADBB@BC@CBDDA@CBA@AF@BEDDFGDEJEBBDADC@GBF@ED@BGDB@CBABABA@EBKJCFBBABBBBBB@@BA@@BCBC@BBA@BBEAAFC@ABDFCFBDGD@JA@@BB@@DB@ABC@CBGFADDBCB@DD@@DFB@DBDABAFBDGB@DD@@DCACBDD@BEB@DG@CDCHBFGFBBC@AB@D@DA@AD@B@@AFFDCB@DEDCF@FBDEBHDAFD@BCBDD@B@CDB@CB@DBDEDAACBEBABB@MBKA@B@@@DCACACBFBC@CACAA@EBKACD@CE@@A@@CAA@A@@BB@ABCCMAGDBFCBBACAC@B@@AECEBCCCFCAAAFAAAAA@AB@AAAAEDCACBAACBADCCCB@FAAADD@DDCBDBABCACBFBGBDBADE@ECEAC@BDAFDDEDECGAAAEA@FC@ADA@GHCACCFCAAOBIADF@DGADAAAEACA@AGAADDFKA@AD@BE@CKAADAHECDGACCAEFDFE@AAIFABCABABCEBBAE@ACAB@BA@AAAB@DD@DFEBCCCFC@@BA@AAABC@CDEABAIGDA@@E@ACADI@GDDDEBD@CBGAAFABCEKGC@CACDDBO@AHO@C@@CQEGCGAGFC@ADABEBAACDMDACAEG@ECCDC@E@GBC@FDC@A@CACAEA@CG@BFCCEBCBBDGADAEACAEHD@@DC@AEBACAABBBMDGCGAKB@AABBDCB@CG@BDE@EAADB@ABCBIBFDEBAGCB@DA@ACCB@DCA@CDAGCBDCA@CC@EDEGKFOBK@FDED@CE@BEEAEDC@ABDDE@BBE@BDIACB@BC@AAABE@KAGGMBHDIACBHHGACHED@HQEGBAECB@DBDIEEDEF@GEBBBADCACA@D@BHAAD@HA@CEAACBBBC@C@CA@DD@CBABCB@BH@@BC@@DC@@AA@@BACCAE@AHCB@CEBDDCBDBGBCAEGG@BBEBAAC@CBCF@@MDID@JMAJDAFEC@FA@AAAAC@ABDBABAAEACBFB@BD@DFCBCAC@@AA@CCKHBDGDDDABAAE@AAG@ABDBEBFDCDEEA@@DQAEAG@EBGHADBFD@EHIBABCACCFAAAMACBDFADC@ABEAEBCAEB@CE@@EAAA@C@A@@F@BE@AACAADCAADFB@BEAABDBEBFBCB@DFBBBG@DDCBC@@BACCBDDBBA@CACBFBFDD@@BCBD@CDAAGDEAADFDABCA@AADBBEB@DD@@AH@@BCBI@@BEA@DFBADD@BBAB@BA@@AC@AAABDDABBF@DC@@BDBIBA@BDEB@DHABBEBCDJA@BGBABHBCDDBCB@BD@DBABHDG@JBADEAABF@@BEBDBB@@BG@DFGB@HE@BBECB@AAABE@@BEAEDA@BBBDE@AD@@ABA@BD@D@@BBABABC@BBCBEDEA@@GA@AC@CB@DDBBABB@BA@GACB@BA@BBF@B@BDD@ABCBAA@ACACDBFBBD@B@EDC@BAAAC@@BA@AABAC@CAAD@DKAADDDABD@BBCBC@C@BBABA@@ECACDD@AFC@C@GBBBA@CADA@AC@CB@BILFB@BE@C@HFCBCCCBHDED@CEAIB@FCAACCB@BEAC@DFAFCNEAABJBADI@EA@BA@{RCBA@CBD@ABCAABAAAB@BCBCAAB@B@B@ACBC@A@C@C@C@GAMBABA@A@EAABC@@AC@@@AAABEB@AABOBB@ABBHC@EDBJA@@B@FEBCBI@CBG@ABFBEBBBABECACIBGB@FECFEG@CFC@DFOABDH@@@KDBBFA@DI@BBD@@B@BGAABDBCFECADH@EDAAG@@DC@@DF@ABA@GF@CE@DBADCACBFBCBCAABDBG@HDC@C@@B@DEC@A@@CBBBEAGBBBD@@BABIBEFCAEBDBE@DDC@DBB@@BE@ABBBABAAGDABBD@DGA@BCBCB@BAAIBURIFGD@FEHAFAAE@ADGCBFK@AFADGDDBGD@B@@@@A@A@CFABDBCDAFEB@BEDA@@BEHDBGDFFABD@CBADF@JJBFG@DDC@DBBDDBFAEDJ@CD@DDDEBFBFBD@BBD@AFH@FFABDHCD@DE@CBCDC@BFCBDDCBLBFDJDFDF@@DFBHAFBADF@EHFFE@FBADJBAD@DECKJGD@FMD@DE@CDI@IHEDFHIACD@@BDKDCDBDF@GFCFIDDJCDEDBFFB@FBHEDABC@C@FDEFCD@DEBBHCHEHIFEAIAEBAB@@GDAAA@@DC@BDBBE@@DE@ABABABCBE@ABCDCB@DFDJ@N@FCDDEBABDBAD@BABABHBHDBDAFC@AFBDCACB@DA@BDDBBDC@GBAF@DFDE@@HFLNJIB@LBBGBEF@JIDIFGBE@AECAG@EDF@@HEDBBABF@BDJDFDABF@AAFBCJDABDABBDFABD@@JDDFADFBJDDABDBDF@DBDDHHNBDDF@FABDJDBADBBD@BQN@@|fn^NH|dÎ`~NZŚªĮÒôZLlP°~¨\\@@LBRDB@lJRDRBJB`NpVFF@BFDLDBBBB@BB@HDDDD@BBDD@@ED@B@FBDBBDFFFLFDBFBB@B@BAFMBAHAD@D@TBD@JDDBTHLFBBDDD@@AFADG@A@ADADAD@B@JBHABA@AAAEEEC@CBEFADA@CA@@AA@@CCAE@AACACA@ABAFCBA@E@CACDC@AB@HCBABCAACC@G@EAACCCACA@CBAB@@@PCDDB@HABABCA@CA@ABAH@D@DC@CCACAC@@BEBEA@ABA@ABCJ@HBHA@AHBB@BBVCnH`JXNjBBFBDHPDFAB@rRrP^HZCpCNA¢KBA`CNAZADAZVFBF@PB^BZAt@bHjCZAVALvA@@bXbVTV HtFlZ^RLH^HZHLD@@AL@JVfTTJJBBBD@@@E@ATELABKBIDE@ADGAAA@GEIC@CG@A@CE@@HELCHA@CHCDABAMGAACA@CBEDIEQIECADIBIJA@ABE@CHKCMFCFCHCNCJ@NDDCDCLE@GLEDEDCBEHGLCH@DCHEBEEGACMC@EHENIJABKGEKEAEBEHAP@JCJAHBPALAJCDGL@@A@EJIAAE@ICCCBEIAG@AQDAD@FGHEDEFALAAGDGDEDCOGACNE@KVCJEDA@IECMMAAEEEI@IECBAJIHG\\ATD@E@AB@FIPDJ@HGNBFILGBA@@BKDKJARGFGHAPDAEAIIGCEBG@ADEGGBGCGGE@CGCDEDC@CECFAHEBDNEJDFCRCF@@EDEL@OKECEA@IBAECBCIEKGCCIAIEMAEECEACAKECGCQAOAJEHENCPINCRMH@NBJCHCJGBICI@CLIDCBEJCJAVCPBD@FABE@ECE@KEK@E@EEGEEIMEEMCIG@C@@@A@@@AFKHA@CEKKIGALCNMNCD@@ICKCIACAIAE@GFEE@MCCAEKEEIIGGDCBKCI@GFEJI@ICEHMFAAGCGCI@C@IDCCIEICCJETEACCEGG@A@G@CBAPC@INIAC@GDCXM@GEGGCECBIEC@GFGCAAGIG@ENDXCPDDIAIDE@GNBHDLERIJGPAPDPIDEJDRBNLLDNLJFJALCFABDPBPBJCFAF@HCPEPALBR@@CRCH@LEJ@NCJDNAPFBDDHLJB@B@HMHE@EDKLMHIAIGCEMICJKRYTIEG@@FGDG@@N@JEBMCAIA]MMOFGAKEEAK@EQAOIEGAAM@IJIAKCKCOOOAOO]ISFQCDGCKEGDKEKMG@CFE@GKCGCFOBGHAEOGEAIDG@IFC@IAEFGTA@G@ADIR@JGAGCIEGJGDEGBGAECCEDCAA@@CEMAKCECEAICQAECEG@IACDCA@GDQBUCO@EDM@IGOGMACEICDGB@DCEGI@GEIEAIEGBEGCKACIQCKNKAQDIBGFCDEBGAEBM@IAIEI@E@EEGCAEE@FEDEAEHE@CCEKGIQAABIJCJEAEAECEGAEEAEAG@ELGHC@I@EFCJDHBP@JGBGAGDEPANCFGAEEACGICCEGEIAEHEBMB@@EACALA@C@IHEJE@CDC@EDGAEHKFEHCB@@C@EDEBABGFELCJ@JBHAHDNAJALFR@NFHCfKBC@AGG@GEE@AACGCBEBGHA@AMEEGCIICAEDCEGGACIE@@GAAGMMOUMKC@CDEBECCACSACACEECIECABGEEGE@GCESIE@AEEGEAGEA@GDCDIBGFOBKBK@GAMEK@ECCGGB]BW@MBKHIHCDGACEICAEWICEECMBGCKDI@CAIAGC@MFECMAGAK@ACGDKRABEJCGGEGDEPCDEGCCC@MEEAC@IFOBCEA@CDGFCCC@GPCLGRCFA@@B@CAAAAA@@CA@A@CECCCE@A@A@AEAA@@CCAA@CHABA@@@A@@@CA@@AAACCA@@A@CA@@@CAAAAAC@A@@@@@C@IDC@ABE@C@EB@@G@E@E@A@A@IBM@GDABGJCBA@EFEBG@ICEAGECG@@ACC@GAEAAAA@C@CAAAIGIAQICC@AEAECEAC@C@A@A@AACC@@AA@Q@GBA@A@A@EBE@A@A@A@@DC@@@@@A@@@@@@AAMICCGICA@@ICKECCÃl·heFBF@E@IAEFMBQEA@AHCFADBFABJBDBDFCDAD"],"encodeOffsets":[[123213,48768]]}}],"UTF8Encoding":true});}));