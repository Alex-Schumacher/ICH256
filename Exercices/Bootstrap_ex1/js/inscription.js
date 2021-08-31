$(function() {

    $.validator.addMethod("PWCHECK",
        function (value, element) {
            if (/^(?=.*?[A-Z]{1,})(?=(.*[a-z]){1,})(?=(.*[0-9]){1,})(?=(.*[$@$!%*?&]){1,}).{8,}$/.test(value)) {
                return true;
            } else {
                return false;
            };
        });

    $("#inscription_form").validate(
        {
            rules:{
                nom_per: {
                    required: true,
                    minlength: 2
                },
                pren_per: {
                    required: true,
                    minlength: 2,
                },
                mail_per:{
                    required:true,
                    email:true,
                },
                password:{
                    required:true,
                    PWCHECK:true,
                },
                password_conf: {
                    required: true,
                    equalTo: "#password"
                }



            },
            messages:{
                nom_per: {
                    required: "Votre nom est indispensable à l'ouverture d'un compte",
                    minlength: "Votre nom doit être composé de 2 caractères au minimum"
                },
                pren_per:{
                    required:"Votre prénom est indispensable à l'ouverture d'un compte",
                    minlength:"Votre prénom doit être composé de 2 caractères au minimum"
                },
                mail_per: {
                    required:"Votre adresse e-mail est indispensable à l'ouverture d'un compte",
                    email:"Votre addresse e-mail doit avoir le format suivant : name@domain.com"
                },
                password:{
                    required: "Veuillez saisir votre mot de passe",
                    PWCHECK:"Le mot de passe doit contenir 8 caractères dont une minuscule, majuscule, un chiffre, et un caractère spécial"
                },
                password_conf: {
                    required:" veuillez saisir votre mot de passe une deuxième fois",
                    equalTo: "Veuillez écrire le même mot de passe que celui que vous avez tappez au-dessus"
                }
            },
            submitHandler: function(form){
                console.log("formulaire envoyé");
            }
        }

    );

});