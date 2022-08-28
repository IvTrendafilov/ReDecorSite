package com.example.redecor.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    private long id;
    private String name;
    private String category;
    private String information;
    private double price;
    private boolean active;
    private String image;
}
