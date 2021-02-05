<?php

/**
 * Defines a subscription mechanism to notify the changes in one
 * object to all its observer dependent objects.
 * 
 * Used when changes to state of one object require changing of other objects
 *  - an object observes other object and changes accordingly
 */

// Subscriber Interface
interface Subscriber {

    /**
     * @param $postId
     */
    public function update($postId);
}

// Publisher
class HealthyMe {

    private $subscribers = array();
    private $post;

    /**
     * @param Subscriber $subs
     */
    public function registerSubscriber(Subscriber $subs) {
        $this->subscribers[] = $subs;
        echo "Subscriber Added! \n";
    }

    public function notifySubscribers() {
        foreach ($this->subscribers as $subscriber) {
            $subscriber->update($this->post);
        }
    }

    /**
     * @param $post
     */
    public function publishPost($post) {
        $this->post = $post;
        $this->notifySubscribers();
    }
}

// Concrete Subscriber
class FoodUpdateSubscribers implements Subscriber {

    /**
     * @param $postId
     */
    public function update($postId) {
        echo "New Post with ID $postId Published \n";
    }
}

$publisher = new HealthyMe();
$subscriber = new FoodUpdateSubscribers();

$publisher->registerSubscriber($subscriber);
$publisher->publishPost(12);