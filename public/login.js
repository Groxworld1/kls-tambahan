function login (e)  {
    e.preventDefault();

    let email = $('#email').val();
    localStorage.setItem('session', email);
    window.location.href = "/home";
}

/*
function facebook(e){
    let search = window.location.search;
    let param = new URLSearchParams(search);

    if(param.has('fbID')){
        $('#fbID').val(param.get('fbID'))
    }
}
*/

$(function() {
    let email = localStorage.getItem('session');
    localStorage.setItem("i", 1);
    let fbID = localStorage.getItem('fbID');

    if (email || fbID) window.location.replace('/home');


    let search = window.location.search;
    let param = new URLSearchParams(search);

    if(param.has('fbID')){
        $('#fbID').val(param.get('fbID'))
    }

    $('#f_login').submit(login);
});
