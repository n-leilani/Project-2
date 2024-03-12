//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function(){
    $("#Error-Div").hide();
    $("#what").hide();
    $("#statistics").hide();
    $("#questions").hide();
    $("#cart-div1").click( function() {
        $("#cart-text1").text("In Cart!");
        $("#cart-text1").css("color", "#765659")
        $("#cart-div1").css("background", "#FFF")
        $("#cart-div1").css("border", "solid")
        $("#cart-div1").css("border-color", "#765659")
    });
    $("#cart-div2").click( function() {
        $("#cart-text2").text("In Cart!");
        $("#cart-text2").css("color", "#765659")
        $("#cart-div2").css("background", "#FFF")
        $("#cart-div2").css("border", "solid")
        $("#cart-div2").css("border-color", "#765659")
    });
    $("#cart-div3").click( function() {
        $("#cart-text3").text("In Cart!");
        $("#cart-text3").css("color", "#765659")
        $("#cart-div3").css("background", "#FFF")
        $("#cart-div3").css("border", "solid")
        $("#cart-div3").css("border-color", "#765659")
    });
    $("#cart-div4").click( function() {
        $("#cart-text4").text("In Cart!");
        $("#cart-text4").css("color", "#765659")
        $("#cart-div4").css("background", "#FFF")
        $("#cart-div4").css("border", "solid")
        $("#cart-div4").css("border-color", "#765659")
    });
    $("#cart-div5").click( function() {
        $("#cart-text5").text("In Cart!");
        $("#cart-text5").css("color", "#765659")
        $("#cart-div5").css("background", "#FFF")
        $("#cart-div5").css("border", "solid")
        $("#cart-div5").css("border-color", "#765659")
    });
    $("#cart-div6").click( function() {
        $("#cart-text6").text("In Cart!");
        $("#cart-text6").css("color", "#765659")
        $("#cart-div6").css("background", "#FFF")
        $("#cart-div6").css("border", "solid")
        $("#cart-div6").css("border-color", "#765659")
    });
    $("#cart-div7").click( function() {
        $("#cart-text7").text("In Cart!");
        $("#cart-text7").css("color", "#765659")
        $("#cart-div7").css("background", "#FFF")
        $("#cart-div7").css("border", "solid")
        $("#cart-div7").css("border-color", "#765659")
    });
    $("#cart-div8").click( function() {
        $("#cart-text8").text("In Cart!");
        $("#cart-text8").css("color", "#765659")
        $("#cart-div8").css("background", "#FFF")
        $("#cart-div8").css("border", "solid")
        $("#cart-div8").css("border-color", "#765659")
    });
    $(".checkout").click( function() {
        $("#InstaFit").hide();
        $("#InstaFit-Text").hide();
        $(".row-1").hide();
        $(".row-2").hide();
        $(".checkout").hide();
        $(".empty").hide();
        $("#Error-Div").show();
        $("#Error-Div").addClass("animate-border");
        $(".yes").addClass("animate-border");
        $(".no").addClass("animate-border");
        
    });
    $(".empty").click(function(){
        location.reload(true);
    });
    $(".yes").click(function(){
        $("body").css("background-image", "url('media/images/Untitled design.png')"); 
        $("#Error-Div").hide();
        $("#what").show();
    });
    $(".no").click(function(){
        location.reload(true);
    });
    $("#what").click(function(){
        $("#statistics").fadeIn(5000);
    });
    $("#stats-3").click(function(){
        $("#what").fadeOut(5000);
        $("#statistics").fadeOut(5000);
        $("#questions").fadeIn(5000);
    });
    $("#question-4").click(function(){
        location.reload(true);
    });

        
});