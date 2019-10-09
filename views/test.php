<?php
//Step1
 $db = mysqli_connect('remotemysql.com','xInF7OKL5i','gUDs83QPoS','xInF7OKL5i')
 or die('Error connecting to MySQL server.');
?>


<!DOCTYPE html>
<html lang="sv">
<head>
<meta charset="utf-8">
<title>Microbit Interface</title>
<link rel="stylesheet" href="/style/style.css">
<script src="functions.js"></script>
</head>
<body>
    <nav class="navbar">
        <ul>
            <li><a href="index">Startpage</a></li>
            <li><a href="makeroom.html">Make a room</a></li>
            <li><a href="input">Statistics</a></li>
        </ul>
    </nav>



    <?php
    //Step2
    $query = "SELECT * FROM microbitdata";
    mysqli_query($db, $query) or die('Error querying database.');

    $result = mysqli_query($db, $query);
    $row = mysqli_fetch_array($result);

    while ($row = mysqli_fetch_array($result)) {
    echo $row['id'] . ' ' . $row['temp'] . ': ' . $row['light'] . ' ' . $row['time'] .'<br>'
    ?>
</body>
</html>