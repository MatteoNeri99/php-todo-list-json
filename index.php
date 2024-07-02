<?php


header("Content-type: application/Json");

$todoList=file_get_contents("./array.json");

echo $todoList;

