export {default} from 'next-auth/middleware';

export const config = {
    matcher: [
        '/favourites',
        '/trips',
        '/properties',
        '/reservations'
    ]
}