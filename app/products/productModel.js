const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    productName: { type: String, required: true },
    productType: { type: String, required: true },
    productPrice: { type: String, required: true },
    productAddedBy: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Product', schema);