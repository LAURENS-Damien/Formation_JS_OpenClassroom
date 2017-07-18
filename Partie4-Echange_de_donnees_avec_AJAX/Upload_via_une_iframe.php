<script>
	window.top.window.receiveData("<?php echo htmlentities($_POST['nick']); ?>");
</script>

<?php

    $error    = NULL;
    $filename = NULL;

    if (isset($_FILES['uploadFile']) && $_FILES['uploadFile']['error'] === 0) {

        $filename = $_FILES['uploadFile']['name'];
        $targetpath = getcwd() . '/' . $filename; // On stocke le chemin où enregistrer le fichier
        
        // On déplace le fichier depuis le répertoire temporaire vers $targetpath
        if (@move_uploaded_file($_FILES['uploadFile']['tmp_name'], $targetpath)) { // Si ça fonctionne
            $error = 'OK';
        } else { // Si ça ne fonctionne pas
            $error = "Échec de l'enregistrement !";
        }
    } else {
        $error = 'Aucun fichier réceptionné !';
    }
?>

<script>
    window.top.window.uploadEnd("<?php echo $error; ?>", "<?php echo $filename; ?>");
</script>