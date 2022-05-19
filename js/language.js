const language = document.getElementById("navbar__item-5");
const languageOverlay = document.getElementById("link5");
const overlay = document.getElementById('nav__overlay');

let languageSelect = "en";
const textsToChange = document.querySelectorAll("[data-section]");

language.addEventListener("click", (e) =>{

    if(languageSelect === "en"){
        languageSelect = "es";
    }else{
        languageSelect = "en";
    }
    overlay.classList.remove('active');
    changeLanguage(languageSelect);
});

languageOverlay.addEventListener("click", (e) =>{

    if(languageSelect === "en"){
        languageSelect = "es";
    }else{
        languageSelect = "en";
    }
	overlay.classList.remove('active');
    changeLanguage(languageSelect);
});

const changeLanguage = async (languages) => {
    const requestJson = await fetch(`./languages/${languages}.json`);
    const texts = await requestJson.json();

    for(const textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }

}




