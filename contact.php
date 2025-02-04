<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $message = trim($_POST["message"]);

    // バリデーション
    if (empty($name) || empty($email) || empty($message)) {
        echo "すべてのフィールドを入力してください。";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "有効なメールアドレスを入力してください。";
        exit;
    }

    // メール送信設定
    $to = "reishehei@gmail.com"; // 送信先のメールアドレスに変更
    $subject = "お問い合わせ: $name";
    $body = "名前: $name\nメール: $email\n\nメッセージ:\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

    // メール送信
    if (mail($to, $subject, $body, $headers)) {
        echo "メッセージが送信されました。";
    } else {
        echo "送信に失敗しました。";
    }
} else {
    echo "不正なアクセスです。";
}
?>
