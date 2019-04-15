const home = document.getElementById('homeContainer');
const bio = document.getElementById('bioContainer');
const tech = document.getElementById('technologiesContainer');
const projects = document.getElementById('projectsContainer');

const homePageLoad = () => {
    home.style.display = "block";
    bio.style.display = "none";
    tech.style.display = "none";
    projects.style.display = "none";
};

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};



const navButtonAction = (e) => {
    if (e.target.id === 'bioBtn') {
        home.style.display = "none";
        bio.style.display = "block";
        tech.style.display = "none";
        projects.style.display = "none";
    } else if (e.target.id === 'techBtn') {
        home.style.display = "none";
        bio.style.display = "none";
        tech.style.display = "block";
        projects.style.display = "none";
    } else if (e.target.id === 'projectsBtn') {
        home.style.display = "none";
        bio.style.display = "none";
        tech.style.display = "none";
        projects.style.display = "block";       
    } else return
};

const eventListeners = () => {
    document.getElementById('bioBtn').addEventListener('click', navButtonAction);
    document.getElementById('techBtn').addEventListener('click', navButtonAction);
    document.getElementById('projectsBtn').addEventListener('click', navButtonAction)
};

const init = () => {
    homePageLoad();
    eventListeners();
};

init();