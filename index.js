// --- Navigation Buttons ko select karna ---
let home = document.getElementById("homes");   // HOME link
let cloth = document.getElementById("cloths"); // CLOTH link
let review = document.getElementById("reviews"); // REVIEW link
let blog = document.getElementById("blogs");   // BLOG link
let contact = document.getElementById("contacts"); // CONTACT link
let login = document.getElementById("login"); // Login button
let button = document.getElementById("btn");  // Login form ka button


// --- CLOTH button click hone par red hoga aur baqi black ---
cloth.addEventListener("click", function(){
    home.style.color="black";
    cloth.style.color="red";   // cloth active
    review.style.color="black";
    blog.style.color="black";
    contact.style.color="black";
})


// --- REVIEW button click hone par red hoga aur baqi black ---
review.addEventListener("click", function(){
    home.style.color="black";
    cloth.style.color="black";
    review.style.color="red"; // review active
    blog.style.color="black";
    contact.style.color="black";
})


// --- BLOG button click hone par red hoga aur baqi black ---
blog.addEventListener("click", function(){
    home.style.color="black";
    cloth.style.color="black";
    review.style.color="black";
    blog.style.color="red";   // blog active
    contact.style.color="black";
})


// --- CONTACT button click hone par red hoga aur baqi black ---
contact.addEventListener("click", function(){
    home.style.color="black";
    cloth.style.color="black";
    review.style.color="black";
    blog.style.color="black";
    contact.style.color="red";  // contact active
})


// --- Login button click hone par login form show hoga ---
login.addEventListener("click", function(){
    document.getElementById("log").style.display="block"
})


// --- Login form ke andar ka button (btn) click hone par check hoga ---
button.addEventListener("click", function(){
    let logName = document.getElementById("logName") // email input
    if(logName.value == ""){
        // agar empty hai to alert
        alert("please Enter Email & Password")
    }else{
        // warna success alert
        alert("You Logged In");
        document.getElementById("log").style.display="none"; // login form hide
    }
})


// --- Contact form ka submit button click hone par check karega ---
function submit(){
    let name = document.getElementById("name"); // Name input
    if(name.value == ""){
        alert("Please Enter Detail") // agar empty
    }else{
        alert("Thanks for joining "+" : " + name.value); // success message
        name.value="" // input clear
    }
}


// --- Sare Add to Cart buttons select kiye gaye ---
let cartButtons = document.querySelectorAll(".cardText button");

// --- Har Add to Cart button ke liye click event lagaya gaya ---
cartButtons.forEach(function(button){
    button.addEventListener("click", function(){
        // product name aur price ko read karega
        let productName = this.parentElement.querySelector("p").textContent;
        let productPrice = this.parentElement.querySelector("h3").textContent;

        // alert show karega ke product cart me add hua
        alert(productName + " (" + productPrice + ") added to cart!");
    });
});
