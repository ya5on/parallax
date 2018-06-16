<?php 
include "includes/nav.php";
 ?>

<?php 
    
    if (isset ($_GET['page'])) {
        
        $page = $_GET["page"];
        $filename = "includes/" . $page . '.php';

        if (file_exists($filename)) {
            include $filename;
        }else{
            include 'includes/home.php';
        }

    }else{
        include 'includes/home.php';
    }


 ?>

<?php 
include "includes/footer.php";
 ?>