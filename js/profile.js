var userObject;var StudentCourse;
$(document).ready(function() {
    userObject = JSON.parse(sessionStorage.getItem("userSession"));
    var table;
    $('#userNameHeader').html("<span id='welcome'>Welcome<span> " + "<span id='nameUser'>" + userObject.map(a => a.Name) + "</span> ")

    $('#userName').html(userObject.map(a => a.Name));
    $('#userEmail').html(userObject.map(a => a.Email));
    StudentCourse = JSON.parse(localStorage.getItem("student_course"));
    var Courses = JSON.parse(localStorage.getItem("courses"));
    for (let i = 0; i < StudentCourse.length; i++) {

        table += '<tr>';
        table += '<td>';
        table += i + 1;
        table += '</td>';
        table += '<td>';
        table += userObject.map(a => a.Name);
        table += '</td>';
        table += '<td>';

        for (let j = 0; j < Courses.length; j++) {
            console.log("Courses[j].id" + Courses[j].id);
            console.log("StudentCourse[i].c_id" + StudentCourse[i].c_id);
            if (Courses[j].id == StudentCourse[i].c_id) {
                table += Courses[j].title;
            }
        }

        table += '</td>';
        table += '<td>';
        table += StudentCourse[i].grade;
        table += '</td>';
        table += '</tr>';

    }
    $('#content').append(table);



    //=========================================
    var myConfig = {"type":"line","series":[{"values":[20,40,25,50,15,45,33,34]},{"values":[5,30,21,18,59,50,28,33]},{"values":[30,5,18,21,33,41,29,15]} ] };
 
zingchart.render({ 
	id : 'chart', 
	data : myConfig, 
	height: "100%", 
	width: "100%" 
});
})
