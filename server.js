const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const cors = require('cors');
app.use(cors());
const app = express();

// Middleware
app.use(express.json()); // Allows the backend to understand JSON
app.use(cors()); // Allows your React frontend to talk to this backend
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/uploads', express.static('uploads'));
// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch(err => console.error("❌ Database Connection Error:", err));

// Basic Test Route
app.get('/', (req, res) => {
  res.send("Warranty System API is running...");
});

c// This tells the app to use Render's port, or 5000 if running locally
const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});