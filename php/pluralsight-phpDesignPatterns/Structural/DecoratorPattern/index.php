<?php

/**
 * Add new behaviours to existing object by placing these objects
 * inside special wrapper objects that contain the behaviours
 * 
 * To assign behaviours to objects dynamically, without modifying
 * the code that uses the object.
 * 
 * Used when it is complex or not possible to extend the objects
 * behaviour using inheritance.
 */

// Base Component
interface Pizza {
    public function getDesc() : string;
}

// Concrete Component
class Margherita implements Pizza {

    public function getDesc() : string {
        return "Margherita ";
    }
}

class VeggieParadise implements Pizza {

    public function getDesc() : string {
        return "Veggie Paradise ";
    }
}

// Base Decorator
class PizzaToppings implements Pizza {

    protected $pizza;

    public function __construct(Pizza $pizza) {
        $this->pizza = $pizza;
    }

    public function getDesc(): string {
        return $this->pizza->getDesc();
    }
}

// Concrete Decorator
class ExtraCheese extends PizzaToppings {

    public function getDesc(): string {
        return parent::getDesc() . "Extra Cheese ";
    }
}

class Jalapeno extends PizzaToppings {

    public function getDesc(): string {
        return parent::getDesc() . "Jalapeno ";
    }
}


function makePizza(Pizza $pizza) {
    echo "Your Order: " . $pizza->getDesc();
}

$pizza = new Margherita();
$pizza = new ExtraCheese($pizza);
$pizza = new Jalapeno($pizza);

makePizza($pizza);