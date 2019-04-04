"use strict";

/* ------------- Disabled buttons attribute ------------- */

var disabledButtons = document.querySelectorAll(".button_disabled");

window.onload = function() {
  for (var i = 0; i <= disabledButtons.length - 1; i++) {
    disabledButtons[i].setAttribute("tabindex", -1);
  }
};
