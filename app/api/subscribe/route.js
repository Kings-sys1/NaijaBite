import { NextResponse } from "next/server";
import { db } from "@/config/firebase.admin";

export async function POST(request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json(
                { message: "Email required" },
                { status: 400 }
            );
        }

        await db.collection("newsletter").add({
            email,
            createdAt: new Date(),
        });

        return NextResponse.json(
            { message: "Subscribed successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Subscribe error:", error);

        return NextResponse.json(
            { message: "Server error" },
            { status: 500 }
        );
    }
}