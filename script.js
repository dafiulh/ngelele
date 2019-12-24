function myMove() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("game").style.display = "block";
  var elem = document.getElementById("animate");
  var start = document.getElementById("start");
  var pos = 0;
  var id = setInterval(function() {
    if (pos == document.getElementById("container").innerWidth) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
    console.log(pos);
  }, 10);
  shortcut.add("Space",function(){
    clearInterval(id);
    var bot = 0;
    var toTop = setInterval(function() {
      bot++;
      elem.style.bottom = bot + 'px';
    }, 100);
  }, {'type':'keydown','propagate':true,'target':document});
  alert(window.innerWidth);
}
