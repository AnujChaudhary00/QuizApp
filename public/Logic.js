i=-1;
marks=0;
progress=0;
highScoreTable=[];
const data=[
        {
            discription:"which one is not the fundamental pillar of the OOPs?",
            answers:{
                1:"Inheritance",
                2:"Abstraction",
                3:"Security",
                4:"Polymorphism"
                },
            correctAnswer:"C"
        },
        {
            discription:"Which element below is block level element?",
            answers:{
                1:"div",
                2:"a",
                3:"sapn",
                4:"button"
                },
            correctAnswer:"A"
        },
        {
            discription:"what is padding?",
            answers:{
                1:"It Use to give distance from sideby Elements.",
                2:"It is use to give distances inside from the boundaries of element.",
                3:"It is used to give color to element.",
                4:"It is used to give width."
                },
            correctAnswer:"B"
        },
        {
            discription:"JavaScript is",
            answers:{
                1:"Case sensative",
                2:"Case Insensative",
                3:"none of the above",
                4:"Could be both"
                },
            correctAnswer:"A"
        },
        {
            discription:"Which is not a programming language?",
            answers:{
                1:"Java",
                2:"HTML",
                3:"Python",
                4:"R"
                },
            correctAnswer:"B"
        }
    ];

    function push(value)
    {
        if(i<0){
            document.getElementById("text").innerHTML=1+"/"+data.length;
        }else{
        document.getElementById("text").innerHTML=i+1+"/"+data.length;
        }
      if(i>=0){

        progress+=250/data.length;
        document.getElementById("statusBar").style.width=progress+"px";
       if(value==data[i].correctAnswer)
       {
             marks+=10;
             document.getElementById(value).style.backgroundColor="rgb(109, 235, 109)";
       }
       else{
            document.getElementById(value).style.backgroundColor="rgb(238, 124, 124)";
            document.getElementById(data[i].correctAnswer).style.backgroundColor="rgb(109, 235, 109)";
       }
       document.getElementById("marks").innerHTML=marks;
    }
        setTimeout(() => {
            if(i>data.length-1)
            {
                sessionStorage.setItem('marks',marks);
                window.location.href="result.html";
            }
           var ques= document.getElementById("question");
           ques.innerHTML=data[i].discription;
           var options1 =document.getElementById("A");
           var options2 =document.getElementById("B");
           var options3 =document.getElementById("C");
           var options4 =document.getElementById("D");
    
           options1.innerHTML=data[i].answers[1];
           options1.style.backgroundColor="white";
           options2.innerHTML=data[i].answers[2];
           options2.style.backgroundColor="white";
           options3.innerHTML=data[i].answers[3];
           options3.style.backgroundColor="white";
           options4.innerHTML=data[i].answers[4];
           options4.style.backgroundColor="white";
        },1000);
       i++;
    }

    function home()
    {
        window.location="index.html";
    }
    

    function enterUsername()
    {
        if(document.getElementById("username").value < 3) { 
            document.getElementById('save').disabled = true; 
        } else { 
            document.getElementById('save').disabled = false;
        }
    }

    function showHighScore()
    {
        document.getElementById('scoreTag').innerHTML=sessionStorage.getItem('marks');
    }

function Save()
{
    var user={};
    user['name']=document.getElementById('username').value;
    user['marks']=sessionStorage.getItem('marks');
    if(sessionStorage.getItem('table')==null)
    {   
        console.log("first User");
        highScoreTable.push(user);
        sessionStorage.setItem('table',JSON.stringify(highScoreTable));
    }else{
        var updatedTable=[];
        JSON.parse(sessionStorage.getItem('table')).forEach(element=>{
            updatedTable.push(element);
        })

        updatedTable.push(user);

        updatedTable.sort((a,b)=>{
            return a.marks-b.marks;
        });


        if(updatedTable.length>5)
        {
            updatedTable.pop();
        }
        sessionStorage.setItem('table',JSON.stringify(updatedTable));
    }

    location.href="highScore.html";
}


function show()
{
   
    if(sessionStorage.getItem('table')!=null){
        var ques=JSON.parse(sessionStorage.getItem('table'));

        if(ques.length>6)
        {
            ques.pop();
        }

        ques.forEach(element => {
        var row=document.createElement("TR");
        var column=document.createElement("TD");
        var column1=document.createElement("TD");
        column.appendChild(document.createTextNode(element['name']));
        column1.appendChild(document.createTextNode(element['marks']));
        row.appendChild(column);
        row.appendChild(column1);
        document.getElementById("table").appendChild(row);
      });
    }
}


function highScore()
{
    window.location="highScore.html";
}

function Play()
{
    location.href="/quiz.html";
}