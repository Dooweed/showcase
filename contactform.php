<?php

if(isset($_POST['submit'])) {
	$name = $_POST['name'];
	$number = $_POST['number'];
	$subject = "bmg9701@mail.ru";

	$mailTo = "ada_170301@mail.ru";
	$header = "От ".$name;
	$txt = "Number of".$number;

	mail($mailTo, $subject, $txt, $header);
	header("Location: index.php?mailsend");
}