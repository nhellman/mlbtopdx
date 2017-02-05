<?php
    $response = array( 'success' => false );
    $formData = file_get_contents( 'php://input' );
    $data = json_decode( $formData );
    if ( $data->submit) {
        $firstname = $data->firstname;
				$lastname = $data->lastname;
        $email = $data->email;
        $phone = $data->phone;

        if ( $firstname != '' && $lastname != '' && $email != '' && $phone != '' ) {
            $mailTo = 'hellman.nate@gmail.com';
            $subject = 'New contact form submission';
            $body  = 'From: ' . $firstname . $lastname "\n";
            $body .= 'Email: ' . $email . "\n";
            $body .= "Phone:\n" . $phone . "\n\n";

            $success = mail( $mailTo, $subject, $body );

            if ( $success ) {
                $response[ 'success' ] = true;
            }
        }
    }

    echo json_encode( $response );
?>
