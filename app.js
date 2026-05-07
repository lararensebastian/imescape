const DDR = (() => {
  const STORAGE_KEY = 'ddr_project_v1';

  const chapters = [
    {
      id: 1,
      slug: 'kapitel-1.html',
      title: 'Det börjar på en lektion',
      genre: 'Berättande text',
      goalWords: 80,
      intro: 'Du sitter i klassrummet. Läraren pratar om källkritik. Sam sitter bredvid.',
      story: [
        'Det är en vanlig dag. Du sitter i klassrummet. Läraren pratar om något som kallas källkritikens fyra frågor – VEM, VAD, NÄR, HUR.',
        'Du lyssnar halvt. Det verkar inte så viktigt just nu.',
        'Sam sitter bredvid dig. Ni byter en blick. Du tänker att skoldagen nog blir som alla andra.'
      ],
      callouts: [
        { type: 'info', title: 'Läraren på tavlan', text: '"Nästa gång ni stöter på något online – fråga: VEM säger detta? VAD vill de? NÄR publicerades det? HUR kan du kontrollera det?"' }
      ],
      choiceQuestion: 'Hur är du online?',
      choices: [
        { id: 'A', text: 'Öppen och aktiv. Jag delar, kommenterar och svarar gärna.' },
        { id: 'B', text: 'Ganska vanlig. Jag kollar mest men delar ibland.' },
        { id: 'C', text: 'Försiktig. Jag tänker noga innan jag delar något.' }
      ],
      tasks: [
        {
          key: 'del1',
          title: '1. Börja berättelsen',
          help: 'Skriv i jag-form. Börja enkelt: vem är du och var är du?',
          starters: ['Jag heter ...', 'Jag sitter längst ...', 'Det luktar ... i klassrummet.'],
          placeholder: 'Skriv 3–5 meningar om dig själv och klassrummet.'
        },
        {
          key: 'del2',
          title: '2. Visa lektionen och Sam',
          help: 'Skriv vad läraren säger och vad du tänker. Låt Sam bli en riktig person.',
          starters: ['Läraren skriver ...', 'Sam sitter bredvid mig och ...', 'Jag tänker att ...'],
          placeholder: 'Skriv 4–6 meningar om lektionen, Sam och dina tankar.'
        },
        {
          key: 'del3',
          title: '3. Avsluta kapitlet',
          help: 'Avsluta med att lektionen tar slut eller att du går hem.',
          starters: ['När lektionen är slut ...', 'På vägen hem ...', 'Jag tänker fortfarande på ...'],
          placeholder: 'Skriv 2–4 meningar som avslutning.'
        }
      ],
      easyHelp: [
        'Skriv korta meningar först. Du kan bygga ut senare.',
        'Du behöver inte skriva perfekt direkt.',
        'Tänk: jag – Sam – läraren – klassrummet.'
      ],
      example: 'Jag heter Alex. Jag sitter nära fönstret. Läraren skriver fyra ord på tavlan, men jag lyssnar inte riktigt. Sam sitter bredvid mig och ser uttråkad ut. När vi byter blick tänker jag att det här bara är ännu en vanlig lektion.',
      vocab: [
        ['källkritik', 'att granska information'],
        ['jag-form', 'när berättaren säger jag'],
        ['blick', 'när man tittar på någon']
      ],
      checklist: [
        'Jag har skrivit i jag-form.',
        'Sam finns med i texten.',
        'Jag har beskrivit både plats och tanke.'
      ],
      extra: {
        title: 'Extraspår: Sams version',
        prompt: 'Skriv om samma lektion – men ur Sams perspektiv. Vad ser Sam? Vad tänker Sam om dig? Skriv i jag-form som Sam.',
        starters: ['Jag heter Sam och sitter bredvid ...', 'Läraren pratar om något och jag ...', 'Personen bredvid mig verkar ...'],
        placeholder: 'Skriv minst 5 meningar ur Sams perspektiv.'
      }
    },
    {
      id: 2,
      slug: 'kapitel-2.html',
      title: 'Samma kväll – ett meddelande',
      genre: 'Berättande text + källkritik',
      goalWords: 100,
      intro: 'På kvällen får du ett meddelande från Aiden_2024.',
      story: [
        'Du är hemma. Telefonen ligger i handen. Du scrollar utan att egentligen tänka.',
        'Plötsligt pingar det till. Ett konto som heter Aiden_2024 har skrivit till dig.',
        'Du läser meddelandet en gång. Sedan en gång till.'
      ],
      callouts: [
        { type: 'danger', title: 'DM från Aiden', text: '"Hej! Jag heter Aiden. Jag gör ett litet projekt och vill höra hur unga tänker om samhället. Skulle du vilja svara på några frågor?"' },
        { type: 'warn', title: 'Det du ser', text: 'Kontot är tre månader gammalt och har 47 följare.' }
      ],
      choiceQuestion: 'Hur svarar du?',
      choices: [
        { id: 'A', text: 'Jag svarar öppet. Det verkar inte så konstigt.' },
        { id: 'B', text: 'Jag svarar kort och försiktigt.' },
        { id: 'C', text: 'Jag skickar en screenshot till Sam innan jag svarar.' }
      ],
      tasks: [
        {
          key: 'del1',
          title: '1. Sätt scenen hemma',
          help: 'Beskriv rummet, ljuset och vad du gör precis innan meddelandet kommer.',
          starters: ['Det är kväll och jag ...', 'Jag ligger/sitter i ...', 'Telefonen pingar och ...'],
          placeholder: 'Skriv 3–5 meningar om kvällen.'
        },
        {
          key: 'del2',
          title: '2. Tänk källkritiskt',
          help: 'Låt tankarna komma naturligt: vem är det, vad vill personen, när skapades kontot, hur kan du kolla?',
          starters: ['Jag trycker på profilen och ser ...', 'Vem är det egentligen ...', 'Hur kan jag kolla det?'],
          placeholder: 'Skriv 4–6 meningar där du reagerar och tänker.'
        },
        {
          key: 'del3',
          title: '3. Skriv ditt svar',
          help: 'Skriv exakt vad du svarar till Aiden.',
          starters: ['Jag skriver: "..."', 'Till slut svarar jag ...', 'När jag lagt ifrån mig telefonen ...'],
          placeholder: 'Skriv ditt svar och en kort avslutning.'
        }
      ],
      easyHelp: [
        'Du kan skriva Aidens meddelande som citat.',
        'Använd gärna orden: vem, vad, när, hur.',
        'Kort text räcker om den är tydlig.'
      ],
      example: 'Jag sitter på sängen när telefonen pingar. Först tänker jag inte så mycket på det, men när jag ser att kontot bara är tre månader gammalt stannar jag upp. Vem är Aiden egentligen? Jag vet inte. Till slut skriver jag: "Hej. Jag kan svara lite kort, men jag vill inte lämna ut något personligt."',
      vocab: [
        ['DM', 'privat meddelande'],
        ['profil', 'ett konto på sociala medier'],
        ['screenshot', 'skärmbild']
      ],
      checklist: [
        'Jag har beskrivit kvällen tydligt.',
        'Jag har tänkt källkritiskt i texten.',
        'Jag har skrivit vad jag svarar.'
      ],
      extra: {
        title: 'Extraspår: Aidens sida',
        prompt: 'Tänk dig att Aiden är en riktig person – men inte den du trodde. Skriv ett kort avsnitt ur Aidens perspektiv. Vad tänker Aiden när du svarar? Vad är syftet egentligen?',
        starters: ['Jag heter inte riktigt Aiden, men ...', 'När personen svarar tänker jag ...', 'Mitt syfte med kontot är att ...'],
        placeholder: 'Skriv 4–6 meningar ur Aidens perspektiv.'
      }
    },
    {
      id: 3,
      slug: 'kapitel-3.html',
      title: 'Aiden frågar mer',
      genre: 'Berättande text',
      goalWords: 120,
      intro: 'Aiden skriver igen, men nu känns det annorlunda.',
      story: [
        'Det går några dagar. Aiden skriver igen.',
        'Den här gången känns frågorna mer personliga än förut.',
        'Sam tittar på dig och säger att du inte måste svara på allt.'
      ],
      callouts: [
        { type: 'danger', title: 'Ny fråga från Aiden', text: '"Tycker du att unga i Sverige har tillräckligt att säga till om? Inte bara på pappret, utan på riktigt?"' },
        { type: 'info', title: 'Sam', text: '"Du kan svara mycket, lite eller inte alls. Det är också ett val."' }
      ],
      choiceQuestion: 'Hur väljer du att svara?',
      choices: [
        { id: 'A', text: 'Jag svarar långt och tydligt med min åsikt.' },
        { id: 'B', text: 'Jag svarar kort och ganska allmänt.' },
        { id: 'C', text: 'Jag svarar nästan inte alls eftersom det känns fel.' }
      ],
      tasks: [
        {
          key: 'del1',
          title: '1. Visa hur du reagerar',
          help: 'Vad tänker du när Aiden frågar mer? Visa om du vill svara mycket, lite eller nästan inte alls.',
          starters: ['Jag läser frågan och tänker ...', 'Det känns konstigt att ...', 'Jag vet inte om jag borde ...'],
          placeholder: 'Skriv 2–4 meningar om din reaktion.'
        },
        {
          key: 'del2',
          title: '2. Skriv ditt svar',
          help: 'Anpassa svaret efter ditt val. Du kan skriva långt, kort eller nästan inget alls.',
          starters: ['Jag skriver: "..."', 'Jag svarar kort: "..."', 'Jag skriver nästan inget alls: "..."'],
          placeholder: 'Skriv det svar du faktiskt skickar.'
        },
        {
          key: 'del3',
          title: '3. Avsluta',
          help: 'Hur känns det efteråt? Litar du mer eller mindre på Aiden nu?',
          starters: ['Efteråt känner jag ...', 'Nu tänker jag att ...', 'Det här gör att jag ...'],
          placeholder: 'Skriv 2–4 meningar som avslutning.'
        }
      ],
      easyHelp: [
        'Du måste inte skriva ett långt svar i berättelsen.',
        'Ditt val ska märkas i texten: långt, kort eller nästan inget svar.',
        'Skriv hellre tydligt än svårt.'
      ],
      example: 'Jag läser frågan flera gånger. Först tänker jag att den verkar vanlig, men sedan känns den för personlig. Jag vill inte skriva för mycket till någon jag inte känner. Till slut svarar jag kort: "Jag vet inte riktigt. Kanske ibland, men inte alltid." Efteråt känner jag mig fortfarande osäker.',
      vocab: [
        ['reaktion', 'det du känner eller tänker direkt'],
        ['allmänt', 'inte så personligt eller detaljerat'],
        ['osäker', 'när du inte riktigt vet vad du ska tro']
      ],
      checklist: [
        'Jag har visat hur jag reagerar.',
        'Mitt svar passar med mitt val.',
        'Jag har avslutat med en känsla eller tanke.'
      ],
      extra: {
        title: 'Extraspår: Sams version',
        prompt: 'Sam får läsa frågan från Aiden och tycker att du borde göra annorlunda. Skriv några meningar där Sam förklarar hur hen skulle ha svarat.',
        starters: ['Om jag var du skulle jag ...', 'Jag tycker inte att du ska ...', 'Det smartaste vore att ...'],
        placeholder: 'Skriv 4–6 meningar som Sam.'
      }
    },
    {
      id: 4,
      slug: 'kapitel-4.html',
      title: 'Något stämmer inte',
      genre: 'Berättande text',
      goalWords: 120,
      intro: 'Du och Sam går tillbaka till hela chatten och ser saker ni inte reagerade på förut.',
      story: [
        'Du och Sam läser igenom hela konversationen med Aiden från början.',
        'Nu när ni ser allt i ordning märker ni detaljer som först verkade små.',
        'Vissa formuleringar återkommer. Några ord passar inte riktigt in. Plötsligt känns allt annorlunda.'
      ],
      callouts: [
        { type: 'warn', title: 'Meddelande 1', text: '"Hej! Jag heter Aiden. Jag gör ett litet projekt och vill höra hur unga tänker om samhället."' },
        { type: 'warn', title: 'Meddelande 2', text: '"Du verkar smart. Jag tror att du förstår mer än andra i din ålder."' },
        { type: 'warn', title: 'Meddelande 3', text: '"Det är viktigt att prata med rätt personer. Vissa vuxna lyssnar ändå inte."' },
        { type: 'danger', title: 'Meddelande 4', text: '"Vi borde ses och ta en kaffe. Ditt perspektiv är viktigt för projektet." Ett konstigt ord dyker upp och raderas snabbt.' },
        { type: 'info', title: 'Sam', text: '"Ser du? Först smickrar kontot dig. Sedan försöker det påverka dig. Det här känns inte slumpmässigt."' }
      ],
      choiceQuestion: 'Vad reagerar du mest på när ni läser allt igen?',
      choices: [
        { id: 'A', text: 'Hur Aiden försöker smickra dig.' },
        { id: 'B', text: 'Hur meddelandena försöker påverka hur du tänker.' },
        { id: 'C', text: 'Att Aiden vill träffas och att något känns planerat.' }
      ],
      tasks: [
        {
          key: 'del1',
          title: '1. Vad ser ni nu?',
          help: 'Beskriv vad du och Sam märker när ni läser meddelandena igen.',
          starters: ['När vi läser allt igen ser jag att ...', 'Sam märker att ...', 'Det jag inte tänkte på förut var att ...'],
          placeholder: 'Skriv 2–4 meningar om det första ni upptäcker.'
        },
        {
          key: 'del2',
          title: '2. Vilka bevis hittar ni?',
          help: 'Använd meddelandena ovan. Beskriv två eller tre saker som verkar konstiga eller farliga.',
          starters: ['Ett bevis är att ...', 'En annan sak vi märker är att ...', 'Det blir tydligt när Aiden skriver ...'],
          placeholder: 'Skriv 4–6 meningar om bevisen.'
        },
        {
          key: 'del3',
          title: '3. Vad tänker du nu?',
          help: 'Vad börjar du förstå om Aiden och syftet med kontakten?',
          starters: ['Nu börjar jag förstå att ...', 'Jag tror att Aiden vill ...', 'Det känns som att ...'],
          placeholder: 'Skriv 2–4 meningar som avslutning.'
        }
      ],
      easyHelp: [
        'Du behöver inte hitta på allt själv. Använd meddelandena ovan.',
        'Skriv om det som verkar konstigt: smicker, påverkan, möte, konstigt ord.',
        'Välj en sak att fokusera på först.'
      ],
      example: 'När vi läser allt igen ser jag att Aiden försöker låta vänlig men också styra samtalet. Sam märker att kontot först smickrar mig och sedan försöker få mig att tvivla på vuxna. Ett bevis är att Aiden skriver att vissa vuxna ändå inte lyssnar. Ett annat bevis är att Aiden vill träffas. Nu börjar jag förstå att det kanske aldrig handlade om ett vanligt projekt.',
      vocab: [
        ['bevis', 'något som visar att något är sant eller misstänkt'],
        ['smickra', 'att få någon att känna sig speciell för att vinna förtroende'],
        ['påverka', 'att försöka styra hur någon tänker eller känner']
      ],
      checklist: [
        'Jag har visat vad vi upptäcker.',
        'Jag har beskrivit minst två bevis.',
        'Jag har avslutat med vad jag börjar förstå.'
      ],
      extra: {
        title: 'Extraspår: Sams anteckningar',
        prompt: 'Tänk att Sam skriver snabba anteckningar medan ni läser chatten. Skriv en kort lista eller kort text med det Sam vill spara som bevis.',
        starters: ['Bevis 1: ...', 'Bevis 2: ...', 'Det viktigaste vi såg var att ...'],
        placeholder: 'Skriv 4–6 rader som Sams anteckningar.'
      }
    },
    {
      id: 5,
      slug: 'kapitel-5.html',
      title: 'Tre saker på en gång',
      genre: 'Dialog + reflektion',
      goalWords: 120,
      intro: 'Du och Sam hittar tre saker som visar att Aiden inte är den personen du trodde.',
      story: [
        'Ni hittar inte en enda stor sak. Ni hittar tre små saker som tillsammans blir tydliga.',
        'Samma skrivmönster på flera plattformar. En tråd online där någon beskriver samma kontakt. Och det konstiga ordet som leder vidare.',
        'Nu måste du och Sam prata om vad det här faktiskt betyder.'
      ],
      callouts: [
        { type: 'danger', title: 'Det ni hittar', text: 'Samma mönster på flera plattformar. Andra har fått liknande frågor. Det konstiga ordet leder till en sida på ett annat språk.' }
      ],
      choiceQuestion: 'Hur reagerar du?',
      choices: [
        { id: 'A', text: 'Jag blir arg och lite skamsen.' },
        { id: 'B', text: 'Jag vill förstå exakt hur det fungerade och vem som ligger bakom.' },
        { id: 'C', text: 'Jag blir lättad över att din magkänsla var rätt.' }
      ],
      tasks: [
        {
          key: 'del1',
          title: '1. Starta dialogen',
          help: 'Skriv direkt med repliker. En ny replik på varje ny rad.',
          starters: ['– Det här är inte en riktig person, säger Sam.', '– Vad menar du? säger jag.', '– Titta här, säger Sam.'],
          placeholder: 'Skriv 6–8 repliker mellan dig och Sam.'
        },
        {
          key: 'del2',
          title: '2. Lägg in paus och reaktion',
          help: 'Allt behöver inte vara prat. Beskriv en tystnad, en blick eller en känsla.',
          starters: ['Det blir tyst en stund ...', 'Jag tittar på skärmen och ...', 'Sam säger lågt ...'],
          placeholder: 'Skriv 4–5 meningar mellan eller efter replikerna.'
        },
        {
          key: 'del3',
          title: '3. Reflektera',
          help: 'Vad var syftet? Vad kunde ha hänt om du fortsatt?',
          starters: ['Jag tror att syftet var ...', 'Om jag hade fortsatt kanske ...', 'Det konstigaste är att ...'],
          placeholder: 'Skriv 4–5 meningar som reflektion.'
        }
      ],
      easyHelp: [
        'Använd talstreck före repliker: –',
        'Varva prat och känslor.',
        'Du kan skriva kort men tydligt.'
      ],
      example: '– Det här är inte en riktig person, säger Sam. – Men jag har ju skrivit med kontot i flera dagar, säger jag. Sam pekar på skärmen. Det blir tyst. Jag känner mig dum men också lättad. Jag tror att syftet var att få mig att lita på någon som egentligen bara ville påverka mig.',
      vocab: [
        ['dialog', 'när personer pratar i text'],
        ['replik', 'det någon säger'],
        ['reflektion', 'när du tänker efter och förstår mer']
      ],
      checklist: [
        'Jag har skrivit dialog med talstreck.',
        'Jag har med en paus eller tystnad.',
        'Jag har reflekterat över syftet.'
      ],
      extra: {
        title: 'Extraspår: En scen som inte hände',
        prompt: 'Skriv en alternativ version: du och Sam hittar ingenting konstigt. Du tror att Aiden är äkta och bestämmer dig för att träffas. Skriv scenen – vad händer när ni möts?',
        starters: ['Vi ses utanför ett café och ...', 'Personen ser ut precis som ...', 'Något känns fel direkt när ...'],
        placeholder: 'Skriv 5–8 meningar om mötet som aldrig borde ha skett.'
      }
    },
    {
      id: 6,
      slug: 'kapitel-6.html',
      title: 'Tillbaka i klassrummet',
      genre: 'Argumenterande text + reflektion',
      goalWords: 120,
      intro: 'Du sitter i samma klassrum igen. Nu förstår du varför läraren pratade om källkritik.',
      story: [
        'Några dagar senare sitter du på samma plats i klassrummet.',
        'Läraren pratar om påverkanskampanjer och frågar om någon har ett exempel på källkritik i verkligheten.',
        'Du tänker på Aiden. Den här gången känns orden på tavlan annorlunda.'
      ],
      callouts: [
        { type: 'success', title: 'De fyra frågorna', text: 'VEM är det som skriver? VAD vill de? NÄR händer detta? HUR kan du kontrollera det?' }
      ],
      choiceQuestion: 'Hur avslutar du berättelsen?',
      choices: [
        { id: 'A', text: 'Jag vill varna andra tydligt.' },
        { id: 'B', text: 'Jag vill förklara hur påverkan fungerar.' },
        { id: 'C', text: 'Jag vill visa vad jag har lärt mig om mig själv.' }
      ],
      tasks: [
        {
          key: 'del1',
          title: '1. Börja i samma rum som kapitel 1',
          help: 'Visa att berättelsen kommer tillbaka till början.',
          starters: ['Jag sitter på samma plats som ...', 'Läraren skriver återigen ...', 'Sam sitter bredvid mig och ...'],
          placeholder: 'Skriv 3–5 meningar som knyter ihop början och slutet.'
        },
        {
          key: 'del2',
          title: '2. Skriv din varning eller förklaring',
          help: 'Skriv tydligt vad andra borde tänka på. Använd gärna tes och argument igen.',
          starters: ['Det farligaste är att ...', 'För det första ...', 'Dessutom ...'],
          placeholder: 'Skriv 6–10 meningar med tydlig varning eller förklaring.'
        },
        {
          key: 'del3',
          title: '3. Avsluta med insikt',
          help: 'Vad förstår du nu som du inte förstod i kapitel 1?',
          starters: ['Nu förstår jag att ...', 'Det jag inte visste då var ...', 'Den här gången tänker jag ...'],
          placeholder: 'Skriv 3–5 meningar som avslutar berättelsen.'
        }
      ],
      easyHelp: [
        'Knyt ihop med början: klassrum, Sam, tavlan.',
        'Skriv hellre tydligt än svårt.',
        'Avsluta med en stark sista mening.'
      ],
      example: 'Jag sitter på samma plats som i början, men nu lyssnar jag på riktigt. Läraren skriver VEM, VAD, NÄR, HUR på tavlan. För det första kan någon verka trevlig utan att vara äkta. Dessutom kan påverkan börja med något som känns helt oskyldigt. Nu förstår jag att källkritik inte bara handlar om texter. Det handlar också om människor, konton och mig själv.',
      vocab: [
        ['påverkanskampanj', 'försök att styra människors åsikter'],
        ['desinformation', 'felaktig information som sprids medvetet'],
        ['insikt', 'något du plötsligt förstår']
      ],
      checklist: [
        'Jag knyter ihop med kapitel 1.',
        'Jag säger tydligt vad andra borde tänka på.',
        'Jag avslutar med en tydlig insikt.'
      ],
      extra: {
        title: 'Extraspår: Brevet du aldrig skickade',
        prompt: 'Skriv ett brev direkt till Aiden – nu när du vet vem Aiden egentligen är. Vad vill du säga? Du behöver inte vara snäll. Du kan vara arg, besviken, eller bara klok.',
        starters: ['Hej Aiden. Nu vet jag vad du egentligen ville.', 'Du trodde säkert att jag skulle ...', 'Det du inte visste om mig är att ...'],
        placeholder: 'Skriv brevet till Aiden – minst 5 meningar.'
      }
    }
  ];

  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { choices: {}, texts: {}, checks: {} };
    } catch {
      return { choices: {}, texts: {}, checks: {} };
    }
  }

  const state = loadState();
  if (!state.choices) state.choices = {};
  if (!state.texts) state.texts = {};
  if (!state.checks) state.checks = {};

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    showSaveIndicator();
  }

  let saveTimer = null;
  function showSaveIndicator() {
    const el = document.getElementById('save-indicator');
    if (!el) return;
    el.classList.add('visible');
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => el.classList.remove('visible'), 2000);
  }

  function chapterById(id) {
    return chapters.find(ch => ch.id === id);
  }

  function getText(chapterId, key) {
    return ((state.texts[chapterId] || {})[key]) || '';
  }

  function setText(chapterId, key, value) {
    if (!state.texts[chapterId]) state.texts[chapterId] = {};
    state.texts[chapterId][key] = value;
    saveState();
  }

  function getFullText(chapterId) {
    const obj = state.texts[chapterId] || {};
    return ['del1', 'del2', 'del3'].map(key => (obj[key] || '').trim()).filter(Boolean).join('\n\n');
  }

  function getExtraText(chapterId) {
    return ((state.texts[chapterId] || {})['extra'] || '').trim();
  }

  function wordCount(text) {
    return text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;
  }

  function totalWords(chapterId) {
    return wordCount(getFullText(chapterId));
  }

  function allChecked(chapterId) {
    const ch = chapterById(chapterId);
    const checks = state.checks[chapterId] || {};
    return ch.checklist.every((_, i) => !!checks[i]);
  }

  function chapterStatus(chapterId) {
    const words = totalWords(chapterId);
    const ch = chapterById(chapterId);
    if (words === 0) return 'empty';
    if (words >= ch.goalWords && allChecked(chapterId)) return 'done';
    return 'ongoing';
  }

  function statusLabel(status) {
    if (status === 'done') return { text: 'Klart ✓', cls: 'done' };
    if (status === 'ongoing') return { text: 'Pågår', cls: 'ongoing' };
    return { text: 'Inte påbörjat', cls: 'todo' };
  }

  function insertStarter(chapterId, key, text) {
    const area = document.querySelector(`textarea[data-chapter="${chapterId}"][data-key="${key}"]`);
    if (!area) return;
    const current = area.value;
    area.value = current && !current.endsWith(' ') && !current.endsWith('\n') ? current + ' ' + text : current + text;
    area.focus();
    area.dispatchEvent(new Event('input'));
  }

  function updateChapterStats(chapterId) {
    const current = totalWords(chapterId);
    const goal = chapterById(chapterId).goalWords;
    const pct = Math.min(100, Math.round((current / goal) * 100));
    const wordEl = document.getElementById('word-total');
    const fillEl = document.getElementById('word-fill');
    const stateEl = document.getElementById('chapter-state');
    if (wordEl) wordEl.textContent = `${current} ord · mål ca ${goal}`;
    if (fillEl) fillEl.style.width = `${pct}%`;
    if (stateEl) {
      const status = chapterStatus(chapterId);
      if (status === 'done') {
        stateEl.textContent = 'Klart ✓';
        stateEl.className = 'state done';
      } else if (current >= goal) {
        stateEl.textContent = 'Bocka i checklistan när du känner dig klar';
        stateEl.className = 'state ongoing';
      } else {
        stateEl.textContent = 'Skriv mer, eller gå vidare';
        stateEl.className = 'state todo';
      }
    }
  }

  function renderChapterNav(activeId) {
    return chapters.map(ch => `<a class="chapter-link ${ch.id === activeId ? 'active' : ''}" href="${ch.slug}">${ch.id}</a>`).join('');
  }

  function renderCallout(callout) {
    return `<div class="callout callout-${callout.type}"><div class="title">${callout.title}</div><div>${callout.text}</div></div>`;
  }

  function exportBook() {
    const sections = chapters.map(ch => {
      const text = getFullText(ch.id);
      const paragraphs = text
        ? text.split(/\n{2,}/).map(p => `<p>${escapeHtml(p).replace(/\n/g, '<br>')}</p>`).join('')
        : '<p><em>Inte skrivet ännu.</em></p>';
      const extraText = getExtraText(ch.id);
      const extraSection = (ch.extra && extraText) ? `
        <div style="margin-top:18px;padding:16px 20px;background:#f4e3db;border-radius:12px;border-left:4px solid #a94d2a;">
          <div style="font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:#a94d2a;font-weight:800;margin-bottom:6px">Extraspår: ${ch.extra.title.replace('Extraspår: ','')}</div>
          ${extraText.split(/\n{2,}/).map(p => `<p style="margin:0 0 10px">${escapeHtml(p).replace(/\n/g, '<br>')}</p>`).join('')}
        </div>` : '';
      return `
        <section style="margin:0 0 40px;page-break-inside:avoid;">
          <div style="font-size:12px;text-transform:uppercase;letter-spacing:.14em;color:#7a6f63;margin-bottom:8px">Kapitel ${ch.id} · ${ch.genre}</div>
          <h2 style="font-size:30px;margin:0 0 14px;letter-spacing:-.03em">${ch.title}</h2>
          ${paragraphs}
          ${extraSection}
        </section>`;
    }).join('');

    const html = `<!doctype html><html lang="sv"><head><meta charset="utf-8"><title>Den Digitala Rösten</title><style>
      body{font-family:Georgia,serif;max-width:820px;margin:40px auto;padding:0 24px;line-height:1.7;color:#1f2328}
      h1{font-size:48px;line-height:1;margin-bottom:8px} h2{line-height:1.1}
      p{margin:0 0 14px} .top{border-bottom:2px solid #ddd;padding-bottom:22px;margin-bottom:28px}
      button{position:fixed;right:16px;top:16px;padding:10px 16px;border:none;background:#1f2328;color:#fff;border-radius:999px;cursor:pointer}
      @media print{button{display:none} body{margin:0 auto}}
    </style></head><body>
      <button onclick="window.print()">Skriv ut / spara PDF</button>
      <div class="top"><div style="font-size:12px;text-transform:uppercase;letter-spacing:.14em;color:#7a6f63">Elevbok</div><h1>Den Digitala Rösten</h1><p>Exporterad från elevprojektet.</p></div>
      ${sections}
    </body></html>`;

    downloadBlob(html, 'den-digitala-rosten-bok.html', 'text/html;charset=utf-8');
  }

  function backupTxt() {
    const lines = [];
    lines.push('DEN DIGITALA RÖSTEN – Textbackup');
    lines.push('Sparad: ' + new Date().toLocaleString('sv-SE'));
    lines.push('');
    lines.push('='.repeat(60));

    chapters.forEach(ch => {
      lines.push('');
      lines.push(`KAPITEL ${ch.id}: ${ch.title}`);
      lines.push(`Genre: ${ch.genre}`);
      lines.push('-'.repeat(40));
      const text = getFullText(ch.id);
      lines.push(text || '(Inte skrivet ännu.)');
      const extraText = getExtraText(ch.id);
      if (ch.extra && extraText) {
        lines.push('');
        lines.push(`[${ch.extra.title}]`);
        lines.push(extraText);
      }
      lines.push('');
      lines.push('='.repeat(60));
    });

    downloadBlob(lines.join('\n'), 'den-digitala-rosten-backup.txt', 'text/plain;charset=utf-8');
  }

  function downloadBlob(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  }

  function renderHome() {
    document.getElementById('chapterNav').innerHTML = renderChapterNav(0);

    const progressItems = chapters.map(ch => {
      const s = statusLabel(chapterStatus(ch.id));
      return `<div class="progress-item"><span>Kapitel ${ch.id}: ${ch.title}</span><span class="state ${s.cls}">${s.text}</span></div>`;
    }).join('');

    const cards = chapters.map(ch => `
      <a class="chapter-card" href="${ch.slug}">
        <div class="badge">Kapitel ${ch.id}</div>
        <h3>${ch.title}</h3>
        <small>${ch.genre}</small>
        <div class="meta">Öppna kapitel →</div>
      </a>`).join('');

    document.getElementById('app').innerHTML = `
      <section class="hero">
        <div class="kicker">Svenska · färdigt elevprojekt</div>
        <h1>Den Digitala <span style="color:var(--accent)">Rösten</span></h1>
        <p>Sex kapitel. En sammanhängande berättelse.</p>
        <div class="help-toggle">
          <button class="btn btn-primary" onclick="DDR.exportBook()">Exportera som bok</button>
          <button class="btn btn-blue" onclick="DDR.backupTxt()">💾 Spara backup (.txt)</button>
          <button class="btn" onclick="DDR.resetAll()">Börja om allt</button>
        </div>
      </section>

      <div class="grid-2">
        <section class="panel">
          <div class="badge">Så används det</div>
          <h2>En sak i taget</h2>
          <p>Varje kapitel är byggt i samma ordning:</p>
          <ul class="bullets">
            <li><strong>Läs</strong> den korta scenen</li>
            <li><strong>Välj</strong> hur eleven reagerar</li>
            <li><strong>Skriv</strong> i tre mindre delar i stället för en stor tom ruta</li>
            <li><strong>Bocka av</strong> checklistan när du är klar</li>
          </ul>
        </section>
        <section class="panel">
          <div class="badge">Status</div>
          <h2>Översikt</h2>
          <div class="progress-list">${progressItems}</div>
        </section>
      </div>

      <section class="panel" style="margin-top:18px">
        <div class="badge">Kapitel</div>
        <h2>Öppna rätt del direkt</h2>
        <div class="home-grid">${cards}</div>
      </section>

      <section class="footer-box">
        <div>
          <strong>Tips:</strong>
          <div class="small muted">Låt eleverna skriva ett kapitel i taget och exportera allt i slutet.</div>
        </div>
        <a class="btn btn-soft" href="kapitel-1.html">Starta med kapitel 1</a>
      </section>`;
  }

  function renderChapter(id) {
    const ch = chapterById(id);
    document.getElementById('chapterNav').innerHTML = renderChapterNav(id);

    const selected = state.choices[id] || '';
    const choiceButtons = ch.choices.map(choice => `<button class="choice-btn ${selected === choice.id ? 'selected' : ''}" onclick="DDR.pickChoice(${id}, '${choice.id}')">${choice.text}</button>`).join('');
    const storyHtml = ch.story.map(p => `<p>${p}</p>`).join('') + ch.callouts.map(renderCallout).join('');

    const tasksHtml = ch.tasks.map(task => {
      const value = getText(id, task.key);
      return `
        <div class="subtask">
          <h3>${task.title}</h3>
          <p>${task.help}</p>
          <div class="starter-row">${task.starters.map(st => `<button type="button" class="starter" onclick="DDR.insertStarter(${id}, '${task.key}', ${JSON.stringify(st)})">${st}</button>`).join('')}</div>
          <textarea data-chapter="${id}" data-key="${task.key}" placeholder="${task.placeholder}">${value}</textarea>
        </div>`;
    }).join('');

    const checklistHtml = ch.checklist.map((item, index) => {
      const checked = !!(((state.checks[id] || {})[index]));
      return `<label class="check-item"><input type="checkbox" ${checked ? 'checked' : ''} onchange="DDR.toggleCheck(${id}, ${index}, this.checked)"><span>${item}</span></label>`;
    }).join('');

    const vocabHtml = ch.vocab.map(([word, meaning]) => `<div class="vocab-item"><strong>${word}</strong><div class="small muted">${meaning}</div></div>`).join('');
    const easyHelpHtml = `<ul class="bullets">${ch.easyHelp.map(item => `<li>${item}</li>`).join('')}</ul>`;

    const extraValue = getText(id, 'extra');
    const extraHtml = ch.extra ? `
      <section class="write-card extra-card" style="margin-top:18px">
        <div class="badge badge-extra">Vill du göra mer?</div>
        <h2>${ch.extra.title}</h2>
        <p>${ch.extra.prompt}</p>
        <div class="starter-row">${ch.extra.starters.map(st => `<button type="button" class="starter" onclick="DDR.insertStarter(${id}, 'extra', ${JSON.stringify(st)})">${st}</button>`).join('')}</div>
        <textarea data-chapter="${id}" data-key="extra" placeholder="${ch.extra.placeholder}">${extraValue}</textarea>
        <div class="small muted" style="margin-top:8px">Texten sparas automatiskt och följer med i exporten.</div>
      </section>` : '';

    document.getElementById('app').innerHTML = `
      <div id="save-indicator" class="save-indicator">Sparat ✓</div>

      <section class="hero">
        <div class="badge">Kapitel ${ch.id} · ${ch.genre}</div>
        <h1>${ch.title}</h1>
        <p>${ch.intro}</p>
      </section>

      <div class="chapter-layout" style="margin-top:18px">
        <div class="left-stack">
          <section class="step">
            <h2><span class="step-number">1</span>Läs</h2>
            <div class="story">${storyHtml}</div>
          </section>

          <section class="choice-card">
            <h2><span class="step-number">2</span>Välj</h2>
            <p>${ch.choiceQuestion}</p>
            <div class="choice-group">${choiceButtons}</div>
            <div class="selected-note">${selected ? 'Val sparat: ' + (ch.choices.find(c => c.id === selected)?.text || '') : 'Välj det som passar bäst.'}</div>
          </section>

          <section class="write-card">
            <h2><span class="step-number">3</span>Skriv</h2>
            <p>Skriv i tre mindre delar. Allt sparas automatiskt i webbläsaren.</p>
            ${tasksHtml}
            <div class="word-row">
              <span id="word-total">0 ord · mål ca ${ch.goalWords}</span>
              <div class="progress-bar"><div class="progress-fill" id="word-fill"></div></div>
              <span id="chapter-state" class="state todo">Skriv mer, eller gå vidare</span>
            </div>
          </section>
        </div>

        <div class="right-stack">
          <section class="panel">
            <div class="badge">Det viktiga</div>
            <h2>Vad du ska lyckas med</h2>
            <ul class="bullets">
              <li>förstå scenen</li>
              <li>komma igång snabbt</li>
              <li>skriva tydligt, inte perfekt</li>
            </ul>
          </section>

          <section class="panel">
            <div class="badge">Stöd</div>
            <h2>Behöver du hjälp?</h2>
            <div class="help-toggle">
              <button class="btn btn-soft" onclick="DDR.toggleHelp('easy-help')">Enklare stöd</button>
              <button class="btn btn-soft" onclick="DDR.toggleHelp('example-help')">Exempel</button>
              <button class="btn btn-soft" onclick="DDR.toggleHelp('vocab-help')">Ordlista</button>
            </div>
            <div class="help-box" id="easy-help">${easyHelpHtml}</div>
            <div class="help-box" id="example-help"><p>${ch.example}</p></div>
            <div class="help-box" id="vocab-help"><div class="vocab">${vocabHtml}</div></div>
          </section>

          <section class="panel">
            <div class="badge">Check</div>
            <h2>Snabb koll</h2>
            <p class="small muted">Bocka av när du är nöjd. Kapitlet markeras som klart när alla rutor är ibockade och ordmålet är nått.</p>
            <div class="checklist">${checklistHtml}</div>
          </section>
        </div>
      </div>

      <section class="footer-box">
        <div>
          <strong>Allt sparas automatiskt.</strong>
          <div class="small muted">Du kan gå vidare direkt eller exportera allt på startsidan.</div>
        </div>
        <div class="top-actions">
          ${id > 1 ? `<a class="btn" href="kapitel-${id - 1}.html">← Föregående</a>` : `<a class="btn" href="index.html">← Start</a>`}
          ${id < chapters.length ? `<a class="btn btn-primary" href="kapitel-${id + 1}.html">Nästa kapitel →</a>` : `<a class="btn btn-primary" href="index.html">Till startsidan</a>`}
        </div>
      </section>

      ${extraHtml}`;

    document.querySelectorAll('textarea').forEach(area => {
      area.addEventListener('input', event => {
        setText(id, event.target.dataset.key, event.target.value);
        updateChapterStats(id);
      });
    });
    updateChapterStats(id);
  }

  function escapeHtml(text) {
    return text.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  }

  return {
    init(pageType, chapterId = 0) {
      if (pageType === 'home') renderHome();
      else renderChapter(chapterId);
    },
    pickChoice(chapterId, choiceId) {
      state.choices[chapterId] = choiceId;
      saveState();
      renderChapter(chapterId);
    },
    insertStarter,
    toggleCheck(chapterId, index, checked) {
      if (!state.checks[chapterId]) state.checks[chapterId] = {};
      state.checks[chapterId][index] = checked;
      saveState();
      updateChapterStats(chapterId);
    },
    toggleHelp(id) {
      const el = document.getElementById(id);
      if (el) el.classList.toggle('open');
    },
    exportBook,
    backupTxt,
    resetAll() {
      if (confirm('Är du säker? Då rensas allt som är skrivet.')) {
        localStorage.removeItem(STORAGE_KEY);
        window.location.reload();
      }
    }
  };
})();
