$(".hide").click(function () {
  $("#hide-show").hide();
});

$(".show").click(function () {
  $("#hide-show").show();
});

// timing

$(".hide-timing").click(function () {
  $("#timing").hide(3000);
});

$(".show-timing").click(function () {
  $("#timing").show(3000);
});

// toggle

$(".toggler").click(function () {
  $("#toggle").toggle("slow");
});

// fade-in

$(".fade-in").click(function () {
  $("#fade-in").fadeIn();
  $("#fade-in-slow").fadeIn("slow");
  $("#fade-in-timing").fadeIn(3000);
});

//fadeout

$(".fade-out").click(function () {
  $("#fade-out").fadeOut();
  $("#fade-out-slow").fadeOut("slow");
  $("#fade-out-timing").fadeOut(3000);
});

//fade-toggle

$(".fade-toggle").click(function () {
  $("#fade-toggle").fadeToggle();
  $("#fade-toggle-slow").fadeToggle("slow");
  $("#fade-toggle-timing").fadeToggle(3000);
});

//fade-to

$(".fade-to").click(function () {
  $("#fade-to-3").fadeTo("slow", 0.3);
  $("#fade-to-5").fadeTo("slow", 0.5);
  $("#fade-to-7").fadeTo("slow", 0.7);
});

// slide-down

$(".slide-down").click(function () {
  $("#slide-down").slideDown();
  $("#slide-down-slow").slideDown("slow");
});

//slide-up

$(".slide-up").click(function () {
  $("#slide-up").slideUp();
  $("#slide-up-slow").slideUp("slow");
});

//slide-toggle

$(".slide-toggle").click(function () {
  $("#slide-toggle").slideToggle();
  $("#slide-toggle-slow").slideToggle("slow");
});

// animate

$(".animate").click(function () {
  $("#animate").animate({
    width: "250px",
    height: "100px",
    backgroundColor: "pink",
    marginLeft: "300px",
    borderRadius: "10px",
  });
});

//animate-queue

$(".animate-queue").click(function () {
  var div = $("#animate-queue");
  div.animate({ height: "100px", width: "100px" }, "slow");
  div.animate({ height: "300px" }, "slow");
  div.animate({ width: "300px" }, "slow");
  div.animate({ height: "100px" }, "slow");
  div.animate({ width: "100px" }, "slow");
});

//stop

$(".start").click(function(){
    $('#stop').animate({ height: "100px", width: "100px" },5000);
});

$(".stop").click(function(){
    $('#stop').stop(false,true);
});

//callback

$(".callback").click(function(){
    $("#callback").toggle("slow",function(){
        alert('div is toggled...!')
    })
})

//chaining

$(".chaining").click(function(){
    $("#chaining").hide(3000)
    .show(3000)
    .slideUp(3000)
    .slideDown(3000)
    .animate({
        height:"100px",
        width:"400px",
    },3000)
})