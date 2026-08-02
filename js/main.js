let darkmode = localStorage.getItem('darkmode');7
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem("darkmode", "active")
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem("darkmode", null)
}

if (darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
});
const fact = document.getElementById("fact");
const factButton = document.getElementById('nw-fact');

async function getFact(){
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/facts', 
            {
                headers: {
                    "X-Api-Key": "A0uejEww9ZxQKROTl3VBiH2xsV2OafaVfGIllDmm"
                }
            }
        );
        const data = await response.json();

        console.log(data);

        fact.textContent = data[0].fact;
    }

    catch(error){
        fact.textContent = "Couldn't load fact.";
        console.log(error);
    }
}

getFact();

factButton.addEventListener("click", getFact);