function quizdata(){

    var data={
    
         q1:{
             answer="",
             correctanswer:"w2c"
    
         },
        q2:{
    
            answer="",
            correctanswer:"yes"
        },
        q3:{
    
            answer="",
            correctanswer:"hypertext markup language"
        }
    }
    }
    
       var q1=document.getElementsByName("q1");
       var q2=document.getElementsByName("q2");
       var q3=document.getElementsByName("q3");
         console.log(q1);
    
         console.log(q1);
       for(var i=0;i<q1.length;i++){
           var q1option= q1[i];
           if(q1option.checked==true){
               data.q1.answer=q1option.value; 
           }
       }
       for (var j=0;j<q2.length;j++){
           var q2option= q2[j];
           if (q2option.checked==true){
               data.q2.answer=q2option.value;
           }
       }
       
       for (var k=0;k<q3.length;k++){
           var q3option= q3[k];
           if(q3option.checked==true){
               data.q3.name=q3option.value;
       
            }
            console.log(data);
                         
       }
    