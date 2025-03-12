const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController"); // ✅ Ensure correct path

// ✅ Test route
router.get("/test", contactController.testRoute);

// 🔹 Get all contacts
router.get("/", contactController.getAllContacts);

// 🔹 Create a new contact
router.post("/", contactController.createContact);

// 🔹 Get a contact by ID
router.get("/:id", contactController.getContactById);

// 🔹 Update a contact
router.put("/:id", contactController.updateContact);

// 🔹 Delete a contact
router.delete("/:id", contactController.deleteContact);

module.exports = router;
