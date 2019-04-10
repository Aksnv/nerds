"use strict";

/* ------------- Popup ------------- */

var overlay = document.querySelector(".overlay");
var popup = document.querySelector(".popup");

var openPopupButton = document.querySelector(".contacts__button");
var closePopupButton = popup.querySelector(".popup__close-button");

var feedbackForm = document.querySelector(".feedback-form");
var feedbackFormFields = feedbackForm.querySelectorAll(".feedback-form__field");
var feedbackFormFieldName = feedbackForm.querySelector(".feedback-form__field_name");
var feedbackFormFieldEmail = feedbackForm.querySelector(".feedback-form__field_email");
var feedbackFormFieldText = feedbackForm.querySelector(".feedback-form__field_text");

var storage = true;

var expr = /(\w+)@(\w+)\.(\D+)/i;

var loseFocus = function(fieldName) {
  fieldName.addEventListener("blur", function() {
    if (fieldName.value) {
      fieldName.classList.remove("feedback-form__field_invalid");
    }
  });
};

try {
  feedbackFormFieldName.value = localStorage.getItem("name");
} catch {
  storage = false;
}

openPopupButton.addEventListener("click", function(e) {
  e.preventDefault();
  overlay.classList.add("overlay_visible");
  popup.classList.add("popup_visible");
  if (storage) {
    if (localStorage.getItem("name")) {
      feedbackFormFieldName.value = localStorage.getItem("name");
      if (localStorage.getItem("email")) {
        feedbackFormFieldEmail.value = localStorage.getItem("email");
        feedbackFormFieldText.focus();
      } else {
        feedbackFormFieldEmail.focus();
      }
    } else {
      feedbackFormFieldName.focus();
    }
  }
});

closePopupButton.addEventListener("click", function(e) {
  e.preventDefault();
  overlay.classList.remove("overlay_visible");
  popup.classList.remove("popup_visible");
  popup.classList.remove("popup_invalid");
});

overlay.addEventListener("click", function() {
  if (overlay.classList.contains("overlay_visible")) {
    overlay.classList.remove("overlay_visible");
    popup.classList.remove("popup_visible");
    popup.classList.remove("popup_invalid");
  }
});

window.addEventListener("keydown", function(e) {
  if (e.keyCode === 27) {
    e.preventDefault();
    if (popup.classList.contains("popup_visible")) {
      overlay.classList.remove("overlay_visible");
      popup.classList.remove("popup_visible");
      popup.classList.remove("popup_invalid");
    }
  }
});

feedbackForm.addEventListener("submit", function(e) {
  e.preventDefault();
  var counter = 0;
  for (var i = 0; i < feedbackFormFields.length; i++) {
    if (!feedbackFormFields[i].value) {
      feedbackFormFields[i].classList.add("feedback-form__field_invalid");
      counter++;
    } else {
      feedbackFormFields[i].classList.remove("feedback-form__field_invalid");
    }
  }
  if (counter === 0) {
    if (expr.test(feedbackFormFieldEmail.value)) {
      if (storage) {
        localStorage.setItem("name", feedbackFormFieldName.value);
        localStorage.setItem("email", feedbackFormFieldEmail.value);
      }
      feedbackForm.submit();
    } else {
      feedbackFormFieldEmail.classList.add("feedback-form__field_invalid");
      popup.classList.remove("popup_invalid");
      popup.offsetWidth;
      popup.classList.add("popup_invalid");
    }
  } else {
    popup.classList.remove("popup_invalid");
    popup.offsetWidth;
    popup.classList.add("popup_invalid");
  }
});

loseFocus(feedbackFormFieldName);
loseFocus(feedbackFormFieldEmail);
loseFocus(feedbackFormFieldText);


