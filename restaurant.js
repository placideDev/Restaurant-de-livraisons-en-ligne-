// function pour le slide


function agrandira(){
    var grandir = document.getElementById("affichgrand");
    var currHeight = grandir.clientHeight;
    // var currwidth = grandir.clientwidth;
        grandir.style.height = (currHeight + 250) + "px";
}
function zoomout() {
    var grandir = document.getElementById("affichgrand");
    var currHeight = grandir.clientHeight;
        grandir.style.height = (currHeight - 250) + "px";
};

 var counter= 1;
  setInterval(function(){
    document.getElementById('radio' + counter).checked= true;
      counter++;
      if (counter > 4) {
        counter = 1;
      }
  }, 5000);