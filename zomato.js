function showInput() {
    var email = document.getElementById('Email');
    var phone = document.getElementById('Phone');
    var emailInput = document.getElementById('emailInput');
    var phoneInput = document.getElementById('phoneInput')

    if (email.checked) {
        emailInput.style.display = 'flex';
        phoneInput.style.display = 'none';
     


    } else if (phone.checked) {
        emailInput.style.display = 'none';
        phoneInput.style.display = 'flex';
       
    }


}

function showMenu(){

    var button = document.getElementById('menubutton')
    var menubar = document.getElementById('menu')
    var cross = document.getElementById('cross') 
if(button.click){
    menubar.style.display = 'block';
}
else if(cross.click){
    menubar.style.display = 'none';
}

}

