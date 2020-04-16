<?php
session_start(); 
include 'koneksi.php'; 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Cek Resiko Covid-19</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="container">
        <div id="start">Mulai Pengecekan?</div>
        <div id="quiz" style="display: none">
            <div id="question"></div>
            <div id="qImg"></div>
            <div id="choices">
                <div class="choice" id="A" onclick="checkAnswer('A')"></div>
                <div class="choice" id="B" onclick="checkAnswer('B')"></div>
            </div>
            <div id="progress"></div>
        </div>
    </div>
    <table id="result">
             <?php
             $no = 0;
             $sql = mysqli_query($con, "SELECT * FROM tb_data");
             while($r=mysqli_fetch_array($sql)){
                 $no++;
             ?>
                <tr>
                     <td>No</td>
                     <td>:</td>
                     <td><?php echo $no; ?></td>
                </tr>
                <tr>
                     <td>Nama</td>
                     <td>:</td>
                     <td><?php echo $r['nama']; ?></td>
                 </tr>
                <tr>
                     <td>Umur</td>
                     <td>:</td>
                     <td><?php echo $r['umur']; ?></td>
                 </tr>
                 <tr>
                     <td>Alamat E-mail</td>
                     <td>:</td>
                     <td><?php echo $r['email']; ?></td>
                 </tr>
                 <?php } ?>
    </table>
    <div id="result">
    <div id="scoreContainer" style="display: none"></div>
    </div>
    <script src="covid.js"></script>
</body>
</html>