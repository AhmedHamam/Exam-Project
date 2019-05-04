function add_saved_course()
{
if(arr_courses==null)
{
    arr_courses=[];
    course=new Object();
    course.title= "HTML Course";
    course.desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised believable. Suffered alteration in some form, by injected humour, or randomised There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised believable. Suffered alteration in some form, by injected humour, or"
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
            "answer": 2

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
    course.id=arr_courses.length+1;
    arr_courses.push(course);
   //-----------------------------------------------------------------------------------------
    course=new Object();
    course.id=arr_courses.length+1;
    course.title= "HTML5 Course";
    course.desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised believable. Suffered alteration in some form, by injected humour, or randomised There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised believable. Suffered alteration in some form, by injected humour, or"
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
            "answer": 2

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
    arr_courses.push(course);
    localStorage.setItem("courses", JSON.stringify(arr_courses));
}
}