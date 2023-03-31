let regex = /^[a-zA-Z]*$/;
let emailRegexp=/^[a-z0-9àâçéèêëîïôûùüÿñæœ .-]*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let mobileRegexp = /^\d{10}$/;
let passwordRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
let form = document.getElementById("form");

let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let country = document.querySelector("#country");
let gender = document.querySelector("#male ");
let email = document.querySelector("#email");
let mobile = document.querySelector("#mobile");
let dob = document.querySelector("#dateofbirth");
let address = document.querySelector("#address");
let photo = document.querySelector("#file");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    validateName();
    validateLastName();
    validateCountry();
    validateGender();
    validateEmail();
    validateMobileNumber();
    validateDob();
    validateAddress();
    validateFile();
    validatePassword();
    confirmPass();
    
});

function error(id, message){
    let myId = id;
    let getId = id.parentElement.querySelector(".error");
    let getIcon = id.parentElement.querySelector(".failure-icon");
    myId.classList.add("border")
    getId.innerText = message;
    getIcon.classList.add("common");
}

function error1(id, message){
    let myId = id;
    let getId = id.parentElement.querySelector(".error");
    let getIcon = id.parentElement.querySelector(".failure-icon");
    myId.classList.add("border")
    getId.innerText = message;
    getIcon.classList.add("failure");
}

function success(id, message){
    let myId = id;
    let getId = id.parentElement.querySelector(".error");
    let getIcon = id.parentElement.querySelector(".failure-icon");
    myId.classList.add("no-border")
    getId.innerText = message;
    getIcon.classList.add("failure");
}

function validateName(){

    if (fname.value.trim() === ""){
        return (error(fname , "*Name cannot be empty"));    
    }else if(fname.value.trim().length < 3){
        return(error(fname, "*Name Must contain atleast 3 characters"));
    }else if (fname.value.trim().length > 50){
        return (error(fname, "*Name can be a maximum of 50 characters"));
    }else if (!fname.value.match(regex)) {
        return (error(fname, "*Name can only contain letters"));
    }else{
        return (success(fname, ""));
    }
}

function validateLastName(){

    if (lname.value.trim() === ""){
        return (error(lname, "*Last Name cannot be empty")); 
    }else if (lname.value.trim().length > 50){
        return (error(lname, "Last Name can be a maximum of 50 characters")); 
    }else if (!lname.value.match(regex)) {
        return (error(lname, "Last Name can only contain letters")); 
    }else{
        return (success(lname, ""));
    }
}

function validateCountry(){
    
    if(country.value ==="Select your Country"){
       return (error(country, "*Please Select your country"));
    }else{
        return (success(country, ""));
    }
};

function validateGender(){
    
    if (document.querySelector("#male").checked == false && document.querySelector("#female").checked == false && document.querySelector("#others").checked == false){
        return (error1(gender,"Please select your gender"));
    }else{
        return (success(gender, ""));
    }
}

function validateEmail(){

    if (email.value.trim()===""){
        return (error(email, "*Email field cannot be empty"));
    }else if (!email.value.trim().match(emailRegexp)){
        (error(email, "Enter a valid Email"));
    }else{
        (success(email, ""));
    }
}

function validateMobileNumber(){

    if(mobile.value.trim()===""){
        return (error(mobile, "Please fill the empty field"));
    }else if(mobile.value.trim().length != 10){
        return (error(mobile, "Please complete the phone number"));
    }else if (!mobile.value.trim().match(mobileRegexp)){
        return (error(mobile, "Please use Numbers only"));
    }else{
        return (success(mobile, ""));
    }
}

function validateDob(){

    if(dob.value.trim() == ""){
        return (error(dob, "Please fill the empty field"));
    }else{
        return (success(dob, ""));
    }
}

function validateAddress(){

    if(address.value.trim() == ""){
        return (error1(address, "Please fill the empty field"));
    }else if (address.value.trim(). length < 15 || address.value.trim().length > 200) {
        return (error1(address, "Address cannot be less than 15 characters and can have a maximum of 200 characters"));
    }else{
        return (success(address, ""));
    }
}

function validateFile(){

    if (photo.value === ""){
        return (error(photo, "*Select a file"));
    }else{
        let fileName=photo.value.trim();
        let fileExtension=["jpeg","jpg"];
        let imageExtension=fileName.lastIndexOf(".");
        let inputFile = fileName.substring(imageExtension + 1);
        let checkFile = fileExtension.includes(inputFile);

        if(! checkFile){
            return (error(photo, "Select a Valid file"));
        }else{
            return (success(photo, ""));
        }
    }

}

function validatePassword(){

    if (password.value.trim() == ""){
        return (error(password,"*Enter a Password"));
    }else if(password.value.match(passwordRegexp)){
        return (success(password, ""));
    }else{
        return (error(password, "Enter a strong password"));
    }
}

function confirmPass(){

    if ( confirmPassword.value == ""){
        return (error(confirmPassword, "*Confirm your password"));
       
    }else if (confirmPassword.value === password.value){
        return (success(confirmPassword, ""));
    }
    else{
        return (error(confirmPassword, "Passwords do not match"));
    }
}