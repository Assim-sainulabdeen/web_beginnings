let regex = /^[a-zA-Z]*$/;
let emailRegexp=/^[a-z0-9àâçéèêëîïôûùüÿñæœ .-]*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let mobileRegexp = /^\d{10}$/;
let passwordRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
let form = $("#form");

let fname = $("#fname");
let lname = $("#lname");
let country = $("#country");
let gender = $("#male ");
let email = $("#email");
let mobile = $("#mobile");
let dob = $("#dateofbirth");
let address = $("#address");
let photo = $("#file");
let password = $("#password");
let confirmPassword = $("#confirmPassword");

form.on("submit", (e) =>{
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
    let getId = id.siblings("span");
    let getIcon = id.siblings("i");
    myId.addClass("border")
    getId.text(message);
    getIcon.addClass("common");
}

function error1(id, message){
    let myId = id;
    let getId = id.siblings("span");
    let getIcon = id.siblings("i");
    myId.addClass("border")
    getId.text(message);
    getIcon.addClass("failure");
}

function success(id, message){
    let myId = id;
    let getId = id.siblings("span");
    let getIcon = id.siblings("i");
    myId.addClass("no-border")
    getId.text(message);
    getIcon.addClass("failure");
}

function validateName(){

    if (fname.val().trim() === ""){
        return (error(fname , "*Name cannot be empty"));    
    }else if(fname.val().trim().length < 3){
        return(error(fname, "*Name Must contain atleast 3 characters"));
    }else if (fname.val().trim().length > 50){
        return (error(fname, "*Name can be a maximum of 50 characters"));
    }else if (!fname.val().match(regex)) {
        return (error(fname, "*Name can only contain letters"));
    }else{
        return (success(fname, ""));
    }
}

function validateLastName(){

    if (lname.val().trim() === ""){
        return (error(lname, "*Last Name cannot be empty")); 
    }else if (lname.val().trim().length > 50){
        return (error(lname, "Last Name can be a maximum of 50 characters")); 
    }else if (!lname.val().match(regex)) {
        return (error(lname, "Last Name can only contain letters")); 
    }else{
        return (success(lname, ""));
    }
}

function validateCountry(){ 
    
    if(country.val() === "Select your Country"){
       return (error(country, "*Please Select your country"));
    }else{
        return (success(country, ""));
    }
}

function validateGender(){
    
    if ($("#male").is(":checked") || $("#female").is(":checked") && $("#others").is(":checked")){
        return (success(gender, ""));
    }else{
        return (error1(gender,"Please select your gender"));
    }
}

function validateEmail(){

    if (email.val().trim() === ""){
        return (error(email, "*Email field cannot be empty"));
    }else if (!email.val().trim().match(emailRegexp)){
        (error(email, "Enter a valid Email"));
    }else{
        (success(email, ""));
    }
}

function validateMobileNumber(){

    if(mobile.val().trim() === ""){
        return (error(mobile, "Please fill the empty field"));
    }else if(mobile.val().trim().length != 10){
        return (error(mobile, "Please complete the phone number"));
    }else if (!mobile.val().trim().match(mobileRegexp)){
        return (error(mobile, "Please use Numbers only"));
    }else{
        return (success(mobile, ""));
    }
}

function validateDob(){

    if(dob.val().trim() == ""){
        return (error(dob, "Please fill the empty field"));
    }else{
        return (success(dob, ""));
    }
}

function validateAddress(){

    if(address.val().trim() == ""){
        return (error1(address, "Please fill the empty field"));
    }else if (address.val().trim(). length < 15 || address.val().trim().length > 200) {
        return (error1(address, "Address cannot be less than 15 characters and can have a maximum of 200 characters"));
    }else{
        return (success(address, ""));
    }
}

function validateFile(){

    if (photo.val() === ""){
        return (error(photo, "*Select a file"));
    }else{
        let fileName=photo.val().trim();
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

    if (password.val().trim() == ""){
        return (error(password,"*Enter a Password"));
    }else if(password.val().match(passwordRegexp)){
        return (success(password, ""));
    }else{
        return (error(password, "Enter a strong password"));
    }
}

function confirmPass(){

    if ( confirmPassword.val() == ""){
        return (error(confirmPassword, "*Confirm your password"));
       
    }else if (confirmPassword.val() === password.val()){
        return (success(confirmPassword, ""));
    }
    else{
        return (error(confirmPassword, "Passwords do not match"));
    }
}