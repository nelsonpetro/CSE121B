/* Lesson 4 */

/* DATA */
// mySelf = {
//     name : "Nelson Petro",
//     photo : "/images/photo.webp",
//     favoriteFoods : ["Pasta", "Mixed Rice", "Shawarma", "Patacones", "Cheese Cake"],
//     hobbies : ["coding", "watch anime", "play videogames", "read books", "visit my girlfriend"],
//     placesLived : [
//         {
//             place : "Montería",
//             length : "22 years"
//         },

//         {
//             place : "Sao Paulo",
//             length : "21 days"
//         },

//         {
//             place : "Paraguay",
//             length : "2 years"
//         }
//     ]
// };
// Step 1: Declare a new variable to hold information about yourself
mySelf = {};
// Step 2: Inside of the object, add a property named name with a value of your name as a string
mySelf["name"] = "Nelson Petro"; 
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
mySelf["photo"] = "images/photo.webp";
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
mySelf["favoriteFoods"] = ["Pasta", "Mixed Rice", "Shawarma", "Patacones", "Cheese Cake"];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
mySelf["hobbies"] = ["Coding", "Watch anime", "Play videogames", "Read books", "Visit my girlfriend"];
// Step 6: Add another property named placesLived with a value of an empty array
mySelf["placesLived"] = [];
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
mySelf.placesLived.push({place : "", length : ""});
// Step 8: For each property, add appropriate values as strings
mySelf.placesLived[0].place = "Montería";
mySelf.placesLived[0].length = "22 years";
// Step 9: Add additional objects with the same properties for each place you've lived
mySelf.placesLived.push({place : "Sao Paulo", length : "21 days"});
mySelf.placesLived.push({place : "Paraguay", length : "2 years"});

/* OUTPUT */
console.log(mySelf.favoriteFoods.length);
// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").innerHTML = mySelf.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").src = mySelf.photo;
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").alt = mySelf.name;
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
for (let i = 0; i < mySelf.favoriteFoods.length; i++) {
    const li = document.createElement("li");
    const ul = document.querySelector("#favorite-foods");
    li.appendChild(document.createTextNode(mySelf.favoriteFoods[i]));
    ul.appendChild(li);
}
// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
for (let i = 0; i < mySelf.hobbies.length; i++) {
    const li = document.createElement("li");
    const ul = document.querySelector("#hobbies");
    li.appendChild(document.createTextNode(mySelf.hobbies[i]));
    ul.appendChild(li);
}

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
for (let i = 0; i < mySelf.placesLived.length; i++) {
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    const dl = document.querySelector("#places-lived");
    dt.appendChild(document.createTextNode(mySelf.placesLived[i].place));
    dt.style.fontWeight = 600;
    dd.appendChild(document.createTextNode(mySelf.placesLived[i].length));
    dl.appendChild(dt);
    dl.appendChild(dd);
}

//Centering the name
document.querySelector("label").style.textAlign = "center";
document.querySelector("label").style.minWidth = "0px";