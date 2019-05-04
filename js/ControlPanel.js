$(document).ready(function() {
    var btnSave = $('#btnSave');
    btnSave.click(function() {
        window.location.href = "../html/AddCourse.html";
    })

    var table;
    var Courses = JSON.parse(localStorage.getItem("courses"));

    for (let i = 0; i < Courses.length; i++) {

        table += '<tr>';
        table += '<td>';
        table += i + 1;
        table += '</td>';
        table += '<td>';
        table += Courses[i].title
        table += '</td>';
        table += '<td>';



        table += Courses[i].desc;


        table += '</td>';
        table += '<td>';

        table += "<img src='../images/small_course_01.jpg' width='77px' height='69px'/>";
        // table += "<img src='../" + Courses[i].image + "' width='77px' height='69px'/>";
        table += '</td>';
        table += '<td>';
        if (Courses[i].videos.length != null) {
            table += Courses[i].videos.length;
        } else {
            table += 0;
        }

        table += '</td>';
        table += '</tr>';

    }
    $('#content').append(table);
})