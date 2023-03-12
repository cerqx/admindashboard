import mongoose from "mongoose";
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";

export const getAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: "admin" }).select("-password");
    res.status(200).json(admins);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserPerformance = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
