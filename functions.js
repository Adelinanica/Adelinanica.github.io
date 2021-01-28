function hide(id) {
  var el = document.getElementById(id);
  el.style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "";
}

function hideAllPages(){
    var pages = Array.from(document.querySelectorAll("#main .page")); 
    pages.forEach(function(page){
      hide(page.id);
   });
}

function showPage(pageId) {
  hideAllPages();
  show(pageId);
}

function listenMenuClick() {
  document.addEventListener("click", function (e){
    var link = e.target;
    if (link.matches("#top-menu-bar a")) {
      var id = link.innerHTML.toLowerCase();
    showPage(id);
    }
    });
}

listenMenuClick();

showPage("skills")

var allSkills = [
  { name :"HTML", favorite: true, endorsements:5 },
  { name :"CSS", favorite: false, endorsements:5 },
  { name :"JS", favorite: true, endorsements:7 },
 ];
//TO DO class="favourite-skill"

var allSkillsHtml = allSkills.map(function (skill){
    return  `<li>${skill.name} <span> (${skill.endorsements})</span></li>`;
});

var skillsEl = document.querySelector("#skills ul");
skillsEl.innerHTML= allSkillsHtml.join("");