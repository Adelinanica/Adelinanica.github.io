function hide(id) {
  var el = document.getElementById(id);
  el.style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "";
}

function hideAllPages(){
    var pages = document.querySelectorAll("#main .page");
    
    //initial ;         condition     ; post execution
    for( var i = 0; i < pages.length; i++) {
        var page = pages[i];
        hide(page.id);  
        // hide(pages[i].id)     
        }
}

function showPage(pageId) {
  hideAllPages();
  show(pageId);
}
