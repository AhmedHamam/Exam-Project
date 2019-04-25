$(document).ready(function() {

    var txt_Email = $('#defaultForm-email');
    var showModel = $('#showModel');
    var btnLogin = $('#btnlogin');
    var txt_Password = $('#password');
    btnLogin.click(function() {
        var users = { 'Email': txt_Email.val(), 'Password': txt_Password.val() };

        // Put the object into storage
        localStorage.setItem('users', JSON.stringify(users));
    })
    showModel.click(function() {
        var retrievedObject = localStorage.getItem('users');
        // txt_Email.value = JSON.parse(retrievedObject.Email)
        // txt_Password.value = JSON.parse(retrievedObject.Password)
        console.log('retrievedObject: ', JSON.parse(retrievedObject))
    });
    // Retrieve the object from storage

});