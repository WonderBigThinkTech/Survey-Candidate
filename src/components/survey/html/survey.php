<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Satisfaction Survey form Wizard by Ansonika.">
    <meta name="author" content="Ansonika">
    <title>Satisfyc | Satisfaction Survey form Wizard</title>

    <!-- Favicons-->
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" type="image/x-icon" href="img/apple-touch-icon-57x57-precomposed.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="72x72" href="img/apple-touch-icon-72x72-precomposed.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="114x114" href="img/apple-touch-icon-114x114-precomposed.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="144x144" href="img/apple-touch-icon-144x144-precomposed.png">

    <!-- GOOGLE WEB FONT -->
    <link href="https://fonts.googleapis.com/css?family=Caveat|Poppins:300,400,500,600,700&display=swap" rel="stylesheet">

    <!-- BASE CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
	<link href="css/vendors.css" rel="stylesheet">

    <!-- YOUR CUSTOM CSS -->
    <link href="css/custom.css" rel="stylesheet">
    
	<script type="text/javascript">
    function delayedRedirect(){
        window.location = "index.html"
    }
    </script>

</head>
<body onLoad="setTimeout('delayedRedirect()', 8000)" style="background:#fff;">
<?php
						$mail = $_POST['email'];
						$to = "<info@domain.com>";/* YOUR EMAIL HERE */
						$subject = "Survey from Satisfyc";
						$headers = 'From: Survey from Satisfyc <noreply@satisfyc.com>' . "\r\n" . 'Reply-To: <noreply@satisfyc.com>';
						$message = "DETAILS\n";
						$message .= "\nA. How was the service provided? " . $_POST['question_1']. "\n";

						if( isset( $_POST['additional_message'] ) && $_POST['additional_message']) {
						$message .= "\nYour Review: " . $_POST['additional_message']. "\n";
						}

						$message .= "\nB. Would you reccomend our company? " . $_POST['question_2']. "\n";

						if( isset( $_POST['additional_message_2'] ) && $_POST['additional_message_2']) {
						$message .= "\nAdditional Message: " . $_POST['additional_message_2']. "\n";
						}

						$message .= "\nC. How did you hear about us?\n";
						foreach($_POST['question_3'] as $value) 
							{ 
								$message .=   "- " .  trim(stripslashes($value)) . "\n"; 
							};

						$message .= "\nFirst name: " . $_POST['firstname'];
						$message .= "\nLast name: " . $_POST['lastname'];
						$message .= "\nEmail: " . $_POST['email'];

						if( isset( $_POST['telephone'] ) && $_POST['telephone']) {
						$message .= "\nTelephone: " . $_POST['telephone'];
						}


						if( isset( $_POST['age'] ) && $_POST['age']) {
						$message .= "\nAge: " . $_POST['age'];
						}

						$message .= "\nGender: " . $_POST['gender'];
						$message .= "\nTerms and conditions accepted: " . $_POST['terms']. "\n";

						//Receive Variable
						$sentOk = mail($to,$subject,$message,$headers);
						
						//Confirmation page
						$user = "$mail";
						$usersubject = "Thank You";
						$userheaders = "From: info@satisfyc.com\n";
						/*$usermessage = "Thank you for your time. Your quotation request is successfully submitted.\n"; WITH OUT SUMMARY*/
						//Confirmation page WITH  SUMMARY
						$usermessage = "Thank you for your time. Your request is successfully submitted. We will reply shortly.\n\nBELOW A SUMMARY\n\n$message"; 
						mail($user,$usersubject,$usermessage,$userheaders);
	
?>
<!-- END SEND MAIL SCRIPT -->   

<div id="success">
    <div class="icon icon--order-success svg">
         <svg xmlns="http://www.w3.org/2000/svg" width="72px" height="72px">
          <g fill="none" stroke="#8EC343" stroke-width="2">
             <circle cx="36" cy="36" r="35" style="stroke-dasharray:240px, 240px; stroke-dashoffset: 480px;"></circle>
             <path d="M17.417,37.778l9.93,9.909l25.444-25.393" style="stroke-dasharray:50px, 50px; stroke-dashoffset: 0px;"></path>
          </g>
         </svg>
     </div>
	<h4><span>Request successfully sent!</span>Thank you for your time</h4>
	<small>You will be redirect back in 5 seconds.</small>
</div>
</body>
</html>