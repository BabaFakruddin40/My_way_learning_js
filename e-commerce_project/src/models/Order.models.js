import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    orderPrice: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "delivered", "cancelled"],
        default: "pending",
    },
    address: {
        type: String,
        required: true,
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
            },
        },
    ],
}, { timestamps: true });

export const Order = mongoose.model("Order", orderSchema);
