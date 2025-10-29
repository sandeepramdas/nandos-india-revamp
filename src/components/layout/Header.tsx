'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, ShoppingCart, User, MapPin, Search,
  Flame, Heart, Phone
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useCartStore } from '@/store/cartStore';
import { cn, getAssetPath } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, getTotalItems } = useCartStore();
  const cartItems = getTotalItems();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/menu', label: 'Menu', icon: Flame },
    { href: '/locations', label: 'Locations', icon: MapPin },
    { href: '/recipes', label: 'Recipes', icon: Heart },
    { href: '/about', label: 'Our Story', icon: null },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-black/95 backdrop-blur-md shadow-2xl border-b border-white/5 py-3'
            : 'bg-black/80 backdrop-blur-lg shadow-lg py-4'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative flex items-center w-36 h-12"
              >
                <img
                  src={getAssetPath("/images/nandos-logo.svg")}
                  alt="Nando's PERi-PERi"
                  className="w-full h-full object-contain brightness-110 contrast-125 drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]"
                  style={{ filter: 'drop-shadow(0 0 12px rgba(214, 0, 28, 0.4))' }}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-gray-200 hover:text-brand-orange transition-all font-medium group relative"
                >
                  {link.icon && (
                    <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  )}
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-red to-brand-orange group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Search Button */}
              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex text-gray-300 hover:text-white hover:bg-white/5"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </Button>

              {/* Cart Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleCart}
                className="relative text-gray-300 hover:text-white hover:bg-white/5"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-5 h-5" />
                <AnimatePresence>
                  {cartItems > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-1 bg-gradient-to-br from-brand-red to-brand-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg shadow-brand-red/50"
                    >
                      {cartItems}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>

              {/* User Button */}
              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex text-gray-300 hover:text-white hover:bg-white/5"
                aria-label="User account"
              >
                <User className="w-5 h-5" />
              </Button>

              {/* Order Now Button */}
              <Button
                variant="gradient"
                size="lg"
                className="hidden md:flex shadow-lg shadow-brand-red/30 hover:shadow-brand-red/50 transition-shadow"
                asChild
              >
                <Link href="/menu">Order Now</Link>
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-gray-300 hover:text-white hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-lg lg:hidden border-l border-white/10"
            style={{ top: '80px' }}
          >
            <nav className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-xl font-medium text-gray-200 hover:text-brand-orange transition-colors group"
                >
                  {link.icon && <link.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />}
                  {link.label}
                </Link>
              ))}
              <Button
                variant="gradient"
                size="xl"
                className="mt-4 shadow-lg shadow-brand-red/40"
                asChild
              >
                <Link href="/menu">Order Now</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
