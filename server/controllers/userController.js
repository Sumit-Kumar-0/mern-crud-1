import userModel from "../models/userModel.js";

export const createUserController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!(name && email && password)) {
      return res.status(404).json({
        message: "please fill all inputs",
      });
    }
    // if existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).json({
        message: "already exist !!!!!!!!",
        success: false
      });
    }

    const user = await userModel.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      message: "you are created successfully!!",
      success: true,
      user,
    });
  } catch (error) {
    console.log("error in creating controller", error);
  }
};

export const getAllUserController = async (req, res) => {
  try {
    const allUser = await userModel.find();
    return res.status(200).json({
      message: "getting all user successfully!!",
      allUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "error while feteching all user!!",
      error,
    });
  }
};

export const getSingleUserController = async (req, res) => {
  const { userId } = req.params;

  try {
    const singleUser = await userModel.findById({ _id: userId });
    if (!singleUser) {
      return res.status(500).json({
        message: "user not exist!!",
        error,
      });
    }
    return res.status(200).json({
      message: "getting single user successfully!!",
      singleUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "error while feteching single user!!",
      error,
    });
  }
};

export const deleteUserController = async (req, res) => {
  const { userId } = req.params;
  try {
    const deletedUser = await userModel.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({
      message: "User deleted successfully!!",
      deletedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while deleting single user!!",
      error: error.message,
    });
  }
};

export const updateUserController = async (req, res) => {
  const { userId } = req.params;
  try {
    const updatedUser = await userModel.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({
      message: "User updated successfully!!",
      updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while updating single user!!",
      error: error.message,
    });
  }
};
