// controllers/productController.js
const mongoose = require('mongoose');
const Product = require('../models/Product');

// Create Product
const createProduct = async (req, res) => {
  try {
    const { name, price, quantity } = req.body;

    // Validation
    if (!name || price === undefined || quantity === undefined) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, price, and quantity'
      });
    }

    if (price < 0 || quantity < 0) {
      return res.status(400).json({
        success: false,
        message: 'Price and quantity must be non-negative'
      });
    }

    const newProduct = new Product({
      name,
      price,
      quantity
    });

    await newProduct.save();

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      product: newProduct
    });

  } catch (error) {
    console.error('Create product error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error creating product'
    });
  }
};

// Get All Products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({
      success: true,
      count: products.length,
      products
    });
  } catch (error) {
    console.error('Get products error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching products'
    });
  }
};

// Get Product by ID
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if ID is valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid product ID format'
      });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.json({
      success: true,
      product
    });

  } catch (error) {
    console.error('Get product error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching product'
    });
  }
};

// Update Product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, quantity } = req.body;

    // Check if ID is valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid product ID format'
      });
    }

    // Validation
    if (price !== undefined && price < 0) {
      return res.status(400).json({
        success: false,
        message: 'Price must be non-negative'
      });
    }

    if (quantity !== undefined && quantity < 0) {
      return res.status(400).json({
        success: false,
        message: 'Quantity must be non-negative'
      });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, quantity },
      { 
        new: true, // Return updated document
        runValidators: true // Run schema validations
      }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.json({
      success: true,
      message: 'Product updated successfully',
      product: updatedProduct
    });

  } catch (error) {
    console.error('Update product error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error updating product'
    });
  }
};

// Delete Product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if ID is valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid product ID format'
      });
    }

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.json({
      success: true,
      message: 'Product deleted successfully',
      product: deletedProduct
    });

  } catch (error) {
    console.error('Delete product error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error deleting product'
    });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};