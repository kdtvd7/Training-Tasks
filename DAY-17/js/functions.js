
// get methods

$('.get-html').click(function(){
  alert("HTML - " + $('#get-html').html());
})

$('.get-text').click(function(){
  alert('Text - ' + $('#get-text').text());
})

$('.get-val').click(function(){
  alert('Val - ' + $('#get-val').val());
})

$('.get-attr').click(function(){
  alert('Attr - ' + $('#get-attr').attr('class'));
})


// set methods

$('.set-html').click(function(){
  $('#set-html').html("<b>Hello World!</b>");
})

$('.set-text').click(function(){
  $('#set-text').text("1234567890");
})

$('.set-val').click(function(){
  $('#set-val').val("0987654321");
})

$('.set-attr').click(function(){
  $('#set-attr').attr('class',"");
})

$('.set-attr-callback').click(function(){
  $('#set-attr-callback').attr('href',function(i,value){
    return value+ "/jquery/";
  });
})

$('.set-attr-multiple').click(function(){
  $('#set-attr-multiple').attr({
    "href":"https://www.google.com",
    "title":"link href & title changed"
  });
})

// add 

$(".append").click(function(){
  $("#append").append(" ( some appended text )")
})

$(".prepend").click(function(){
  $("#prepend").prepend(" ( some prepended text )")
})

$(".after").click(function(){

  var x = "<div class='style-1'>( adding some text after )</div>";

  $("#after").after(x);
})

$(".before").click(function(){

  var x = "<div class='style-1'>( adding some text before )</div>";

  $("#before").before(x)
})


//remove

$('.remove').click(function(){
  $('#remove').remove();
})

$('.empty').click(function(){
  $('#empty').empty();
})

$('.remove-multiple').click(function(){
  $("div").remove(".rm-1,.rm-2");
})

// cssClass

$('.addClass').click(function(){
  $('#addClass').addClass('style-1');
})

$('.removeClass').click(function(){
  $('#removeClass').removeClass('style-1');
})

$('.toggleClass').click(function(){
  $('#toggleClass').toggleClass('style-1');
})


// css

$('.css').click(function(){
  $('#css').css({
    "backgroundColor":"pink",
    "color":"brown",
    "fontSize":"30px",
    "padding":"15px",
    "margin":"10px"
  })
})

// dimensions

$('.height').click(function(){
  alert("Height : "+$('#height').height()+"px");
})

$('.width').click(function(){
  alert("Width : "+$('#width').width()+"px");
})

// inner

$('.innerHeight').click(function(){
  alert("Inner-Height : "+$('#innerHeight').innerHeight()+"px");
})

$('.innerWidth').click(function(){
  alert("Inner-Width : "+$('#innerWidth').innerWidth()+"px");
})

// outer

$('.outerHeight').click(function(){
  alert("Outer-Height : "+$('#outerHeight').outerHeight()+"px");
})

$('.outerWidth').click(function(){
  alert("Outer-Width : "+$('#outerWidth').outerWidth()+"px");
})

// outer true

$('.outerHeightTrue').click(function(){
  alert("Outer-Height-True : "+$('#outerHeightTrue').outerHeight(true)+"px");
})

$('.outerWidthTrue').click(function(){
  alert("Outer-Width-True : "+$('#outerWidthTrue').outerWidth(true)+"px");
})