

$(document).ready(function(){
    
    
    
    
   /* Global Variables  
===========================================================================*/ 
    
   $(".startTimer").hide(); 
   $(".questions").hide();  
   $("#image1").hide(); 
   $("#Done").hide();  
   $("#allDone").hide();    
   var counter = 20;  
   var myChoice; 
   var correct = 0;
   var incorrect = 0; 
   var unanswered = 0;
   var radios = document.getElementById('id');
   var myVar;
   //var showingCounter = document.getElementById("counting"); 
    
    
/* Functions  and methods
===========================================================================*/    
    
//setInterval(function(){
  function   myCounter(){
  counter -= 1 ;  
  document.getElementById('counting').innerHTML= "Time Remaining: " + counter + " seconds"
  if (counter < 1) {
    alert("Your time has finished, click on Done")
    stopCounter();
  }
}
//}, 1000);

function stopCounter(){
   
    clearTimeout(myVar);
    
} 

function showImage(answere){
  stopCounter()
  if (answere === "answere1"){
    $("#1").hide();
    $("#image1").show();
  }
}


$("#Start").on("click", function(){

    $(".btn").hide();
      $(".startTimer").show();
      $("#1").show();
      $("#Done").show(); 
      
      myVar = setInterval(myCounter,1000); 

  });  


  $(".answeres").on("click", function(){
    myChoice = $(this).attr('id') ;
    showImage(myChoice);
    // if (myChoice === "answere1"){
    //   alert("Your selected the right answere");
    //   stopCounter()
    // }
  })




 
    
$("#Done").on("click", function(){
      $(".startTimer").hide();
      $(".questions").hide();
      $(".input-group").hide();
      $("#allDone").show(); 
    
   
  
    if(document.getElementById('1').checked === false && document.getElementById('2').checked === false && document.getElementById('3').checked === false
      && document.getElementById('4').checked === false && document.getElementById('5').checked === false && document.getElementById('6').checked === false) {
        unanswered+=1  
    }
    
    if(document.getElementById('7').checked === false && document.getElementById('8').checked === false && document.getElementById('9').checked === false
      && document.getElementById('10').checked === false && document.getElementById('11').checked === false && document.getElementById('12').checked === false) {
        unanswered+=1  
    }
    
    if(document.getElementById('13').checked === false && document.getElementById('14').checked === false && document.getElementById('15').checked === false
      && document.getElementById('16').checked === false && document.getElementById('17').checked === false && document.getElementById('18').checked === false) {
        unanswered+=1  
    }
    
    if(document.getElementById('19').checked === false && document.getElementById('20').checked === false && document.getElementById('21').checked === false
      && document.getElementById('22').checked === false && document.getElementById('23').checked === false && document.getElementById('24').checked === false) {
        unanswered+=1  
    }
    
    if(document.getElementById('25').checked === false && document.getElementById('26').checked === false && document.getElementById('27').checked === false
      && document.getElementById('28').checked === false && document.getElementById('29').checked === false && document.getElementById('30').checked === false) {
        unanswered+=1  
    }
    
       document.getElementById('wins').innerHTML= "Correct Answers: " + correct ;
       document.getElementById('losses').innerHTML= "Incorrect Answers: " + incorrect ;
       document.getElementById('unanswered').innerHTML= "Unanswered: " + unanswered ;

       unanswered = 0;
});   
    
$(".radio").click(function(){
    myRadio= $(this).attr("id");
    console.log(myRadio);
    console.log(incorrect)
    if (myRadio === "2" ){
        correct += 1;
        
    } else if (myRadio === "1" || myRadio === "3" || myRadio === "4" || myRadio === "5" || myRadio === "6"){
        incorrect +=1;
        //console.log(incorrect)
    } 
    
    if (myRadio === "9"){
        correct += 1;
        
    } else if (myRadio === "7" || myRadio === "8" || myRadio === "10" || myRadio === "11" || myRadio === "12"){
        incorrect +=1
    }
    //console.log(incorrect)
    if (myRadio === "14"){
        correct += 1;
        
    } else if (myRadio === "13" || myRadio === "15" || myRadio === "16" || myRadio === "17" || myRadio === "18"){
        incorrect +=1
    }
    //console.log(incorrect)
    if (myRadio === "20"){
        correct += 1;
        
    }   else if (myRadio === "19" || myRadio === "21" || myRadio === "22" || myRadio === "23" || myRadio === "24"){
        incorrect +=1
    }
    //console.log(incorrect)
    if (myRadio === "29"){
        correct += 1;
        
    } else if (myRadio === "25" || myRadio === "26" || myRadio === "27" || myRadio === "28" || myRadio === "30"){
        incorrect +=1
    }
    //console.log(incorrect)
    
   
});    
    
    
/* Main 
===========================================================================*/     
   
    
});
