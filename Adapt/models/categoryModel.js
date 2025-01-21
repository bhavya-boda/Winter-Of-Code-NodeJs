const mongoose = require('mongoose');

// Category Schema for Q&A
const categorySchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        trim: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }, 
});

module.exports = mongoose.model('Category', categorySchema);