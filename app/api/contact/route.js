import { db } from "@/config/firebase.admin";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        const {type, data} = body;

        if(!type || !data) {
            return NextResponse.json(
                {message: "invalid request"}, {status: 400}
            );
        }
        
        await db.collection(type).add({
            ...data,
            createdAt: new Date(),
        });

        return NextResponse.json({ message: "Success" }, {status: 200});
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "something went wrong"}, {status: 500});
    };
}