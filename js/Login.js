$(document).ready(function() {
    var email = "admin";
    var password = "admin";
    var emailLogin = $('#emailLogin');
    var passwordLogin = $('#passwordLogin');
    var btnLogin = $('#btnLogin');
    btnLogin.click(function() {
        if (emailLogin.val() == '') {
            toastr.error("Email is Required", "Ops !!");
        } else if (passwordLogin.val() == '') {
            toastr.error("Password is Required", "Ops !!");
        } else {
            if (emailLogin.val() == email && passwordLogin.val() == password) {
                toastr.success("Login Successfully", "Done");
                window.location.href = "../html/ControlPanel.html";
            } else {
                toastr.error("Email or Password is InValid", "Ops !!");
            }
        }
    })
})