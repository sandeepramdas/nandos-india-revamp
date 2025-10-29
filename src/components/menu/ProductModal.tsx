'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Flame, Heart, ShoppingCart, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useCartStore } from '@/store/cartStore';
import type { MenuItem } from '@/types';

interface ProductModalProps {
  item: MenuItem;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: () => void;
}

const heatLevels = [
  { name: 'Lemon & Herb', flames: 0, icon: Heart },
  { name: 'Mild', flames: 1 },
  { name: 'Medium', flames: 2 },
  { name: 'Hot', flames: 3 },
  { name: 'Extra Hot', flames: 4 },
  { name: 'XX Hot', flames: 5 },
];

const sidesOptions = [
  { id: 'fries', name: 'PERi-Peri Fries', price: 99, image: '/images/fries.jpg' },
  { id: 'coleslaw', name: 'Coleslaw', price: 79, image: '/images/coleslaw.jpg' },
  { id: 'corn', name: 'Grilled Corn', price: 89, image: '/images/corn.jpg' },
  { id: 'rice', name: 'Spicy Rice', price: 99, image: '/images/rice.jpg' },
];

const sauces = [
  { id: 'extra-hot', name: 'Extra Hot', color: 'bg-red-600' },
  { id: 'hot', name: 'Hot', color: 'bg-red-500' },
  { id: 'medium', name: 'Medium', color: 'bg-orange-500' },
  { id: 'mild', name: 'Mild', color: 'bg-yellow-400' },
  { id: 'lemon-herb', name: 'Lemon & Herb', color: 'bg-green-500' },
  { id: 'garlic', name: 'Garlic BBQ', color: 'bg-amber-700' },
];

