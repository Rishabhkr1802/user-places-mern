import mongoose from "mongoose";

const placeSchema = new mongoose.schema({
    name: {
        type: String,
        required: true
    }
});

export const PlaceModel = mongoose.model('Place', placeSchema);