package com.example.webfluxdemo.exception;

/**
 * Created by arm 06/02/2018
 *
 */
public class TweetNotFoundException extends RuntimeException {

    public TweetNotFoundException(String tweetId) {
        super("Tweet not found with id " + tweetId);
    }
}
