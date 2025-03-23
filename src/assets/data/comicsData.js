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
    link: "https://www.amazon.it/peggior-nemico-stesso-Superior-Spider-Man/dp/8828776935",
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
    link: "https://www.amazon.it/ritorno-del-cavaliere-oscuro-Batman/dp/B0DK815WGP/ref=sr_1_1?crid=287IFSPI03DF5&dib=eyJ2IjoiMSJ9.Ur82Bxsjcu9D9YewnNot7OdNXo4N6Z7ar1TXS3gQ8kEgJWEYMXazyhvyJsi_gSULaDGCra66pn-jbjKFpL4viy9AGOpwJ-pjr4xXFahA056JzvVmQe8SpkeJJgxgCIIQhTH7uRcs3KvoI6QQEx1E7H01v56O52lQhYpIRzbWEPlDgyzl19Tf5_8Jy73Gh1BQYiQhk8g9yHiZ7NTNt1uOaQGI7387mtuyt9gjec01MIE.O2qbnxu6ePheCLFF2bI9qQ_HUPacg_BCaoMZUwLH2cA&dib_tag=se&keywords=il+ritorno+del+cavaliere+oscuro&qid=1742742469&s=books&sprefix=il+ritorno+del%2Cstripbooks%2C92&sr=1-1",
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
    link: "https://www.amazon.it/demone-nella-bottiglia-Iron-Man/dp/8828794097/ref=sr_1_1?crid=1FPRW1XLB3L6H&dib=eyJ2IjoiMSJ9.KFaq6kTkFk0ItQLnL2bzcyYVpZkw32sNYrYRTL27GrVHiX5BbUE7MhzJ7uhNeB45X3KNzc6fCJHWJcE1Qqt9NxPHGm6KJPF4mNwE-MQRdGBI67DdlzrdMvobNwAy1X1m.LPZr1huzukANr2yJJ_Bt9F5_MPCeIm1aX4bmLO1Zk6o&dib_tag=se&keywords=iron+man+il+demone+nella+bottiglia&qid=1742742521&sprefix=iron+man+il+dem%2Caps%2C79&sr=8-1",
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
    link: "https://www.amazon.it/Watchmen-Alan-Moore/dp/8828723556/ref=sr_1_3?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=XG0TI1T20STM&dib=eyJ2IjoiMSJ9.DuPvznknRINHyX1qRREWfMQ-wcb39RNh-slRvSqHxpKtxfdFaI2b6-QYNU_xRMGD13LMioQDnMBFgG8m7_P_GEYBDnl5XUMNeT9R8ZYVoRBUodf5Mjjd3vxETxn9psFheYsa-zY-6DFmuOMky1S6viBztgAOLR2oNxQpL7qlJhW62zPUNEI0OIo4XtkYbjWf1hEVZcm_Kr994TMKG9GAA8B9d0y1jI15-ynwxqE8zDQ.MZaDoOB-Kz-hPzJps_Fyeed3pfIPnhGKGm186M6hIFQ&dib_tag=se&keywords=watchmen&qid=1742743435&s=books&sprefix=watchmen%2Cstripbooks%2C98&sr=1-3",
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
    link: "https://www.amazon.it/Civil-war-Mark-Millar/dp/889127626X/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1X7AABBHB2S5M&dib=eyJ2IjoiMSJ9.fj1uTgpW_xuKShHkFvkmSsIg3KKt2OZoo4zUcZdgSP7yOqW55lA56owBXT3lFkfOgo62FPUSVA3AxIGxN-OOENwAlOuT2hJiA1EvWrDT32J6-pzyKZZlTPcBUQXwrUUqnPXSe0p20LDH7Jd5wb6A9bOXnWdz2E0y0y0Uzexqd-BT79aypTsdhninyKbFH6GLpo3zJvCI7Jm6fDUIfCzL-VeCFTPPPO6dx4kyN4m8WZQ.0jfNcnavh1Bb3pp5P81ezaldztQJnbtd-Si4aWjapv0&dib_tag=se&keywords=civil+war&qid=1742743466&s=books&sprefix=civil+war%2Cstripbooks%2C84&sr=1-1",
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
    link: "https://www.amazon.it/domani-Superman-Brian-Azzarello/dp/B0DT51HTS9/ref=sr_1_1?crid=2OZ3A1I62QFT9&dib=eyJ2IjoiMSJ9.cNE6wOndAGOMtaw6efv3kA.gLaWtAr3dzacq61qj8P7p6Rs7ViI78FdrRBNy5y3Cdg&dib_tag=se&keywords=superman+per+il+domani+dc+pocket&qid=1742743523&sprefix=superman+per+il+domani+d%2Caps%2C71&sr=8-1",
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
    link: "https://www.amazon.it/Giorni-futuro-passato-X-Men-Scatasta/dp/8828752874/ref=sr_1_1?crid=FESENWAISHRW&dib=eyJ2IjoiMSJ9.g7XIxbXm3XaIrBQcxVz3sF9S-JS2tfQ1907yZFwbSWCitaBo9j6kNF-s-9GewoFhM8PSLLOjafz_jaiiSAhYyy6I15yBKtU6UDzpalDqsJ16llsOqbw2H-L56u0QQWPcryNeIQ1W5c1tMLil4ZWPDwV1p-HkWg4vlXXBKk-srA6m0E8H9X7AL-PM9XTHKDcp9jDgI7YDIrQ-nHrxw7RVgSsMJMgK89soPcu6MP6vY7s.Tw3rxriI9Iy32o8AwH2Oy7d7grQi34Uy0o8_EP_DGag&dib_tag=se&keywords=giorni+di+un+futuro+passato&qid=1742743540&sprefix=giorni+di+un+%2Caps%2C96&sr=8-1",
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
    link: "https://www.amazon.it/Crisi-Oscura-sulle-Terre-Infinite/dp/B0DN6BB53F/ref=sr_1_3?crid=3KXSPMTDH3POL&dib=eyJ2IjoiMSJ9.aW4c5Xm4BFDSrQ2hdJA3hlznJtA8dWySzcIgKTmHRdYhVpfte7DZAXjOX1H7sgL4mU99aL-muLfubf6v5M5hG6UFSrtY3KBT5dUc1rhjQUDI9GFyfVtyV6_TVa99pJjQG2Xh_k1bGdy835uF9P-QFHoc_3z4jKo4QFkRWAeiGCPbCYcoup4ZIHpBBfgC-CySjg_y4qOsBWVr1ieUURvsHvxU9c6KhbrayLu-wWM9d90.HSe-4_cp-a-l_s0rp_yUHXI_ZIBhbW4Uh3VZo0bn1D8&dib_tag=se&keywords=crisi+oscura+sulle+terre+infinite&qid=1742743989&sprefix=crisi+osc%2Caps%2C101&sr=8-3",
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
    link: "https://www.amazon.it/vendetta-Nuova-ediz-Alan-Moore/dp/8828784164/ref=sr_1_1?crid=2E4O3TAD4QGKL&dib=eyJ2IjoiMSJ9.sfZJkpP3XaMXDroxaf1YazsF2kMcFe-6I4Cvv2GP7paY-bR1Pxg7fI-F3wclizX-2mwAmimTjGvQPL2Gsgi5nRC6XRhiqL1k-QnbAyoMH3LjHQy295YmgdM_ptrobiZ725pH2_TWFUABdqesJFxBCAob6ECFW4KzvjSfEp7MxBYcXbBq6t45YK2DWJyCJiO0B6uNp95ivKNet_-GETjQ1mA9w9dCFJJisVBmxS_S1Td6WqaPO4xEFilCJZ9WYUb6wKluvXTEfF-ueee4_weQ0Ywbt5gfxwm_p8ZvxDEru_FVBXsiiCOi-RRP1SwbqeSpNApadLsDXLFXjFQVVs-tM-3hK_HSnSNtAOGWGlqoadqQj1vuyUpquXXRlUK09JBQEfXtzUhrtKzwOhZG4_-BwP-iaoA1YjV3BpcQ8xwtPmA-Zy0LUZEhryKScCGBySBN.SFQ4sxA8Sb2T0wCmTxYaDhEXRoKnzN0usPFwq2NQtuk&dib_tag=se&keywords=v+per+vendetta+fumetto&qid=1742744117&sprefix=v+per+vendetta%2Caps%2C94&sr=8-1",
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
    link: "https://www.amazon.it/killing-joke-Luomo-che-ride-Batman/dp/882878296X/ref=sr_1_1_mod_primary_new?crid=5R1TND9NE28R&dib=eyJ2IjoiMSJ9.-ylFtulgfd6SyhPOMcbzTKA3hOCgfkMfUdpXF1Aa7BPMBp5QSjeJilnE3buH7sSxHcrqPwkZIn3YgG9j7gZXqvxndR_aAe4TUtbOnKrpnRAGLQKAD7K_hFRDCs1X9jFXROUd3eTsYysDCdy59Hin6UCZ3cPIZZGjC3kVQynrnygf72tcLvAu0QeAZyAdd3vD9A2Vuqm0jXJhVgVdyikujMpCOeFRHQhUv4Ye5wUnd9bZPaWw7KeQG9cZyJ23fmUw8S-7xAjukIYGBTjfdO4lj1nPoL63DoS7WxYyy0-gLYMPZjtDEzhRXVQxaFIlqqKT6w1JgJLbjPgQ_Wa2XG1EyFYzmkSOiZpgEzYlj8oepwIEDy36aGF6OFg45Kdl0JeYoVQbAdcdFZFy2heiaekB1fwnTYvw4RXi_zU0BuvC86sJYxaP0BVnIB82p9ROic5i.JTdOHlTvATSZ-4a-aiVjioy_I4kQQ3FPq5nqDNxp7PA&dib_tag=se&keywords=the+killing+joke&qid=1742744159&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=the+ki%2Caps%2C95&sr=8-1",
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
    link: "https://www.amazon.it/Kick-Ass-omnibus-Mark-Millar/dp/8828756926/ref=sr_1_4?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2ZBSX3XO2JP0E&dib=eyJ2IjoiMSJ9.R_dpBTgAg8Su4cQqtYmRIBhfeaI3m-ZvY6SfziET4pvOrC6fWobsDsSHHRGsecQ318lLsBb45sW2bguwsboOaxB66QW0TKkunlIBqPRT9dPwmuWGppkvHkxWrbZ3f2KGFfjVWQzlzyLPMR8ppVPXvca0i4LFuyieTwenUcYuwWn0HFg-Pu46uo4U4fxrU_pyDrS-T5GdGZy_wYVR-12egz0ZHXJMIV3dzTs_fD6fzAN2Xdj5fcxAtbpkRTs3u7w37YaA5SLNBVPi3yn3QZUCb0iowpuCnC33uscjwytOjUcTmHHspzO0DYBSyKcQj-_CzGlD2I_fque6-GLPcOOfNtk0zOqTfP0FqfiobWeueLDm11_aU12Gz3sZJLxcDJa1ygkYhXK88QOkomsTzesNnYqZ5Bvf2trXSIfDqLemTLV3_06dLcUkrmAgEAIK1Uw-.rclFsmjGRwZKADGmlRee8RGCzHMPgo0aoqprMeD5CJA&dib_tag=se&keywords=kick+ass&qid=1742744193&sprefix=kick+ass%2Caps%2C91&sr=8-4",
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
    link: "https://www.amazon.it/Stray-dogs-randagi-Trish-Forstner/dp/B0DH9Z1R56/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=PGPF6VJH07X6&dib=eyJ2IjoiMSJ9.f3uJC0qrZUUJIYm2O__t1RCKitYuzOHawVYxIUHBQhgyyCvjQR3C73eksAc62Gqoap_jqKGrwLToxRhLDDIgKCgBYIu9WZ8weYRZwSIQEm10oA9KSSE5p9H0LXE0snQp_ECtdw0elAq3Yso1VfE1ssxuUqyeBch0y6Vssx-3MkSsxkXDzXd-CXluzGuzKuUmxrG7e-Y-4miGoPKDjdx-BIlldxid8bHeicX0EQorS39Troql9yAPIb3kY8n2GFhXBjqIJ5XCBRvObpWLOzitby32YYJmYfBACW6_rlfmuPGECCDMU-Xo51GV6kk3kGzumLwNwil7Sthun0ZHiqTQxjwjS2KSABdZ9Z3NegFoy_uTWYfB__HQLufjAzPlzjzo4pN65rCmqePhUUEbtuR7FO5QGavdfTCiFdaTKZsIUM20aCYTayv2ON2MIqIDSimm.B6_trzjfaKet7A5igwLsnT3app_oWRg5JIhrs1y5E8A&dib_tag=se&keywords=stray+dogs&qid=1742744221&sprefix=stray+dogs%2Caps%2C88&sr=8-1",
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
    link: "https://www.amazon.it/Vecchio-Logan-Wolverine-Mark-Millar/dp/8891276227/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=34XO6F5JRBNEH&dib=eyJ2IjoiMSJ9.wMBfxQ88VA0_aL8hYQhWZI8jHb6LvCdMTTkQ65NJMbbX0OXRZ3daU8kqLSCuYPBlUc4DK0dRJmOAg0rnjM9zqPREYiVdyIHDezS6_NOVXk26lXui1JHt6iNuxXedWt4x9rcxUGO_bVNMrezFoKZK_-3NB3MdamRLNA61wjiWVsLC_nIOutk7mtj3zPSHYrg6R_xpA09nnhjbRin9PDpNA-mn847BKFBPnyE5cJhd713DUUOYKUjFlMsZWCv6aWY9iS3rdRScoPp-n6CzYvdhWv35Xm2xJuuKwHj6dpeA1SuXQ8oE4XnwxslawZjbZS35Nefdw19jeRJTF7AFsiW86tJWC14SeXqcua4PUGOpNMkJl4tOuMmcUg3w9nbmaDAk1gK_byLzo3FA3VeCYtxTQzaUzDtFa8ChOxV-kmrhvh_4BTNWdBfsUtrhOL1WLr3t.iA0k-V-nUJfeBtAYdzJ72Bwz4E2lTE4u1QpB508BzEM&dib_tag=se&keywords=vecchio+logan&qid=1742744257&sprefix=vecchio+logan%2Caps%2C95&sr=8-1",
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
    link: "https://www.amazon.it/Red-son-Superman-Mark-Millar/dp/B0DK6567L8/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1ER2T3TG0WYYW&dib=eyJ2IjoiMSJ9.r-FGcdXBDxAIovZxRTEyaGWuJ0_6aoI_RYcg0SAg5NhbZsgaKrlmRrwTUn9qNWYrRS2WP8O-GYO2lp6DkgEkiVUIL_GjJlX_rb_qHchvS4M95jOEtGkXOiR9sUDa36hFWhJ9l39VZmhuwBVO0Hz3MlfnEkAkZO_ng2zOyFASgXJ7vOasB691efOLwlxo0yWIfm-Pp1sNhPhhO_yrlq_qydlVu5i0aYi4nHlnyFWQDPMXLavX07WyqYD8s9XjyuAg02it8tZtF_664KjLRy2eCnvyOrmpc_bnFpgCfFPrdTU1W7tGVEGX3gcMR5NX0F6ylogwi8HbBCUQ3IuBv9QJ7K6ol2uNkYUpp5XA6NkZAIleGDSL7LVT1hRVB1dd0nRN_2-m5nxSR28BF1ZGpoc2W_THEtXY64Q6pDIa6PNQ2-GfsYowrUfGpgBa_CIzpbQV.oEnbkeflM3bVOFmqSn25SNPMOltpASiU67CrqeQ6KVI&dib_tag=se&keywords=superman+red+son&qid=1742744344&sprefix=superman+red+son%2Caps%2C106&sr=8-1",
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
    link: "https://www.amazon.it/Lultimo-Ronin-Teenage-mutant-turtles/dp/8828750154/ref=sr_1_3?sr=8-3",
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
    link: "https://www.amazon.it/Persepolis-Ediz-integrale-Marjane-Satrapi/dp/8817034770/ref=sr_1_2?crid=3KRBBWDABYXYW&dib=eyJ2IjoiMSJ9.vyqQq-hrxFGkY600dxLcqS8kqr7oNXZADpA8WN3B9D_p1oC1emH49Fj7GahGLijJDWvAV6L27m_hyk_6TO5x3HVha10qangUFiDMLyf_SugP0B0fUhna18U3qgQzZHMqFyds8W_cqsoI1423E0Vh9oUrKnvIS7L28cSMyFIew18i6-UB0oTulwCUXR9kvjqrXSkIm8Hq7QGHAZrGAmRSky9mckAozSubDeVa2XA-Ie_71ccez3xRLV9kRlPJqDGqUjqMTId_jFaELJ9idtaS-a6AjUcGBfE56U16t8itnnZGu-L8SWpzAxHAfSd5g1pv5bevT-bRFpy3IvXylvqZz8vjVnCjccjgokOyNlg4zqY5WT51d6dVeyivD2xiV-TT9qCJwL6LQ1gqWCRgop_7zCtZWYL6VT9njTSuM7oR9tab-zrzjbtAZc58sLL4n4Aj.Ock0kY0MknnBVs4P0X7Mghce0UhHxak_ysZmngqWUtM&dib_tag=se&keywords=persepolis+marjane+satrapi&qid=1742744490&sprefix=persepolis%2Caps%2C96&sr=8-2",
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
    link: "https://www.amazon.it/Dylan-Dog-n-19-dallinvisibile/dp/B01MXH22AC/ref=sr_1_2?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2XLDP4L64BEGP&dib=eyJ2IjoiMSJ9.mevg7pVyxophmVsMuduizJsIJR65fdKwYQixHRwX9qmyX1PjpvG_VCRfUX9RvHCC3MU2bi25a5zknea08_iJu8vRoQs-OUKoMGq5Wgcavs4ovZFDCGnm4v574YzpldkuuzrXxlnclbb49wURyDTjSQ.EmDVU2I3lUJbcsyIEwB8sbVkGuW26oFLjgOhEWhbAvA&dib_tag=se&keywords=memorie+dell%27invisibile+dylan+dog&qid=1742744532&sprefix=memorie+dell%27invisibile+dylan+dog%2Caps%2C82&sr=8-2",
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
    link: "https://www.amazon.it/Akira-collection-Vol-Katsuhiro-Otomo/dp/889129358X/ref=sr_1_4?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1GCVYQ8QZU1K8&dib=eyJ2IjoiMSJ9.Jd0Pi57Wac9vjlJc-ujKBbMU3DpkNv1mTNgHSLcXHHeQgmN6uUJL0PhfddT8UCl5Y_dGXaApliwTJ8ODVJ7LYQxaQEtMep2DLeBGhZOEOIpKWatmWJNTMaUHW9lwanuivSWSrwtxaAl7m5aonZ-5Lh-5JUwSCmig9_WPWaJTj2Ka6WuPRYcB0kOk9W8HqQBu.IrsV8S-MgLlQw8Ly_rQAJUu7vHG3prnWZ8ICciMHJTc&dib_tag=se&keywords=akira+collection+1&qid=1742744580&sprefix=akira+collection+1%2Caps%2C90&sr=8-4",
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
    link: "https://www.amazon.it/Deadpool-uccide-luniverso-Marvel-Cullen/dp/889127819X/ref=sr_1_1?crid=12SRU594DGPDQ&dib=eyJ2IjoiMSJ9.bexhl83KKQ5adtXEnhRqO5hoSrrnm4cXXwiRb4oM_XnKRVYQvVCn59vLRaACpVFi6agEzqgCaBKoiUOgGWHUcsmAOHJoSTFBYYCxsyQ8fJns3lH1uO2e276d9G-K_JiT4I4MMKLGeIfs9QdgZywD_XOZuW1ta5LtJRJ3ulrW7S9eICaZW1Ntfmvo4tUCzxvD8yfDKspzqhee-NeDHND9iBhDPNegDoE4eZZUg51hB1FR3qCGkIn7jxFzhhJEZGDJu3xJcTn8vOBYfHpVp8pnK4OxdTw_khFIcTBEZYcOcsMX2KNCYhlEHDm_CNLi-mza0bAMXsKbbINSvpbWZL2YDVVMUcwMVlPlip_KyDkDSWDJXMxiDVkZBPJ06aa9M0upl0lu8x_5A6PQEH23Mowv4UFzP3mfu98ufxbr9rf30Q6VUH5lNC7U9Z-bZkS_Q-GH.ZjCHPyPS1pm0J4gq3oWiNw-jXdUqzqL-2p1ji57_KPg&dib_tag=se&keywords=deadpool+uccide+l%27universo+marvel&qid=1742744635&sprefix=deadpool+uccide%2Caps%2C91&sr=8-1",
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
    link: "https://www.amazon.it/Swamp-Thing-saga-Thing-Vol/dp/8828797355/ref=sr_1_1?crid=2TFW5DMN1K2O8&dib=eyJ2IjoiMSJ9.6tM6GC1-2vadQZ03tx3P1hkfcnJ_oURlGkm62iGUl5Hy-dfv2fmtTNFZTgOoRQ0UHIA-44esHXDQh6a5v1ZX8PATHpx2CS6e8oIDbvDflXi0PLxY_GdzAjbynsZ7L20ABlMYn8DkteYZgpX4BtT94pNYeCcjRDn7uFtOUH7LtUjXvxTSCju-bmAVJ61dIrc5eUXgBNmra-lZk5PvQobWsXecuixci2U2rHNpQE5fh_kDMVdIdOJ_qJlZsk3pOew2RhswYNmQZrIvEln9Ot-9UTQQFUb8CkDMcg5Hhe640YMjz3Fya1xp8qRl0Kp5fUajYPP36XX3nGbWlsCy0XnjdMP_9uuFKngEEdTw1OLVM2SDjOvhIo2-vd2CIpVKH2KIx6uz4EVnwePYhSIMkbNDMJ29-TW4aGdlm_JLmwKFbaoxgnv2nJ06u7-1zcY21oQ8.Yi5SQ-6TsM-bI1zWPTzfKKcpJMIs_wxfth-xT4LF01o&dib_tag=se&keywords=swamp+thing+alan+moore&qid=1742744663&sprefix=swamp+%2Caps%2C115&sr=8-1",
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
    link: "https://www.amazon.it/Hulk-Hulk-rosso-Jeph-Loeb/dp/B0DK8244BC/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2TRQQLJ1Z72ZM&dib=eyJ2IjoiMSJ9.OxWZYJM88ddXXBAr-CVIVViZMDtx0tTG14qMB05CcWtU1AXG9ByYNGM-py2CCjsCQJUg7J5nsOi3bvX4T3DSKKDHMKoLEdt-0sOzF-aMGIjrkdpOA3osW30XDsSsE1HId9ljR5li8mQytFrdk-jlvwolkjn_DecFcXCLSMz9k3fDscKuN8rd8y1f_Ckd2bmoPRYZ4vhc4Mep_M9-HnSDDiw0-sgyFdY9qy70symKbTQzxf0Fb5aXFHxETwKOmhv5rvZnRvgtiSmSDfpz55TVNmBzS45kFiUcp7aMIBQMYOm4Ns1cjM6A5vGGVGdItkOAWr-RzxPMFTILqg3b_BFqDAPJvjdOBpRJ_0U_81G7dNdVYroWmreAvc5gY63PQ5HfzjH9EMJ5tm2xOvRcJ80N4mwxHEVK6SmE9zd9EDSlP6i6GlfiyA9I7VV0CZZEcd3G.TFm_uytjHNfARch1rWGYnrdLup-A9j8m-DBGDE1FzZI&dib_tag=se&keywords=hulk+rosso+fumetto&qid=1742744693&sprefix=hulk+rosso+fumetto+%2Caps%2C83&sr=8-1",
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
    link: "https://www.amazon.it/Lultima-caccia-Kraven-Spider-Man-DeMatteis/dp/882870179X/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3H7GX79FIQGX3&dib=eyJ2IjoiMSJ9.s_zPv_jGKNS6O_F_eSHMM4f4hgM6nS1yHGiG2DfU8pExpFWEM7WXVSP93PJKf2ducJ5e5mQ1_OKlmPBLLN0LXcQKqaDy_kvrrBPd_myxfJPXcZ6fclbrDugJtZA78DesZTUlFT_tEukAR0a-Najc8nkBiMSloWqvSPiigPmzmH-lX0C7iTcLnx_eFShI77PiR25KtnRVPm_rjhSnfWFmLnKMfoc38burG5ahDCcLDFM2aAvnpIxszq48EMQs7cqLwq09vwWjvGAtEwH89-XfRkl3hbW-LoUYQMqpAHvW8fNx-UoVqNaW3YuYFOXhYeSioHAmVOHqKuA_A8MYp-_ygX3tAwB_GoF-qYAG7-C_7W9QsfIWKflFZgtOSyIsrOAUnladI6qSd0OhxsQwqJ_ekYrpo3YPyzrRYYHKq7XI8DtaGhf5brc66MGEaQ55-sgm.Hzi_cJJoCpODsG8IWLBDXszZTPSvMIDteTuaAzDaDZI&dib_tag=se&keywords=l%27ultima+caccia+di+kraven&qid=1742744719&sprefix=l%27ultima+caccia+di+kraven%2Caps%2C92&sr=8-1",
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
    link: "https://www.amazon.it/Arma-X-Wolverine-Barry-Windsor-Smith/dp/8828709642/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=E3DW5YKBFXZZ&dib=eyJ2IjoiMSJ9.DXGSAA5d3lFqZy72FtgXU5klEbAYGrBuvI3W2yG4X6FUHp1XyR0O-UI92jh1OEWu9P69PRfMQEs2i7TqcvFium5dYADiYsF5NfckNLop3wz11z4vt-k15_OnNIqceybPUwtj-q0X2byjszcsNVqwVB-fv9q3v3QkMyXdJesD-tViFLGmxM6HBEdCsLLAgZ4f89_QiJ5A8Ejz2aZCWdgHxc8trnUjYcsYtNnDZbHrYM-nucE54pLLRN5HMmZGm_pFn9nMoZbAM8s2k7w346jgmN_TJ6kC58XX7qpgfQgyj508zcGNsso5T-HDGnRv6zZ7DFMQoTySaORv1z_8KmtDuRhZfN1AgT_bC1hYfSomJVSofmWBFnxPmf8o2oXhkvpycDJ-TGcOd5lUc5TxOphQKGHjDcvqWxMFiAWwpsMHMEaZ6iR3XUw-SkJ-5HZhllP-.J8kA_Kh315F_bi9s9uApAVt5-zz6acndWzzJiq5Y1ZE&dib_tag=se&keywords=wolverine+arma+x&qid=1742744746&sprefix=wolverine+arma+x%2Caps%2C94&sr=8-1",
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
    link: "https://www.amazon.it/lungo-Halloween-Batman-Jeph-Loeb/dp/8828791926/ref=sr_1_1?crid=1TRQP6CY69GXG&dib=eyJ2IjoiMSJ9.quYpJYNcv0euINMkINRr93l8SobzbEI6Jjr8sXb28tPz8mctvuDWE_UtAevSwiuC.l0k384qmnZJnseuSfSPv41olUGI8XNNXphhOP5y0F-s&dib_tag=se&keywords=il+lungo+halloween+batman+dc+pocket&qid=1742744768&sprefix=il+lungo+hallo%2Caps%2C90&sr=8-1",
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
    link: "https://www.amazon.it/Kingdom-come-Mark-Waid/dp/8828785500/ref=sr_1_1?crid=3OVZ51NZVFV7V&dib=eyJ2IjoiMSJ9.SXnA9IImKhZMRLHgKkLQdM2ul47ocFQv5suudRg40x4.KoQ5Byi25npUnLPlE68aCnUOQLEdzcL8OYjRQAb-abo&dib_tag=se&keywords=kingdom+come+dc+pocket&qid=1742744793&sprefix=kingdom+come+dc+%2Caps%2C98&sr=8-1",
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
    link: "https://www.amazon.it/Omnibus-Flashpoint-Francis-Manapul-Kubert/dp/8828719737/ref=sr_1_8?crid=1AITDYW3BVCOJ&dib=eyJ2IjoiMSJ9.6JAfOyC1NqF5nsB3eNhQJ_cEdQMIykw_3P6Uhh_puE6yMOsdBPhttNnM1yUVwPe82YEF8u3C-qac3asYRsHGIbWGDUUSgNsGJWMqsf_zo5axttVw2Z2IPIiRhUZNxK60HzwoAWBCHsJ-NdBJl-LI6ikggAFXemcQIPHjOWHVOvKpO2X9sTgiR00q5axrcyyWyHKK04Us-rc4arM4C7tTQ4Np8fP_t-aD5HIHn8Le2p_5XASf0RWbGAJYlyGJakBfoQObE-qflEnuzwS2a4TGdQWrnUc5ZcvJy3Wyz8e1px812QEGRkU-uePMnsBcaBgCA4Ypr3T7PNfNlnfKrYxt6k9RxF42Pa9oWEHX9rTjX99OtrEg0W4-A_FLKD39hDoQqj-fAQoBXux8HkCUD29ER-suEMunhvkYrtmD_11l4JlKpqTuXyfqLrLrgNvgHUY1.uZZCJuCqhhdYJlTnBD6_mvGlPH1rqByMvf1exJXtD88&dib_tag=se&keywords=flashpoint+fumetto&qid=1742744821&sprefix=flashpo%2Caps%2C93&sr=8-8",
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
    link: "https://www.amazon.it/Vota-Loki-Christopher-Hastings/dp/8828701110/ref=sr_1_3?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=22CIX6644K8BC&dib=eyJ2IjoiMSJ9.mMaM-nrgSHFn7Q3-iYcBwnXcjxF09B3kt_OEW2hMdf5W7LHE9weeslNBIpo92DhIGNL7wyilLvuvM_2Ar_aa-YXOWDLlHZIabReglmirtEJ8AcDSUTSVgQHZIJ6CbNrn-XY1lB1AP4LfQry-iau6ssXxv_e8ACJXLLvX427j5Re33ozqlUFArj7QV-XeyufQAxdTGZYZkSFnGQfprIrMalVZ5NsJCe5lQXLAY9wfsKTjWrgnogAnGfhmVcTu_rIrkF6xsLlvAKwQyulVl6JsE62qE9IavUHS5oeVz9vL_CVaNaN5i3xEfevIuClGwYssLSpys-ry1aTxVFOjNCjDHK0Ka5J5T5Kv2_6YjBaCODe95y3Szqn7W4nqEIJZcCpUqK0ekcwba3PJitDZGoeS_xD_shca5i55W_pkxWevJjP1748Zqztd_j0Bvx4vXhGl.e72BFwf9K2eKDvbYaYPUL0IVzQ7uip65EJBUINBFRgU&dib_tag=se&keywords=vota+loki&qid=1742744849&sprefix=vota+loki%2Caps%2C86&sr=8-3",
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
    link: "https://www.amazon.it/MAUS-Art-Spiegelman/dp/8806202340/ref=sr_1_1?crid=1CMPUYS0J8S2T&dib=eyJ2IjoiMSJ9.SQm9ZDIRaQZGdjiFNKnThS-Dl-1kGBmpjr_kQp50j3PVBWsVCgFE4gVaD5pNK3ya_o3NRcjeECbg8QufjIP0sj3j1Amj77ie3G_x9vPaQQ-L6d3a8lZgyM3bEsKjtmFBP7K7tjcNFcK7XvhvdBj5qEOu22eAx997qDLyL_lNBy4O_6ddc-s-YEMuFyaxdifeO95Sdo-nlpWTS8_1RP2L5AYzZnFt5oMUiAzCh35DmvpxRxqDTHC8PxBp0pfnjXquaYCKaZF1PWMZv4NHD_LqQ0-rBkGqisy62QDNmz4ehDcjKCzY2H4gDZt_kqcgNAeFrShvhmpyodPPK6tzCa_xaUvwgLFSgG5h3RQNu1bACV3UhMf5R9Amwgihe1RNEcxIsWJGmb3N1eSPuiyi5x_WhOj4wNLUsCv85Kyz0yf2Z8n2Fyl9_H-VuVuiF_SUuZKW.c6cvO-mOwNgC-vYutflX9WwBNfsLfhFDc7atnItqi0E&dib_tag=se&keywords=maus+fumetto&qid=1742744877&sprefix=maus+fumetto+%2Caps%2C94&sr=8-1",
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
    link: "https://www.amazon.it/Bone-Lintegrale-Edizioni-Jeff-Smith/dp/8865434570/ref=sr_1_1?crid=10M2V90ZEGC4&dib=eyJ2IjoiMSJ9.EAlDrVyLg_OJK-IzDU2gPHB2IVM02X95GHNkKvEGgwNhJK1gjPkfHTETJIbYZczlnHN-fxbeOO7n4NIi-fPZKdQFzjWE9Ee0fUOHkJQ5gx4.w_Xb5T6uL2oWk-92rY7ZnYKnr2Y6EaMtLVfoCD6YKjo&dib_tag=se&keywords=bone+jeff+smith+italiano&qid=1742744901&sprefix=bone+je%2Caps%2C99&sr=8-1",
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
    link: "https://www.amazon.it/Saga-1-Brian-K-Vaughan/dp/8865431296/ref=sr_1_1?crid=25TW2QE0LM4IV&dib=eyJ2IjoiMSJ9.H-bGbwNhkoNApB1duCEzS24YWbpNYp6COGHJBbLOlKVHqJGtBjXqiSwGZJZKjrv30C5wYGL3tvyCXM9dNOIHe-2mnkb5O0FOCjro5bgxe2FFJ0bkTPj33Vw17-FrK2py7PBEtvPq_QcjmX5jbi4DPvsqTxGXF8_HLtnt8BMifx7PJuOUXu6IB1eqLlZ3EHbLZzIMM2pbqL45XC-dL7Y0rNnol67h8WhBnRkKgAU1VmND4AGtkv5Oz8lsm7DXINDCkeEqQXfGsIyFfeB7NsMUvEurzk9IVHcJYcRukGIFc4PNzZyusXZtkKKYjL18oIgnL9l9MxQyCzD62LIR5WGgjviIsR0sMwcAUzkhfDkLzcUem28QOE6wvMdaTNWsWjRilKLiwzuKJxalc0wZRpEwyKAxGzO4wqKiRVSFmKhQxahCH60-587rWdRZ3nLdZQXw.8y1f9xHhKBOfNb8Z6DkMrE_i-MGb7QYwbaOqWjsSQvw&dib_tag=se&keywords=saga+brian+k.+vaughan&qid=1742744927&sprefix=saga+brina%2Caps%2C92&sr=8-1",
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
    link: "https://www.panini.it/shp_ita_it/lo-stupefacente-ant-man-una-seconda-possibilit-mnowg019isbn-it08.html",
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
    link: "https://www.amazon.it/pianeta-delle-scimmie-caduta-delluomo/dp/8828788321/ref=sr_1_2?crid=3T3BEYQ8HLM56&dib=eyJ2IjoiMSJ9.wVfPtyKcNwXwJodr5u-dvuNqjJdGk4r24gwnBYADOlsdRNrFszWJPJ4qbwaREXdblQr2NUsxCfJ-0MphMtCZ8QmceKnIB59IIHOP9_338gCNZmMW4FCE8lOLkgtObcsy6QRCj9Z3BmJw0Gxb_Wqgw-SUBfMRxSuvLYCcgp4EiG0.mfHU88305LixzRwZmx4CPKX7UjdY2MvDiX7xJYYBtNU&dib_tag=se&keywords=il+pianeta+delle+scimmie+fumetto&qid=1742745018&sprefix=il+pianeta+delle+scimmi%2Caps%2C93&sr=8-2",
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
    link: "https://www.amazon.it/Asterix-legionario-Ren%C3%A9-Goscinny/dp/8828703695/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=23S18AUWUDLUX&dib=eyJ2IjoiMSJ9.IQ5IfxDrDxS0512tG9IFbJjzuGJdqJkLz91NOqoGPjimb6l3q52xR3nLWx5n_qx3B2aJci6TSPDzDk3-W29HYAvA4R1Dx2grTJX__YxkLdlqYTOsBt6po7u9usKUPrz5-Vwbl9Br5wTLQYHoc_FJEIpXgdeAEouRXvnGwZy-iwNQeLxCbGsMMdSEXGvKGFUABF3AnxUuAvMzPVK3plWA3k-jaOC6QNpPtn0s6sjCdv89sOtb2RY0lN2PchHXkSPYuJF6UDbji9cbt6y_gSlYkl-mF_knmEy78E1H1H61C1jfLx61LUic-xrtddGxcXPFTFNWPM2Pfg3AFepOeiqaIc6HJ2sCduMo7ULKfj_b1SVXTbRxtCURZZZQQFBKyOW1ME4uhKyzvq7lHTqGLuzn-E64c3i3bladpysFxk0ntpXbqVc_XFd_OBrFAoQjPNwi.Y0HW9JMzP-JTfiG1T3ToYiEvewacY-hCGCZaNwH23ws&dib_tag=se&keywords=asterix+legionario&qid=1742745044&sprefix=asterix+legionario%2Caps%2C95&sr=8-1",
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
    link: "https://www.amazon.it/Marvels-Kurt-Busiek/dp/8828703105/ref=sr_1_1?crid=19CW1XQ22J48E&dib=eyJ2IjoiMSJ9.O-FwL_UKes-LPpRVCR4oiLZlYxtrizJw4FJ57CJzxGdGXta-ga_EhWMIWlHrB-Ux2Z6QJH3UZnr75QB_Zu5rnIQcwa04lvmCP6I_QIHOHnp4jYBCCCqXo0CC-lyYde42EwlQi7Y-Bvv5g6KnF8TxI5bI_-q12tDyhBmGWVduliUFpnvjIG1b8BFa0cjhvBFm127XkFhpL9pc1CtpEcpfYKkiRY-d2O5hEj74fkA03EbNTuvcb-Orp14CFMggJw7XpsDYF8_fB3WaS8g9t6XC-88IqKH-gLoHoKZaoca1wQ1aIl_B3-Br0dWGFHBHnalfwpSXS6NiVXUkha4Dqa7kOieKNak5zMyzXOO-YEKjx_s0mZqyP34qVLtfpI2uk8iIrzdqbF7vWA5xsJ3f9r3WfGe5RhWwlIS1fEhVoks5X8iTd6CjwZpy9SxTdNt43hZi.7IlfijDeLb5Vx_9Kg-4HDRERqEAOZZVDERTWEwfZbe0&dib_tag=se&keywords=marvels+must+have&qid=1742745071&sprefix=marvels+%2Caps%2C92&sr=8-1",
  },
  {
    id: 35,
    name: "Jessica Jones: Alias",
    autori: "Brian Michael Bendis, Michael Gaydos",
    editore: "Panini Comics",
    description:
      "L'autodistruttiva aspirante Avenger, adesso proprietaria e unica impiegata della Alias, una piccola agenzia privata di investigazioni della Grande Mela, è diventata una detective specializzata in indagini sui superumani. Quando una misteriosa ragazza in costume si nasconde nell'appartamento di Jessica e scappa prima che possa identificarla, viene presto a galla che si tratta di Mattie Franklin, cioè Spider-Woman.",
    coverUrl: "https://www.comicsbox.it/cover/JJONESALS_P_001.jpg",
    link: "https://www.amazon.it/Alias-investigations-Jessica-Michael-Bendis/dp/8828782250/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1ULDDSG1GG18Q&dib=eyJ2IjoiMSJ9._sdAGC9jEMlONx_8ttRkgTYwAY2Tt-dvQvs0AQBr8U39G7QZfCZpyL5ifyMAkewfp81hc5TJ6IysQrqaKkSE38lUTgSp4CNMSGwL61_qAMjKGeZ069pc-Ms0erusMT6-PNVIhiwUdSsgJmxpRYKienJ5ZjsAvYTwFAdbQv9li5JXKipKb8pW9S0kOxxDlkARECrTswfvlx0fqIC4hzN71HJNE5lygWGcslVzQb95apnhfE_VfNJipsYPKx_S6q8xbSr6HaiCDap-rHX8Ci5KUvJB9GW4WHfYbWC2BCPpVnaAJ4tzvt-NPo8WOZlORvGXAHbX7zavju8_5kF82vLy8TZAX_fiGb3LrANXr5WlPQH9OkF91mt2rtAIgv8NJgI5WrhAd1_Kdk2o1LxG6LJBM9sdTViYXge4U8KcOCiIVP4p9L2zbTkFtoxj1QUyFJcp.b2ea9MxjTz90CapiOlMeROoJgthTltc7oi-ExZgYRxc&dib_tag=se&keywords=jessica+jones+alias&qid=1742745096&sprefix=jessica+jones+alias%2Caps%2C98&sr=8-1",
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
    link: "https://www.amazon.it/potere-della-speranza-Shazam/dp/8828736313/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=29UZGMMLOYWSN&dib=eyJ2IjoiMSJ9.j63N5fPVKkrUwfiw-eMOkA.SBcli0xcaI334q0w79gsTobPgdRsdM6H5oJ3kYvJGKc&dib_tag=se&keywords=shazam+speranza&qid=1742745119&sprefix=shazam+speranz%2Caps%2C90&sr=8-1",
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
    link: "https://www.amazon.it/Moon-Knight-Vol-Nascita-Morte-ebook/dp/B079SQLMKP/ref=sr_1_1?crid=15GFJ4HXYPRW8&dib=eyJ2IjoiMSJ9.Eol_9WixV875227jMUMlON1cXpwg2bM03lnztav-8pMjUBiD-9N7RSWd1LUSSKb85Tw8WyE6ROLtlsAne2WUbbA06t13V8zYC7q0xJ7LD-nGvtfsCvhwMxhqPgMwM1PE.DBx1uEUBx-76kY1gridbIHbx8hZnLAKrN712N1cl1Ts&dib_tag=se&keywords=moon+knight+nascita+e+morte&qid=1742745143&sprefix=moon+knight+nasc%2Caps%2C91&sr=8-1",
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
    link: "https://www.amazon.it/Preludi-notturni-Casa-bambola-Sandman-Gaiman/dp/8828791934/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2JZNJKWZTAOY6&dib=eyJ2IjoiMSJ9.srrBM6f9ngxtneoKvBWdSTusHh9axFRQJ7Vst9p9C7kBq0XYI4NsPImNxu0u_Vj6k59vRSGBnuumJOLfKEVk2u3NpOSadS4P_OQ9vUp8CK-mr9CXqymwv6va3YOE4nYstePHTXkVGqsmvHrQQi6MbkxMLQuQ_k50_Kgt_FSVisn1clvLbsTsv3dpQ_MRAkNAY414EUWT10NWX8TYtS3Xn23-pKphHlW-SC5O4K4kZjn-cn4yEfkFX0WzUdmou_GeXIueZU-_OLJhiV5Qq8MYSpsEmNY0-n6fnFupB9jN5x_dKn4EFdZ0rmZ_RYt1xljMDfWkxAX9uj85hV6BKRLcWUkZae_DAocNX85s-Ehd0ZWvyvplLVMnp9wf9GOMzXYbhKLHORcb-AFKucBQF1hkgC3w9z2-Jdw_vdguOLWdQCXsRx3lDIs7lsZMBLuU5XMH.eXOJtf--lvc1R-lGDCW95GsDX2blO2mCsUozdBnuY-8&dib_tag=se&keywords=the+sandman&qid=1742745173&sprefix=the+sandman%2Caps%2C101&sr=8-1",
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
    link: "https://www.amazon.it/King-Black-Omnibus-Donny-Cates/dp/1302946439/ref=sr_1_1?crid=ED76PQS8G54R&dib=eyJ2IjoiMSJ9.zanb60DcjWl9PqT12M8Te7LxdmUKYr-GRqiY1aofQ1u-rAkU0TgM-jnXVi7cBDoGxbHwSkxTpNPqJXjfTqFcs4H2nHdUaxqrdeqWXDQ9h--BfFuzlxgLiTZi0XcyDqRz.oDFYuYeJ0N4p84VqtXqkqJ2Zfy4DkN38IqTzlQxYzaA&dib_tag=se&keywords=venom+king+in+black+italiano&qid=1742745200&sprefix=venom+kin%2Caps%2C90&sr=8-1",
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
    link: "https://www.amazon.it/fenice-1-Osamu-Tezuka/dp/883275908X/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=15QGN2NWPM2I3&dib=eyJ2IjoiMSJ9.fqtQgxv2PIyOA_PTgsp3zUXFi540RYcA4oqY6irPUl3JAjTNQc9lK2KyqthcJ3m7myvJc8SJKCf62YV0hNQpDduOlnI-loRPlcxHZWpIBm7i91nMeiAEKsvxwiHzxAHggAmWOFORLSBMnRFZl-b4g4H1yXh-Fw0cUB4a31DAuJztKfQMv-GuY-K2z2UBpOGc7q1KrXxERYur_zusnYj4S3BnGGmYp4tfsI71TTIaVCAzZVsOii4-uoVW0AEk9NV4YkBm8SMmSYXRKFM3EMWoSX5zqnJ1xWy_vSFeqz0q-KGsdFSL7xIJg4u0m8V-ryhrGV5L3ty3GGLWIrDuiVS7QV39ZveYneZJ-rgjdMgbTUcgwvHwG3BHYRpYSVKkLJR_zx9m_7nhHhOQ9n4HCVJlxg6675gboab1YbXupR6KwQU.u1DJGTaG2PkIK3sC46jo0323VtKduL1qd0ywG2doR3w&dib_tag=se&keywords=la+fenice+tezuka&qid=1742745223&sprefix=la+fenice+tezuka+%2Caps%2C93&sr=8-1",
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
    link: "https://www.amazon.it/Parabola-Silver-Surfer-Stan-Lee/dp/8828728302/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=LEYGLMZK10I1&dib=eyJ2IjoiMSJ9.t_zrASQ7IsyXQxXWHjrCEOsR9rfuddZj96CebikE4iAIp9u7mD1W_1oSPSXWKf0zxHemDTcu6uFAlMWSBB8DTrejHPBW90TO4XvOm7R9zLtBfxPwoFUiAxWRzXohSCH2qu8Epjim5dCdW7yyjemKRfa99QXsZ02w3BiIy1m4hDLvRwzntseHUYSMvVQz2b1-ioXAPhg0tNeEvonappNTFQtFNgVJd6ilf1cqw4S9Pop8YFaGlPcNpyC-BCXC6nMb.zJKyiAicWeb4lI4pRkgJbbn1CtNZ44VB4TksMKSxsNs&dib_tag=se&keywords=silver+surfer+parabola&qid=1742745284&sprefix=silver+surfer+parabol%2Caps%2C102&sr=8-1",
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
    link: "https://www.amazon.it/American-born-chinese-Gene-Luen/dp/8867904663/ref=sr_1_1?crid=ROT6GX1OJ49R&dib=eyJ2IjoiMSJ9.T9S9Wogrpcv4KFopjanYDEcqoQxl7n0zJusVgsZxsQHGjHj071QN20LucGBJIEps.NO00yz7IC8sXcbFcdBZu6Y6aT1Q0Q8vYslCAtk-Fw_k&dib_tag=se&keywords=american+born+chinese+italiano&qid=1742745305&sprefix=american+born+ch%2Caps%2C109&sr=8-1",
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
    link: "https://www.amazon.it/Habibi-Craig-Thompson/dp/8817052272/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3CWRN7RXDNE5E&dib=eyJ2IjoiMSJ9.y9mz7r6sSQEb6RkXEDMFLQ.0N6SX-ZczXiqCAdHdwVDhyezXuB8i2xAohflzaSEZ6M&dib_tag=se&keywords=habibi+fumetto+italiano&qid=1742745334&sprefix=habibi+fumetto+italiano%2Caps%2C75&sr=8-1",
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
    link: "https://www.amazon.it/straordinarie-avventure-Pentothal-Andrea-Pazienza/dp/8876184201/ref=sr_1_1?crid=2S6417U26KFP1&dib=eyJ2IjoiMSJ9.O-pdtFpa1SCHNuoYNv5hco7Lkue4NAi22o5RTpavutOAGQi-NzbjqXQRTSue1q8TkuwIaao00SedTZuDh-d0cBhpOjJ4_GjQg2OFeVkPuF68SYf23Joat6xbQ54hWN_y3Z86YdRVnC-j-QYSXooDuWNa8EqFwbZZy-1qw3c9zNqsHQ9KH2q_kHRNhptt_O9ntVz7E8P0hhfnyZyxbV1-VnQeWxmsMzj2Un6FeLxJKnBK6-dglXG7h17Zk2lLfFjYMGP7Vv6cPJccSvnv4O214EGYVZEigrrZpl8kEtjVt-7FqLP0HBSmb0ZwTdhilINoX9S-Lc8LKduZdJ9yxucIyQ.aQLJm4NH30-IM7Wmq5Y6r5IS8KXXSHIJKC8fN2jddno&dib_tag=se&keywords=penthotal&qid=1742745356&sprefix=penthot%2Caps%2C96&sr=8-1",
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
    link: "https://www.amazon.it/Scott-Pilgrim-vita-niente-male/dp/8817095834/ref=sr_1_1?crid=NKRQ1QIOG8AR&dib=eyJ2IjoiMSJ9.o6MEuxB4YupTFd73g1p2t7tPSwZlaOgPN1RKewMYcCAIuacTmOLy_FeVXlJv7pSXs6_DCtgaZ6Q32nkLwr94TFe278E2GlEwKm4YYngW3XtGL3qfsvXiSfRpXqXoX-n9zNuHTCgkYBJjnuK1JVx11HTnVdHkhTZJl-N21Bf784wt7WcZzYP3ghO5efH0E6VhALgcH3tp_Y2w_9yPD_K9MDDarwTZZWA1Lm5F4kR3F1_XEEN520V3hgXxXWh85S3rZhyIeXe9nuIoP3WYnjUa4x1b4hpJr0-qi4GfSjJrYNIHGbJLUIl62qLalh0S2pmg25Aq9fVf-ewr_Fwu9vgNDEKrNadd5vJHVuNAdD7_CGQvucT2TGZdi4SZjWly8SdZcPpm0PLThcAA5w_TmG4BCE4Y-6ovBYxdA92W2u9S4qtWih1RTm4zeDkTRdEvlI4S.tyh13bjbWE8pukDST6RT5yevQlF_Q6nKd9I_MGAOgWM&dib_tag=se&keywords=scott+pilgrim+fumetto&qid=1742745381&sprefix=scott+pi%2Caps%2C113&sr=8-1",
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
    link: "https://www.amazon.it/Hell-Master-Lintegrale/dp/8869136736/ref=sr_1_2?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=18N1SV51LE7O6&dib=eyJ2IjoiMSJ9.NpjAxp1-EM3JWmpdGP50a5WzyhKNOI9hUNW2V5ELlZNnv5xARD0-C86o5DtCCj6xuGJYt5tWIn4jDHQUUYThmMwfV54F_CVurY-SzyH0YModdaXjv8RRrk5DmJ5cdeKKHa1s9pcWjINpsrLPZKqt-5tIVW-3eqzJfhZ6eGhBr4v9slgZML6XaawL1qa_IrSeAU-eLg83aJ-tPCLO2Wimfg_EfDvbe6di_89pQQmqfi-qlmt1410w0NxwvbGLgjhJBoHX0FBpEEqx4g1YmReck6-rrtv2uFcgSLHatNjrlWa3qcdyvqMoIH0xUyqyuYSor6jAN7EQKjMxdwGnsObnSTM4mNzMHURghX8K2_PTqDoFy3ZFYx9mAsx94I6HFkfqxzC4RUUFwRb_MD1E9aqXEGYUGcXrohZ2YYmqehHpQuwKlpb67oDLWqEIhc3ef-q_.YLgbIMb9o2u99wAzZg76JaqL9WJcl_6LbSqfgbCfcj0&dib_tag=se&keywords=from+hell+alan+moore&qid=1742745405&sprefix=from+hell+alan+moore%2Caps%2C91&sr=8-2",
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
    link: "https://www.amazon.it/All-star-Superman-Grant-Morrison/dp/8828782978/ref=sr_1_1?crid=20S2KE8I62PHV&dib=eyJ2IjoiMSJ9.y1pCe8VdkM6BA1G1yggEWE4V875uBM0Kw5G2p_pjqymGj3ic3QAYK80jjJ6H_2LNmR9vcfTm8xBu1Iy1czua3NCtoB6oD_Bg6K-GRhzBWrI.Q7T1ARu65ImP3Q-0uk47HSLPQlRRDhrUxQBKRiiMtac&dib_tag=se&keywords=all+star+superman+dc+pocket&qid=1742745429&sprefix=all+star+superman%2Caps%2C90&sr=8-1",
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
    link: "https://www.amazon.it/Rinascita-Daredevil-collection-Vol-7/dp/8828705655/ref=sr_1_1?crid=BII2IUJOQ2FI&dib=eyJ2IjoiMSJ9.bR-djYo9hhoQ22MqweRj3CWzrJ3iHQ5-nl4EUQT7uEdkDlVnF3Yri-byRwPgNfJNP404qGuB8usPGUMb-z991Vj_roEGWWKGDQaMo-XnDP0.clBMIaGu2eiPxRWLWvAxluu-Rdi9_yqB_0BooxNpO8s&dib_tag=se&keywords=daredevil+rinascita+must+have&qid=1742745459&sprefix=daredevil+rinascita%2Caps%2C98&sr=8-1",
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
    link: "https://www.amazon.it/lega-degli-straordinari-gentlemen/dp/8832732580/ref=sr_1_1?crid=2T94SO5K30MJ&dib=eyJ2IjoiMSJ9.pVtfMW4bld7Qs1ybMpZKwvE4pZ7ecoUk2X4nqeVEVZStCMPKEZOYEq9jspJLRYU1oMonWNvdmgT-dOEaMXPAcG7LO6xKt3AnMcn07tT1-Ev6UahsBdV7V9-QwP4bOzZcTWyi2GH7mREzyc-Gg7pdAxEnMz3cwmn37iQ4_lqtXZssAps_kw61CmEwiTPFcP3qvKgqBU39UO-9b4pCLKb5_czdVlWY09WT1pajYQHYg7YTfTFiQNq448Gx1FiXmPYRmbswwxQiX86N_jiNOx1k3A.7BUBIzu0VkIguRFtzkEVdOi4phOV08I_dg3rkeINDVo&dib_tag=se&keywords=la+lega+degli+straordinari+gentlemen&qid=1742745484&sprefix=la+lega+de%2Caps%2C98&sr=8-1",
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
    link: "https://www.amazon.it/Kobane-calling-Oggi-Zerocalcare/dp/8832734591/ref=sr_1_1?crid=3OZ3IWJXQX6C8&dib=eyJ2IjoiMSJ9._nj7dUnhF4usY4uQ7TN82PkwXx16w96LV7qJmFDFMI4VXoAZ8-rBlzhYR7cdbUUgvG4t3jgetdWdrCsSVzoxmFL594qdfc1SL_lBPSeZqn3bSy0ASTk58NEnMdxBoYJYFTCjaEIjjG5KD2oEdaq1mvWnuWiA7KAiiGf-XKCwUjEnEQoDCROOgpQ_KjiCf27wEXGpPdzjjH9CJ9eT-iyLFBb1idtcFegE1ini5M8lXmBA10mi-P2JO_q-kZ3aSrip.tmsghGzMpXskfLNUHAKG6R4xZlzoV3AJ6pwa0n5qb1s&dib_tag=se&keywords=kobane+calling&qid=1742745507&sprefix=kobane+ca%2Caps%2C86&sr=8-1",
  },
];

export default comicsData;