export function ProductModal({ item, isOpen, onClose, onAddToCart }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedHeat, setSelectedHeat] = useState(2);
  const [selectedSides, setSelectedSides] = useState<string[]>([]);
  const [selectedSauces, setSelectedSauces] = useState<string[]>(['medium']);
  const [specialInstructions, setSpecialInstructions] = useState('');
  
  const addToCart = useCartStore((state) => state.addItem);

  const calculateTotal = () => {
    let total = item.price * quantity;
    selectedSides.forEach((sideId) => {
      const side = sidesOptions.find((s) => s.id === sideId);
      if (side) total += side.price * quantity;
    });
    return total;
  };

  const handleAddToCart = () => {
    const customizations: string[] = [];

    // Add sides
    selectedSides.forEach((sideId) => {
      const side = sidesOptions.find((s) => s.id === sideId);
      if (side) customizations.push(`Side: ${side.name}`);
    });

    // Add sauces
    selectedSauces.forEach((sauceId) => {
      const sauce = sauces.find((s) => s.id === sauceId);
      if (sauce) customizations.push(`Sauce: ${sauce.name}`);
    });

    // Add special instructions
    if (specialInstructions) {
      customizations.push(`Note: ${specialInstructions}`);
    }

    // Add to cart with proper parameters
    for (let i = 0; i < quantity; i++) {
      addToCart(item, heatLevels[selectedHeat].name as any, customizations);
    }

    onAddToCart();
    onClose();
    
    setQuantity(1);
    setSelectedHeat(2);
    setSelectedSides([]);
    setSelectedSauces(['medium']);
    setSpecialInstructions('');
  };

  const toggleSide = (sideId: string) => {
    setSelectedSides((prev) =>
      prev.includes(sideId) ? prev.filter((id) => id !== sideId) : [...prev, sideId]
    );
  };

  const toggleSauce = (sauceId: string) => {
    setSelectedSauces((prev) =>
      prev.includes(sauceId) ? prev.filter((id) => id !== sauceId) : [...prev, sauceId]
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden pointer-events-auto transition-colors"
            >
              <div className="flex flex-col h-full max-h-[90vh]">
                <div className="relative h-64 bg-gradient-to-br from-brand-orange to-brand-red overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors shadow-lg"
                  >
                    <X className="w-5 h-5 text-brand-charcoal dark:text-white" />
                  </button>

                  <div className="absolute bottom-4 left-6 right-6">
                    <h2 className="text-3xl font-display font-bold text-white mb-2">{item.name}</h2>
                    <p className="text-white/90">{item.description}</p>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Flame className="w-5 h-5 text-brand-red dark:text-brand-orange" />
                      <h3 className="text-xl font-bold text-brand-charcoal dark:text-white">Choose Your Heat Level</h3>
                      <span className="text-sm text-brand-red dark:text-brand-orange font-semibold">Required</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {heatLevels.map((level, index) => {
                        const Icon = level.icon || Flame;
                        return (
                          <motion.button
                            key={level.name}
                            onClick={() => setSelectedHeat(index)}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className={`
                              p-4 rounded-xl border-2 transition-all
                              ${selectedHeat === index
                                ? 'border-brand-red bg-gradient-fire text-white shadow-lg'
                                : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-brand-charcoal dark:text-gray-200 hover:border-brand-red/50 dark:hover:border-brand-orange/50'
                              }
                            `}
                          >
                            <div className="flex items-center justify-center gap-1 mb-2">
                              {level.flames === 0 ? (
                                <Heart className="w-4 h-4" fill={selectedHeat === index ? 'white' : '#10b981'} />
                              ) : (
                                [...Array(level.flames)].map((_, i) => (
                                  <Flame
                                    key={i}
                                    className="w-3 h-3"
                                    fill={selectedHeat === index ? 'white' : '#D6001C'}
                                  />
                                ))
                              )}
                            </div>
                            <p className="text-sm font-semibold">{level.name}</p>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Plus className="w-5 h-5 text-brand-orange" />
                      <h3 className="text-xl font-bold text-brand-charcoal dark:text-white">Add Sides</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Optional</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {sidesOptions.map((side) => (
                        <motion.button
                          key={side.id}
                          onClick={() => toggleSide(side.id)}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className={`
                            relative overflow-hidden rounded-xl border-2 transition-all
                            ${selectedSides.includes(side.id)
                              ? 'border-brand-orange ring-2 ring-brand-orange/20'
                              : 'border-gray-200 dark:border-gray-700 hover:border-brand-orange/50'
                            }
                          `}
                        >
                          <div className="relative h-32 bg-gray-100 dark:bg-gray-700">
                            <Image
                              src={side.image}
                              alt={side.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 50vw, 25vw"
                            />
                            {selectedSides.includes(side.id) && (
                              <div className="absolute inset-0 bg-brand-orange/20 flex items-center justify-center">
                                <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center">
                                  <Plus className="w-5 h-5 text-white" />
                                </div>
                              </div>
                            )}
                          </div>
                          <div className="p-3 bg-white dark:bg-gray-800">
                            <p className="text-sm font-semibold text-brand-charcoal dark:text-white">{side.name}</p>
                            <p className="text-xs text-brand-red dark:text-brand-orange font-bold">+₹{side.price}</p>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <AlertCircle className="w-5 h-5 text-brand-yellow" />
                      <h3 className="text-xl font-bold text-brand-charcoal dark:text-white">Extra Sauces</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Optional</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {sauces.map((sauce) => (
                        <motion.button
                          key={sauce.id}
                          onClick={() => toggleSauce(sauce.id)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`
                            px-4 py-2 rounded-full font-medium transition-all
                            ${selectedSauces.includes(sauce.id)
                              ? `${sauce.color} text-white shadow-lg`
                              : 'bg-gray-100 dark:bg-gray-800 text-brand-charcoal dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }
                          `}
                        >
                          {sauce.name}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-charcoal dark:text-white mb-2">
                      Special Instructions
                    </label>
                    <textarea
                      value={specialInstructions}
                      onChange={(e) => setSpecialInstructions(e.target.value)}
                      placeholder="Any specific requests? (e.g., extra crispy, no onions)"
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-brand-charcoal dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-xl focus:border-brand-red dark:focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-red/20 dark:focus:ring-brand-orange/20 transition-colors resize-none"
                    />
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-800/50">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Quantity</p>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 flex items-center justify-center hover:border-brand-red dark:hover:border-brand-orange transition-colors"
                        >
                          <Minus className="w-4 h-4 text-brand-charcoal dark:text-white" />
                        </button>
                        <span className="text-2xl font-bold text-brand-charcoal dark:text-white w-12 text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 flex items-center justify-center hover:border-brand-red dark:hover:border-brand-orange transition-colors"
                        >
                          <Plus className="w-4 h-4 text-brand-charcoal dark:text-white" />
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total</p>
                      <p className="text-3xl font-bold text-brand-red dark:text-brand-orange">₹{calculateTotal()}</p>
                    </div>
                  </div>

                  <Button
                    onClick={handleAddToCart}
                    variant="gradient"
                    size="xl"
                    className="w-full"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
