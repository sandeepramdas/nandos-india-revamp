'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Flame, MapPin, Clock, Star, Heart, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { FireParticles } from '@/components/effects/FireParticles';

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-charcoal-800 via-brand-charcoal-900 to-black">
        {/* Fire Particles Background */}
        <FireParticles />

        {/* Animated Background Orbs */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-brand-red/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-orange/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-yellow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8"
            >
              <Flame className="w-5 h-5 text-brand-orange" />
              <span className="text-white font-medium">Legendary Flame-Grilled PERi-PERi</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-display font-bold mb-6 leading-tight"
            >
              <span className="text-white">Feed Your</span>{' '}
              <span className="text-gradient">Fire</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              Experience the legendary taste of flame-grilled PERi-PERi chicken.
              Order online and get it delivered hot to your door.
            </motion.p>

            {/* CTA Buttons - Quick animation for immediate visibility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button variant="gradient" size="xl" className="group" asChild>
                <Link href="/menu">
                  Order Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-brand-charcoal" asChild>
                <Link href="/locations">
                  Find a Restaurant
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
            >
              {[
                { value: '1,200+', label: 'Global Locations' },
                { value: '30', label: 'Countries' },
                { value: '13', label: 'Restaurants in India' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
            <div className="w-1.5 h-3 bg-white rounded-full mx-auto" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative">
        {/* Subtle background glow */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-red rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-orange rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Why Nando's?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're not just about chicken. We're about passion, flavor, and unforgettable experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Flame,
                title: 'Flame-Grilled Perfection',
                description: 'Every piece of chicken is marinated for 24 hours and flame-grilled to perfection.',
                color: 'brand-red',
              },
              {
                icon: Heart,
                title: 'Made with Love',
                description: 'Our secret PERi-PERi sauce recipe has been perfected over generations.',
                color: 'brand-orange',
              },
              {
                icon: Zap,
                title: 'Lightning Fast Delivery',
                description: 'Fresh, hot food delivered to your door in record time. No compromise on quality.',
                color: 'brand-yellow',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover-lift hover-glow border-none shadow-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-${feature.color}/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-${feature.color}/20`}>
                      <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items Preview */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-yellow rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-orange rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Fan Favorites
            </h2>
            <p className="text-xl text-gray-300">
              The dishes that keep our customers coming back for more
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { name: '1/4 Chicken', spice: 'Hot', price: 349, popular: true, image: '/images/quarter-chicken.jpg' },
              { name: 'Peri-Peri Burger', spice: 'Medium', price: 299, new: true, image: '/images/burger.jpg' },
              { name: 'Chicken Wings', spice: 'XX Hot', price: 399, popular: true, image: '/images/wings.jpg' },
              { name: 'Full Platter', spice: 'Lemon & Herb', price: 899, popular: true, image: '/images/family-platter.jpg' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover-lift hover-glow cursor-pointer group bg-white/5 backdrop-blur-sm border border-white/10">
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-brand-orange to-brand-red overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {item.popular && (
                      <div className="absolute top-3 right-3 bg-brand-yellow text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                        <Star className="w-3 h-3 text-black fill-black" />
                        Popular
                      </div>
                    )}
                    {item.new && (
                      <div className="absolute top-3 right-3 bg-brand-yellow text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        NEW
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg text-white mb-1">{item.name}</h3>
                    <p className="text-sm text-brand-orange mb-3">{item.spice}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-brand-orange">₹{item.price}</span>
                      <Button size="sm" variant="gradient" className="shadow-lg shadow-brand-red/30">Add</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="gradient" size="xl" asChild>
              <Link href="/menu">
                View Full Menu
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-red rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-yellow rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
            >
              Ready to Feed Your Fire?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-10"
            >
              Order now and get your PERi-PERi fix delivered hot and fast.
            </motion.p>
            {/* Buttons ALWAYS visible - no animation delay */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="xl" asChild>
                <Link href="/menu">
                  Order for Delivery
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-brand-charcoal" asChild>
                <Link href="/locations">
                  Find Nearest Location
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
