import mongoose from "mongoose";
const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },      
    worksInHospital: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true,
    }],
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
},{timestamps:true});
export const Doctor = mongoose.model("Doctor",doctorSchema);