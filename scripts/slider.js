"use strict";

/* ------------- Slider ------------- */

var sliderViewItems = document.querySelectorAll(".slider-view__item");
var sliderIndicators = document.querySelector(".slider-indicators");
var sliderIndicatorsItems = document.querySelectorAll(".slider-indicators__item");

var switchSlider = function() {
  for (var i = 0; i < sliderViewItems.length; i++) {
    if (sliderViewItems[i].classList.contains("slider-view__item_current")) {
      sliderViewItems[i].classList.remove("slider-view__item_current");
      sliderViewItems[i].classList.add("slider-view__item_hidden");
      sliderIndicatorsItems[i].classList.remove("slider-indicators__item_current");
      if (i < (feedbackFormFields.length - 1)) {
        sliderViewItems[i + 1].classList.add("slider-view__item_current");
        sliderViewItems[i + 1].classList.remove("slider-view__item_hidden");
        sliderIndicatorsItems[i + 1].classList.add("slider-indicators__item_current");
        break;
      } else {
        sliderViewItems[0].classList.add("slider-view__item_current");
        sliderViewItems[0].classList.remove("slider-view__item_hidden");
        sliderIndicatorsItems[0].classList.add("slider-indicators__item_current");
        break;
      }
    }
  }
};

for (var i = 0; i < sliderViewItems.length; i++) {
  if (!sliderViewItems[i].classList.contains("slider-view__item_current")) {
    sliderViewItems[i].classList.add("slider-view__item_hidden");
  }
}

sliderIndicators.classList.add("slider-indicators_visible");

setInterval(switchSlider, 3000);
