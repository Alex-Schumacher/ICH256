$(function(){
    var test = false;



    $("img").on('click',function (){

        test = !test;
        if (!test) {
            $("#content").removeClass("light");
            animationFade();
        } else {

            $("#content").addClass("light");
            animationFade();
        }
    })
});

function animationFade() {

    $("#content").css("opacity","0");
    $("#content").fadeTo("400","1");
}


