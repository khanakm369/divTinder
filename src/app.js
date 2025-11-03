import express from 'express'
import dotenv from 'dotenv';
import connectDb from './config/database.js';
import userModel from './model/user.model.js';

dotenv.config();
const app = express();
connectDb();

// Middleware
app.use(express.json());

// ✅ Signup API
app.post("/signup", async (req, res) => {
    try {
        const user = new userModel(req.body);
        await user.save();
        res.status(201).json({ message: "User added successfully" });
    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// ✅ Fetch user by email API
// ✅ Fetch user by email API
app.get("/user", async (req, res) => {
    try {
        let email = req.body.emailId;
        console.log("Requested email:", email);

        if (!email) {
            return res.status(400).json({
                message: "Email is required in query: ?emailId=value"
            });
        }

        const userSchema = await userModel.findOne({ emailId: email });

        if (!userSchema) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json(userSchema);

    } catch (error) {
        console.error("Get User Error:", error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});


// ✅ Server Start
let PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
    console.log(`✅ Server is listening on port ${PORT}`);
});
