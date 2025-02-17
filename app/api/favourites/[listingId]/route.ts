import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUsers";

interface IParams {
    listingId: string; // Remove '?' to make it required
}

export async function POST(request: Request, context: { params: IParams }) {
    const currentUser = await getCurrentUser();
    
    if (!currentUser) {
        return NextResponse.error();
    }
    
    const { listingId } = context.params; // No need to await

    if (!listingId || typeof listingId !== "string") {
        throw new Error("Invalid ID");
    }

    const favouriteIds = [...(currentUser.favouriteIds || [])];
    favouriteIds.push(listingId);

    const user = await prisma.user.update({
        where: { id: currentUser.id },
        data: { favouriteIds },
    });

    return NextResponse.json(user);
}

export async function DELETE(request: Request, context: { params: IParams }) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return NextResponse.error();
    }

    const { listingId } = context.params; // No need to await

    if (!listingId || typeof listingId !== "string") {
        throw new Error("Invalid ID");
    }

    let favouriteIds = [...(currentUser.favouriteIds || [])];
    favouriteIds = favouriteIds.filter((id) => id !== listingId);

    const user = await prisma.user.update({
        where: { id: currentUser.id },
        data: { favouriteIds },
    });

    return NextResponse.json(user);
}
