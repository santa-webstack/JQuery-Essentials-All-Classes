// javascript //6

//var totalButtons = document.querySelectorAll(".myButton").length;
//for (i = 0; i < totalButtons; i++) {
    //document.querySelectorAll(".myButton")[i].addEventListener("click", function () {
      //  var text = this.innerHTML;
        //document.querySelector("h1").innerHTML = text + " is clicked";
    //})
//}





// javascript //1
  //document.querySelector("button").addEventListener("click",function(){
   // document.querySelector("h1").innerHTML ="you have clicked the button"
  //});
  



       //css //2
     //$("h1").css("color" ,  "red");
     //$("h1").css("font-size" ,  "3rem");
     //$("h1").css("font-style" ,  "italic");

    // aksathe use //5
   // $("h2").css({"color":"green","font-size":"2rem","font-style":"italic"});


         //jQeury //3
   $("button").click(function(){
    // $("h1").text("You have clicked the button");
    $("h1").toggleClass("style1");
   });
  

    //jQeury //7

    $(".myButton").click(function () {
      // $(".myButton").on("click",function () {
      // $(".myButton").on("mouseover",function () {
    var value = this.innerHTML;
    $("h1").text(value + " is clicked")
})
   // aksathe //4
   //$("h1").classList.addClass("style1 ,style2");
 

