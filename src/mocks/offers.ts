import { FullOffer } from "../types/offer";

const offers: FullOffer[] = [

        {
        id: '1',
        title: 'Loft with Terrace',
        description: 'Loft apartment featuring a private terrace and bright interiors.',
        type: 'apartment',
        price: 210,
        images: ['/img/mocks/img/00000000.jpg', '/img/mocks/img/00000002.jpg', '/img/mocks/img/00000003.jpg', '/img/mocks/img/00000004.jpg', '/img/mocks/img/00000005.jpg'],
        city: { name: 'Paris', location: { latitude: 48.8561, longitude: 2.351499, zoom: 13 } },
        location: { latitude: 48.8575, longitude: 2.3490, zoom: 16 },
        goods: ['Wi-Fi', 'Air conditioning', 'Coffee machine'],
        host: { isPro: true, name: 'Claire', avatarUrl: '/img/avatar.svg' },
        isPremium: true,
        isFavorite: true,
        rating: 4.8,
        bedrooms: 2,
        maxAdults: 4
    },
    {
        id: '2',
        title: 'Skyline View Apartment',
        description: 'Apartment with skyline views and spacious living area.',
        type: 'apartment',
        price: 275,
        images: ['/img/mocks/img/00000006.jpg', '/img/mocks/img/00000007.jpg', '/img/mocks/img/00000008.jpg', '/img/mocks/img/00000009.jpg', '/img/mocks/img/00000010.jpg'],
        city: { name: 'Paris', location: { latitude: 48.8561, longitude: 2.351499, zoom: 13 } },
        location: { latitude: 48.8578, longitude: 2.3550, zoom: 16 },
        goods: ['Wi-Fi', 'Air conditioning', 'Dishwasher', 'Coffee machine'],
        host: { isPro: true, name: 'Nina', avatarUrl: '/img/avatar.svg' },
        isPremium: true,
        isFavorite: true,
        rating: 4.9,
        bedrooms: 3,
        maxAdults: 5
    },
        {
        id: '3',
        title: 'Bright Terrace Room',
        description: 'Room with access to a sunny terrace and city views.',
        type: 'room',
        price: 90,
        images: ['/img/mocks/img/00000011.jpg', '/img/mocks/img/00000012.jpg', '/img/mocks/img/00000013.jpg'],
        city: { name: 'Brussels', location: { latitude: 50.8503, longitude: 4.3517, zoom: 12 } },
        location: { latitude: 50.8520, longitude: 4.3550, zoom: 15 },
        goods: ['Wi-Fi', 'Towels'],
        host: { isPro: false, name: 'Isabelle', avatarUrl: '/img/avatar.svg' },
        isPremium: false,
        isFavorite: true,
        rating: 4.4,
        bedrooms: 1,
        maxAdults: 2
    },
    {
        id: '4',
        title: 'Compact Designer Room',
        description: 'Designer room in a modern building, great for couples.',
        type: 'room',
        price: 110,
        images: ['/img/mocks/img/00000014.jpg', '/img/mocks/img/00000015.jpg', '/img/mocks/img/00000016.jpg'],
        city: { name: 'Amsterdam', location: { latitude: 52.3702, longitude: 4.8952, zoom: 12 } },
        location: { latitude: 52.3715, longitude: 4.8965, zoom: 16 },
        goods: ['Wi-Fi', 'Coffee machine'],
        host: { isPro: true, name: 'Rik', avatarUrl: '/img/avatar.svg' },
        isPremium: false,
        isFavorite: false,
        rating: 4.5,
        bedrooms: 1,
        maxAdults: 2
    }

]
export {offers}