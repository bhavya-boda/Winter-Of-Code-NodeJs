const Mail = require("../models/mailModel");

// Add an important mail (Admin only)
const addMail = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    const newMail = new Mail({ title, content });
    await newMail.save();

    res.status(201).json({ message: "Important mail added successfully", mail: newMail });
  } 
  catch (error) {
    console.error("Add Mail Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete an important mail (Admin only)
const deleteMail = async (req, res) => {
  try {
    const { id } = req.params;

    const mail = await Mail.findById(id);
    if (!mail) {
      return res.status(404).json({ message: "Mail not found" });
    }

    await mail.deleteOne();
    res.json({ message: "Mail deleted successfully" });
  } catch (error) {
    console.error("Delete Mail Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addMail, deleteMail };
