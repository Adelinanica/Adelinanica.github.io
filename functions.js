function hide(id){
    var el = document.getElementById(id);
    el.style.display="none";
}

function show(id){
    var element=document.getElementById(id);
    element.style.display='';
}


function showHomePage(){
    hide("skills");
    hide("languages");
    hide("projects");

    show("home");
}

function showSkillsPage(){
    hide("home");
    hide("languages");
    hide("projects");
    
    show("skills");
}

function showLanguagesPage(){
    hide("skills");
    hide("home");
    hide("projects");
   
    show("languages");
    }

function showProjectsPage(){
    hide("skills");
    hide("languages");
    hide("home");
   
    show("projects");
    }

