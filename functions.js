function showSkillsPage(){

    var home = document.getElementById("home");
    home.style.display="none"

    var language = document.getElementById("languages");
    language.style.display="none";

    var page= document.getElementById('skills'); 
    page.style.display='';
}

function showLanguagesPage(){
    var skills = document.getElementById("skills");
    skills.style.display="none";

    var home = document.getElementById("home");
    home.style.display="none";

    var project=document.getElementById("projects");
    project.style.display="none";
   
    var language = document.getElementById("languages");
    language.style.display = '';
}

function showProjectsPage(){
    var language = document.getElementById("languages");
language.style.display="none";

var home = document.getElementById("home");
home.style.display="none";

    var project=document.getElementById("projects");
    project.style.display='';
}

function showHomePage(){

    var skills = document.getElementById("skills");
    skills.style.display="none";
    
    var project=document.getElementById("projects");
    project.style.display="none";

    var language = document.getElementById("languages");
    language.style.display="none";

    var skills = document.getElementById("skills");
    skills.style.display="none";

    var homepage=document.getElementById("home");
    home.style.display='';
}