<?php
session_start(); 
include 'koneksi.php'; 
if (isset($_POST['simpan'])) {
    $sql = mysqli_query($con, "INSERT INTO tb_data VALUES(null,'$_POST[nama]','$_POST[umur]',
    '$_POST[email]')");

    if ($sql) {
        echo "<script>alert('Data Berhasil Disimpan');
        document.location.href='isi.php';</script>";
    }else{
        //echo "<script>alert('Data Gagal Disimpan');
        //document.location.href='index.php';</script>";
        echo mysqli_error($con);
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
     <form method="post" enctype="multipart/form-data">
     <link rel="stylesheet" type="text/css" href="style.css">
<body>
             <center>
             <h1>Selamat Mencoba</h1>
             <table>
                 <tr>
                     <td colspan="3" style="text-align: center;">Masukkan Data Anda</td>
                 </tr>
                 <tr>
                     <td>Nama</td>
                     <td>:</td>
                     <td><input type="text" name="nama" class="tabel" id="nama" ></td>
                 </tr>
                 <tr>
                     <td>Umur</td>
                     <td>:</td>
                     <td><input type="text" name="umur" class="tabel" id="umur"></td>
                 </tr>
                 <tr>
                     <td>Alamat E-mail</td>
                     <td>:</td>
                     <td><input type="text" name="email" class="tabel" id="email"></td>
                 </tr>
                 <tr>
                     <td colspan="3"><input type="submit" name="simpan" class="tombol" value="Save" ></td>
                 </tr>
             </table>
             </center>
</body>
</html>