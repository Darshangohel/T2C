export interface Venue {
    id: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    imageUrl: string;
    rating: number;
    capacity: number;
    priceRange: string;
    category: VenueCategory;
    amenities: string[];
}

export interface EventVenue {
    id: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    imageUrl: string;
    capacity: number;
    occupied: number;
}

export enum VenueCategory {
    WEDDING = 'Wedding',
    CORPORATE = 'Corporate',
    PARTY = 'Party',
    CONFERENCE = 'Conference',
    OTHER = 'Other'
}