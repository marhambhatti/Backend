const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const personSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique:true
    },
    age: {
        type: Number,
        min: 18,
        max: 100,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true });

// Pre-save middleware for hashing password
personSchema.pre("save", async function (next) {
    const user = this;

    // Only hash when password is modified (not on every update)
    if (!user.isModified("password")) return next();

    try {
        const genSalt = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, genSalt);
        user.password = hash_password;
        next();
    } catch (error) {
       return error;
    }
});

const PersonModel = mongoose.model("PersonModel", personSchema);

module.exports = PersonModel;
