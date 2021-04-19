const button = document.getElementById('btn_login');
const username = document.getElementById('username');
const password = document.getElementById('password');

button.addEventListener('click', get_users());

function get_users(){
    var user = username.value;
    var pass = password.value;
    console.log("Username: "+user+" Password: "+pass);
}