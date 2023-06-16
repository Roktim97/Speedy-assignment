const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
    },

    category: {
        type: String,
    },

    keywords: [String]
})

module.exports = mongoose.model("Topics", topicSchema);