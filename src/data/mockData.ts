import { Venue, VenueCategory, EventVenue } from '../types';
import { RfpType } from '../components/RfpTable';

export const venues: Venue[] = [
    {
      id: '1',
      name: 'The Secret House of Ivy',
      address: '8140 2nd St',
      city: 'Downey',
      state: 'CA',
      zip: '90241',
      country: 'US',
      imageUrl: 'https://images.pexels.com/photos/2291604/pexels-photo-2291604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.8,
      capacity: 200,
      priceRange: '$$$',
      category: VenueCategory.WEDDING,
      amenities: ['Outdoor Garden', 'Catering', 'Bar Service', 'Parking'],
    },
    {
      id: '2',
      name: 'Refined Venue',
      address: '333 S Fair Oaks Ave',
      city: 'Pasadena',
      state: 'CA',
      zip: '91105',
      country: 'US',
      imageUrl: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.6,
      capacity: 150,
      priceRange: '$$$$',
      category: VenueCategory.WEDDING,
      amenities: ['Vintage Cellar', 'Bridal Suite', 'Lighting', 'Sound System'],
    },
    {
      id: '3',
      name: 'Palm Event Center in the Vineyard',
      address: '1184 Vineyard Ave',
      city: 'Pleasanton',
      state: 'CA',
      zip: '94566',
      country: 'US',
      imageUrl: 'https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.9,
      capacity: 300,
      priceRange: '$$$$$',
      category: VenueCategory.PARTY,
      amenities: ['Vineyard Views', 'Full-Service Bar', 'Dance Floor', 'Outdoor Terrace'],
    },
    {
      id: '4',
      name: 'Metropolitan Conference Center',
      address: '500 Howard St',
      city: 'San Francisco',
      state: 'CA',
      zip: '94105',
      country: 'US',
      imageUrl: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.7,
      capacity: 500,
      priceRange: '$$$$',
      category: VenueCategory.CONFERENCE,
      amenities: ['AV Equipment', 'Stage', 'Breakout Rooms', 'Catering'],
    },
    {
      id: '5',
      name: 'Sunset Rooftop Lounge',
      address: '1200 Ocean Ave',
      city: 'Santa Monica',
      state: 'CA',
      zip: '90401',
      country: 'US',
      imageUrl: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.5,
      capacity: 100,
      priceRange: '$$$',
      category: VenueCategory.PARTY,
      amenities: ['Ocean View', 'Full Bar', 'DJ Booth', 'Lounge Seating'],
    },
    {
      id: '6',
      name: 'Heritage Hall',
      address: '750 Main St',
      city: 'Napa',
      state: 'CA',
      zip: '94559',
      country: 'US',
      imageUrl: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.4,
      capacity: 180,
      priceRange: '$$$',
      category: VenueCategory.CORPORATE,
      amenities: ['Historic Building', 'Chef\'s Kitchen', 'Fireplace', 'Courtyard'],
    }
];

export const getVenues = (): Venue[] => {
    return venues.filter(venue => venue);
};

export const EventVenues: EventVenue[] = [
  {
    id: '1',
    name: 'The Secret House of Ivy',
    address: '8140 2nd St',
    city: 'Downey',
    state: 'CA',
    zip: '90241',
    country: 'US',
    imageUrl: 'https://images.pexels.com/photos/2291604/pexels-photo-2291604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    capacity: 100,
    occupied: 50
  },
];

export const getEventVenues = (): EventVenue[] => {
  return EventVenues.filter(eventVenue => eventVenue);
};

export const mockRfps: RfpType[] = [
  {
    id: '1',
    hotelName: 'Marriott Downtown',
    location: 'Chicago, IL',
    eventName: 'State Basketball Championship',
    startDate: '2025-03-15',
    endDate: '2025-03-18',
    roomsRequested: 45,
    estimatedValue: 15750,
    status: 'confirmed',
    lastUpdated: '2025-01-24T14:22:33'
  },
  {
    id: '2',
    hotelName: 'Hyatt Regency',
    location: 'Denver, CO',
    eventName: 'Regional Soccer Tournament',
    startDate: '2025-04-10',
    endDate: '2025-04-14',
    roomsRequested: 60,
    estimatedValue: 21600,
    status: 'pending',
    lastUpdated: '2025-01-27T09:15:00'
  },
  {
    id: '3',
    hotelName: 'Hilton Convention Center',
    location: 'Dallas, TX',
    eventName: 'Youth Volleyball Invitational',
    startDate: '2025-05-22',
    endDate: '2025-05-26',
    roomsRequested: 75,
    estimatedValue: 33750,
    status: 'negotiating',
    lastUpdated: '2025-01-26T16:48:12'
  },
  {
    id: '4',
    hotelName: 'Sheraton Waterfront',
    location: 'Seattle, WA',
    eventName: 'Swim Conference',
    startDate: '2025-02-18',
    endDate: '2025-02-21',
    roomsRequested: 30,
    estimatedValue: 10800,
    status: 'declined',
    lastUpdated: '2025-01-22T10:33:45'
  },
  {
    id: '5',
    hotelName: 'Embassy Suites',
    location: 'Atlanta, GA',
    eventName: 'Track & Field Championship',
    startDate: '2025-03-05',
    endDate: '2025-03-09',
    roomsRequested: 55,
    estimatedValue: 22000,
    status: 'awaiting_info',
    lastUpdated: '2025-01-28T11:20:18'
  },
  {
    id: '6',
    hotelName: 'Courtyard by Marriott',
    location: 'Boston, MA',
    eventName: 'Hockey Tournament',
    startDate: '2025-02-28',
    endDate: '2025-03-04',
    roomsRequested: 40,
    estimatedValue: 16000,
    status: 'pending',
    lastUpdated: '2025-01-25T14:10:26'
  }
]