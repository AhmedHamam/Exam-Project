var arr_courses = [];
var arr_course_videos = [];
var arr_qustions = [];
var arr_qustion_choice = [];
var course = 
{
    "id": 1,
    "title": "",
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

window.onload = function() 
{
 
    arr_courses = JSON.parse(localStorage.getItem('courses'));
    
    if(arr_courses==null)
    {
        course=new Object();
        course.title= "HTML Course";
        arr_qustions = 
        [
            {
                "id":1,
                "question": "Inside which HTML element do we put the JavaScript?",
                "choice":
                [
                    "Script",
                    "js", 
                    "Scripting",
                    "JavaScript"
                ],
                "answer": 1
            },
            {
                "id":2,
                "question": "HTML stands for what?",
                "choice":
                [
                    "Hypertrophic Management Language",
                    "Hyperberic Tertiary Logrithm",
                    "Hypertext Markup Language",
                    "Hyperresonant Marginal Logrithm"
                ],
                "answer": 2
            },
            {
                "id":3,
                "question": "Every HTML document should have what?",
                "choice":
                [
                    "A head section, and within it a title, followed by a body",
                    "A title section, and within it a header, followed by a body",
                    "A body and header",
                    "None of these"
                ],
                "answer": 3
            },
            {
                "id":4,
                "question": "Which formats are examples of lossless  files?",
                "choice":
                [
                    "JPEG & GIF",
                    "GIF & TIF",
                    "RGB & CMYK",
                    "PNG & JPEG"
                ],
                "answer": 3
    
            },
            {
                "id":5,
                "question": "Which tag would insert a graphic into a Web page?",
                "choice":
                [
                    "Img src=Glass.jpeg",
                    "P....Glass.jpeg..../p",
                    "Img file=Glass.jpeg",
                    "Picture=Glass.jpeg"
                ],
                "answer": 1
    
            },
            {
                "id":6,
                "question": "Use this tag to emphasize text.",
                "choice":
                [
                    "Il",
                    "Ls",
                    "Ol or u",
                    "Ul or ls"
                ],
                "answer": 1
    
            },
            {
                "id":7,
                "question": "You wish your list to be in a particular order. Which tag should you use?",
                "choice":
                [
                    "Script",
                    "js",
                    "Scripting",
                    "JavaScript"
                ],
                "answer": 4
    
            },
            {
                "id":8,
                "question": "Inside which HTML element do we put the JavaScript?",
                "choice":
                [
                    "Lil",
                    "Ls",
                    "Ol",
                    "Os"
                ],
                "answer": 2
    
            },
            {
                "id":9,
                "question": "Which tag would be used for a line break?",
                "choice":
                [ "Lb",
                "Br",
                "Brk",
                "Ln"
                ],
                "answer": 1
    
            },
            {
                "id":10,
                "question": "Www.newcaneynews.com",
                "choice":
                [ "Www is the domain name",
                "Newcaneynews is the domain name",
                "Com is the domain name",
                "Www.newcaneynews.com is the domain name."
                ],
                "answer": 4
    
            }
        ];
        arr_course_videos=
        [
            "videos/"+course.title+"/1.mp4",
            "videos/"+course.title+"/2.mp4",
            "videos/"+course.title+"/3.mp4",
            "videos/"+course.title+"/4.mp4",
            "videos/"+course.title+"/5.mp4",
            "videos/"+course.title+"/6.mp4",
            "videos/"+course.title+"/7.mp4",
            "videos/"+course.title+"/8.mp4",
            "videos/"+course.title+"/9.mp4",
            "videos/"+course.title+"/10.mp4"
        ];
        course.questions=arr_qustions;
        course.videos=arr_course_videos;
        course.image="images/"+course.title+".jpg";
        arr_courses=[];
        arr_courses.push(course);
        localStorage.setItem("courses", JSON.stringify(arr_courses));
    }
}












//     // alert(arr_courses.length)
//     if (arr_courses === null)
//         arr_courses = [];
//     alert(arr_courses.length)

//     //alert(arr_courses[0].title)
//     var btn_save_course = document.getElementById("btn_save_course");
//     var btn_add_qusetion = document.getElementById("btn_add_qusetion");

//     btn_add_qusetion.onclick = fun_add_question;
//     btn_save_course.onclick = fun_save_course;

//     // var txt_question_choice=document.getElementsByClassName("question_choice");
//     // //==============================================================================
//     // var btn_add_course=document.getElementById("btn_add_course");
//     // var btn_save_qustion=document.getElementById("btn_save_qustion");
//     // //==============================================================================
//     // btn_add_course.onclick=btn_add_course_click;
//     // btn_add_qusetion.onclick=btn_add_qusetion_click;
//     // btn_save_course.onclick=btn_save_course_click;
//     // btn_save_qustion.onclick=btn_save_qustion_click;
//     //==============================================================================    

//     //==============================================================================



//     //=========================this funcation to get the path of the video===================================

//     var input_files = document.querySelector('input[type="file"]');
//     input_files.onchange = previewFile;

//     function previewFile() {
//         arr_course_videos = [];
   
   
   
//    //=========================this funcation to get the path of the video===================================
    
//    var input_files=  document.querySelector('input[type="file"]');
//     input_files.onchange=previewFile;
//     function previewFile() 
//     {       alert(input_files.value)
//           arr_course_videos=[];
//         //   alert(input_files.files.length)
//         for (var i = 0; i < input_files.files.length; i++) {
//             var file = input_files.files[i];
//             arr_course_videos.push(file)
//                 //  var reader  = new FileReader();
//                 //  reader.onloadend = function ()
//                 //  {
//                 //     alert(reader.result)
//                 //      arr_course_videos.push(reader.result)

//             //  }
//             //  if (file) 
//             //  {
//             //  reader.readAsDataURL(file);
//             //  } 
//         }
//         //  alert(arr_course_videos)

//     }

//     //-----------------------------------------------

//     // function btn_add_course_click()
//     // {

//     //     d= URL.createObjectURL(x.value); // set src to file url
//     //     // var d=document.getElementById("add_vedios")
//     //     var dd=document.getElementById("dd")
//     //     alert(d)
//     //     dd.innerHTML="<img src='"+d+"'>"

//     // }
//     // function btn_add_qusetion_click()
//     // {
//     //     for(var i=0;i<txt_question_choice.length;i++)
//     //     {
//     //         arr_qustion_choice.push(txt_question_choice[i].value);
//     //     }
//     //     qustion.choice=arr_qustion_choice;
//     //     arr_qustion.push(qustion);
//     //     course.questions=arr_qustion;
//     //    
//     // }
//     // function btn_save_course_click()
//     // {
//     //     alert("btn_save_course_click")
//     // }
//     // function btn_save_qustion_click()
//     // {
//     //     alert("btn_save_qustion_click")
//     // }
//     //==============================================================================
//     var btn_next = document.getElementById("next");
//     btn_next.onclick = btn_next_Clik;
// }
// var qustion_number = 1;

// function fun_add_question() {
//     var div_questions = document.getElementById("div_qustions");
//     div_questions.innerHTML += '<div id="div_qustion' + qustion_number + '">' +
//         'Enter the question' + qustion_number + ' : <input type="text" class="question q' + qustion_number + '"><br><br>' +
//         'Enter the question choice 1 : <input type="text" class="question_choice q' + qustion_number + '"><br><br>' +
//         'Enter the question choice 2 : <input type="text" class="question_choice q' + qustion_number + '"><br><br>' +
//         'Enter the question choice 3 : <input type="text" class="question_choice q' + qustion_number + '"><br><br>' +
//         'Enter the question choice 4 : <input type="text" class="question_choice q' + qustion_number + '"><br><br>' +
//         'Enter the question Answer : <input type="text"   class="answer q' + qustion_number + '"><br><br>' +
//         '===============================================================================' +
//         '</div>';
//     qustion_number++;
// }

// function fun_save_course() {
//     var txt_course_title = document.getElementById("course_title");
//     course = new Object();
//     course.id = arr_courses.length + 1;
//     course.title = txt_course_title.value;
//     course.videos = arr_course_videos;
//     for (var i = 0; i < qustion_number - 1; i++) {
//         var txt_question = document.querySelectorAll('.q' + (i + 1));
//         var choice = [];
//         question = new Object();
//         question.id = i + 1;
//         question.question_txt = txt_question[0].value;
//         choice.push(txt_question[1].value);
//         choice.push(txt_question[2].value);
//         choice.push(txt_question[3].value);
//         choice.push(txt_question[4].value);
//         question.choice = choice;
//         question.answer = txt_question[5].value;
//         arr_qustion.push(question);
//     }
//     course.questions = arr_qustion;
//     arr_courses.push(course);
//     localStorage.setItem("courses", JSON.stringify(arr_courses));
// }

// <<<<<<< HEAD
// var x = 0;

// function btn_next_Clik() {
//     alert(arr_courses[0].questions.length)
//     alert(arr_courses[0].videos.length)

// =======
// var x=0;
// function btn_next_Clik()
// {   
//     // alert(arr_courses[0].questions.length)
//     // alert(arr_courses[0].videos.length)
 
// >>>>>>> 8847550a4bc700f0c8985d06299dbf09b27881b5

//     // var preview = document.querySelector('video');


//     if (x < arr_courses[0].videos.length) {
//         var file = arr_courses[0].videos[x];
//         x++;
//         var reader = new FileReader();
//         reader.onloadend = function() {
//             preview.src = reader.result;
//         }
//         if (file) {
//             reader.readAsDataURL(file);
//         } else {
//             preview.src = "";
//         }
//     } else {
//         x = 0;
//     }




//     // if(x<arr_courses[0].videos.length)
//     // {
//     //     var file = arr_courses[0].videos[x];
//     //     x++;
//     //     var reader  = new FileReader();
//     //     reader.onloadend = function ()
//     //     {
//     //     preview.src = reader.result;
//     //     }
//     //     if (file) 
//     //     {
//     //     reader.readAsDataURL(file);
//     //     } 
//     //     else 
//     //     {
//     //     preview.src = "";
//     //     }
//     // }
//     // else
//     // {
//     //     x=0;
//     // }
  
     
    
// >>>>>>> 8847550a4bc700f0c8985d06299dbf09b27881b5
// }