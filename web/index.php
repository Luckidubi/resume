<?php

if (isset($_POST['username']) && isset($_POST['title']) && isset($_POST['email']) && isset($_POST['message'])) {
$name = $_POST['username'];
$title = $_POST['title'];
$email = $_POST['email'];
$message = $_POST['message'];

$data = $name. ',' . $title .',' . $email . ',' . $message . "\r \n";

$put = file_put_contents('form_data.txt', $data, FILE_APPEND | LOCK_EX);

if ($put === false) {
    die('Failed to write to file');
}
 else {
    echo "Message recieved successfully";
    header('location:'. $_SERVER['HTTP_REFERER']);
}
} else {
    die('No data recieved');
}




