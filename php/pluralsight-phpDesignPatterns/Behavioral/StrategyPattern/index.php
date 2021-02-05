<?php

/**
 * Defines a family of algorithms, encapsualte each into separate class,
 * makes objects interchangable.
 * 
 * To use different variants of algorithm within an object and be able to
 * switch from on algorithm to another during runtime.
 * 
 * When the class has massive conitional operator for different variants of
 * same algorithm
 */

// Strategy Interface
interface PaymentGateway {
    /**
     * @param $amount
     */
    public function pay($amount);
}

// Concrete Strategy
class PayByDcCc implements PaymentGateway {

    /**
     * @param $amount
     */
    public function pay($amount) {
        echo "Paid $amount via Debit/Credit Card \n";
    }
}

// Concrete Strategy
class PayByPaypal implements PaymentGateway {

    /**
     * @param $amount
     */
    public function pay($amount) {
        echo "Paid $amount via PayPal \n";
    }
}

// Context
class Order {

    private $paymentGateway;

    /**
     * @param PaymentGateway $paymentGateway
     */
    public function setPaymentGateway(PaymentGateway $paymentGateway) {
        $this->paymentGateway = $paymentGateway;
    }

    public function pay($amount) {
        $this->paymentGateway->pay($amount);
    }
}

// Client code
$order = new Order();
$order->setPaymentGateway(new PayByDcCc());
$order->pay(189);

// Client code
$order = new Order();
$order->setPaymentGateway(new PayByPaypal());
$order->pay(199);