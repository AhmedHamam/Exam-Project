var arr_courses=[];
var course=null;
var div_questions;
window.onload=function()
{
    div_questions=document.getElementById("div_questions");
    
    var pagelink=window.location.href.split("#")
    if(pagelink.length>1)
    {
        arr_courses = JSON.parse(localStorage.getItem('courses'));
        for(var i=0;i<arr_courses.length;i++)
        {
            if(pagelink[1]==arr_courses[i].id)
            {
                course=arr_courses[i];
                document.getElementById("txt_page_title").innerText=course.title;
                break;
            }
        }
        if(course!=null)
        {
            for(var i=0;i<course.questions.length;i++)
            {
                show_qustion_in_page(course.questions[i])
                alert("next")
            }
        }

    }
    else
    {
        alert("cannot open this window")
        window.close();
    }

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
div_questions.innerHTML=x;
}