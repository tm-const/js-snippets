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


// -------------------------------------------------
// Get URL UTMs : Passes to URL
// -------------------------------------------------


function getAllUrlParams(url) {

  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i = 0; i < arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // set parameter name and value (use 'true' if empty)
      var paramName = a[0];
      var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

      // if the paramName ends with square brackets, e.g. colors[] or colors[2]
      if (paramName.match(/\[(\d+)?\]$/)) {

        // create key if it doesn't exist
        var key = paramName.replace(/\[(\d+)?\]/, '');
        if (!obj[key]) obj[key] = [];

        // if it's an indexed array e.g. colors[2]
        if (paramName.match(/\[\d+\]$/)) {
          // get the index value and add the entry at the appropriate position
          var index = /\[(\d+)\]/.exec(paramName)[1];
          obj[key][index] = paramValue;
        } else {
          // otherwise add the value to the end of the array
          obj[key].push(paramValue);
        }
      } else {
        // we're dealing with a string
        if (!obj[paramName]) {
          // if it doesn't exist, create property
          obj[paramName] = paramValue;
        } else if (obj[paramName] && typeof obj[paramName] === 'string'){
          // if property does exist and it's a string, convert it to an array
          obj[paramName] = [obj[paramName]];
          obj[paramName].push(paramValue);
        } else {
          // otherwise add the property
          obj[paramName].push(paramValue);
        }
      }
    }
  }

  return obj;
}


let utm_source_ping = getAllUrlParams().utm_source; 
let utm_medium_ping = getAllUrlParams().utm_medium; 
let utm_campaign_ping = getAllUrlParams().utm_campaign;
let utm_content_ping = getAllUrlParams().utm_content; 
let utm_term_ping = getAllUrlParams().utm_term;

function utmSourcePing() {
	window.location.href='https://domain.com/domain-optin-form/?utm_source='+utm_source_ping+'&utm_medium='+utm_medium_ping+'&utm_campaign='+utm_campaign_ping+'&utm_content='+utm_content_ping+'&utm_term='+utm_term_ping+'';
}
