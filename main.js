function animatedForm() {
    const arrows = 
    document.querySelectorAll(".fa-arrow-down");

    arrows.forEach( arrow => {
        arrow.addEventListener ( "click", () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;     //Current input div.
            const nextForm = parent.nextElementSibling;  // for the reference of the next input div.
            
            
            // Validate User
            if(input.type === "text" && validateUser(input)){
                console.log("All Good.");
                nextSlide(parent, nextForm);
            } else if(input.type === "email" && validateEmail(input)){
                console.log("All Good.");
                nextSlide(parent, nextForm);
            } else if(input.type === "password" && validatePassword(input)){
                console.log("All Good.");
                nextSlide(parent, nextForm);
            }else{
                parent.style.animation = "shake 0.5s ease";
            }
            
            parent.addEventListener("animationend",() =>{
                parent.style.animation = "";
            });
        });
    });
}

function validateUser(user){

    // You can add as much validation as you need here.


    if(user.value.length < 6 ){
        console.log('Not an acceptable username');
        error('rgb(189,87,87)');
    }
    else{
        error('rgb(87, 189, 130)');
        return true;   // returns true if the value is acceptable and passes all the validations.
    }
}
function validateEmail(email){

    // You can add as much validation as you need here.
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(validation.test(email.value)){
        error('rgb(87, 189, 130)');
        return true;   // returns true if the value is acceptable and passes all the validations.
    }
    else{
        console.log('Not an acceptable email');
        error('rgb(189,87,87)');
    }
}
function validatePassword(password){

    // You can add as much validation as you need here.


    if(password.value.length < 6 ){
        console.log('Not an acceptable username');
        error('rgb(189,87,87)');
    }
    else{
        error('rgb(87, 189, 130)');
        return true;   // returns true if the value is acceptable and passes all the validations.
    }
}

function error(color){
    document.body.style.backgroundColor = color;
}


function nextSlide(parent, nextForm){
    parent.classList.remove('active');
    parent.classList.add('inactive');
    nextForm.classList.remove('inactive');
    nextForm.classList.add('active');
}


animatedForm();