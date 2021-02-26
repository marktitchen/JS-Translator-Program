// define variables
const lang = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');    
const userName = document.querySelector('.userName');
const password = document.querySelector('.password');     

// loop through and display variables userName and password
link.forEach(el => {
    el.addEventListener('click', () => {
        lang.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');
        
        userName.textContent = data[attr].userName;
        password.textContent = data[attr].password;
    });
});

// translate words
var data = {
    "english":
    {
        "userName": "Username",
        "password": "Password"
    },
    "french":
    {
        "userName": "Nom d'utilisateur",
        "password": "Mot de passe"
    }
}