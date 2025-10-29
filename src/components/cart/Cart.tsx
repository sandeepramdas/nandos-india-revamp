'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

export function Cart() {
  const { isOpen, items, toggleCart, updateQuantity, removeItem, getTotalPrice } = useCartStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed right-0 top-0 bottom-0 w-full md:w-[480px] bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col transition-colors"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-brand-red dark:text-brand-orange" />
                <h2 className="text-2xl font-display font-bold text-brand-charcoal dark:text-white">Your Cart</h2>
                {items.length > 0 && (
                  <span className="bg-brand-red text-white text-sm px-2 py-1 rounded-full">
                    {items.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </div>
              <button
                onClick={toggleCart}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                aria-label="Close cart"
              >
                <X className="w-6 h-6 text-brand-charcoal dark:text-gray-200" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-24 h-24 text-gray-300 dark:text-gray-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-brand-charcoal dark:text-white">Your cart is empty</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Add some delicious PERi-PERi chicken to get started!
                  </p>
                  <Button variant="gradient" size="lg" onClick={toggleCart} asChild>
                    <Link href="/menu">Browse Menu</Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg dark:hover:shadow-gray-950/50 transition-all"
                      >
                        <div className="flex gap-4">
                          {/* Item Image */}
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-700">
                            <Image
                              src={item.image || '/images/placeholder-food.jpg'}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>

                          {/* Item Details */}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-brand-charcoal dark:text-white mb-1 truncate">
                              {item.name}
                            </h3>
                            {item.selectedSpiceLevel && (
                              <p className="text-xs text-brand-red dark:text-brand-orange mb-1">
                                🌶️ {item.selectedSpiceLevel}
                              </p>
                            )}
                            {item.selectedSides && item.selectedSides.length > 0 && (
                              <div className="text-xs text-gray-600 dark:text-gray-400 mb-1 space-y-0.5">
                                {item.selectedSides.map((side, idx) => (
                                  <div key={idx} className="flex items-center justify-between">
                                    <span>+ {side.name}</span>
                                    <span className="text-brand-red dark:text-brand-orange font-semibold">₹{side.price}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                            {item.selectedSauces && item.selectedSauces.length > 0 && (
                              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                                Sauces: {item.selectedSauces.join(', ')}
                              </p>
                            )}
                            {item.specialInstructions && (
                              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 italic">
                                Note: {item.specialInstructions}
                              </p>
                            )}

                            <div className="flex items-center justify-between">
                              {/* Quantity Controls */}
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-brand-red dark:hover:bg-brand-orange hover:text-white transition-colors flex items-center justify-center"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus className="w-4 h-4 text-brand-charcoal dark:text-gray-200" />
                                </button>
                                <span className="w-8 text-center font-semibold text-brand-charcoal dark:text-white">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-brand-red dark:hover:bg-brand-orange hover:text-white transition-colors flex items-center justify-center"
                                  aria-label="Increase quantity"
                                >
                                  <Plus className="w-4 h-4 text-brand-charcoal dark:text-gray-200" />
                                </button>
                              </div>

                              {/* Price */}
                              <div className="text-right">
                                <p className="font-bold text-brand-red dark:text-brand-orange">
                                  {formatPrice(item.totalPrice)}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  {formatPrice(item.totalPrice / item.quantity)} each
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Remove Button */}
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 transition-colors self-start"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 space-y-4">
                {/* Subtotal */}
                <div className="flex items-center justify-between text-lg">
                  <span className="font-semibold text-brand-charcoal dark:text-white">Subtotal</span>
                  <span className="font-bold text-brand-red dark:text-brand-orange">
                    {formatPrice(getTotalPrice())}
                  </span>
                </div>

                {/* Promo Code */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Promo code"
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-brand-charcoal dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red dark:focus:ring-brand-orange transition-colors"
                  />
                  <Button variant="outline">Apply</Button>
                </div>

                {/* Checkout Button */}
                <Button
                  variant="gradient"
                  size="xl"
                  className="w-full"
                  onClick={toggleCart}
                  asChild
                >
                  <Link href="/checkout" className="flex items-center justify-center gap-2">
                    Proceed to Checkout
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>

                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  Taxes and delivery fees calculated at checkout
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
