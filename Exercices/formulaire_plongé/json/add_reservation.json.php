<?php

$nb_place_dispo = 10;

$reponse= array();

    $reponse['type'] = "success";
    $reponse['message'] = "Tout s'est bien passé";

    if($_POST['eleve']==""){
        $_POST['eleve']=0;
    }

if($_POST['eleve'] + 1 > $nb_place_dispo){
    $reponse['type'] = "danger";
    $reponse['message'] = "Il ne reste que " .$nb_place_dispo." places pour ce jour";
}



echo json_encode($reponse);
