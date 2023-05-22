<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
  $image = $_FILES['image'];
  $file = $_FILES['file'];
  $title = $_POST['title'];
  $description = $_POST['description'];

  // Process the uploaded file and save it to a desired location
  $imageFileName = $image['name'];
  $fileFileName = $file['name'];
  // ... perform the necessary file processing

  // Redirect the user back to the upload page with a success message
  header("Location: upload-page.php?success=1");
  exit;
}
?>
