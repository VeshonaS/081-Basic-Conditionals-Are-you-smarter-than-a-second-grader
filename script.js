

// 1. English Section:
$(".englishButton").click(function(){
    let englishInput = $(".english").val();
    
    if( englishInput === "mon")  {  
  
    $(".englishMessage").text("Correct!");
    
    } else
    {
    $(".englishMessage").text("Wrong! Try again."); 
   
    }
});


// 2. Social Studies section
$(".ssButton").click(function(){
    let ssInput = $(".socialStudies").val();
    
if( ssInput === "albany"){
    $(".ssMessage").text("Good!");
    }else{
     $(".ssMessage").text("Nope!");   
    }
    
});


// 3. Math section
$(".mathButton").click(function(){
    let mathInput = $(".math").val();
    
    if(mathInput ==="30"){
        $(".mathMessage").text("Good, you can count.");
        }else
    {
       $(".mathMessage").text("Yikes! How'd you pass kindergarden?"); 
}
   
    mathInput = parseInt(mathInput); 


});


$(".scienceButton").click(function(){
    let scianswer= $(".science").val();
    
    if( scianswer === "solid"){
       $(".scienceMessage").text("Yes, yes I'm sure it was simple"); 
        }else{
             $(".scienceMessage").text("No... just...no."); 
            }
    });



