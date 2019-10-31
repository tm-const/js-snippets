// -------------------------------------------------
// JavaScript: Function to create a UUID identifier
// -------------------------------------------------
// Reference article here: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php

function create_UUID(){
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
}

const iio = create_UUID();

document.querySelector('#tmp_button-85389').click(function() {
	location.href = "https://jordanbelfort.clickfunnels.com/mainevent1/?cf-affiliate-id=" + iio;
});


// -------------------------------------------------
// Get URL Vars
// -------------------------------------------------
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    return vars;
}


// -------------------------------------------------
// LocalStorage in JavaScript: How to
// -------------------------------------------------

// Guide: https://blog.logrocket.com/the-complete-guide-to-using-localstorage-in-javascript-apps-ba44edb53a36/

localStorage.setItem('price', str);

setItem(): Add key and value to localStorage
getItem(): Retrieve a value by the key from localStorage
removeItem(): Remove an item by key from localStorage
clear(): Clear all localStorage
key(): Passed a number to retrieve nth key of a localStorage


