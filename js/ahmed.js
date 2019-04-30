var arr_courses=[];
var arr_qustion=[];
var arr_qustion_choice=[];
var arr_qustion_answer=[];
window.onload=function ()
{
    var txt_course_title=document.getElementById("course_title");
    var txt_question_choice=document.getElementsByClassName("question_choice");
    //==============================================================================
    var btn_add_course=document.getElementById("btn_add_course");
    var btn_add_qusetion=document.getElementById("btn_add_qusetion");
    var btn_save_course=document.getElementById("btn_save_course");
    var btn_save_qustion=document.getElementById("btn_save_qustion");
    //==============================================================================
    btn_add_course.onclick=btn_add_course_click;
    btn_add_qusetion.onclick=btn_add_qusetion_click;
    btn_save_course.onclick=btn_save_course_click;
    btn_save_qustion.onclick=btn_save_qustion_click;
    //==============================================================================    
    var course=
    {
        "id":arr_courses.length+1,
        "title":txt_course_title.value,
        "questions":arr_qustion
    };
    var qustion=
    {
        "id":1,
        "question":"",
        "choice":[],
        "answer":[]
    }
    //==============================================================================
    function btn_add_course_click()
    {
      
        alert(course.id)
        alert(course.title)
        alert(course.questions)

    }
    function btn_add_qusetion_click()
    {
        for(var i=0;i<txt_question_choice.length;i++)
        {
            arr_qustion_choice.push(txt_question_choice[i].value);
        }
        qustion.choice=arr_qustion_choice;
        arr_qustion.push(qustion);
        course.questions=arr_qustion;
        localStorage.setItem("java",JSON.stringify (qustion));
    }
    function btn_save_course_click()
    {
        alert("btn_save_course_click")
    }
    function btn_save_qustion_click()
    {
        alert("btn_save_qustion_click")
    }
    //==============================================================================
}