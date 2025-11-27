const Settings={
    rentOffersCount: 312,
} as const;
export {Settings};

const AppRoute = {
    Main: '/',
    Login: '/login',
    Favorites: '/favorites',
    Offer: '/offer',
} as const;

const AuthorizationStatus = {
    Auth: 'AUTH',
    NoAuth: 'NO_AUTH',
    Unknown: 'UNKNOWN',
}
export {AuthorizationStatus}
export {AppRoute}