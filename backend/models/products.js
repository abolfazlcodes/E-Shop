import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    image: { type: String, required: false },
    price: { type: Number, required: false },
    offPrice: { type: String, required: false },
  },
  {
    timestamps: false,
  }
);

export default mongoose.model("Product", productSchema);
