import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
export async function POST(
    request: Request
){
    const body = request;
    const {email,password,name} = await body.json();
    const hashedpassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
        data: {
            email,
            name,
            hashedpassword
        }
    });
    return NextResponse.json(user);
}