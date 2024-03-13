import { Connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
Connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log(reqBody);

    // check user exist or not
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "user does not exist" },
        { status: 400 }
      );
    }

    // check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "invalid password" }, { status: 400 });
    }
    // creat token data
    const tokenData = {
      id: user._id,
      email: user.email,
      userName: user.userName,
    };
    // creat token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    const responce = NextResponse.json({
      message: "login successfully",
      sucess: true,
    });

    responce.cookies.set("token", token, {
      httpOnly: true,
    });
    return responce;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
