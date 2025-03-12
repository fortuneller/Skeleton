const User = require("../models/User"); // ✅ Ensure correct path

// ✅ Test Route
exports.testRoute = (req, res) => {
  res.json({ message: "✅ User route is working!" });
};

// 🔹 Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Create a new user
exports.createUser = async (req, res) => {
  try {
    console.log("🔍 Received POST request with body:", req.body);

    const { name, email, password } = req.body;

    // Create and save user
    const newUser = new User({ name, email, password });
    await newUser.save();

    console.log("✅ User saved:", newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.error("❌ Error saving user:", error);
    res.status(400).json({ message: error.message });
  }
};

// 🔹 Get a user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Update a user
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Delete a user
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
