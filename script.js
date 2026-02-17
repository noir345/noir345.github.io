// Here we go... 
const languages = {
    ua: {
        title: "ГРАВЕЦЬ 1",
        tab1: "ПРОФІЛЬ",
        tab2: "КВЕСТИ",
        levellol: "РІВЕНЬ 3 (НОВАЧОК)",
        linux: "Linux",
        html: "HTML/CSS: не визначено",
        whoreadingthis: "ІНВЕНТАР:",
        idkreally: "> ПОТОЧНІ КВЕСТИ",
        doneTitle: "> ВИКОНАНІ КВЕСТИ",
        emptyMsg: "Чому ти сюди дивишся? 0_0", 
        pName: "PassGenX",
        pDesc: "Все ще будується...",
        socialmed: "ЗВ'ЯЗОК:"
    },
    en: {
        title: "PLAYER 1",
        tab1: "PROFILE",
        tab2: "QUESTS",
        levellol: "LVL 3 (NEWBIE)",
        linux: "Linux",
        html: "HTML/CSS: undefined",
        whoreadingthis: "INVENTORY:",
        idkreally: "> ACTIVE QUESTS",
        doneTitle: "> COMPLETED QUESTS",
        emptyMsg: "Why are you looking here? 0_0",
        pName: "PassGenX",
        pDesc: "Still under construction...",
        socialmed: "CONNECT:"
    },
    // FIXME Slovak display issue
    sk: {
        title: "HRÁČ 1",
        tab1: "PROFIL",
        tab2: "QUESTY",
        levellol: "ÚROVEŇ 3 (ZAČIATOČNÍK)",
        linux: "Linux",
        html: "HTML/CSS: nedefinované",
        whoreadingthis: "INVENTÁR:",
        idkreally: "> AKTÍVNE ÚLOHY",
        doneTitle: "> DOKONČENÉ QUESTY",
        emptyMsg: "Prečo sa sem pozeráš? 0_0", 
        pName: "PassGenX",
        pDesc: "Stále vo výstavbe...",
        socialmed: "KONTAKT:"
    }
};

let currentLang = 'en';

function showTab(tabName) {
    const isProfile = tabName === 'profile';
    document.getElementById('profile-section').style.display = isProfile ? 'block' : 'none';
    document.getElementById('projects-section').style.display = isProfile ? 'none' : 'block';
    
    document.getElementById('tab-profile').className = isProfile ? 'nes-btn is-primary' : 'nes-btn';
    document.getElementById('tab-projects').className = isProfile ? 'nes-btn' : 'nes-btn is-primary';
}

function updateQuestHeaders() {
    const langrnlmao = languages[currentLang];
    const activeList = document.getElementById('active-list');
    const doneList = document.getElementById('done-list');

    document.getElementById("idkreally").innerText = langrnlmao.idkreally + (activeList.style.display === 'none' ? " [+]" : " [-]");
    document.getElementById("done-title").innerText = langrnlmao.doneTitle + (doneList.style.display === 'none' ? " [+]" : " [-]");
}

function toggleGroup(elementId) {
    const list = document.getElementById(elementId);
    list.style.display = list.style.display === 'none' ? 'block' : 'none';
    updateQuestHeaders();
}

function setLang(lang) {
    currentLang = lang;
    const langrnlmao = languages[lang];
    
    if (lang === 'sk') {
        document.getElementById('sk-warn').style.display = 'flex';
    }
    
    document.getElementById("title").innerText = langrnlmao.title;
    document.getElementById("levellol").innerText = langrnlmao.levellol;
    
    document.getElementById("tab-profile").innerText = langrnlmao.tab1;
    document.getElementById("tab-projects").innerText = langrnlmao.tab2;
    
    document.getElementById("linux-label").innerHTML = `${langrnlmao.linux} <span style="float:right; color: #f7d51d;">5%</span>`;
    document.getElementById("html-label").innerText = langrnlmao.html;
    document.getElementById("whoreadingthis").innerText = langrnlmao.whoreadingthis;
    
    updateQuestHeaders();
    
    document.getElementById("empty-msg").innerText = langrnlmao.emptyMsg;
    document.getElementById("proj-name").innerText = langrnlmao.pName;
    document.getElementById("proj-desc").innerText = langrnlmao.pDesc;
    document.getElementById("socialmed").innerText = langrnlmao.socialmed;
}

setLang('en');