const comicsData = [
  {
    id: 1,
    name: "Spider-Man: Il peggior nemico di Me stesso",
    autori: "Dan Slott, Giuseppe Camuncoli",
    editore: "Panini Comics",
    description:
      "La mente di Peter Parker è morta nel corpo del Dottor Octopus, mentre questi, all’insaputa di tutti, adesso è all’interno del corpo di Peter. E non è tutto, perché ora Otto Octavius ha deciso di seguire le orme di Parker… ma vuole essere uno Spider-Man diverso, migliore e più efficace. In una parola: superiore!",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/m/m/mmust093isbn_0.jpg",
  },
  {
    id: 2,
    name: "Batman: Il Ritorno del Cavaliere Oscuro",
    autori: "Frank Miller, Klaus Janson",
    editore: "Panini Comics",
    description:
      "Sono passati 10 anni dall'ultimo avvistamento del giustiziere incappucciato. Un ormai anziano Bruce Wayne, ritiratosi dalla vita di vigilante, cerca un significato alla propria esistenza mentre Gotham sprofonda sempre più nel caos, ed è ormai la città sprofonda nel caos che Batman fa il suo ritorno trionfale, spalleggiato da Carrie kelly, il nuovo Robin.",
    coverUrl:
      "https://media-assets.wired.it/photos/6390c4eb4b4eff05489817cc/master/w_1920%2Cc_limit/Il%2520ritorno%2520del%2520cavaliere%2520oscuro.jpg",
  },
  {
    id: 3,
    name: "Iron Man: Demonio in una Bottiglia",
    autori: "David Michelinie, Bob Layton, John Romita Jr.",
    editore: "Panini Comics",
    description:
      "Tony Stark deve vedersela con il suo più grande nemico: l'industriale Justin Hammer. Ma il nemico più oscuro e subdolo è nascosto all'interno di se... Cosa succederebbe se una delle menti più geniali venisse soverchiata dal demone dell'alcolismo?",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/m/m/mmust107isbn_0.jpg",
  },
  {
    id: 4,
    name: "Watchmen",
    autori: "Alan Moore, David Gibbons",
    editore: "Panini Comics",
    description:
      "Con il paese sull'orlo di una guerra nucleare contro l'Unione Sovietica, il ritrovamento del cadavere di un ex vigilante mette in moto le indagini dell'ultimo avventuriero in costume rimasto in azione, che ipotizza l'esistenza di un complotto mirato a eliminare i vecchi supereroi ormai ritiratisi.",
    coverUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRZRiRGDQAGHjQhf9buB0u1vW2dbTo7yq30PouMoismoiWP0uCo5Fy38cf20atwBYknhz6sLi4sknzQ8_IkgPieDlzTyInH0Xgg6Ui188B6nv96DP7j67MzfYiwRhsgPLgsAw8oSnE7RQ/s640/0+watchmen.jpg",
  },
  {
    id: 5,
    name: "The Avengers: Civil War",
    autori: "Steve McNiven, Mark Millar",
    editore: "Panini Comics",
    description:
      "A causa di un’esplosione causata da un supercriminale di nome Nitro, un intero paese viene spazzato via di colpo, e centinaia di persone, compresi moltissimi bambini, perdono la vita. Dopo questa vicenda tragica, il governo degli Stati Uniti e l’organizzazione S.H.I.E.L.D., dopo pressioni fatte dai cittadini superstiti e dal resto della popolazione, decidono di introdurre il cosiddetto “Atto di Registrazione dei Superumani”: con questo decreto, il governo degli Stati Uniti d’America avrebbe la facoltà di registrare le identità civili degli individui dotati di superpoteri. La comunità dei supereroi si spacca in due fazioni di fronte a questa decisione: i contrari alla registrazione, che hanno Capitan America come leader, e i favorevoli, capeggiati da Iron Man. Lo slogan della saga è: «Tu… da che parte stai?»",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/m/m/mmust001isbn_0_zqt8gjiovnqc3yjf.jpg",
  },
  {
    id: 6,
    name: "Superman: Per il Domani",
    autori: "Brian Azzarello, Jim Lee",
    editore: "Panini Comics",
    description:
      "Un evento catastrofico colpisce il pianeta Terra e milioni di persone spariscono senza lasciare traccia! Nessuno viene risparmiato dalla tragedia, nemmeno Superman. Ma dopo un anno, l’alter ego di Clark Kent ha ancora troppe domande prive di risposta e si mette alla ricerca del responsabile.",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/M/1/M1POCK015ISBN_0.jpg",
  },
  {
    id: 7,
    name: "X-Men: Giorni di un Futuro Passato",
    autori: "Chris Claremont, John Byrne",
    editore: "Panini Comics",
    description:
      "Cosa accadrebbe se i mutanti perdessero la loro battaglia per la salvezza? L'unica speranza per impedirlo è che qualcuno torni indietro nel tempo e cambi il passato, per evitare un futuro dominato dalle sentinelle",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/M/M/MMUST082ISBN_0.jpg",
  },
  {
    id: 8,
    name: "Crisi Oscura sulle terre infinite",
    autori: "Joshua Williamson, Daniel Sampere",
    editore: "Panini Comics",
    description:
      "Qualcosa che non si pensava sarebbe mai potuto accadere è invece successo e avrà ripercussioni catastrofiche: l’intera Justice League è morta!",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/M/1/M1DCEV027ISBN_0.jpg",
  },
  {
    id: 9,
    name: "V per Vendetta",
    autori: "Alan Moore, David Lloyd",
    editore: "Panini Comics",
    description:
      "Il mondo è dominato da un governo totalitario, e il misterioso V usa ogni mezzo in suo possesso per combattere il sistema.",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/M/1/M1BLMH029ISBNR1_0.jpg",
  },
  {
    id: 10,
    name: "Batman: The Killing Joke",
    autori: "Alan Moore, Brian Bolland, Ed Brubaker, Doug Mankhe",
    editore: "Panini Comics",
    description:
      " In Batman: The Killing Joke, Alan Moore e Brian Bolland ci portano in un viaggio nella mente del Principe Pagliaccio del Crimine mostrandoci quello che potrebbe essere uno squarcio sul suo passato.",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/M/1/M1POCK001ISBN_0.jpg",
  },
  {
    id: 11,
    name: "Kick-Ass",
    autori: "Mark Millar, John Romita Jr.",
    editore: "Panini Comics",
    description:
      "Dave Lizewski decide di diventare il primo super eroe del mondo reale, Kick-Ass. Il problema è che non ha super poteri né addestramento e, nello scontro con i criminali più violenti di New York, ne uscirà con le ossa rotte…",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/M/K/MKKPO001ISBN_0.jpg",
  },
  {
    id: 12,
    name: "Stray Dogs",
    autori: "Tony Fleecs",
    editore: "Saldapress",
    description:
      "Quel magico momento in cui un nuovo cucciolo arriva in famiglia, in realtà è magico solo per noi esseri umani. Perché essere il nuovo cagnolino di casa è un’esperienza agghiacciante. La piccola Sophie, per esempio, non riesce a ricordare come sia finita in questa nuova casa. Non riconosce nessuno degli altri cani che si ritrova accanto. Sa che è successo qualcosa di terribile, ma semplicemente non ricorda nulla... e questo non è che l’inizio di un incubo spaventoso da cui dovrà cercare di salvarsi.",
    coverUrl:
      "https://saldapress.com/imageserver/ereading_product_thumbnail/files/immagini/pubblicazioni_02/00-2025/9791254614587/Stray-Dogs_La-cosa_cover_NS.jpg",
  },
  {
    id: 13,
    name: "Wolverine: Vecchio Logan",
    autori: "Mark Millar, Steve McMillan",
    editore: "Panini Comics",
    description:
      "In un futuro distopico, Logan vive una vita tranquilla con la sua famiglia. Ma un giorno un vecchio amico arriva a chiedergli un favore…",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/m/m/mmust004isbn_0_x8psgvbobujgleyq.jpg",
  },
  {
    id: 14,
    name: "Superman: Red Son",
    autori: "Mark Millar, Dave Johnson, Kilian Plunkett",
    editore: "Panini Comics",
    description:
      "Cosa sarebbe successo se la navicella che trasportava Kal-El dal morente Krypton alla Terra fosse atterrata nell’Unione delle Repubbliche Socialiste Sovietiche? Come sarà il futuro in un mondo dove l'uomo d'acciaio è uno strumento dell'unione sovietica?",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/M/1/M1POCK012ISBN_0.jpg",
  },
  {
    id: 15,
    name: "Tartarughe Ninja: L'ultimo Ronin",
    autori: "Kevin Eastman, Peter Laird",
    editore: "Panini Comics",
    description:
      "Chi è l'ultimo Ronin? In una futura New York. devastata dalle battaglie, Michelangelo è l'unica Tartaruga rimasta. Egli si imbarca in una missione all'apparenza impossibile: quella di cercare giustizia per la famiglia che ha perduto.",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/m/r/mroni001isbn_0.jpg",
  },
  {
    id: 16,
    name: "Persepolis",
    autori: "Marjane Satrapi",
    editore: "Rizzoli",
    description:
      "Persepolis, un fumetto autobiografico scritto da Marjane Satrapi, narra l'infanzia e l'adolescenza dell'autrice durante la rivoluzione islamica in Iran. I personaggi principali includono Marjane, la protagonista ribelle e curiosa, i suoi genitori progressisti, e lo zio Anush, un eroe di famiglia giustiziato dal regime.",
    coverUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbNcPtlyYQk-iGT8kpAsID-Mdmhr9KJUStDhyphenhyphenssTAet8V0hGB3EGYo6hy_BH_UujWwCqdf2jNxJRmLPR7E6IhwzuUgbFBW7JgZxXV_X3MNMDys1gscZYHumCEqOPfckGdjmMwb_Su9M2k/s640/3+persepolis.jpg",
  },
  {
    id: 17,
    name: "Dylan Dog: Memorie dall'Invisibile",
    autori: "Tiziano Sclavi",
    editore: "Sergio Bonelli Editore",
    description:
      "Un serial killer terrorizza le notti di Londra, uccidendo orribilmente alcune prostitute. Si fa strada l'ipotesi che quest'uomo invisibile, mai notato da nessuno sia un emulatore di Jack lo Squartatore. Dylan Dog viene ingaggiato da una collega delle vittime, la bella e spregiudicata Bree Daniels, di origini americane.",
    coverUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYdyGX8Lv2_4JWef0dtIUy2ja2YnMixXTiLOEu2g06g41W9-FWot0RFPMYBimmA7_CQ142A_qbgN6r9JRs_icwkeHlXznhwWc2rZX3shSFgJUtYALKgm40Ygc-LKhxdYHatxH-7kDYRV4/s640/5+memorie+dall%2527invisibile+dylan+dog.jpg",
  },
  {
    id: 18,
    name: "Akira",
    autori: "Katsuhiro Otomo",
    editore: "Planet Manga",
    description:
      "Anno 2019: le grandi metropoli sono state spazzate via dopo la Terza guerra mondiale. Tokyo è teatro di scontri tra bande di motociclisti. La polizia segreta complotta per poter continuare lo sviluppo del segretissimo progetto Akira.",
    coverUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhw6if1f1I8R9z4u_SYjEzbjVJpCuq5-Sg_lHAERkW1odLe0Kr5Cbb3Qo8-BGOn4tcUz-NK5ph-bor5QLTAtZDaz-Aqiu97Pm5nqQkYAZI9i0iitnw5VtLPI6bfjMt4F8ehbIfw1DPw-FA/s640/4+akira.jpg",
  },
  {
    id: 19,
    name: "Deadpool Uccide l'universo Marvel",
    autori: "Cullen Bunn, Dalibor Talajic",
    editore: "Panini Comics",
    description:
      "Cosa succederebbe se tutti i tratti divertenti del mercenario chiacchierone a un tratto diventassero inquitanti? E se un bel giorno decidesse di uccidere tutto l'universo Marvel nella maniera più dolorosa possibile, e con buone possibilità di farcela?",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/m/m/mmust005isbn_0_kmbsjbzmfvvcrbzc.jpg",
  },
  {
    id: 20,
    name: "Swamp Thing di Alan Moore",
    autori: "Alan Moore, Stephen Bissette, John Totleben",
    editore: "Panini Comics",
    description:
      "Prima di Watchmen e V for Vendetta, Alan Moore ha rivoluzionato il fumetto americano con Swamp Thing.  La decostruzione del classico mostro ha ampliato i limiti della narrazione per immagini, in una serie dall’incredibile successo che ha fatto scuola.",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/M/1/M1BLMH034ISBN_0.jpg",
  },
  {
    id: 21,
    name: "Hulk: Hulk Rosso",
    autori: "Jeff Loeb, Ed McGuinness",
    editore: "Panini Comics",
    description:
      "Qualcuno ha compiuto un omicidio, e a indagare sono nientemeno che She-Hulk, Iron Man, Doc Samson e lo S.H.I.E.L.D. Tutti gli indizi sembrano portare ad Hulk, ma non quello che conosciamo...",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/M/M/MMUST116ISBN_0.jpg",
  },
  {
    id: 22,
    name: "SpiderMan: L'ultima caccia di Kraven",
    autori: "J.M. DeMatteis, Mike Zeck",
    editore: "Panini Comics",
    description:
      "Nel corso della sua carriera, Kraven ha catturato e ucciso prede di ogni tipo. Una sola gli è sempre sfuggita: Spider-Man! Ora il cacciatore ha finalmente capito: per uccidere il ragno deve diventarlo egli stesso, a costo di ucciderlo per rimpiazzarlo!",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/M/M/MMUST025ISBN_0.jpg",
  },
  {
    id: 23,
    name: "Wolverine: Arma X",
    autori: "Barry Windsor-Smith",
    editore: "Panini Comics",
    description:
      "Wolverine ha rappresentato molte cose per altrettante persone, ma per qualcuno era solo un’arma… e le armi possono uccidere. Il passato di Logan come Arma X viene rivelato.",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/M/M/MMUST043ISBN_0.jpg",
  },
  {
    id: 24,
    name: "Batman: Il lungo Halloween",
    autori: "Jeph Loeb, Tim Sale",
    editore: "Panini Comics",
    description:
      " Una serie di omicidi sconvolge Gotham City: cosa faranno il Cavaliere Oscuro, Harvey Dent e il capitano Gordon per fermarli? Una storia appassionante ambientata nei primi anni di attività del cavaliere oscuro, che ha ispirato il film di Matt Reeves!",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/m/1/m1blmh006isbn_0_yhy0kivwcnqsh7od.jpg",
  },
  {
    id: 25,
    name: "Kingdom Come",
    autori: "Mark Waid, Alex Ross",
    editore: "Panini Comics",
    description:
      "Gli ormai attempati membri della Justice League tornano in azione per un confronto fra supereroismo classico e cinismo dei vigilanti moderni!",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/M/1/M1BLMH010ISBN_0.jpg",
  },
  {
    id: 26,
    name: "Flashpoint",
    autori: "Geoff Johns, Andy Kubert, Sandra Hope",
    editore: "Panini Comics",
    description:
      "Qualcosa o qualcuno ha alterato il tempo, sostituendo il mondo di Barry Allen con uno completamente diverso! Sulla nuova terra nessuno ha mai sentito parlare di Flash, Wonder Woman e tantomento Superman. Mentre il mondo è in rovina, le amazzoni sono in guerra con gli atlantidei. Come si potrà risolvere il tutto?",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/m/1/m1omni030isbn_0.jpg",
  },
  {
    id: 27,
    name: "Vota Loki!",
    autori: "Christopher Hastings",
    editore: "Panini Comics",
    description:
      " Loki, dio delle storie e degli inganni, si imbarca in una controversa campagna politica per farsi eleggere Presidente degli Stati Uniti… ma una reporter è pronta a rivelare a tutti la sua doppiezza!",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/M/F/MFRST026ISBN_0.jpg",
  },
  {
    id: 28,
    name: "Maus",
    autori: "Art Spiegelman",
    editore: "Einaudi",
    description:
      "La storia di una famiglia ebraica tra gli anni della guerra e il presente, fra la Germania nazista e gli Stati Uniti. Un padre, scampato all'Olocausto, e un figlio che fa il cartoonist e cerca di trovare un ponte che lo leghi alla vicenda indicibile di suo padre.",
    coverUrl:
      "https://www.lafeltrinelli.it/images/9788806202347_0_0_536_0_75.jpg",
  },
  {
    id: 29,
    name: "Bone",
    autori: "Jeff Smith",
    editore: "Bao Publishing",
    description:
      "Serie scritta e disegnata da Jeff Smith che narra le avventure dei cugini Fone, Phoney e Smiley Bone, tre personaggi buffi e comici che, smarrita la via di casa, si ritrovano in una vallata sull'orlo di una guerra per l'esistenza stessa del mondo e della dimensione onirica della realtà.",
    coverUrl:
      "https://media-assets.wired.it/photos/6390bac01a41af228720cf45/master/w_1920%2Cc_limit/Bone.jpg",
  },
  {
    id: 30,
    name: "Saga",
    autori: "Brian K. Vaughan, Fiona Staples",
    editore: "Bao Publishing",
    description:
      "Marko e Alana hanno combattuto per opposte fazioni in una guerra millenaria. Ora combattono insieme per proteggere la famiglia che, insieme, stnano costruendo. ",
    coverUrl:
      "https://comixrevolution.com/wp-content/uploads/2016/06/COMIXREVOLUTION-SAGA-1.jpg",
  },
  {
    id: 31,
    name: "Ant-Man: Una Seconda Possibilità",
    autori: "Nick Spencer",
    editore: "Panini Comics",
    description:
      "Scott Lang è Ant-Man! Okay, è anche un ex-carcerato che ha rubato il costume a Hank Pym… ma non è importante! Quello che conta è che Scott Lang è un eroe e un padre, e che ha un’occasione per dimostrarlo a sua figlia",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/m/n/mnowg019isbn_0_5owuwnsp8p7w4hr9.jpg",
  },
  {
    id: 32,
    name: "Il Pianeta delle Scimmie: La caduta dell'Uomo",
    autori: "David Walker, Dave Wachter",
    editore: "Panini Comics",
    description:
      "Sono trascorsi anni da quando il virus ALZ-113, comunemente noto come il virus della scimmie, di è diffuso e ha devastato la terra. Uomini e scimmie potranno mai tornare a coesistere oppure ogni speranza di pace porterà ad un vicolo cieco?",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/M/P/MPOTA001ISBN_0.jpg",
  },
  {
    id: 33,
    name: "Asterix Legionario",
    autori: "Goscinny, Uderzo",
    editore: "Panini Comics",
    description:
      "Al villaggio dei Galli giunge all’impressivo la bellissima Falbalà, in visita alla famiglia di origine. Per Obelix è subito colpo di fulmine, ma purtroppo la giovane è già fidanzata. Anzi, il suo amato Tragicomix è stato costretto precettato forzatamente nelle file di Cesare per combattere contro Pompeo l’Africano. A quel punto, a Obelix non resta che mettere da parte i sentimenti e arruolarsi a sua volta, insieme a Asterix, per andare a salvarlo",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/m/a/maspe004isbnr_0_xym7vhnsmon9hjsz.jpg",
  },
  {
    id: 34,
    name: "Marvels",
    autori: "Kurt Busiek, Alex Ross",
    editore: "Panini Comics",
    description:
      "Il capolavoro pittorico di Alex Ross (e Kurt Busiek) è un inno d'amore al senso di sublime che possono generare i supereroi. Ripercorre decenni di storia dei fumetti Marvel visti attraverso gli occhi di un normalissimo fotografo che, come noi, solleva lo sguardo al cielo per veder sfrecciare le meraviglie in costume",
    coverUrl:
      "https://media-assets.wired.it/photos/6390c43bc6571e32917bcf0d/master/w_1920%2Cc_limit/Marvels.jpg",
  },
  {
    id: 35,
    name: "Jessica Jones: Alias",
    autori: "Brian Michael Bendis, Michael Gaydos",
    editore: "Panini Comics",
    description:
      "L'autodistruttiva aspirante Avenger, adesso proprietaria e unica impiegata della Alias, una piccola agenzia privata di investigazioni della Grande Mela, è diventata una detective specializzata in indagini sui superumani. Quando una misteriosa ragazza in costume si nasconde nell'appartamento di Jessica e scappa prima che possa identificarla, viene presto a galla che si tratta di Mattie Franklin, cioè Spider-Woman.",
    coverUrl: "https://www.comicsbox.it/cover/JJONESALS_P_001.jpg",
  },
  {
    id: 36,
    name: "Il potere della Speranza: Shazam!",
    autori: "Geoff Johns, Gary Frank",
    editore: "Panini Comics",
    description:
      "È uno degli eroi più potenti del mondo… ma come aiutare un ospedale pieno di bambini malati?",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/M/1/M1LIMI008ISBN_0.jpg",
  },
  {
    id: 37,
    name: "Moon Knight: Nascita e Morte",
    autori: "Warren Ellis, Declan Shalvey",
    editore: "Panini Comics",
    description:
      "Risvegliatosi in un ospedale psichiatrico senza alcun potere e con anni di documentazione medica a sancirne la salute mentale incrinata, Mark Spector è costretto a rimettere in discussione tutto ciò che sa della sua – o meglio, delle sue - identità.",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/M/A/MADEV075ISBN_0.jpg",
  },
  {
    id: 38,
    name: "The Sandman",
    autori: "Neil Gaiman",
    editore: "Panini Comics",
    description:
      "Sandman segue le avventure di Sogno, conosciuto anche come Morfeo, uno dei sette Eterni, esseri sovrannaturali che rappresentano concetti fondamentali come il Destino, la Morte, il Sogno, la Distruzione, il Desiderio, la Disperazione e il Delirio.",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/M/1/M1POCK008ISBN_0.jpg",
  },
  {
    id: 39,
    name: "Venom: King in Black",
    autori: "Donny Cates, Ryan Stegman",
    editore: "Panini Comics",
    description:
      " Knull si sta dirigendo verso la Terra, e gli unici due ad accorgersene sono Eddie Brock-Venom e suo figlio Dylan: entrambi, d'altro canto, sono legati al Simbionte. Ma il dio dei simbionti è un avversario troppo potente per un solo eroe...",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/M/F/MFRST067ISBN_0.jpg",
  },
  {
    id: 40,
    name: "La Fenice",
    autori: "Osamu Tezuka",
    editore: "J-Pop",
    description:
      "La storia si concentra sull'entrata del buddismo in Giappone e sulla sua elevazione a religione di stato che si scontrò con le credenze animiste delle popolazioni locali, fatti che secondo Tezuka hanno scatenato il conflitto di successione tra Tenmu e Kōbun.",
    coverUrl:
      "https://j-pop.it/media/catalog/product/cache/0fce347a229fe340c0e2cb216351ccba/1/6/16la-fenice-001-libro-dell-alba.jpg",
  },
  {
    id: 41,
    name: "Silver Surfer: Parabola",
    autori: "Stan Lee, Moebius",
    editore: "Panini Comics",
    description:
      " Galactus si appresta a condurre alla morte il genere umano, che ora lo venera come un dio. Sul suo cammino c'è solo un ostacolo, colui che egli stesso ha confinato sulla Terra: Silver Surfer.",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/M/M/MMUST068ISBN_0.jpg",
  },
  {
    id: 42,
    name: "American Born Chinese",
    autori: "Gene Luen Yang",
    editore: "Tunuè",
    description:
      "Danny è un ottimo giocatore di basket, un ragazzo molto conosciuto a scuola, ma ogni anno, dopo la visita di Chin-Kee, è costretto a cambiare scuola per sfuggire la vergogna. Tre storie parallele destinate fatalmente a congiungersi in un graphic novel diventato un caso letterario a tutti gli effetti.",
    coverUrl:
      "https://media-assets.wired.it/photos/63920a352a190e72487e6635/master/w_1920%2Cc_limit/American%2520born%2520chinese.jpg",
  },
  {
    id: 43,
    name: "Habibi",
    autori: "Craig Thompson",
    editore: "Rizzoli",
    description:
      "Lei è Dodola, venduta come moglie ad uno scriba e poi resa schiava. Bambina, poi donna, poi madre, prigioniera in un mondo di uomini. Lui è Zam, orfano che trova la salvezza tra le braccia di quella ragazza che lo crescerà proteggendolo dal mondo che li circonda e viaggiando insieme, in un mondo fatto di storie e mitologia islamica. ",
    coverUrl:
      "https://i0.wp.com/www.gamesacademy.it/wp-content/uploads/2020/12/habibi_volume_rizzoli_lizard.jpg?resize=358%2C503&ssl=1",
  },
  {
    id: 44,
    name: "Le straordinarie avventure di Penthotal",
    autori: "Andrea Pazienza",
    editore: "Coconino Press",
    description:
      "L'esordio di Andrea Pazienza è folgorante, allucinogeno e scandaloso. Un'opera in cui si parla di tutto e di nulla: il movimento studentesco, la droga, il sesso, le irrequietezze, i sogni e i deliri degli adolescenti. Una serie di racconti che escono dalla pagina e riportano in vita un'epoca e un luogo ben precisi: la Bologna degli anni '70",
    coverUrl:
      "https://media-assets.wired.it/photos/63920e5a2cba13061863d9f6/master/w_1920%2Cc_limit/Le%2520straordinarie%2520avventure%2520di%2520Penthotal.jpg",
  },
  {
    id: 45,
    name: "Scott Pilgrim vs The World!",
    autori: "Bryan Lee O'Malley",
    editore: "Rizzoli",
    description:
      "La vita di Scott Pilgrim è davvero niente male. Ha ventitré anni, suona in una band, si sveglia all'ora che gli pare e ultimamente esce anche con una tipa carina che praticamente gli muore dietro. Ma da un po' di tempo a questa parte c'è un'autostrada dell'iperspazio che gli passa dritta attraverso la testa: a sfrecciarci da un capo all'altro sui suoi rollerblade è proprio lei, la misteriosa Ramona Flowers, appena arrivata in città e già pronta a rubargli il cuore. Chi è Ramona? Da dove viene? Perché i suoi sette ex fidanzati malvagi si sono alleati per impedire a Scott di conquistarla?",
    coverUrl:
      "https://www.lafeltrinelli.it/images/9788817095839_0_0_536_0_75.jpg",
  },
  {
    id: 46,
    name: "From Hell",
    autori: "Alan Moore, Eddie Campbell",
    editore: "Magic Press",
    description:
      "I delitti di Jack lo Squartatore narrati in un'opera brillante a metà tra ricostruzione storica, ipotesi complottistica (ma ragionevole) e thriller cupissimo. ",
    coverUrl:
      "https://media-assets.wired.it/photos/639214d8649e18f57c178fb4/master/w_1920%2Cc_limit/From%2520Hell.jpg",
  },
  {
    id: 47,
    name: "All Star Superman",
    autori: "Grant Morrison, Frank Quitely, Jamie Grant",
    editore: "Panini Comics",
    description:
      "La trama verte sull'ultimo anno di vita di Superman, colpito da una massiccia dose di radiazioni solari, dopo aver compiuto un salvataggio sul Sole, che hanno sovraccaricato le cellule del suo corpo, innescando un processo degenerativo che condurrà Superman alla morte in un arco di tempo di dodici mesi.",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/M/1/M1POCK002ISBN_0.jpg",
  },
  {
    id: 48,
    name: "Daredevil: Rinascita",
    autori: "Frank Miller, David Mazzucchelli",
    editore: "Panini Comics",
    description:
      "Karen Page ha venduto l’identità segreta del Diavolo di Hell’s Kitchen, e l’informazione è finita nelle mani di Kingpin! Matt Murdock ha toccato il fondo: fragile come non mai e in preda alla disperazione, riuscirà a trovare le forze per reagire?",
    coverUrl:
      "https://www.panini.it/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/M/M/MMUST033ISBN_0.jpg",
  },
  {
    id: 49,
    name: "La Lega degli Straordinari Gentlemen",
    autori: "Alan Moore, Kevin O'Neill",
    editore: "Bao Publishing",
    description:
      "Mina Murray, Allan Quatermain, Dr. Jekyll, Griffin l’uomo invisibile, il Capitano Nemo! Il più straordinario gruppo di avventurieri, nella sua prima missione. ",
    coverUrl:
      "https://media-assets.wired.it/photos/6392155dc05d74dd580c82cb/master/w_1920%2Cc_limit/La%2520lega%2520degli%2520straordinari.jpg",
  },
  {
    id: 50,
    name: "Kobane Calling",
    autori: "Zerocalcare",
    editore: "Bao Publishing",
    description:
      "L'opera più matura di Zerocalcare, un reportage giornalistico che unisce lo sguardo disincantato dell'autore romano, il suo senso dell'umorismo e l'attivismo che da sempre lo contraddistingue, per testimoniare la difficile vicenda dei curdi nella città di Kobane assediata dalle forze islamiche",
    coverUrl:
      "https://media-assets.wired.it/photos/6395f46a30c7aced21fc43dd/master/w_1920%2Cc_limit/Kobane%2520Calling.jpg",
  },
];

export default comicsData;
