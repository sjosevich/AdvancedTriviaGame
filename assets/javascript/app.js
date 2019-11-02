

$(document).ready(function(){
    
    
    
    
   /* Global Variables  
===========================================================================*/ 
    
   $(".startTimer").hide(); 
   $(".questions").hide();  
   $("#image1").hide(); 
   $("#image2").hide();
   $("#image3").hide();
   $("#image4").hide();
   $("#Done").hide();  
   $("#allDone").hide(); 
   $("#pizza").hide();
   $("#Cindirella").hide();  
   $("#Crocodile").hide();
   $("#Louis").hide();
   $("#Done").hide();
   var counter = 20;  
   var myChoice; 
   var correct = 0;
   var incorrect = 0; 
   var unanswered = 0;
   var myVar;
   var myFlag1 = false;
   var myFlag2 = false;
   var myFlag3 = false;
   var myFlag4 = false;
   var myFlag5 = false;
   var myFlag6 = false;
   var myFlag7 = false;
   var myFlag8 = false;
   var flagAnswere1 = false;
   var flagAnswere2 = false;
   var flagAnswere3 = false;
   var flagAnswere4 = false;
   

   //var showingCounter = document.getElementById("counting"); 
    
    
/* Functions  and methods
===========================================================================*/    
    

  function   myCounter(){
  counter -= 1 ;  
  document.getElementById('counting').innerHTML= "Time Remaining: " + counter + " seconds"
  
  if (counter < 1) {
    counter= 0;
    stopCounter();
  }
  
  if (counter === 0 && myFlag1=== false) {
    $("#1").hide();
    $("#pizza").show();
    $("#image1").show();
    myFlag1 = true;
    //stopCounter();
    counter= 20;
    $("#counting").hide();
    myVar = setInterval(myCounter,200); 
    if (flagAnswere1 === false){unanswered += 1;}
      
  }
  if (counter === 0 && myFlag2=== false) {
    $("#image1").hide();
    $("#pizza").hide();
    $("#2").show();
    myFlag2 = true;
    counter= 20;
    $("#counting").show();
    startTimer();   
  }
  if (counter === 0 && myFlag3=== false) {
    $("#image2").show();
    $("#Cindirella").show();
    $("#2").hide();
    myFlag3 = true;
    counter= 20;
    $("#counting").hide();
    if (flagAnswere2 === false){unanswered += 1;}
    myVar = setInterval(myCounter,200);    
  }
  if (counter === 0 && myFlag4=== false) {
    $("#image2").hide();
    $("#Cindirella").hide();
    $("#3").show();
    myFlag4 = true;
    counter= 20;
    $("#counting").show();
    startTimer();    
  }
  if (counter === 0 && myFlag5=== false) {
    $("#image3").show();
    $("#Crocodile").show();
    $("#3").hide();
    myFlag5 = true;
    counter= 20;
    $("#counting").hide();
    if (flagAnswere3 === false){unanswered += 1;}
    myVar = setInterval(myCounter,200);    
  }
  if (counter === 0 && myFlag6=== false) {
    $("#image3").hide();
    $("#Crocodile").hide();
    $("#4").show();
    myFlag6 = true;
    counter= 20;
    $("#counting").show();
    startTimer();    
  }
  if (counter === 0 && myFlag7=== false) {
    $("#image4").show();
    $("#Louis").show();
    $("#4").hide();
    myFlag7 = true;
    counter= 20;
    $("#counting").hide();
    if (flagAnswere4 === false){unanswered += 1;}
    myVar = setInterval(myCounter,200);    
  } 
  if (counter === 0 && myFlag8=== false) {
    myFlag8 = true;
    $("#image4").hide(); 
    $("#Louis").hide();
    $("#allDone").show();
    $("#Done").show();
    counter= 20;
    document.getElementById('wins').innerHTML= "Correct Answers: " + correct ;
    document.getElementById('losses').innerHTML= "Incorrect Answers: " + incorrect ;
    document.getElementById('unanswered').innerHTML= "Unanswered: " + unanswered ;
  }
}


function stopCounter(){
    clearTimeout(myVar); 
} 

function startTimer(){
  myVar = setInterval(myCounter,1000);
}

function showImage(answere){
  //stopCounter()
  if (answere === "answere3"){
    stopCounter()
    correct += 1;
    $("#1").hide();
    $("#image1").show();
    flagAnswere1 = true;
    myVar = setInterval(myCounter,1);
  }
  if (answere === "answere1" || answere ==="answere2"){
    stopCounter()
    incorrect += 1;
    $("#1").hide();
    $("#image1").show();
    flagAnswere1 = true;
    myVar = setInterval(myCounter,1);
  }
  
  //stopCounter()
  if (answere === "answere6"){
    correct += 1;
    $("#2").hide();
    $("#image2").show();
    flagAnswere2 = true;
    myVar = setInterval(myCounter,1);
  }
  if (answere === "answere4" || answere ==="answere5"){
    stopCounter()
    incorrect += 1;
    $("#2").hide();
    $("#image2").show();
    flagAnswere2 = true;
    myVar = setInterval(myCounter,1);
  }
 
  if (answere === "answere7"){
    correct += 1;
    $("#3").hide();
    $("#image3").show();
    flagAnswere3 = true;
    myVar = setInterval(myCounter,1);
  }
  if (answere === "answere8" || answere ==="answere9"){
    stopCounter()
    incorrect += 1;
    $("#3").hide();
    $("#image3").show();
    flagAnswere3 = true;
    myVar = setInterval(myCounter,1);
  }
 
  if (answere === "answere10"){
    correct += 1;
    $("#4").hide();
    $("#image4").show();
    flagAnswere4 = true;
    myVar = setInterval(myCounter,1);
  }
  if (answere === "answere11" || answere ==="answere12"){
    stopCounter()
    incorrect += 1;
    $("#4").hide();
    $("#image4").show();
    flagAnswere4 = true;
    myVar = setInterval(myCounter,1);
  }
  
}


$("#Start").on("click", function(){

    $(".btn").hide();
      $(".startTimer").show();
      $("#1").show();
      var myFlag1 = false;
      var myFlag2 = false;
      var myFlag3 = false;
      var myFlag4 = false;
      var myFlag5 = false;
      var myFlag6 = false;
      var myFlag7 = false;
      var myFlag8 = false;
      var flagAnswere1 = false;
      var flagAnswere2 = false;
      var flagAnswere3 = false;
      var flagAnswere4 = false;
      myVar = setInterval(myCounter,1000); 
   
  });  


  $(".answeres").on("click", function(){
    myChoice = $(this).attr('id') ;
    showImage(myChoice);
  
  })

 $("#Done").on("click", function(){
 
  $("#Done").hide();  
  $("#allDone").hide(); 
  $("#Start").show();
  // $('.trivial').show();
 
   var correct = 0;
   var incorrect = 0; 
   var unanswered = 0;

 });
    
/* Main 
===========================================================================*/     
   
    
});
