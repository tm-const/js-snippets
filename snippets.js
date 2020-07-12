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
// @media JS
// -------------------------------------------------


$(document).ready(function () {
    $(".fa-code").click(function () {
        if ($(window).width() <= 833) {
            $("#sub_navs").slideToggle();
        }
    });
    $("#sub_navs").click(function () {
        $("#sub_navs").slideToggle();
    });
    $(window).resize(function () {
        if ($(window).width() >= 832.5) {
            $("#sub_navs").hide();
        }
    });
});



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
		var newTitle = "Original title";
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



// -------------------------------------------------
// Device Detection
// -------------------------------------------------

<script type="text/javascript">
	
  var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
    console.log('')
}
</script>


// -------------------------------------------------
// One-Time Event
// -------------------------------------------------


<script>
	
  // create a one-time event
  function onetime(node, type, callback) {
    // create event
    node.addEventListener(type, function(e) {
      // remove event
      e.target.removeEventListener(e.type, arguments.callee);
      // call handler
      return callback(e);
    });
  }

  // First Name Input Field
  const fname = document.getElementById("fname");

  // fname - one-time event
  onetime(fname, "focus", handler);

  // fname - handler function
  function handler(e) {
    console.log('test')
    fbq('track', 'InitiateCheckout', {
      content_name: 'flc, salespage',
    });
  }	
</script>
