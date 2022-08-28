package com.example.redecor.controller;

import com.example.redecor.model.Product;
import com.example.redecor.services.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class ProductController {
    private ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping("/products")
    public Product creteProduct(@RequestBody Product product) {

        return productService.createProduct(product);
    }

    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @DeleteMapping("/products/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable Long id) {
        boolean deleted = false;
        deleted = productService.deleteProduct(id);
        Map<String, Boolean> resposne = new HashMap<>();
        resposne.put("deleted", deleted);
        return ResponseEntity.ok(resposne);

    }


    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Product product = null;
        product = productService.getProductById(id);

        return ResponseEntity.ok(product);
    }

    @PutMapping("/products/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product product) {
        product = productService.updateProduct(id, product);
        return ResponseEntity.ok(product);

    }


}
