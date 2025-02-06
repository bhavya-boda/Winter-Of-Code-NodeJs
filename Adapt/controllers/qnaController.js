const Category = require("../models/categoryModel");

// Controller to add or remove a category
const addOrRemoveCategory = async (req, res) => {
  try {
    const { action, name } = req.body; // "action" can be "add" or "remove"

    if (!name) {
      return res.status(400).json({ message: "Category name is required" });
    }

    if (action === "add") {
      // Check if category already exists
      const existingCategory = await Category.findOne({ name });
      if (existingCategory) {
        return res.status(400).json({ message: "Category already exists" });
      }

      // Add new category
      const newCategory = new Category({ name });
      await newCategory.save();
      return res.status(201).json({ message: "Category added successfully" });
    }

    if (action === "remove") {
      // Check if category exists
      const existingCategory = await Category.findOne({ name });
      if (!existingCategory) {
        return res.status(404).json({ message: "Category not found" });
      }

      // Remove category
      await Category.deleteOne({ name });
      return res.status(200).json({ message: "Category removed successfully" });
    }

    res.status(400).json({ message: "Invalid action" });

  } catch (error) {
    console.error("Error in addOrRemoveCategory:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addOrRemoveCategory };
