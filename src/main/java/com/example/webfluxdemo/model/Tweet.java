package com.example.webfluxdemo.model;

import org.hibernate.validator.constraints.NotBlank;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;


/**
 * Created by arm 06/02/2018
 *
 */
@Document(collection = "tweets")
public class Tweet {
    @Id

    private String id;

    @NotBlank
    @Size(max = 140)
    @Indexed(unique = true)
    private String text;

    @NotNull
    private Date createdAt = new Date();

    public Tweet() {

    }
    public Tweet(String id,String text, Date createdAt) {
        this.id =id;
        this.text=text;
        this.createdAt = createdAt;
    }

    public Tweet(String text) {
        this.id = id;
        this.text = text;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}
