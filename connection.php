<?php
	$Username = $_POST['Username'];
    $Password = $_POST['Password'];
	// Database connection
	$conn = new mysqli('localhost','root','','rosham');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into sammy(Username, Password) values(?, ?)");
		$stmt->bind_param("ss", $Username, $Password);
		$execval = $stmt->execute();
		echo $execval;
		header('Location:home.html')
		$stmt->close();
		$conn->close();
	}
?>