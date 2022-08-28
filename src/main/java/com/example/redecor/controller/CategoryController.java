package com.example.redecor.controller;


import com.example.redecor.model.Category;
import com.example.redecor.services.CategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class CategoryController {

        private CategoryService categoryService;

        public CategoryController(CategoryService categoryService){this.categoryService = categoryService;}

        @PostMapping("/categories")
        public Category createCategory(@RequestBody Category category){
                return categoryService.createCategory(category);
        }


        @GetMapping("/categories")
        public List<Category> getAllCategories() {
                return categoryService.getAllCategories();
        }

        @DeleteMapping("/categories/{id}")
        public ResponseEntity<Map<String, Boolean>> deleteCategory(@PathVariable Long id) {
                boolean deleted = false;
                deleted = categoryService.deleteCategory(id);
                Map<String, Boolean> resposne = new HashMap<>();
                resposne.put("deleted", deleted);
                return ResponseEntity.ok(resposne);

        }


        @GetMapping("/categories/{id}")
        public ResponseEntity<Category> getCategoryById(@PathVariable Long id) {
                Category category = null;
                category = categoryService.getCategoryById(id);

                return ResponseEntity.ok(category);
        }

        @PutMapping("/categories/{id}")
        public ResponseEntity<Category> updateCategory(@PathVariable Long id, @RequestBody Category category) {
                category = categoryService.updateCategory(id, category);
                return ResponseEntity.ok(category);

        }

}
