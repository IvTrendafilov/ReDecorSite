package com.example.redecor.services;


import com.example.redecor.entity.CategoryEntity;
import com.example.redecor.entity.ProductEntity;
import com.example.redecor.model.Category;
import com.example.redecor.model.Product;
import com.example.redecor.repository.CategoryRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImp implements CategoryService {

    private CategoryRepository categoryRepository;

    public CategoryServiceImp(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }


    @Override
    public Category createCategory(Category category) {
        CategoryEntity categoryEntity = new CategoryEntity();
        BeanUtils.copyProperties(category,categoryEntity);
        categoryRepository.save(categoryEntity);
        return category;
    }

    @Override
    public List<Category> getAllCategories() {
        List<CategoryEntity> categoryEntities = categoryRepository.findAll();

        List<Category> categories = categoryEntities.stream().map(cat -> new Category(cat.getId(),
                        cat.getName()))
                .collect(Collectors.toList());
        return categories;
    }

    @Override
    public boolean deleteCategory(Long id) {
        CategoryEntity categoryEntity = categoryRepository.findById(id).get();
        categoryRepository.delete(categoryEntity);

        return true;
    }

    @Override
    public Category getCategoryById(Long id) {
        CategoryEntity categoryEntity = categoryRepository.findById(id).get();
        Category category = new Category();
        BeanUtils.copyProperties(categoryEntity,category);
        return category;
    }

    @Override
    public Category updateCategory(Long id, Category category) {
        CategoryEntity categoryEntity = categoryRepository.findById(id).get();
        categoryEntity.setName(categoryEntity.getName());
        categoryRepository.save(categoryEntity);
        return category;
    }
}
