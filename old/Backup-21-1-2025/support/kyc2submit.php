<?php
if(isset($_POST['submit'])) {
    $to = "aleclpiy@support.nighttrader.exchange";
    $subject = 'KYC Form Submit Request';
    $from = $_POST['email'];
    $email = $_POST['email'];
    $fName = $_POST['fName'];
    $lName = $_POST['lName'];
    $Nationality = $_POST['Nationality'];
    $dobDate = $_POST['dobDate'];
    $dobMonth = $_POST['dobMonth'];
    $dobYear = $_POST['dobYear'];
    $country = $_POST['country'];
    $state = $_POST['state'];
    $address = $_POST['address'];
    $address2 = $_POST['address2'];
    $city = $_POST['city'];
    $postcode = $_POST['postcode'];
    $gender = $_POST['gender'];
    
    $message = "<div style='color: #333333; font-size: 150%; font-family:Open Sans,sans-serif; background: #fafafa none repeat scroll 0 0; border-bottom: 2px solid #ececec; padding:10px 10px;'>KYC Form Submission</div>
	<table style='width:100%; border:1px solid #f0f0f0; padding:10px 20px;'>
		<tr>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;width:220px;'>Name</td>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;width:10px;'>:</td>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;'>".$fName." ".$lName."</td>
		</tr>
		<tr>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;width:220px;'>Email Address</td>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;width:10px;'>:</td>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;'>".$email."</td>
		</tr>
		<tr>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;width:220px;'>Country of Nationality</td>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;width:10px;'>:</td>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;'>".$Nationality."</td>
		</tr>
		<tr>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;width:220px;'>Date of Birth</td>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;width:10px;'>:</td>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;'>".$dobDate."-".$dobMonth."-".$dobYear."</td>
		</tr>
		<tr>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;width:220px;'>Country of Residence</td>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;width:10px;'>:</td>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;'>".$country."</td>
		</tr>
		<tr>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;width:220px;'>State/Province</td>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;width:10px;'>:</td>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;'>".$country."</td>
		</tr>
		<tr>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;width:220px;'>Address</td>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;width:10px;'>:</td>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;'>".$address." ".$address2."</td>
		</tr>
		<tr>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;width:220px;'>City</td>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;width:10px;'>:</td>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;'>".$city."</td>
		</tr>
		<tr>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;width:220px;'>Postcode</td>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;width:10px;'>:</td>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;'>".$postcode."</td>
		</tr>
		<tr>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;width:220px;'>Gender</td>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;width:10px;'>:</td>
			<td style='font-size:17px;font-family:Open Sans,sans-serif;color:#333;'>".$gender."</td>
		</tr>
	</table>";
    
    $headers = "From: <".$_POST['email'].">\r\n" .
			'X-Mailer: PHP/' . phpversion() . "\r\n" .
			"MIME-Version: 1.0\r\n" .
			"Content-Type: text/html; charset=utf-8\r\n" .
			"Content-Transfer-Encoding: 8bit\r\n\r\n";
    $semi_rand = md5(time());
    $mime_boundary = "==Multipart_Boundary_x".$semi_rand."x";

    $headers = "From: $from\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed;\r\n";
    $headers .= " boundary=\"{$mime_boundary}\"";

    $email_message = "--{$mime_boundary}\r\n";
    $email_message .= "Content-Type:text/html; charset=\"UTF-8\"\r\n";
    $email_message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $email_message .= $message . "\r\n";

    foreach ($_FILES['documents']['tmp_name'] as $key => $tmp_name) {
        $file_name = $_FILES['documents']['name'][$key];
        $file_size = $_FILES['documents']['size'][$key];
        $file_type = $_FILES['documents']['type'][$key];
        $file_tmp = $_FILES['documents']['tmp_name'][$key];
        $file_content = chunk_split(base64_encode(file_get_contents($file_tmp)));
        $email_message .= "--".$mime_boundary."\r\n";
        $email_message .= "Content-Type: ".$file_type.";\r\n";
        $email_message .= " name=\"{$file_name}\"\r\n";
        $email_message .= "Content-Disposition: attachment;\r\n";
        $email_message .= " filename=\"{$file_name}\"\r\n";
        $email_message .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $email_message .= $file_content . "\r\n";
    }
    $email_message .= "--".$mime_boundary."--";
    
    if(mail($to, $subject, $email_message, $headers, $from)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email. Please try again.";
    }
}
?>