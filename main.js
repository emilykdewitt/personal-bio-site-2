const home = document.getElementById('homeContainer');
const bio = document.getElementById('bioContainer');
const tech = document.getElementById('technologiesContainer');
const projects = document.getElementById('projectsContainer');

const projectsArray = [
    {
        title: "Cool Project 1", 
        screenshot: "./photos/projectPhotos/placeholder1.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: "Cool Project 2", 
        screenshot: "./photos/projectPhotos/placeholder2.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: "Cool Project 3", 
        screenshot: "./photos/projectPhotos/placeholder3.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: "Cool Project 4", 
        screenshot: "./photos/projectPhotos/placeholder4.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: "Cool Project 5", 
        screenshot: "./photos/projectPhotos/placeholder1.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: "Cool Project 6", 
        screenshot: "./photos/projectPhotos/placeholder2.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: "Cool Project 7", 
        screenshot: "./photos/projectPhotos/placeholder3.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: "Cool Project 8", 
        screenshot: "./photos/projectPhotos/placeholder4.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    }
];

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

const createProjectCards = () => {
    let domString = '';
    for(let i = 0; i < projectsArray.length; i++) {
        if (projectsArray[i].available === true) {
            domString += `<div class="col-6">`;
            domString +=    `<div class="projectCard">`;
            domString +=     `<div class="img_wrap">`
            domString +=       `<div class="img_img"><img class="projectPhoto img-fluid" src="${projectsArray[i].screenshot}"></div>`;
            domString +=       `<div class="img_description">`;
            domString +=         `<h5>${projectsArray[i].title}</h5>`;
            domString +=          `<p>Description: ${projectsArray[i].description}</p>`;
            domString +=         `<p>Technologies used: ${projectsArray[i].technologiesUsed}</p>`;
            domString +=         `<a href=${projectsArray[i].url}>Link</a><br/>`;
            domString +=         `<a href=${projectsArray[i].githubUrl}>GitHub</a>`;
            domString +=      `</div>`;
            domString +=     `</div>`;
            domString +=    `</div>`;
            domString += `</div>`;
        }
        printToDom('projectsRow', domString);
}
};

const printRandomDomString = () => {
    let domString = '';
    domString += `<h2>Hello this function works<h2>`;
    printToDom('projectsContainer', domString);
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
        createProjectCards();
    } else return
};

const eventListeners = () => {
    document.getElementById('bioBtn').addEventListener('click', navButtonAction);
    document.getElementById('techBtn').addEventListener('click', navButtonAction);
    document.getElementById('projectsBtn').addEventListener('click', navButtonAction);
    document.getElementById('homeBtn').addEventListener('click', homePageLoad);
    document.getElementById('brandBtn').addEventListener('click', homePageLoad);

};

const init = () => {
    homePageLoad();
    eventListeners();
};

init();