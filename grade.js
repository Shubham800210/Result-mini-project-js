function calculate(){
    var a =parseInt(document.getElementById('sub-1').value);
    var b =parseInt(document.getElementById('sub-2').value);
    var c =parseInt(document.getElementById('sub-3').value);
    var d =parseInt(document.getElementById('sub-4').value);
    var e =parseInt(document.getElementById('sub-5').value);

    if(a>100 || b>100 || c>100 || d>100 || e>100){
        alert("marks enter is greater than 100!! please enter lesser than 100");
    }
    else{
        var obtain = a + b + c + d + e;
        document.getElementById('obtain').innerHTML=obtain;
        var par = obtain/500*100;
        document.getElementById('par').innerHTML=par;
        if(a>35 && b>35 && c>35 && d>35 && e>35){
            document.getElementById('marks').innerHTML="<span style='color:#292'>Pass</span";      
        }
        else{
            document.getElementById('marks').innerHTML="<span style='color:red'>Fail</span";      
        }

        if(par >=95){
            document.getElementById('grade').innerHTML="A <sup>+</sup>";
        }
        else if(par >=90){
            document.getElementById('grade').innerHTML="A";
        }
        else if(par >=80){
            document.getElementById('grade').innerHTML="B <sup>+</sup>";
        }
        else if(par >=60){
            document.getElementById('grade').innerHTML="B";
        }
        else if(par >=40){
            document.getElementById('grade').innerHTML="C";
        }
        else{
            document.getElementById('grade').innerHTML="F";
        }
           
    }
   
}