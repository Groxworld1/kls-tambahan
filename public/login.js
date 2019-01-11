function login (e)  {
    e.preventDefault();

    let email = $('#email').val();
    localStorage.setItem('session', email);
    window.location.href = "/home";
}

$(function() {
    let email = localStorage.getItem('session');
    if (email) window.location.replace('/home');

    $('#f_login').submit(login);
});
