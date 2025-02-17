import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUsers";

interface IParams {
    listingId: string; // Ensure it's required
}

export async function POST(request: Request, { params }: { params: Promise<{ listingId: string }> }) {
    const currentUser = await getCurrentUser();
    
    if (!currentUser) {
        return NextResponse.error();
    }
    
    const listingId = (await params).listingId; // Correct way to extract params

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

export async function DELETE(request: Request, { params }: { params: IParams }) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return NextResponse.error();
    }

    const { listingId } = params; // Correct way to extract params

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
