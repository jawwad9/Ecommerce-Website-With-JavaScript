// Get references to navigation menu items
let cloths = document.getElementById("cloths");   // "Cloths" menu item
let reviews = document.getElementById("reviews"); // "Reviews" menu item
let contacts = document.getElementById("contacts"); // "Contacts" menu item
let blogs = document.getElementById("blogs");     // "Blogs" menu item

// Event listener for "Cloths" menu
cloths.addEventListener("click", function(){
    cloths.style.color="red";   // Highlight Cloths in red
    reviews.style.color="black"; // Reset other items to black
    contacts.style.color="black";
    blogs.style.color="black";
})

// Event listener for "Reviews" menu
reviews.addEventListener("click", function(){
    cloths.style.color="black"; // Reset Cloths
    reviews.style.color="red";  // Highlight Reviews
    contacts.style.color="black";
    blogs.style.color="black";
})

// Event listener for "Blogs" menu
blogs.addEventListener("click", function(){
    cloths.style.color="black"; 
    reviews.style.color="black"; 
    contacts.style.color="black"; 
    blogs.style.color="red"; // Highlight Blogs
})

// Event listener for "Contacts" menu
contacts.addEventListener("click", function(){
    cloths.style.color="black"; 
    reviews.style.color="black"; 
    contacts.style.color="red";  // Highlight Contacts
    blogs.style.color="black";
})

// Get login button reference
let login = document.getElementById("login");

// Event listener for login button
login.addEventListener("click", function(){
    // Show login page (popup or section)
    let loginPage = document.querySelector(".loginPage").style.display="block";
})

// Get "Loged" button (login form submit button)
let loged = document.getElementById("loged");

// Event listener for login form submit
loged.addEventListener("click", function(){
    let email = document.getElementById("email"); // Input: email
    let pass = document.getElementById("pass");   // Input: password

    // Check if inputs are empty
    if(email.value == "" || pass.value == ""){
        alert("Please Enter Email Password"); // Alert if empty
    }else{
        alert("You Loged In"); // Success message
        document.querySelector(".loginPage").style.display="none"; // Hide login page
    }
})

// Get "Submit" button for contact form
let submit = document.getElementById("submit");

// Event listener for contact form submit
submit.addEventListener("click", function(){
    console.log("Aa"); // Debug log
    let names = document.getElementById("name");  // Input: name
    let password = document.getElementById("pass"); // Input: password

    console.log(names.value); // Debug log (name value)

    // Check if name or password is empty
    if(names.value == "" || password == ""){
        alert("Please Enter Name and Password"); // Show error
    }else{
        alert("Thanks for connecting"); // Success message
    }
})
