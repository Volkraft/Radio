<?php

// подключаем библиотеку
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// подключаем файлы из библиотеки
require "PHPMailer-master/src/Exception.php";
require "PHPMailer-master/src/PHPMailer.php";

$mail = new PHPMailer(true);

// кодировка
$mail->CharSet = "UTF-8";
// поддержка html тегов, чтобы в нормальном виде на почту отправить
$mail->IsHTML(true);

// принимаем данные из полей 
$name = $_POST["name"];
$surname = $_POST["surname"];
$tel = $_POST["tel"];
$email = $_POST["email"];
// $feedback = $_POST["feedback"];
$body = "body.html";

// оформляем письмо. вшиваем полученные данные в html документ со структурой письма
$body = file_get_contents($body);
$body = str_replace('%name%', $name, $body);
$body = str_replace('%surname%', $surname, $body);
$body = str_replace('%tel%', $tel, $body);
$body = str_replace('%email%', $email, $body);
// $body = str_replace('%feedback%', $feedback, $body);


$mail->addAddress("tosamoeradio@gmail.com");   // Здесь введи Email, куда отправлять
// отправка
$mail->setFrom($email);
// тема 
$mail->Subject = "[Запрос на Тех.Поддержку]";
// прикрепляем структуру письма 
$mail->MsgHTML($body);

// показываем или не опказываем ошибку
if (!$mail->send()) {
   $message = "Ошибка отправки";
} else {
   $message = "Данные отправлены!";
}
// ответ для JS об ошибке
$response = ["message" => $message];

// json ответ 
header('Content-type: application/json');
echo json_encode($response);
