// Array with anchor-tags from the news links in article 4
var nav = ["Don't stress", "Don't forbid", "Set limits"];
console.log( nav[0] );
console.log( nav[1] );
console.log( nav[2] );
console.log(nav.length);

// For-loop to repeat the code block "myNewslinks"
var arrayLength = nav.length;
var myList = "<ul>";
for (var i = 0; i < arrayLength; i++) { myList += "<li>" + nav[i] + "</li>"; } myList += "</ul>";
document.getElementById("myNewslinks").innerHTML = myList;
