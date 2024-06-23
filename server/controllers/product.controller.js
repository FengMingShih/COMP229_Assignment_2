import Product from '../models/product.model.js';

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get a single product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a product by ID
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, { new: true });
    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.productId);
    if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete all products
const deleteAllProducts = async (req, res) => {
  try {
    await Product.deleteMany({});
    res.json({ message: 'All products deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Find products by name containing 'kw'
const findProductsByName = async (req, res) => {
  try {
    const name = req.query.name;
    const products = await Product.find({ name: { $regex: name, $options: 'i' } });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Middleware to find product by ID
const productByID = async (req, res, next, id) => {
  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    req.product = product;
    next();
  } catch (err) {
    return res.status(400).json({ message: 'Invalid product ID' });
  }
};

export default {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  deleteAllProducts,
  findProductsByName,
  productByID
};
