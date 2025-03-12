const Contact = require("../models/Contact"); // ✅ Ensure correct path

// ✅ Test Route
exports.testRoute = (req, res) => {
  res.json({ message: "✅ Contact route is working!" });
};

// 🔹 Get all contacts
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Create a new contact
exports.createContact = async (req, res) => {
  try {
    console.log("🔍 Received POST request with body:", req.body);

    const { firstname, lastname, email } = req.body;

    // Create and save contact
    const newContact = new Contact({ firstname, lastname, email });
    await newContact.save();

    console.log("✅ Contact saved:", newContact);
    res.status(201).json(newContact);
  } catch (error) {
    console.error("❌ Error saving contact:", error);
    res.status(400).json({ message: error.message });
  }
};

// 🔹 Get a contact by ID
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: "Contact not found" });
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Update a contact
exports.updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedContact)
      return res.status(404).json({ message: "Contact not found" });
    res.json(updatedContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Delete a contact
exports.deleteContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact)
      return res.status(404).json({ message: "Contact not found" });
    res.json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
