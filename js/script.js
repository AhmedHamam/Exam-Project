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
    // LoginOut
    var LoginOut = $('#LoginOut');
    var profile = $('#profile');

    // End SignUp
    // json Array of User
    var usersJson = [];
    // json object of one User
    var userObject;
    // Login Status
    var loginStatus = false;
    if (sessionStorage.getItem("loginStatus") == 'true') {

        showModelLogin.css("display", "none");
        showModelSignUp.css("display", "none")
        LoginOut.css("display", "")
        profile.css("display", "")



    } else {
        showModelLogin.css("display", "");
        showModelSignUp.css("display", "")
        LoginOut.css("display", "none")
        profile.css("display", "none")

    }
    LoginOut.click(function() {
        loginStatus = false;
        sessionStorage.setItem("loginStatus", loginStatus);
        window.location.href = "../html/Home.html";
        // window.location.reload();


    })
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
                        sessionStorage.setItem("loginStatus", loginStatus);
                        showModelLogin.css("display", "none");
                        showModelSignUp.css("display", "none")
                        LoginOut.css("display", "")
                        profile.css("display", "")

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
                $('#myModalSignUp').modal('hide');
                toastr.success("Sign Up  Successfully", "Done");
            } else {
                userObject = [{
                    'Id': Saved.length + 1,
                    'Name': txt_NameSignUp.val(),
                    'Email': txt_EmailSignUp.val(),
                    'Password': txt_PasswordSignUp.val(),
                    'Image': txt_FileUpload.val()
                }]
                for (var i = 0; i < Saved.length; i++) {
                    console.log(txt_EmailSignUp.val());
                    console.log(Saved[i].map(a => a.Email));
                    // console.log(txt_EmailSignUp.val());
                    if (txt_EmailSignUp.val() == Saved[i].map(a => a.Email)) {
                        console.log(txt_EmailSignUp.val());
                        console.log(Saved[i].Email);
                        toastr.error("Sign Up  Error", "Ops !!");
                        txt_EmailSignUp.val('');
                        break;
                    } else {
                        Saved.push(userObject);
                        // Put the object into storage
                        localStorage.setItem('users', JSON.stringify(Saved));
                        $('#myModalSignUp').modal('hide');
                        toastr.success("Sign Up  Successfully", "Done");
                        loginStatus = true;
                        sessionStorage.setItem("loginStatus", loginStatus);

                        showModelLogin.css("display", "none");
                        showModelSignUp.css("display", "none")
                        LoginOut.css("display", "")
                        profile.css("display", "")
                        break;
                    }
                }

            }


        }


    })



    $('#courseName').html(courseName);

    //Fill Question In HTML
    var questionhtml = document.querySelectorAll('.question-content');
    var choiseshtml0 = document.querySelectorAll('.answer0');
    var choiseshtml1 = document.querySelectorAll('.answer1');
    var choiseshtml2 = document.querySelectorAll('.answer2');
    var choiseshtml3 = document.querySelectorAll('.answer3');
    var choiseshtml4 = document.querySelectorAll('.answer4');
    var choiseshtml5 = document.querySelectorAll('.answer5');
    var choiseshtml6 = document.querySelectorAll('.answer6');
    var choiseshtml7 = document.querySelectorAll('.answer7');
    var choiseshtml8 = document.querySelectorAll('.answer8');
    var choiseshtml9 = document.querySelectorAll('.answer9');

    for (let i = 0; i < questionhtml.length; i++) {
        const element = questionData[i].question;
        questionhtml[i].innerHTML = element;
        if (i == 0) {
            fillChoices(choiseshtml0, i);
        }
        if (i == 1) {
            fillChoices(choiseshtml1, i);
        }
        if (i == 2) {
            fillChoices(choiseshtml2, i);
        }
        if (i == 3) {
            fillChoices(choiseshtml3, i);
        }
        if (i == 4) {
            fillChoices(choiseshtml4, i);
        }
        if (i == 5) {
            fillChoices(choiseshtml5, i);
        }
        if (i == 6) {
            fillChoices(choiseshtml6, i);
        }
        if (i == 7) {
            fillChoices(choiseshtml7, i);
        }
        if (i == 8) {
            fillChoices(choiseshtml8, i);
        }
        if (i == 9) {
            fillChoices(choiseshtml9, i);
        }
    }

    function fillChoices(arr, j) {
        for (let i = 0; i < arr.length; i++) {
            arr[0].innerHTML = '<span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="1">' + questionData[j].choise1;
            arr[1].innerHTML = '<span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="2">' + questionData[j].choise2;
            arr[2].innerHTML = '<span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="3">' + questionData[j].choise3;
            arr[3].innerHTML = '<span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="4">' + questionData[j].choise4;
        }
    }
    var btnSubmit = $('#btnSubmit');
    var count = 0;
    btnSubmit.on('click', function() {

        var active = document.querySelectorAll('.active');
        if (active.length == 10) {
            for (let i = 0; i < active.length; i++) {
                const element = active[i];
                var choice = $(element).find('input:radio').val();
                if (choice == questionData[i].answer) {
                    count += 10;

                }

            }
            toastr.success("Your Degree is " + count + "%", "Well ");
            $("label.btn").attr("disabled", "disabled");
            $('#btnSubmit').attr("disabled", "disabled");
        } else {
            toastr.error("Answer All Questions", "Ops !!");

        }


    })




});



$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('.dmtop').css({ bottom: "25px" });
    } else {
        $('.dmtop').css({ bottom: "-100px" });
    }
    $('.dmtop').on('click', function() {
        $('html, body').animate({ scrollTop: '0px' }, 800);
        return false;
    });

});

// OUR SLIDERS
$('#owl-services').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1100: {
            items: 4
        },
        1200: {
            items: 4
        }
    }
})
$('#owl-client').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 4
        },
        1000: {
            items: 5
        }
    }
})

$('#owl-testimonial-2').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
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