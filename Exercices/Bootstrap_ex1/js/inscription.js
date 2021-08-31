$(function() {

    $("#inscription_form").validate(
        {
            rules:{
                nom_per: {
                    required: true,
                    minLength: 2
                }

            },
            messages:{
                nom_per: "veuillez saisir votre nom"
            }
        }
    );

});