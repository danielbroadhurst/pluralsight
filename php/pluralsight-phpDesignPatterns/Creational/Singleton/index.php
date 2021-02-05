<?php

/**
 * Ensures that a class has only one instance, while providing a global access point to this instance.
 */

include 'db_connection.php';

$objectA = DBConnection::getInstance();

$objectB = DBConnection::getInstance();

$objectC = DBConnection::getInstance();