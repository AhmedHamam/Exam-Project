$(document).ready(function() {
    //   Login
    var txt_EmailLogin = $('#emailLogin');
    var txt_PasswordLogin = $('#passwordLogin');
    var btnLogin = $('#btnLogin');
    var showModelLogin = $('#showmodalLogin');
    // end Login

    // SignUp
    var txt_NameSignUp = $('#txt_NameSignUp');
    var txt_EmailSignUp = $('#txt_EmailSignUp');
    var txt_PasswordSignUp = $('#txt_PasswordSignUp');
    var txt_FileUpload = $('#txt_FileUpload');
    var btnSignUp = $('#btnSignUp');
    var showModelSignUp = $('#showmodalSignup');

    // End SignUp
    // json Array of User
    var usersJson = [];
    // json object of one User
    var userObject;
    // Login Status
    var loginStatus = false;
    showModelLogin.click(function() {
        $('#myModalLogin').modal('show')
    });
    btnLogin.click(function() {

        if (txt_EmailLogin.val() == '') {
            alert('Email is Required');
        } else if (txt_PasswordLogin.val() == '') {
            alert('Password is Required')
        } else {
            var Saved = JSON.parse(localStorage.getItem('users'));
            if (Saved == null) {
                toastr.error("Ypu Must Sign Up First ", "Opps !!");

            } else {
                for (var i = 0; i < Saved.length; i++) {
                    loginStatus = false;
                    // console.log(Saved[i].map(a => a.Email))
                    if (txt_EmailLogin.val() == Saved[i].map(a => a.Email) &&
                        txt_PasswordLogin.val() == Saved[i].map(a => a.Password)) {
                        loginStatus = true;
                        $('#myModalLogin').modal('hide');
                        toastr.success("Login Successfully", "Done");

                        break;
                    }


                }
                console.log(loginStatus)
            }
            if (loginStatus == false) {
                toastr.error("User Name Or Password InValid ", "Opps !!");
                // alert("User Name Or Password InValid")
            }

        }

    })

    showModelSignUp.click(function() {
        $('#myModalSignUp').modal('show')
    });
    btnSignUp.click(function() {
        if (txt_NameSignUp.val() == '') {
            alert('Name is Required');
        } else if (txt_EmailSignUp.val() == '') {
            alert('Email is Required')
        } else if (txt_PasswordSignUp.val() == '') {
            alert('Password is Required')
        } else if (txt_FileUpload.val() == '') {
            alert('Image is Required')
        } else {
            var Saved = JSON.parse(localStorage.getItem('users'));

            if (Saved == null) {
                userObject = [{
                    'Id': usersJson.length + 1,
                    'Name': txt_NameSignUp.val(),
                    'Email': txt_EmailSignUp.val(),
                    'Password': txt_PasswordSignUp.val(),
                    'Image': txt_FileUpload.val()
                }]
                usersJson.push(userObject);
                localStorage.setItem('users', JSON.stringify(usersJson));

            } else {
                userObject = [{
                    'Id': Saved.length + 1,
                    'Name': txt_NameSignUp.val(),
                    'Email': txt_EmailSignUp.val(),
                    'Password': txt_PasswordSignUp.val(),
                    'Image': txt_FileUpload.val()
                }]
                Saved.push(userObject);
                // Put the object into storage
                localStorage.setItem('users', JSON.stringify(Saved));

            }

            $('#myModalSignUp').modal('hide');
            toastr.success("Sign Up  Successfully", "Done");
        }


    })


    // $("label.btn").on('click', function() {
    //     var choice = $(this).find('input:radio').val();


    // $('#quiz').fadeOut();
    // setTimeout(function() {
    // if ($(this).find('input:radio').is(':checked')) {
    //     console.log("checked")
    //     $(this).attr('class', 'btn btn-lg btn-warning btn-block ')

    // } else {
    //     $(this).attr('class', 'btn btn-lg btn-primary btn-block ')

    // }
    // $('.btn-primary.active').attr('class', 'btn btn-lg checked btn-block ')
    // console.log($(this).attr('class'));
    // $("#answer").html($(this).checking(choice));


    // $('#quiz').show();
    // $('#loadbar').fadeOut();
    /* something else */
    // }, 1500);
    // });
    // $ans = 3;

    // $.fn.checking = function(ck) {
    //     if (ck != $ans)
    //         return 'INCORRECT';
    //     else
    //         return 'CORRECT';
    // };
});