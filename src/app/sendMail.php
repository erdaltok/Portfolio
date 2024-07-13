<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST, OPTIONS");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");
        header('Content-Type: application/json'); // Set the content type to JSON

        // Payload is not send to $_POST Variable,
        // is send to php:input as a text
        $json = file_get_contents('php://input');
        //parse the Payload from text format to Object
        $params = json_decode($json);

        $email = $params->email;
        $name = $params->name;
        $message = $params->message;

        $recipient = 'kontakt@erdal.dev';  
        $subject = "Contact From <$email>";
        $message = "From:" . $name . "<br>" . $message ;

        $headers   = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        // Additional headers
        $headers[] = "From: noreply@mywebsite.com";

        // Prevents multiple sending of email
        $mailSuccess = mail($recipient, $subject, $message, implode("\r\n", $headers));

        // Return a JSON response
        if ($mailSuccess) {
            echo json_encode(["success" => true, "message" => "Email sent successfully."]);
        } else {
            http_response_code(500);
            echo json_encode(["success" => false, "message" => "Failed to send email."]);
        }
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}