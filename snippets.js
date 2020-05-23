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
// UX Subliminal Blink Technique
// -------------------------------------------------

<script type="text/javascript">

// AlmostCake.com Subliminal Blink Script:
// You can edit opacity by adjusting the values below. Remember, that in CSS opacity 0.8 stands for 80%!

document.addEventListener("DOMContentLoaded", function(event) 
	{
	setTimeout(function()
		{
		document.getElementById("sblink1").style.opacity="0.8";
		AlmostCake_2ss0q2();
		}, 2000);
	});

function AlmostCake_2ss0q2() 
	{
	setTimeout(function()
		{		
		document.getElementById("sblink1").style.opacity="1";
		AlmostCake_2ss0q();
		}, 115);
	};
function AlmostCake_2ss0q() 
	{
	setTimeout(function()
		{
		document.getElementById("sblink1").style.opacity="0.8";
		AlmostCake_2ss0q2();
		}, 2000);
	}

// End of AlmostCake.com Subliminal Blink Script
</script>


// -------------------------------------------------
// UX Alternative Tab Titles
// -------------------------------------------------


<script type="text/javascript">

// AlmostCake.com Alternative Titles Script:

function AlmostCakeAT_l0gdh() 
{
	if (document.hasFocus()) 
	{
		var newTitle = "Almost Cake";
		document.title = newTitle;
	}
	else
	{
		var newTitle = "🙁 Miss You. Come back...";
		document.title = newTitle;
	};
};
setInterval(AlmostCakeAT_l0gdh, 500);

// End of AlmostCake.com Alternative Titles Script

</script>
