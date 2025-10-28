'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Facebook, Twitter, Instagram, Youtube,
  Mail, Phone, MapPin, Heart, ChefHat,
  Flame, CreditCard, Shield, Truck
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  const footerLinks = {
    menu: [
      { label: 'Full Menu', href: '/menu' },
      { label: 'Chicken', href: '/menu?category=chicken' },
      { label: 'Burgers & Wraps', href: '/menu?category=burgers' },
      { label: 'Platters', href: '/menu?category=platters' },
      { label: 'Sides', href: '/menu?category=sides' },
      { label: 'Desserts', href: '/menu?category=desserts' },
    ],
    company: [
      { label: 'Our Story', href: '/about' },
      { label: 'Locations', href: '/locations' },
      { label: 'Careers', href: '/careers' },
      { label: 'Franchise', href: '/franchise' },
      { label: 'Press', href: '/press' },
      { label: 'Blog', href: '/blog' },
    ],
    help: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'FAQs', href: '/faq' },
      { label: 'Track Order', href: '/track-order' },
      { label: 'Delivery Info', href: '/delivery' },
      { label: 'Catering', href: '/catering' },
      { label: 'Gift Cards', href: '/gift-cards' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Allergen Info', href: '/allergens' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/nandos', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Instagram, href: 'https://instagram.com/nandos', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Twitter, href: 'https://twitter.com/nandos', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Youtube, href: 'https://youtube.com/nandos', label: 'YouTube', color: 'hover:bg-red-600' },
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden border-t border-white/5">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-red rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-yellow rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              {/* Logo */}
              <div className="flex items-center gap-3 mb-4">
                <Flame className="w-10 h-10 text-brand-red drop-shadow-[0_0_10px_rgba(214,0,28,0.5)]" />
                <span className="text-3xl font-display font-bold text-white">Nando's</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Home of the legendary flame-grilled PERi-PERi chicken.
                Bringing the heat and flavor of Africa to India since our first restaurant.
              </p>

              {/* Newsletter */}
              <div className="mb-6">
                <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-white">
                  <Mail className="w-5 h-5 text-brand-orange" />
                  Get Exclusive Offers
                </h4>
                <form onSubmit={handleSubscribe} className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="flex-1 px-5 py-3 rounded-lg bg-white/15 backdrop-blur-sm border-2 border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange focus:bg-white/20 focus:shadow-[0_0_20px_rgba(255,107,53,0.3)] transition-all font-medium text-base"
                  />
                  <Button
                    type="submit"
                    variant="gradient"
                    disabled={subscribed}
                    size="lg"
                  >
                    {subscribed ? '✓ Subscribed!' : 'Subscribe'}
                  </Button>
                </form>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold mb-3 text-gray-500 uppercase tracking-wider">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all hover:border-brand-orange ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Menu Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-orange">Menu</h3>
            <ul className="space-y-2">
              {footerLinks.menu.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ChefHat className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-orange" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-orange">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-orange">Help</h3>
            <ul className="space-y-2">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/5 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-brand-orange mt-1 drop-shadow-[0_0_8px_rgba(255,107,53,0.4)]" />
              <div>
                <h4 className="font-semibold mb-1 text-white">Call Us</h4>
                <p className="text-gray-400">1800-XXX-XXXX (Toll Free)</p>
                <p className="text-gray-500 text-sm">Mon-Sun: 10 AM - 11 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-brand-orange mt-1 drop-shadow-[0_0_8px_rgba(255,107,53,0.4)]" />
              <div>
                <h4 className="font-semibold mb-1 text-white">Email Us</h4>
                <p className="text-gray-400">support@nandosindia.com</p>
                <p className="text-gray-500 text-sm">We reply within 24 hours</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-orange mt-1 drop-shadow-[0_0_8px_rgba(255,107,53,0.4)]" />
              <div>
                <h4 className="font-semibold mb-1 text-white">Head Office</h4>
                <p className="text-gray-400">Mumbai, Maharashtra</p>
                <Link href="/locations" className="text-brand-orange text-sm hover:text-brand-red transition-colors">
                  Find Nearest Restaurant →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="border-t border-white/5 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/5 hover:border-brand-orange/30 transition-all">
              <Truck className="w-8 h-8 text-brand-orange" />
              <div>
                <p className="font-semibold text-sm text-white">Fast Delivery</p>
                <p className="text-gray-400 text-xs">Hot & Fresh</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/5 hover:border-brand-orange/30 transition-all">
              <Shield className="w-8 h-8 text-brand-orange" />
              <div>
                <p className="font-semibold text-sm text-white">100% Safe</p>
                <p className="text-gray-400 text-xs">Secure Payment</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/5 hover:border-brand-orange/30 transition-all">
              <CreditCard className="w-8 h-8 text-brand-orange" />
              <div>
                <p className="font-semibold text-sm text-white">Easy Payment</p>
                <p className="text-gray-400 text-xs">Multiple Options</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/5 hover:border-brand-orange/30 transition-all">
              <Heart className="w-8 h-8 text-brand-orange" />
              <div>
                <p className="font-semibold text-sm text-white">Made with Love</p>
                <p className="text-gray-400 text-xs">Since 1987</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              {footerLinks.legal.map((link, index) => (
                <span key={link.href} className="flex items-center gap-4">
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                  {index < footerLinks.legal.length - 1 && <span className="text-gray-600">•</span>}
                </span>
              ))}
            </div>
          </div>
          <div className="text-center mt-6 text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Nando's India. All rights reserved.</p>
            <p className="mt-2 flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-brand-red fill-brand-red animate-pulse" /> and
              <Flame className="w-4 h-4 text-brand-orange animate-pulse" /> PERi-PERi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
