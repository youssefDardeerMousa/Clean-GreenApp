import mongoose, { Types, Schema, model } from "mongoose";

const cartSchema = new Schema(
  {
    user: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    products: [
      {
        _id: false,
        productId: { type: Types.ObjectId, ref: "Product" },
        quantity: { type: Number, default: 1 },
      },
    ],
    
    subcategory: [
      {
        _id: false,
        subcategoryId: { type: Types.ObjectId, ref: "Subcategory"},
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

const CartModel = mongoose.models.Cart || model("Cart", cartSchema);

export default CartModel;
