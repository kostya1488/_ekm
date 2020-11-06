<?php
$to = "manager@ekm.kiev.ua";
$subject = "Заявка с сайта";
$headers = "From: message@ekm.kiev.ua";

if (

isset($_POST["name"]) && 
isset($_POST["surname"]) && 
isset($_POST["email"]) && 
isset($_POST["tel"]) && 
isset($_POST["message"])

) { 

	// Формируем массив для JSON ответа
    $result = array(
    	'name' => $_POST["name"],
        'surname' => $_POST["surname"],
        'email' => $_POST["email"],
        'tel' => $_POST["tel"],
    	'message' => $_POST["message"]        
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 

    foreach ($result as $key => $value) {
        if ($value == "") {
            $value = "не заполнено";
        };
  
        $txt_for_mail .= $key . ": " . $value ."\n";
 }

  mail($to, $subject, $txt_for_mail, $headers);

}

?>