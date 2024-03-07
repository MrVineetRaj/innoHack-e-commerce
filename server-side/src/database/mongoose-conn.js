const mongoose = require('mongoose');

const DATABASE = "mongodb://localhost:27017/e-commerce";

mongoose.connect(DATABASE)
.then(() => console.log('Database connected successfully'))
.catch(err => console.error('Database connection error:', err));
