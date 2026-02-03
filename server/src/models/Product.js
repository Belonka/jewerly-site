import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    price: { type: Number, default: 0 },
    description: { type: String, default: "" },

    
    imageKeys: { type: [String], default: [] },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", ProductSchema);