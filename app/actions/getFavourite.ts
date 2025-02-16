import prisma from '@/app/libs/prismadb';
import getCurrentUser from './getCurrentUsers';

export default async function getFavouriteListings() {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return [];
        }

        const favouriteListings = await prisma.listing.findMany({
            where: {
                id: {
                in: [...currentUser.favouriteIds || []],
                },
            },
        });
        const safeFavourites = favouriteListings.map((listing) => ({
            ...listing,
            createdAt: listing.createdAt.toISOString(),
        }));
        return safeFavourites;
        } catch (error) {
        console.log(error);
    }
}