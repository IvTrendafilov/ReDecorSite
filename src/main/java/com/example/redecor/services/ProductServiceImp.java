package com.example.redecor.services;

import com.example.redecor.entity.ProductEntity;
import com.example.redecor.model.Product;
import com.example.redecor.repository.ProductRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImp implements ProductService {


    private ProductRepository productRepository;

    public ProductServiceImp(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Product createProduct(Product product) {
        ProductEntity productEntity = new ProductEntity();
        BeanUtils.copyProperties(product, productEntity);
        productRepository.save(productEntity);
        return product;
    }

    @Override
    public List<Product> getAllProducts() {
        List<ProductEntity> productEntities = productRepository.findAll();

        List<Product> products = productEntities.stream().map(pro -> new Product(pro.getId(),
                        pro.getName(),
                        pro.getCategory(),
                        pro.getInformation(),
                        pro.getPrice(),
                        pro.isActive(),
                        pro.getImage()))
                .collect(Collectors.toList());
        return products;
    }

    @Override
    public boolean deleteProduct(Long id) {
        ProductEntity productEntity = productRepository.findById(id).get();
        productRepository.delete(productEntity);
        return true;
    }

    @Override
    public Product getProductById(Long id) {
        ProductEntity productEntity = productRepository.findById(id).get();
        Product product = new Product();
        BeanUtils.copyProperties(productEntity, product);
        return product;
    }

    @Override
    public Product updateProduct(Long id, Product product) {
        ProductEntity productEntity = productRepository.findById(id).get();
        productEntity.setName(product.getName());
        productEntity.setCategory(product.getCategory());
        productEntity.setInformation(product.getInformation());
        productEntity.setPrice(product.getPrice());
        productEntity.setActive(product.isActive());
        productEntity.setImage(product.getImage());
        productRepository.save(productEntity);
        return product;

    }


}
