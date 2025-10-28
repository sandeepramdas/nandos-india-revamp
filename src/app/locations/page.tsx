'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

const locations = [
  {
    id: 1,
    name: "Nando's Connaught Place",
    address: "Block E, Inner Circle, Connaught Place, New Delhi - 110001",
    phone: "+91 11 4567 8900",
    hours: "12:00 PM - 11:00 PM",
    isOpen: true,
    coordinates: { lat: 28.6315, lng: 77.2167 },
  },
  {
    id: 2,
    name: "Nando's Cyber Hub",
    address: "Ground Floor, DLF Cyber Hub, Gurgaon - 122002",
    phone: "+91 124 4567 8900",
    hours: "12:00 PM - 11:00 PM",
    isOpen: true,
    coordinates: { lat: 28.4947, lng: 77.0876 },
  },
  {
    id: 3,
    name: "Nando's Indiranagar",
    address: "100 Feet Road, Indiranagar, Bangalore - 560038",
    phone: "+91 80 4123 5678",
    hours: "12:00 PM - 11:00 PM",
    isOpen: true,
    coordinates: { lat: 12.9716, lng: 77.5946 },
  },
  {
    id: 4,
    name: "Nando's Phoenix Marketcity",
    address: "Phoenix Marketcity, LBS Marg, Kurla West, Mumbai - 400070",
    phone: "+91 22 6789 0123",
    hours: "11:00 AM - 11:00 PM",
    isOpen: true,
    coordinates: { lat: 19.0812, lng: 72.8877 },
  },
  {
    id: 5,
    name: "Nando's Jubilee Hills",
    address: "Road No. 36, Jubilee Hills, Hyderabad - 500033",
    phone: "+91 40 2345 6789",
    hours: "12:00 PM - 11:00 PM",
    isOpen: true,
    coordinates: { lat: 17.4239, lng: 78.4738 },
  },
  {
    id: 6,
    name: "Nando's Koramangala",
    address: "5th Block, Koramangala, Bangalore - 560095",
    phone: "+91 80 4567 1234",
    hours: "12:00 PM - 11:00 PM",
    isOpen: true,
    coordinates: { lat: 12.9352, lng: 77.6245 },
  },
];

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-red via-brand-orange to-brand-yellow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Find a Nando's
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Discover your nearest Nando's restaurant and visit us today
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Enter your city or pincode..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-brand-charcoal dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red dark:focus:ring-brand-orange text-lg"
            />
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-brand-charcoal dark:text-white mb-2">
                        {location.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        {location.isOpen ? (
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm font-semibold rounded-full">
                            Open Now
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 text-sm font-semibold rounded-full">
                            Closed
                          </span>
                        )}
                      </div>
                    </div>
                    <MapPin className="w-6 h-6 text-brand-red dark:text-brand-orange" />
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <Navigation className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-300">{location.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-300">{location.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-300">{location.hours}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="gradient" className="flex-1">
                      Get Directions
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Call Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="bg-gray-200 dark:bg-gray-800 rounded-xl h-96 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Map integration coming soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
