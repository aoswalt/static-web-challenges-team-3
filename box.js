"use strict";

document.getElementById("change-button").onclick = function(clickEvent) {
  var box = document.getElementById("box");
  box.className = "changed";

  clickEvent.srcElement.disabled = true;
  setTimeout(function () {
    box.className = "normal";
    clickEvent.srcElement.disabled = false;
  }, 3000);
};
