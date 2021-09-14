$(function() {

    $('#nom_per').bind('keyup input',function() {
        if (this.value.match(/[^a-zA-Z áéíóúÁÉÍÓÚüÜ]/g))
        {
            this.value = this.value.replace(/[^a-zA-Z áéíóúÁÉÍÓÚüÜ]/g, '');
        }
    });

    $('#prenom_per').bind('keyup input',function() {
        if (this.value.match(/[^a-zA-Z áéíóúÁÉÍÓÚüÜ]/g))
        {
            this.value = this.value.replace(/[^a-zA-Z áéíóúÁÉÍÓÚüÜ]/g, '');
        }
    });

    $('#moniteur').click(function() {
        if($('#moniteur').is(":checked"))
            {
                $(".moniteuroui").css('display','block');
            }
        else{
            $(".moniteuroui").css('display','none');
            $("#nombre").val("");
        }

    });

    $("#check").click(function() {
        if($("input[value='club']").is(":checked")) {
            $(".combobox").css("display","block");
        }
    });

    $("#check").click(function() {
        if($("input[value='prive']").is(":checked")) {
            $(".combobox").css("display","none");

        }
    });


    $("#check").click(function() {
        if($('.combobox3').is(":selected") && $("input[value='club']").is(":checked")) {
            $("#autreclub").css("display","block");
/*            $(".nomclub").attr("required", true);*/
        }
        else{
            $("#autreclub").css("display","none");
/*            $('.nomclub').removeAttr('required');*/
            $("#autreclub").val("");
        }

    });

    $("#submit").click(function() {
        if($("input[value='prive']").is(":checked")) {
            $(".combobox").css("display","none");

        }
    });


    $("#inscription_form").validate(
        {

            rules: {
                nom_per : {
                    required: true,
                    minlength : 2,

                },
                prenom_per: {
                    required: true,
                    minlength: 2
                },
                email_per: {
                    required: true,
                    email: true
                },
                telephone:{
                    required: true,
                    number: true,
                    minlength: 10
                },
                nbeleve_per:{
                    required: true,
                    min: 1,
                    max: 14
                },
                autreclub_per:{
                    required: true
                },
                combobox_per:{
                    required:true
                }
            },
            messages: {
                nom_per: {
                    required: "Veuillez remplir ce champs",
                    minlength: "La taille doit être de 2 caractères au minimum"
                },
                prenom_per: {
                    required: "Veuillez remplir ce champs",
                    minlength: "La taille doit être de 2 caractères au minimum"
                },
                email_per: {
                    required: "Veuillez remplir ce champs",
                    email: "L'email doit être valide"
                },
                telephone:{
                    required: "Veuillez remplir ce champs",
                    number: "Le numéro doit être valide",
                    minlength: "Le numero doit être composé de 10 chiffres"
                },
                nbeleve_per:{
                    required: "Veuillez remplir ce champ",
                    max: "Le chiffre doit être plus petit ou égal à 14"
                },
                autreclub_per:{
                    required: "Veuillez remplir ce champ"
                },
                combobox_per:{
                    required: "Veuillez séléctionnez un choix",
                }
            },

/*            submiteHandler: function(form){
                console.log("formulaire envoyé");
            }*/
        }
    );

});