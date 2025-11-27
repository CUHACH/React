import { OffersList } from "../types/offer";
const offersList: OffersList[] = [
    {
        id: '1',
        title: 'Loft with Terrace',

        type: 'apartment',
        price: 210,

        city: { name: 'Paris', location: { latitude: 48.8561, longitude: 2.351499, zoom: 13 } },
        location: { latitude: 48.8575, longitude: 2.3490, zoom: 16 },

        isPremium: true,
        isFavorite: true,
        rating: 4.8,
        previewImage: '/img/mocks/img/00000000.jpg'
    },
    {
        id: '2',
        title: 'Skyline View Apartment',

        type: 'apartment',
        price: 275,

        city: { name: 'Paris', location: { latitude: 48.8561, longitude: 2.351499, zoom: 13 } },
        location: { latitude: 48.8578, longitude: 2.3550, zoom: 16 },

        isPremium: true,
        isFavorite: true,
        rating: 4.9,
        previewImage: '/img/mocks/img/00000006.jpg'
    },
        {
        id: '3',
        title: 'Bright Terrace Room',
        type: 'room',
        price: 90,

        city: { name: 'Brussels', location: { latitude: 50.8503, longitude: 4.3517, zoom: 12 } },
        location: { latitude: 50.8520, longitude: 4.3550, zoom: 15 },

        isPremium: false,
        isFavorite: true,
        rating: 4.4,
        previewImage: '/img/mocks/img/00000011.jpg'
    },
    {
        id: '4',
        title: 'Compact Designer Room',

        type: 'room',
        price: 110,

        city: { name: 'Amsterdam', location: { latitude: 52.3702, longitude: 4.8952, zoom: 12 } },
        location: { latitude: 52.3715, longitude: 4.8965, zoom: 16 },

        isPremium: false,
        isFavorite: false,
        rating: 4.5,
        previewImage: '/img/mocks/img/00000014.jpg'
    }
]

export {offersList}