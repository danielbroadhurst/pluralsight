<?php

/**
 * Allows objects with incompatible interfaces to collaborate.
 * 
 * Adapter class serves as a bridge between some existing service code and our app code. 
 * 
 * Adapter pattern makes the existing or new incompatible APIs work, 
 * without changing the exisitng code.
 */

// Target/client
interface Share {

    // Request
    public function shareData();
}

// Adaptee/Service
class WhatsAppShare {

    // Special Request
    public function wappShare(String $string) {
        echo "Share data via WhatsApp: ' $string ' \n";
    }
}

// Adapter
class WhatsAppShareAdapter implements Share {

    private $whatsapp;
    private $data;

    public function __construct(WhatsAppShare $whatsapp, String $data) {
        $this->whatsapp = $whatsapp;
        $this->data = $data;
    }

    public function shareData() {
        $this->whatsapp->wappShare($this->data);
    }
}


function clientCode(Share $share) {
    $share->shareData();
}

$wa = new WhatsAppShare();
$waShare = new WhatsAppShareAdapter($wa, "Hello Whatsapp");
clientCode($waShare);