<?php
    $content = '';
    foreach ($_POST as $key => $value) {
        if($value){
            $content .= "<b>$key</b>: $value \n";            
        }
    }
    if(trim($content)){
        $content = "<b>Message from Car Zone:</b>\n".$content;
        $apiToken = "6564645636:AAG0iXDTZHzYptdbnao0TaPddUZqhgyt7W0";
        $data = [
            'chat_id' => '1321390338',
            'text' => $content,
            'parse_mode' => 'HTML'
        ];
        $responce = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?".http_build_query($data));
    }
?>