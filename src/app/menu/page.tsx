'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X, Star, Flame, Leaf, Plus, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { ProductModal } from '@/components/menu/ProductModal';
import { Toast } from '@/components/ui/Toast';
import { menuItems } from '@/data/menuData';
import { useCartStore } from '@/store/cartStore';
import type { MenuCategory, SpiceLevel, MenuItem } from '@/types';
import { formatPrice } from '@/lib/utils';

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | 'All'>('All');
  const [selectedSpiceLevel, setSelectedSpiceLevel] = useState<SpiceLevel | 'All'>('All');
  const [showVegOnly, setShowVegOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const { addItem } = useCartStore();

  const categories: Array<MenuCategory | 'All'> = [
    'All',
    'Chicken',
    'Burgers & Wraps',
    'Platters',
    'Starters',
    'Sides',
    'Desserts',
    'Beverages',
  ];

  const spiceLevels: Array<SpiceLevel | 'All'> = [
    'All',
    'Lemon & Herb',
    'Mild',
    'Medium',
    'Hot',
    'Extra Hot',
    'XX Hot',
  ];

  // Filter menu items
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSpice = selectedSpiceLevel === 'All' || item.spiceLevel === selectedSpiceLevel;
      const matchesVeg = !showVegOnly || item.isVegetarian;

      return matchesSearch && matchesCategory && matchesSpice && matchesVeg;
    });
  }, [searchQuery, selectedCategory, selectedSpiceLevel, showVegOnly]);

  const handleOpenModal = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleAddToCart = () => {
    if (selectedItem) {
      setToastMessage(selectedItem.name);
      setShowToast(true);
    }
  };

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
              Our Menu
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Discover our legendary flame-grilled PERi-PERi chicken and more
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 sticky top-20 z-30">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-brand-charcoal dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>

            {/* Category Tabs (Desktop) */}
            <div className="hidden lg:flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'bg-brand-red text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Mobile Filter Toggle */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
              <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </Button>
          </div>

          {/* Mobile Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="pt-4 space-y-4">
                  {/* Category Select */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Category
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value as MenuCategory | 'All')}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-brand-charcoal dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red dark:focus:ring-brand-orange transition-colors"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  {/* Spice Level Select */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Spice Level
                    </label>
                    <select
                      value={selectedSpiceLevel}
                      onChange={(e) => setSelectedSpiceLevel(e.target.value as SpiceLevel | 'All')}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-brand-charcoal dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red dark:focus:ring-brand-orange transition-colors"
                    >
                      {spiceLevels.map((level) => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>

                  {/* Vegetarian Toggle */}
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showVegOnly}
                      onChange={(e) => setShowVegOnly(e.target.checked)}
                      className="w-5 h-5 text-brand-red dark:text-brand-orange rounded focus:ring-brand-red dark:focus:ring-brand-orange"
                    />
                    <Leaf className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Vegetarian Only
                    </span>
                  </label>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Additional Filters */}
          <div className="hidden lg:flex items-center gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2 flex-wrap">
              <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Spice Level:</span>
              {spiceLevels.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedSpiceLevel(level)}
                  className={`text-sm px-3 py-1 rounded-full transition-all ${
                    selectedSpiceLevel === level
                      ? 'bg-brand-orange text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
            <label className="flex items-center gap-2 cursor-pointer ml-auto">
              <input
                type="checkbox"
                checked={showVegOnly}
                onChange={(e) => setShowVegOnly(e.target.checked)}
                className="w-5 h-5 text-brand-red dark:text-brand-orange rounded focus:ring-brand-red dark:focus:ring-brand-orange"
              />
              <Leaf className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Vegetarian Only
              </span>
            </label>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-300">
            Showing <span className="font-semibold text-brand-red">{filteredItems.length}</span> items
          </p>
        </div>

        {/* Menu Grid */}
        <AnimatePresence mode="popLayout">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.5) }}
                >
                  <Card
                    className="overflow-hidden hover-lift hover-glow cursor-pointer group h-full flex flex-col"
                    onClick={() => handleOpenModal(item)}
                  >
                    {/* Image */}
                    <div className="relative h-56 bg-gradient-to-br from-brand-orange to-brand-red overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {/* Badges */}
                      <div className="absolute top-3 right-3 flex flex-col gap-2">
                        {item.popular && (
                          <div className="bg-white/95 backdrop-blur-sm text-brand-charcoal px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                            <Star className="w-3 h-3 text-brand-yellow fill-brand-yellow" />
                            Popular
                          </div>
                        )}
                        {item.new && (
                          <div className="bg-brand-yellow text-brand-charcoal px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                            NEW
                          </div>
                        )}
                        {item.isVegetarian && (
                          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                            <Leaf className="w-3 h-3" />
                            Veg
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-4 flex-1 flex flex-col">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-brand-charcoal dark:text-white mb-2 line-clamp-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                          {item.description}
                        </p>
                        {item.spiceLevel && (
                          <div className="flex items-center gap-1 mb-3">
                            <Flame className="w-4 h-4 text-brand-red dark:text-brand-orange" />
                            <span className="text-xs text-brand-red dark:text-brand-orange font-medium">
                              {item.spiceLevel}
                            </span>
                          </div>
                        )}
                        {(item.calories || item.protein) && (
                          <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                            {item.calories && <span>{item.calories} cal</span>}
                            {item.protein && <span>{item.protein}g protein</span>}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                        <span className="text-2xl font-bold text-brand-red dark:text-brand-orange">
                          {formatPrice(item.price)}
                        </span>
                        <Button
                          size="sm"
                          variant="gradient"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenModal(item);
                          }}
                          className="group/btn"
                        >
                          <Plus className="w-4 h-4 group-hover/btn:rotate-90 transition-transform" />
                          Add
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🍗</div>
              <h3 className="text-2xl font-bold text-brand-charcoal dark:text-white mb-2">
                No items found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try adjusting your filters or search query
              </p>
              <Button
                variant="gradient"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedSpiceLevel('All');
                  setShowVegOnly(false);
                }}
              >
                Clear All Filters
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Product Customization Modal */}
      {selectedItem && (
        <ProductModal
          item={selectedItem}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Add to Cart Toast */}
      <Toast
        isVisible={showToast}
        message={toastMessage}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
