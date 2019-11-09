<!DOCTYPE html>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="styles/styles.css">
<!-- Bootstrap CDNs -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

<?php echo "<div class='container-fluid outside'>" ?>
    <?php echo file_get_contents("html/nav.html"); ?>
    <?php echo file_get_contents("html/header.html"); ?>
    <?php echo file_get_contents("html/home.html"); ?>
    <?php echo file_get_contents("html/about.html") ?>
    <?php echo file_get_contents("html/skills.html") ?>
    <?php echo file_get_contents("html/projects.html") ?>
    <?php echo file_get_contents("html/experience.html") ?>
    <?php echo file_get_contents("html/education.html") ?>
    <?php echo file_get_contents("html/contact.php") ?>
    <?php echo file_get_contents("html/footer.php") ?>
<?php echo "</div>" ?>