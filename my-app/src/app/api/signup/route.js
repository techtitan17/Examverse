import mongoose from "mongoose";
import user from "@/app/models/user";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
};

export async function POST(req) {
  try {
    await connectDB();

    const data = await req.json();

    // 🔍 Check if user already exists
    const existingUser = await user.findOne({
      email: data.username,
    });

    if (existingUser) {
      return Response.json({
        success: false,
        message: "User already exists",
      });
    }

    // ✅ Create new user
    const newUser = await user.create({
      email: data.username,
      password: data.password,
      first_name: data.firstname,
      last_name: data.lastname,
    });

    return Response.json({
      success: true,
      user: {
        id: newUser._id,
        email: newUser.email,
      },
    });

  } catch (error) {
    return Response.json({
      success: false,
      message: "Something went wrong",
    });
  }
}