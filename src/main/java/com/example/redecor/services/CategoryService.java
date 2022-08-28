package com.example.redecor.services;

import com.example.redecor.model.Category;


import java.util.List;

public interface CategoryService {
    Category createCategory(Category category);

    List<Category> getAllCategories();

    boolean deleteCategory(Long id);

    Category getCategoryById(Long id);

    Category updateCategory(Long id, Category category);
}
