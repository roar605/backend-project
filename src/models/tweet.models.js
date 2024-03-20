import mongoose, { Schema, mongo } from "mongoose";

const tweetSchema = new Schema(
    {
        content: {
            type: String,
            required: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            re: "User"
        }
    },
    { timestamps: true }
)

export const Tweet = mongoose.model("Tweet", tweetSchema);