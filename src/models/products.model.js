const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { toJSON, paginate } = require("./plugins");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  quantity: {
    type: Number
  },
  status: {
    type: String
  }

}, { timestamps: true });
productSchema.plugin(toJSON);
productSchema.plugin(paginate);

const Products = mongoose.model("Products", productSchema);

module.exports = Products;
