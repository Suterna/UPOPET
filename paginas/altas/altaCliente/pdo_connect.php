<?php
$DB_host = 'localhost';
$DB_username = 'root';
$DB_password = '';
$DB_name = 'upopet';
$pdo_conn = new PDO('mysql:host=' . $DB_host . ';dbname=' . $DB_name, $DB_username, $DB_password);
