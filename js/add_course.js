var arr_courses = [];
var arr_course_videos = [];
var arr_qustions = [];
var arr_qustion_choice = [];
var course = 
{
    "id": 1,
    "title": "",
    "desc":"",
    "questions": [],
    "videos": [],
    "image":""
};
var question = 
{
    "id": 1,
    "question": "",
    "choice": [],
    "answer": 0
}


var btn_save_course ;
var btn_add_qusetion;
var btn_save_qustion;
var txt_course_title;
var txt_num_videos;
var txt_question_data;
var txt_course_desc;
var div_questions;
//=======================================================window load================================================
window.onload = function() 
{
    btn_save_course= document.getElementById("btn_save_course");
    btn_add_qusetion= document.getElementById("btn_add_qusetion");
    btn_save_qustion=document.getElementById("btn_save_qustion");
    txt_course_title=document.getElementById("txt_course_title");
    txt_num_videos=document.getElementById("txt_num_videos");
    txt_course_desc=document.getElementById("txt_course_desc");
    txt_question_data=document.querySelectorAll(".txt_question_data");
    div_questions=document.getElementById("div_questions");
    arr_courses = JSON.parse(localStorage.getItem('courses'));
    add_saved_course();
    btn_add_qusetion.onclick=btn_add_qusetion_click;
    btn_save_qustion.onclick=btn_save_qustion_click;
    btn_save_course.onclick=btn_save_course_click;


}
//=========================================================buttons and html elements================================




    function btn_add_qusetion_click()
    {   

            //  alert("btn_save_course_click")
    }
    function btn_save_course_click()
    {
        arr_courses = JSON.parse(localStorage.getItem('courses'));
        arr_course_videos=[];
        for(var i=0;i<parseInt(txt_num_videos.value);i++)
        {
            var src="videos/"+txt_course_title.value+"/"+(i+1)+".mp4";
            arr_course_videos.push(src)
        }
        course=new Object();
        course.id=arr_courses.length+1;
        course.title= txt_course_title.value;
        course.image="images/"+txt_course_title.value+".jpg";
        course.questions=arr_qustions;
        course.videos=arr_course_videos;
        course.desc=txt_course_desc.value;
        arr_courses.push(course);
        localStorage.setItem("courses", JSON.stringify(arr_courses));
        txt_course_title.value="";
        txt_num_videos.value="";
        txt_course_desc.value="";
       // toastr.success("Course added Successfully", "Done");
        // window.open('Exam.html#'+course.title, '_self');
        window.open('Exam.html#4', '_self');
        // alert("btn_save_course_click")
    }
    function btn_save_qustion_click()
    {
        question=new Object();
        question.id=arr_qustions.length+1;
        question.question= txt_question_data[0].value;
        arr_qustion_choice=[];
        arr_qustion_choice.push(txt_question_data[1].value);
        arr_qustion_choice.push(txt_question_data[2].value);
        arr_qustion_choice.push(txt_question_data[3].value);
        arr_qustion_choice.push(txt_question_data[4].value);
        question.choice=arr_qustion_choice;
        question.answer=txt_question_data[5].value;
        arr_qustions.push(question);
        for(var i=0;i<txt_question_data.length-1;i++)
        {
            txt_question_data[i].value="";
        }
        txt_question_data[5].value=1;
        $('#model_questions').modal('hide')
        show_qustion_in_page(question);
        toastr.success("question added Successfully", "Done");
        
    }
    function  show_qustion_in_page(q)
    {

      var x='<div class="col-md-10"><div class="row">'+
            '<div class="col-md-12 col-sm-12 margin ">'+
                '<div class="text-left">'+
                    '<span class="question"> Question '+q.id+'</span> <span class="delemeter">|</span>'+
                    '<span class="question-content"> '+q.question+' ?.</span>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<div class="row m_l">'+
            '<div class="quiz" id="quiz" data-toggle="buttons">'+
                '<label class="  btn btn-lg btn-primary btn-block  answer0"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="1">'+q.choice[0]+'</label>'+
                '<label class="  btn btn-lg btn-primary btn-block  answer0"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="2">'+q.choice[1]+'</label>'+
                '<label class="  btn btn-lg btn-primary btn-block  answer0"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="3">'+q.choice[2]+'</label>'+
                '<label class="  btn btn-lg btn-primary btn-block  answer0"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="4">'+q.choice[3]+'</label>'+
            '</div>'+
        '</div>'+
    '</div>';
    div_questions.innerHTML+=x;
    }
