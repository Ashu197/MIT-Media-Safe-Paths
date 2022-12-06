const {sign, verify, pack, unpack, signAndPack, unpackAndVerify, makeCWT, parseCWT, debug} = require('../lib/index');const expect = require('chai').expect; 

describe('DK', async () => {
  it('should verify DK_2DCode_raw_7', async () => {
    const HC1 = 'HC1:NCFOXN%TSMAHN-H9QCGDSB5QPN9OO3TH4O:5+T9DNUOGI8JR+4UTSJLPO9JJK1JZZPQA3DP4OW631AX5QF36FY1OSMNV1L8VNF6O M3PU5LE+XEU9E8-67BE1VEEL6VW65PMVJEY+MOWEES6$96/966Y6FPA0T932QLOJ9ZIQ0J1VCSWC%PD:NK8WCZXI+G1 734LTJ6B6*K2NOGCGP+PKC1H8J2*N/PSSV0I+QWZJHN1H8J4MI*W0-RQ2$H6QK3PIA KZ*U0I1-I0*OC6H0HXMP$I/XK$M8LOEPZB6J0SN4B-S-*O5W41FD3DD.Z88IF2IL9NTWDD-FHL:O$HF1FD$W4894T1K 6STNPZ78W5I19A-TLNKE$JDVPLW1KD0K%XGTS6$P82SOM5P+P1Y*MC*7-4IIWMK-54VCN*P6C6:AMBENX0ABAP+T5K GJRPT82:J8JP2*J1ENN-HMJQADMKRNM65IB 5T:P*8OZ90O7L05';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.contents)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Trinke', 'fnt': 'TRINKE', 'gn': 'Larsen', 'gnt': 'LARSEN'}, 'dob': '1978-10-29', 'r': [{'tg': '840539006', 'fr': '2021-04-08', 'co': 'DK', 'is': 'Danish Health Data Authority', 'df': '2021-04-22', 'du': '2021-12-08', 'ci': 'URN:UVCI:01:DK:AAF8DC68A9B655528BA581CA0D04353F#Y'}]});
  });

  it('should verify DK_2DCode_raw_10', async () => {
    const HC1 = 'HC1:NCFOXN%TSMAHN-H9QCGDSB5QPN9OO3:D4$X4-365KN-TMHZ4QFHI9CZK95NENFOQHIZC4.OI1RM8ZA*LPKW2GHKW/F3IKJ5QH*AA:GS-5V-AL4LH4PI 0/.HA2I01HP:HE%2+5TQ3TQ:G/2P-2JO1P23LS%0%*80OPN484SI4UUIMI.J9WVHWVH+ZE/T9I$HVLIWQH.UC H2OH6QK67S7TK24H9$P23E2*C2/P3ZM9 TU5G69H5/IE%TE6UG+ZEAT1HQ1WIGSU9ZIEQKERQ8IY1I$HH%U8 9PS5-LH/CJTK96L6SR9MU9DV5 R13PI%F1PN1/T1%%HN9GL$UP$I/XK$M8ZJ16YBODKX:CIGF5JNBPIUUU$YNOAUXH98.PD/9EN9C9QG3VCB9XW5B/94O54WUC2F8LE1:UX1FIN9P8QXF9:6VPN1Y*9UM97H98$QJEQ8BH222$UBCIF7XL1-OM:PQW2/05CGNM2QO 5D4F45WF6EE6I0VJ5O7%CS3C5BAACPA.EVJJDM8LW/5M0G6G9P-3U7TZ0V5KT%:D$NE6*CO20G%PE5';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.contents)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Jørgensen', 'fnt': 'JOERGENSEN', 'gn': 'Klaus', 'gnt': 'KLAUS'}, 'dob': '1983-01-06', 'v': [{'tg': '840539006', 'vp': '1119349007', 'mp': 'EU/1/20/1528', 'ma': 'ORG-100030215', 'dn': 2, 'sd': 2, 'dt': '2021-05-20', 'co': 'DK', 'is': 'Danish Health Data Authority', 'ci': 'URN:UVCI:01:DK:F573106A0A315AB8A7F7016329C30550#2'}]});
  });

  it('should verify DK_2DCode_raw_1', async () => {
    const HC1 = 'HC1:NCFOXN%TSMAHN-H9QCGDSB5QPN9OO3:D4$X4-365KN-TMLV4.P7*ZOP-IMJTI94F/8X*G3M9JUPY0BZW4Z*AK.GNNVR*G0C7PHBO335KN/NBEDBVBJ623323EAJ7UJ5PNDIB6PNS7B1DN%BBWC7WC7GB3683ML7SZ4ZI00T9UKPSH9WC5PF6846A$Q 76QW6A/98T5WBI$E9$UPV3Q.GUQ$9WC5R7ACB97C968ELZ5$DP6PP5IL*PP:+P*.1D9R8Q02-DE%QHOJ+PB/VSQOL9DLKWCZ3EBKDYGIZ J$XI4OIMEDTJCJKDLEDL9CZTAKBI/8D:8DKTDL+SQ05.$S6ZC0JBY63-C3F+LBQ99Q9E$BDZIA9JJ-JS7BYZJ92KG0TB9FNDA5KD9FED.B4JB3E9B9NNPCV9E6LFSD9C8J-QDSWNG4C-TLNKE$JDVPLW1KD0KCZGBKQCJE%RH5WAMSSR$F-75NXONQ84QV9/7/-LT1AIYBZGD$9RCLV-PTZ-K63ET-D1757H3GF9MV2N7WNQSY1SBZT-:81JJLHFQ-VG$HK00XWPD2';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.contents)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Klaus', 'fnt': 'KLAUS', 'gn': 'Jørgensen', 'gnt': 'JOERGENSEN'}, 'dob': '1983-01-06', 'v': [{'tg': '840539006', 'vp': '1119349007', 'mp': 'EU/1/20/1528', 'ma': 'ORG-100030215', 'dn': 2, 'sd': 2, 'dt': '2021-05-03', 'co': 'DK', 'is': 'Danish Health Data Authority', 'ci': 'URN:UVCI:01:DK:B986830007345F99AE898FB82C6C61F2#A'}]});
  });

  it('should verify DK_2DCode_raw_11', async () => {
    const HC1 = 'HC1:NCFUZ8P8QPO0%20YRJ0MP*CM0QG:4H9EUD4OU:C01PC6QX:G:TMLPDT7TH%FK8HT2NU 3WC5:H7ZUH7*TXQEZREZCM$BAWQ4GT3EGP2ISGAENXRYPVT7MBV3752HI8 8LQET KDSJM.2E2FT7P0R$1-QO07E/6A2DFNGVURTPXO$52NZFK1256NT8PQQALGRYF4E209BJ%%82RTCP0FUC%Y9$DKXGTP+R/S5YPPFM6QLJ 2U/7C+5WQSSF9PO34471.GA%/C5UDJ:PKA8SVNI/KI$MIWT7.OHLDL9FBS6*/D9IMX+BYPFW4CB/7D.2W 28CWV+9+3J3UBN9ADHL/5W GN9IDG45:T31W2-AQI ACAKC40:WJV7HYF5$HI8897ZH3JK:N24H83$0LNR9904MC92V.N83SPPTO88O+:K74F/GM$L5V-K0WOGNS JPU:UDYH/4180V9T8BDTZAQS2U-0S8AFWXML5S$WAX+T0/U0.5V2MY/LY*IVYUJ6M0Y3$-S/FDC7B0/0PK37CNU3DRXRGJ5 W4XQFRQJR*0I5G95';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.contents)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Ågesen', 'fnt': 'AAGESEN', 'gn': 'Åge', 'gnt': 'AAGE'}, 'dob': '1945-11-20', 't': [{'tg': '840539006', 'tt': 'LP6464-4', 'sc': '2021-05-30T13:48:20Z', 'dr': '2021-05-31T12:48:20Z', 'tr': '260415000', 'tc': 'Test Center DK', 'co': 'DK', 'is': 'Danish Health Data Authority', 'ci': 'URN:UVCI:01:DK:B19D10B4E18551559EBDEE46248DA883#S'}]});
  });

  it('should verify DK_2DCode_raw_2', async () => {
    const HC1 = 'HC1:NCFOXN%TSMAHN-H9QCGDSB5QPN9OO3:D430R-365KN-TMLV4+Z53.PP-IDGTAGJNO4*J8OX4SX4+M5WLI+J53O8J.V J8$XJK*L5R1PWBT.LCO1FYBJW1IT9/T13T9UU12Y9P$BJUBZZBT%PFS90TB:V5YYHNSG:PIWEG%*44R2423423ZQT-EJFG3O3HA93TA319BLE3XW44$2*GP-T43ZC%1DEBFD-48YIT656S4XP4-67P0JQ$S-$CWSAFU2CK42OJ4235JO6:I4CTLXK-4JD77Y6TLXKB853+L+E93ZM$96PZ6+Q6X46%E5EPPQF67460R6646O59WC5OFU946+967KQ1C9AKPCPP7ZM5900:C.PDUCII7JSTNB95L26O9EILF9JA2-BW9HD/9IN9 UP C9MWEV3FF/9BL5-+0SLGO2WUVPQRHIY1VS11O12R34$EFW8C$EKLBF415U7WY2 ME WD8QJ/:P X9.71EOE3SFC4QI-J8:VHXV-1SI8P57J*EL5Z272AKJNBECNXV%5ULSUUF2VG7UJ6HB0K813FG';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.contents)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Åge', 'fnt': 'AAGE', 'gn': 'Ågesen', 'gnt': 'AAGESEN'}, 'dob': '1945-11-20', 't': [{'tg': '840539006', 'tt': 'LP6464-4', 'sc': '2021-05-16T22:14:51Z', 'dr': '2021-05-17T21:14:51Z', 'tr': '260415000', 'tc': 'Test Center DK', 'co': 'DK', 'is': 'Danish Health Data Authority', 'ci': 'URN:UVCI:01:DK:B19D10B4E18551559EBDEE46248DA883#S'}]});
  });

  it('should verify DK_2DCode_raw_12', async () => {
    const HC1 = 'HC1:NCFOXN%TSMAHN-H9QCGDSB5QPN9OO3TH4O:5+T9DNUOGI8CNO*DM*4FGM2 JCV4*XUA2P-FHT-HNTI4L6YO1%UG/YL WO*Z7ON1A-LG%NYQ1 S5FS95XJ*X1LU9-Z9PYGGIH4HG1KM+JMUJKIVK0IHS.KZ2D-JETHQC K:YM8J4RK46YB7K2%P8C KUGAACQH99FDO4C5O11+:03ZCH4BPCNV5TK$2A55$XKX6TZTCPCN6:I8F5U1J/XC4/290JM*4CZKHKB-43.E3KD3OAJ5AL5:4A935NJIFT3I3+E3E-4RZ4E%5MK93R9CB9UF5+.PQK9-L9XC52+PK+9B/9BL5-YUMN1X1FIN9.+02O8/V7Q NZUIQJAZGA2:UG%U2E4*4SS:DG%NQLL$5VS7TYXILPDW1AW687SOQ81D*TXRR2%M$YESIFN4FNG0B-J*LBY%IJO98BT1FPQDBG:F-EE7RTIRJ33I9SDV*G9$6MS9HVE';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.contents)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Larsen', 'fnt': 'LARSEN', 'gn': 'Trinke', 'gnt': 'TRINKE'}, 'dob': '1978-10-29', 'r': [{'tg': '840539006', 'fr': '2021-04-01', 'co': 'DK', 'is': 'Danish Health Data Authority', 'df': '2021-04-15', 'du': '2021-12-01', 'ci': 'URN:UVCI:01:DK:1B9B48CA1F4351F4A4C023D3815A74A9#I'}]});
  });

  it('should verify DK_2DCode_raw_3', async () => {
    const HC1 = 'HC1:NCFOXN%TSMAHN-H9QCGDSB5QPN9OO3TH4O:5+T9DNUOGIB8B/*R:X9LGC0/KK1JZZPQA3DP4OW631AX5QF36FY1OSMNV1L8VNF6O M3PU1H6EB6JFEUF6+XEQ MJS6K1N63FEL62+0+BB4DJ4NJ323L23T+0SZ4ZI00T9 E9PF6846A$QW76SW6B699B5RFUOV13W1.UI2PHUIE+-CZJJQU2X*5YGFC-OPC1LJL4A7K73X*5OX42F1M*KYC3.Z8 X45B9-NT0 2$$0X4PCY0X:CZD5CC9T0H.3TU54JWHUVI/E2$4JY/KS-K1Q2V5T+5L /K9:KDP48X2C4T6ALD-IW G-IFNHF+*4LK0*+73E8U2MWKP/HLIJL8JF8JF172TF1A0LK6MGH1M7LHBHERN34CNYQS TF OF 6TTI4J9ZWC+ERZZJ/N7-G6ZN5:YONZ5 NF*0Q24KWJUVDTK/VIQ99GW4/AAKV45MLNCI00E+702';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.contents)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Trinke', 'fnt': 'TRINKE', 'gn': 'Larsen', 'gnt': 'LARSEN'}, 'dob': '1978-10-29', 'r': [{'tg': '840539006', 'fr': '2021-04-06', 'co': 'DK', 'is': 'Danish Health Data Authority', 'df': '2021-04-20', 'du': '2021-10-03', 'ci': 'URN:UVCI:01:DK:1D6DAB71F99A5C87A657D6D904558001#R'}]});
  });

  it('should verify DK_2DCode_raw_8', async () => {
    const HC1 = 'HC1:NCFOXN%TSMAHN-H9QCGDSB5QPN9OO3:D4%Y6-365KN-TM+W40GFG*I4G5/KLAZAF/8X*G3M9BM9Z0BZW4Z*AK.GNNVR*G0C7PHBO335KN/NBA93UNN7E3MJJ-E36DJFG34NJJONOLNPQNCAJGHJ0DN/IBM23V+0SZ4ZI00T9895*96846A$Q 76NZ6GO1%T6GI65ZMOY6LK98T5WBI$E9$UPV3Q.GUQ$9WC5R7ACB97C968ELZ5$DP6PP5ILUF5O+88YM-96QRG.Q572QDB9M%5+8E8.PDB9MGA IB4OIMEDTJCJKDLEDL9CVTADYI7VCE8C09DC8C3BIXJA8/SG8C49D:8DDIK.ZJ5OI9YI:8D7XDWNDPU6QQ5L/5R3FMIA5.BI79:CA$IB6LF-NJ4-99FED.BOH3- RHBW:29M.SY$NTS661438CTBOFRMLNKNM8JI0JPG9:0JUIF5UDDT0%5FUIWGK7-P5UQWHNT$B1/DBVMUWH 31P49:V1$B750G$4PEN8RME%AU9/IG/2.U3YJABQCQPVU:ATTO-X0OQN5FVV50G8ESNG';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.contents)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Toraf', 'fnt': 'TORAF', 'gn': 'Olesen', 'gnt': 'OLESEN'}, 'dob': '1939-01-06', 't': [{'tg': '840539006', 'tt': 'LP217198-3', 'sc': '2021-05-18T16:09:50Z', 'dr': '2021-05-19T15:09:50Z', 'tr': '260415000', 'tc': 'Test Center DK', 'co': 'DK', 'is': 'Danish Health Data Authority', 'ci': 'URN:UVCI:01:DK:B19D10B4E18551559EBDEE46248DA883#S'}]});
  });

  it('should verify DK_2DCode_raw_4', async () => {
    const HC1 = 'HC1:NCFOXN%TSMAHN-H9QCGDSB5QPN9OO3:D4%Y6-365KN-TMLV4O 53.PP-IMJTH82F/8X*G3M9BM9Z0BZW4Z*AK.GNNVR*G0C7PHBO335KN/NBA93UNN7E3MJJ-E36DJFG34NJJONOLNPQNCAJGHJ0DN/IBM23V+0SZ4ZI00T9895*96846A$Q 76UW6J-1KI6II6GCM-B6LK98T5WBI$E9$UPV3Q.GUQ$9WC5R7ACB97C968ELZ5$DP6PP5ILUF5O+83Q6*96+LG.Q572QDB9M%5+8E8.PDB9MGA IB4OIMEDTJCJKDLEDL9CVTADYI7VCE8C09DC8C3BIXJA8/SG8C49D:8DDIK.ZJ5OI9YI:8D7XDWNDPU6QQ5L/5R3FMIA5.BI79:CA$IB6LF-NJ4-99FED.BOH3- RHBW:29M.SY$NTS661438CTBOFRMLNKNM8JI0JPGP5HP05$ZE86S7813SIXCW.QV8+1O37BHFJT3A7D7D5LN5$-BFMTLWBICUC G-9T.BC1%VS$P+OKNBQNFWD%OF 8T2O$X777T50LNEQLT2II30$G';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.contents)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Toraf', 'fnt': 'TORAF', 'gn': 'Olesen', 'gnt': 'OLESEN'}, 'dob': '1939-01-06', 't': [{'tg': '840539006', 'tt': 'LP217198-3', 'sc': '2021-05-16T22:28:43Z', 'dr': '2021-05-17T21:28:43Z', 'tr': '260415000', 'tc': 'Test Center DK', 'co': 'DK', 'is': 'Danish Health Data Authority', 'ci': 'URN:UVCI:01:DK:B19D10B4E18551559EBDEE46248DA883#S'}]});
  });

  it('should verify DK_2DCode_raw_5', async () => {
    const HC1 = 'HC1:NCF680-80T9WTWGSLKC 4V89L/9EHHHRQ341FBB853*70NS8FN06ACT8UWY0 9C0T3D97TK0F90KECTHGWJC0FDTA6AIA%G7X+AQB9746LG7/M9R46L*8T47:Q6K*8IA71X6F*8SG82B8HL6-A8357-96JM8H:6RK4WJCT3ENS8XJC$+DXJCCWENF6OF63W5NW6A46%JC+QE P3CEC+EDG7D%69AECAWEP34IECOCCHC8AWE04E-EDOFFB$D% D3IA4W5646946846.96.JCP9EJY8L/5M/5546.96VF63KC.SC4KCD3DX47B46IL6646H*6Z/E5JD%96IA74R6646407GVC*JC1A6W473W5Y96C46TPCBEC7ZKW.CB CPVD7%E JC6/DEK9DEN93DF/D1$CLPCG/DB C S9IZAMPCG/DUJD/0A3IACY8WNA.+9O/EZKEZ96446156I98IJUH:TJ9NBJNHUEP+MRPOX%JP+AQ5NJ4PFDSH:UP43926/FK4IS+4L +EKY05XKUFOSKSD$BR$SO3MXVAP*FXDHNBQK$SQ7A%JMI0';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.contents)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Klaus', 'fnt': 'KLAUS', 'gn': 'Jørgensen', 'gnt': 'JOERGENSEN'}, 'dob': '1983-01-06', 'v': [{'tg': '840539006', 'vp': '1119349007', 'mp': 'EU/1/20/1528', 'ma': 'ORG-100030215', 'dn': 2, 'sd': 2, 'dt': '2021-05-04', 'co': 'DK', 'is': 'Danish Health Data Authority', 'ci': 'URN:UVCI:01:DK:0EF88044F7935DF2B4A938A38C14C97C#C'}]});
  });

});

