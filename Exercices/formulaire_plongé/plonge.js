$(function (){

    $("#eleve").hide(400);
    $("#eleve_lbl").hide(400);
    $("#test").hide(400);
    $("#moniteur").click(function() {
        if ($(this).is(":checked")) {
            $("#eleve").show(300);
            $("#eleve_lbl").show(300);
           /* $("#test").show(900000);*/
        } else {
            $("#eleve").hide(200);
            $("#eleve_lbl").hide(200);
            $("#eleve").val("");
            $("#eleve-error").hide(200);
        }
    })

    $("#autre_club").hide(400);
    $("#autre_club_lbl").hide(400);
    $('#club').change(function(){

    if($('#club').val() == 'autre') {
            $("#autre_club").show(300);
            $("#autre_club_lbl").show(300);

        } else {
            $("#autre_club").hide(200);
            $("#autre_club_lbl").hide(200);
            $("#autre_club").val("");

        }
    })

    $("#reussite").css("display","none");

    $("#inscription_form").validate({
            /*rules: {

                nom_per: {
                    required: true,
                    minlength: 2,
                    maxlength: 30,


                },
                prenom_per: {
                    required: true,
                    minlength: 2,
                    maxlength: 30

                },
                email_per: {
                    required: true,
                    email: true


                },
                tel_per: {
                    number: true,
                    minlength: 10,
                    maxlength: 10

                },
                autre_club: {
                    required: true,
                    minlength: 2,
                    maxlength: 30
                },
                radio:{
                    required:true,
                },
                eleve:{
                    number:true,
                }

            },
            messages: {
                nom_per: {
                    required: "Ce champ est requis",
                    minlength: "Votre nom doit comporter au minimum 2 caractères",
                    maxlength: "Votre nom doit comporter au maximum 30 caractères"
                },
                prenom_per: {
                    required: "Ce champ est requis",
                    minlength: "Votre prénom doit comporter au minimum 2 caractères",
                    maxlength: "Votre prénom doit comporter au maximum 30 caractères"
                },
                email_per: {
                    required: "Ce champ est requis",
                    email: "Votre adresse doit correspondre au format d'adresse",
                },
                tel_per: {
                    required: "Ce champ est requis",
                    number: "Ce champ doit contenir un numéro de téléphone valide",
                    minlength: "Ce champ doit contenir un numéro de téléphone valide",
                    maxlength: "Ce champ doit contenir un numéro de téléphone valide"

                },
                autre_club: {
                    required: "Ce champ est requis",
                    minlength: "Le nom du club doit comporter au minimum 2 caractères",
                    maxlength: "Le nom du club doit comporter au maximum 30 caractères"

                },
                radio:{
                    required:"Ce champ est requis",
                },
                eleve:{
                    number:"Veuillez sélectionner un nombre"
                }
            },*/

        submitHandler: function(form) {
            $.post(
                "./json/add_reservation.json.php",
                {
                    nom_per:$("#nom_per").val(),
                    prenom_per:$("#prenom_per").val(),
                    email_per:$("#email_per").val(),
                    tel_per:$("#tel_per").val(),
                    radio:$('input[name="radio"]:checked').val(),
                    moniteur:$("#moniteur:checked").val(),
                    eleve:$("#eleve").val(),
                    club:$("#club").val(),
                    autre_club:$("#autre_club").val(),
                },
                function(data){
                    console.log(data.type);
                    $(".alert").css("display", "block").removeClass("alert-danger").removeClass("alert-success").addClass("alert-"+data.type)
                    $(".alert .message").html(data.message);
                },
                "json"
            ).fail(function (){
                console.log('KO')
                $(".alert").css("display", "block").addClass("alert-"+data.type);
                $(".alert .message").html(data.message);
            });
            // some other code
            // maybe disabling submit button
            // then:
            console.log("formulaire envoyé");
        }
        }
    );
});
