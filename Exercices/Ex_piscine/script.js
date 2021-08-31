$(function(){


        $('#check').click(function() {
            if($('#club_et_ecole').is(':checked')) {
                {

                    $("#none").css("display","block");
                    $("#club").css("display","block");
                    $("#none2").css("display", "block");
                }

            }
            else{
                $("#none").css("display","none");
                $("#club").css("display","none");
                $("#none2").css("display","none");
            }


        });

        $('#check').click(function (){
            if($('#moniteur_box').is(':checked')){
                $("#none2").css("display", "block");
                $("#moniteur").css("display", "block");
            }
            else{
                $("#none2").css("display", "none");
                $("#moniteur").css("display", "none");
            }
        })
});