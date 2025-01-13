const express = require('express');
const Email = require('../models/Emails');
const router = express.Router();

// Create a new email
router.post('/', async (req, res) => {
    try {
        const { name, email } = req.body;
        const newEmail = new Email({ name, email });
        const savedEmail = await newEmail.save();
        res.status(201).json(savedEmail);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Read all emails
router.get('/', async (req, res) => {
    try {
        const emails = await Email.find();
        res.status(200).json(emails);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update an email by ID
router.put('/:id', async (req, res) => {
    try {
        const { name, email } = req.body;
        const updatedEmail = await Email.findByIdAndUpdate(
            req.params.id,
            { name, email },
            { new: true }
        );
        if (!updatedEmail) return res.status(404).json({ message: 'Email not found' });
        res.status(200).json(updatedEmail);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete an email by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedEmail = await Email.findByIdAndDelete(req.params.id);
        if (!deletedEmail) return res.status(404).json({ message: 'Email not found' });
        res.status(200).json({ message: 'Email deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
