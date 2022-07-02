import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    image: { type: String, required: false },
    price: { type: String, required: false },
    offPrice: { type: String, required: false },
    discount: { type: String, default: 0 },
    category: { type: String, required: false },
    size: { type: String, required: false },
  },
  {
    timestamps: false,
  }
);

export default mongoose.model("Product", productSchema);
