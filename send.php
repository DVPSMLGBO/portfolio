<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $nom = htmlspecialchars(trim($_POST["nom"]));
    $societe = htmlspecialchars(trim($_POST["societe"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    if (empty($nom) || empty($email) || empty($message)) {
        echo "<script>alert(' Certains champs obligatoires ne sont pas remplis.'); window.history.back();</script>";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<script>alert(' Adresse email invalide.'); window.history.back();</script>";
        exit;
    }

    $to = "gabrielwendy626@gmail.com";
    $subject = "Nouveau message de $nom";
    
    $body = "Nom : $nom\n";
    $body .= "Société : $societe\n";
    $body .= "Email : $email\n\n";
    $body .= "Message :\n$message\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert(' Votre message a bien été envoyé !'); window.location.href='contact.php';</script>";
    } else {
        echo "<script>alert(' Une erreur est survenue lors de l’envoi du message.'); window.history.back();</script>";
    }
} else {
    echo "<script>alert('Accès non autorisé.'); window.location.href='contact.php';</script>";
}
?>
