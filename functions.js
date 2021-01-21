function hide(id) {
  var el = document.getElementById(id);
  el.style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "";
}

function hideAllPages(){
    var pages = Array.from(document.querySelectorAll("#main .page")); 
   var pageIds = pages.map(function(page){
     return page.id;
   });
   
    //initial ;         condition     ; post execution
    for( var i = 0; i < pageIds.length; i++) {
        hide(pageIds[i])     
        }
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