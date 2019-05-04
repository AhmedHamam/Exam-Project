var arr_courses=[];
var answers_value=[];
var corect_answers=[];
var score=0;
var course=null;
var div_questions;
var btn_Submit;
var cr_id=0;
var st_id=0;
window.onload=function()
{
    div_questions=document.getElementById("div_questions");
    btn_Submit=document.getElementById("btn_Submit");
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
                show_qustion_in_page(course.questions[i]);
                corect_answers.push(course.questions[i].answer);
            }
            cr_id=course.id;
            
        }
    }
    else
    {
        alert("cannot open this window")
        window.close();
    }
  
    btn_Submit.onclick=btn_Submit_click;

}
function  show_qustion_in_page(q)
{

  var x='<div class="col-md-10"><div class="row">'+
        '<div class="col-md-12 col-sm-12 margin ">'+
            '<div class="text-left">'+
                '<span class="question"> Question '+q.id+'</span> <span class="delemeter">|</span>'+
                '<span class="question-content"> '+q.question+' ?</span>'+
            '</div>'+
        '</div>'+
    '</div>'+
    '<div class="row m_l">'+
        '<div class="quiz" id="quiz" data-toggle="buttons">'+
            '<label class="  btn btn-lg btn-primary btn-block choice "value="1"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input class="in_choice" type="radio" name="q_answer" value="1">'+q.choice[0]+'</label>'+
            '<label class="  btn btn-lg btn-primary btn-block choice "value="2"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input class="in_choice" type="radio" name="q_answer" value="2">'+q.choice[1]+'</label>'+
            '<label class="  btn btn-lg btn-primary btn-block choice "value="3"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input class="in_choice" type="radio" name="q_answer" value="3">'+q.choice[2]+'</label>'+
            '<label class="  btn btn-lg btn-primary btn-block choice "value="4"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input class="in_choice" type="radio" name="q_answer" value="4">'+q.choice[3]+'</label>'+
        '</div>'+
    '</div>'+
'</div>';
div_questions.innerHTML+=x;
}
function btn_Submit_click()
{
    answers_value=[];
    score=0;
    var labels=document.querySelectorAll(".choice");
    
    var answers=document.querySelectorAll(".in_choice");
    var active;
    var found=false;
    for(var i=0;i<answers.length;i+=4)
    {
        found=false;
        for(var j=i;j<i+4;j++)
        {
            active=labels[j].className.split(" ");
            if(active[active.length-1]=="active")
            {
                found=true;
                answers_value.push(answers[j].value)
                break;
            }
        }
        if(!found)
        {
            answers_value.push(0)
        }
    }
    for(var i=0;i<answers_value.length;i++)
    {
        if(corect_answers[i]==answers_value[i])
        {
            score++;
        }
    }

   
    var k=0;
    for(var i=0;i<labels.length;i+=4)
    {
        found=false;
        for(var j=i;j<i+4;j++)
        {
            if(answers[j].value==corect_answers[k])
            {
                labels[j].classList.add("correct")
                break;
            }
        }
        k++;
    } 
    toastr.success(score, "Done");
    

}