var Courses = JSON.parse(localStorage.getItem("courses"));
$(document).ready(function() {

    var content = $('#content');
    for (let i = 0; i < Courses.length; i++) {

        content.append(
            " <div class='[row wow fadeIn' style='visibility: visible; animation-name: fadeIn;'> " +
            "<div class='col-md-6 col-sm-12'>" +
            "<div class='about-module'>" +
            "<h3>" + Courses[i].title + "</h3>" +

            "<p>" + Courses[i].desc + "</p>"


            +
            "<div class = 'text-center' >" +
            "  <input type = 'button' id='btn" + i + "' value = 'Apply' class = 'btn-warning btn-course apply' / >" +
            "</div> </div>"

            +
            "<!-- end about-module -->" +
            "</div> <div class = 'col-md-6 col-sm-12' >" +
            "<div class = 'popular-courses' >" +
            "<div class = 'post-media entry' >"

            +
            "<img src = '../images/small_course_01.jpg' alt = '' class = 'img-responsive imgCourse' >" +
            "<div class = 'magnifier' >" +
            " <!-- end shop-bottom -->" +
            " </div>" +
            "<!-- end magnifier -->" +
            "</div>" +
            "<!-- end post-media -->" +
            "</div>" +
            "<!-- end courses -->" +
            "</div>" +
            "<!-- end col -->"

            +
            "<!-- end col -->" +
            "</div>" +
            "<hr class = 'invis3' >"
        )

    }
    $('.apply').on("click", applyClick)

})

function applyClick() {
    // console.log((this.id).substring(3, this.id.length))

    if (sessionStorage.getItem("loginStatus") == 'true') {
        var id = Courses[parseInt((this.id).substring(3, this.id.length))].id;
        window.location.href = "../html/"
        window.open("exam.html#" + id)
    } else {
        $('#myModalLogin').modal('show');
    }

}