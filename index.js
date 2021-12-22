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
