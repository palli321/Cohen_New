<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $formType = $_POST['form_type'] ?? 'registration';

    // DB credentials
    $host = "localhost";
    $user = "kosbegum_wp";
    $pass = "kosbegumdatabase_new";
    $db = $formType === 'contact' ? "kosbegum_contact_db" : "kosbegum_cohen_reg";

    $conn = new mysqli($host, $user, $pass, $db);
    if ($conn->connect_error) {
        die("DB connection failed: " . $conn->connect_error);
    }

    if ($formType === 'contact') {
        // Save contact form
        $first = $_POST['first_name'] ?? '';
        $last = $_POST['last_name'] ?? '';
        $email = $_POST['email'] ?? '';
        $company = $_POST['company'] ?? '';
        $message = $_POST['message'] ?? '';

        $stmt = $conn->prepare("INSERT INTO contact_submissions (first_name, last_name, email, company, message) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss", $first, $last, $email, $company, $message);
        if (!$stmt->execute()) {
            die("DB Error: " . $stmt->error);
        }
        $stmt->close();
    } else {
        // Save registration form
        $fields = [
            'Name_of_Company', 'Name_participant', 'Job_title_of_Participant', 'Work_phone', 'Ext', 'Home_phone',
            'cell_number_1', 'cell_number_2', 'fax', 'email', 'other_email', 'Work_email', 'C&K_Course_Number',
            'course_title', 'course_date', 'course_location(country)', 'how_many_participant', 'Unit_price',
            'total_price', 'contact_person', 'address_line_1', 'address_line-2', 'city', 'state', 'country', 'Zip',
            'billing_name', 'billing_address', 'billing_city', 'billing_state', 'billing_country', 'billing_zip',
            'billing_email', 'credit_card_number', 'name_of_card', 'expire_date', 'security_code',
            'Company-reputaition', 'features', 'recommendations', 'benefits_to_employee',
            'benefits_to_corporations', 'others(insert_below)', 'comment'
        ];

        $values = [];
        $bindTypes = "";

        foreach ($fields as $field) {
            if (in_array($field, [
                'Company-reputaition', 'features', 'recommendations',
                'benefits_to_employee', 'benefits_to_corporations', 'others(insert_below)'
            ])) {
                $values[] = isset($_POST[$field]) ? 1 : 0;
                $bindTypes .= "i";
            } else {
                $values[] = $_POST[$field] ?? '';
                $bindTypes .= "s";
            }
        }

        $placeholders = implode(', ', array_fill(0, count($values), '?'));

        $query = "INSERT INTO registrations (" . implode(', ', $fields) . ") VALUES ($placeholders)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param($bindTypes, ...$values);

        if (!$stmt->execute()) {
            die("DB Error: " . $stmt->error);
        }
        $stmt->close();
    }

    $conn->close();
    echo "saved";
} else {
    echo "invalid";
}
