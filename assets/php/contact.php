<?php
header('Content-type: application/json');
if($_POST)
{
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) !='xmlhttprequest')
    {
        $output=json_encode(array(
         'type'='error',
            'text'= 'Sorry request cannot be post through ajax'
        ));
        die(output);
    }
    //Sanitize input data using PHP filter_var().
    $user_name=filter_var($_POST["firstName"],FILTER_SANITIZE_STRING);
    $user_mobile=filter_var($_POST["mobile"],FILTER_SANITIZE_NUMBER_INT);
    $user_email=filter_var($_POST["email"],FILTER_SANITIZE_STRING);
    $user_message=filter_var($_POST["message"],FILTER_SANITIZE_STRING);
    
    //email subject
    $subject='';
    
    //message body
    $message_body.="\n\nfirstName : ".$user_name;
    $message_body.="\n\mobile : ".$user_mobile;
    $message_body.="\n\email : ".$user_email;
    $message_body.="\n\message : ".$user_message;
    
    
    //$message_body = $message."\r\n\r\n-".$user_name."\r\n\r\nEmail : ".$user_email."\r\nPhone Number : ". $phone_number ;
   
    //proceed with PHP email.
    $headers = 'From: '.$user_name.'<'.$user_email.'>'."\r\n" .
    'Reply-To: '.$user_name.'<'.$user_email.'>' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    $to_email="info@talwallet.com";
    $send_mail = mail($to_email, $subject, $message_body, $headers);
    
        if(!$send_mail)
    {
        //If mail couldn't be sent output error. Check your PHP email configuration (if it ever happens)
        $output = json_encode(array('type'=>'error', 'text' => 'Could not send mail'));
        die($output);
    }else{
        $output = json_encode(array('type'=>'success', 'text' => 'Thank you for your email, we will get back to you shortly.'));
        die($output);
    }
}
?>