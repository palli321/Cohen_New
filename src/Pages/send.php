<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $formType = $_POST['form_type'] ?? 'registration';

    // Email Details
    $to = "training@cohenandklein.com";
    $subject = $formType === 'contact' ? "New Contact Form Submission" : "New Registration Form Submission";
    $body = "You have received a new $formType submission:\n\n";

    foreach ($_POST as $key => $value) {
        if ($key === 'form_type') continue;
        if (is_array($value)) $value = implode(", ", $value);
        $formattedKey = ucwords(str_replace(["_", "-"], [" ", " "], $key));
        $body .= "$formattedKey: " . htmlspecialchars($value) . "\n";
    }

    $fromEmail = "no-reply@cohenandklein.com";
    $replyTo = $_POST['email'] ?? $fromEmail;

    $headers = "From: Cohen & Klein <{$fromEmail}>\r\n";
    $headers .= "Reply-To: {$replyTo}\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // DB Credentials
    $host = "localhost";
    $user = "kosbegum_wp";
    $pass = "kosbegumdatabase_new";
    $db   = $formType === 'contact' ? "kosbegum_contact_db" : "kosbegum_cohen_reg";

    $conn = new mysqli($host, $user, $pass, $db);
    if ($conn->connect_error) {
        die("DB connection failed: " . $conn->connect_error);
    }

    if ($formType === 'contact') {
        // Contact Form Insert
        $first = $_POST['first_name'] ?? '';
        $last = $_POST['last_name'] ?? '';
        $email = $_POST['email'] ?? '';
        $company = $_POST['company'] ?? '';
        $message = $_POST['message'] ?? '';

        $stmt = $conn->prepare("INSERT INTO contact_submissions (first_name, last_name, email, company, message) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss", $first, $last, $email, $company, $message);
        $stmt->execute();
        $stmt->close();
    } else {
        // Registration Form Insert
        $name_of_company = $_POST['Name_of_Company'] ?? '';
        $name_participant = $_POST['Name_participant'] ?? '';
        $job_title = $_POST['Job_title_of_Participant'] ?? '';
        $work_phone = $_POST['Work_phone'] ?? '';
        $ext = $_POST['Ext'] ?? '';
        $home_phone = $_POST['Home_phone'] ?? '';
        $cell_number_1 = $_POST['cell_number_1'] ?? '';
        $cell_number_2 = $_POST['cell_number_2'] ?? '';
        $fax = $_POST['fax'] ?? '';
        $email = $_POST['email'] ?? '';
        $other_email = $_POST['other_email'] ?? '';
        $work_email = $_POST['Work_email'] ?? '';
        $course_number = $_POST['C&K_Course_Number'] ?? '';
        $course_title = $_POST['course_title'] ?? '';
        $course_date = $_POST['course_date'] ?? '';
        $course_location = $_POST['course_location(country)'] ?? '';
        $how_many_participant = $_POST['how_many_participant'] ?? '';
        $unit_price = $_POST['Unit_price'] ?? '';
        $total_price = $_POST['total_price'] ?? '';
        $contact_person = $_POST['contact_person'] ?? '';
        $address_line_1 = $_POST['address_line_1'] ?? '';
        $address_line_2 = $_POST['address_line-2'] ?? '';
        $city = $_POST['city'] ?? '';
        $state = $_POST['state'] ?? '';
        $country = $_POST['country'] ?? '';
        $zip = $_POST['Zip'] ?? '';
        $billing_name = $_POST['billing_name'] ?? '';
        $billing_address = $_POST['billing_address'] ?? '';
        $billing_city = $_POST['billing_city'] ?? '';
        $billing_state = $_POST['billing_state'] ?? '';
        $billing_country = $_POST['billing_country'] ?? '';
        $billing_zip = $_POST['billing_zip'] ?? '';
        $billing_email = $_POST['billing_email'] ?? '';
        $credit_card_number = $_POST['credit_card_number'] ?? '';
        $name_of_card = $_POST['name_of_card'] ?? '';
        $expire_date = $_POST['expire_date'] ?? '';
        $security_code = $_POST['security_code'] ?? '';
        $company_reputation = isset($_POST['Company-reputaition']) ? 1 : 0;
        $features = isset($_POST['features']) ? 1 : 0;
        $recommendations = isset($_POST['recommendations']) ? 1 : 0;
        $benefits_to_employee = isset($_POST['benefits_to_employee']) ? 1 : 0;
        $benefits_to_corporations = isset($_POST['benefits_to_corporations']) ? 1 : 0;
        $others_insert_below = isset($_POST['others(insert_below)']) ? 1 : 0;
        $comment = $_POST['comment'] ?? '';

        $stmt = $conn->prepare("INSERT INTO registrations (
            name_of_company, name_participant, job_title, work_phone, ext, home_phone, cell_number_1, cell_number_2,
            fax, email, other_email, work_email, course_number, course_title, course_date, course_location,
            how_many_participant, unit_price, total_price, contact_person, address_line_1, address_line_2,
            city, state, country, zip, billing_name, billing_address, billing_city, billing_state,
            billing_country, billing_zip, billing_email, credit_card_number, name_of_card, expire_date,
            security_code, company_reputation, features, recommendations, benefits_to_employee,
            benefits_to_corporations, others_insert_below, comment
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

        $stmt->bind_param(
            "sssssssssssssssssssssssssssssssssssssssssssss",
            $name_of_company, $name_participant, $job_title, $work_phone, $ext, $home_phone, $cell_number_1, $cell_number_2,
            $fax, $email, $other_email, $work_email, $course_number, $course_title, $course_date, $course_location,
            $how_many_participant, $unit_price, $total_price, $contact_person, $address_line_1, $address_line_2,
            $city, $state, $country, $zip, $billing_name, $billing_address, $billing_city, $billing_state,
            $billing_country, $billing_zip, $billing_email, $credit_card_number, $name_of_card, $expire_date,
            $security_code, $company_reputation, $features, $recommendations, $benefits_to_employee,
            $benefits_to_corporations, $others_insert_below, $comment
        );

        $stmt->execute();
        $stmt->close();
    }

    $conn->close();

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "invalid";
}
?>
