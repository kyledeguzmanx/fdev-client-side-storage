//----------------LOCAL STORAGE ------------------------------

//create key > method 1
let key="name";
let keyValue = "Kyle";
localStorage.setItem(key, keyValue);

//create key > method 2
localStorage.setItem("age","21");

//create key > method 3
localStorage.nationality = "American";

/*
TO update value of an existing key-value pair, write code like you're recreating it.
It will overrite it.
*/

//read value > method 1
const name = localStorage.name;

//read value > method 2
const age = localStorage.getItem("age");


//delete value > method 1
localStorage.removeItem("nationality");
delete localStorage.name;

//delete all
localStorage.clear();

//----------------SESSION STORAGE ------------------------------

//create key > method 1
let key2="happy";
let keyValue2 = "true";
sessionStorage.setItem(key2, keyValue2);

//create key > method 2
sessionStorage.setItem("sad","false");

//create key > method 3
sessionStorage.confident = "true";

/*
TO update value of an existing key-value pair, write code like you're recreating it.
It will overrite it.
*/

//read value > method 1
const happy = sessionStorage.happy;

//read value > method 2
const sad = sessionStorage.getItem("sad");


//delete value > method 1
sessionStorage.removeItem("confident");
delete sessionStorage.sad;

//delete all
sessionStorage.clear();
//----------------COOKIES ------------------------------


function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  (function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
       let age = prompt("Please enter your age:","");
       setCookie("age", age, 30);

       let favoriteMusic = prompt("Enter favorite genre","");
       setCookie("faveGenre", favoriteMusic, 30);
    }

    if(getCookie("age") != "")
        alert("Your age is " + getCookie("age"));
    if(getCookie("faveGenre") != "")
        alert("Your faveGenre is " + getCookie("faveGenre"));
  })();