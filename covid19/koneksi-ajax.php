<?php
include 'koneksi.php';
$nama = $_GET['nama'];
$query = mysqli_query($con, "SELECT * FROM tb_data where nama='$nama'");
$info = mysqli_fetch_array($query);
$data = array(
            'nama'      =>  $info['nama'],
            'umur'   =>  $info['umur'],
            'email'    =>  $info['email'],);
 echo json_encode($data);
?>