import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, MenuItem, SpiceLevel, SideItem } from '@/types';

interface AddItemOptions {
  spiceLevel?: SpiceLevel;
  sides?: SideItem[];
  sauces?: string[];
  specialInstructions?: string;
  customizations?: string[];
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: MenuItem, options?: AddItemOptions) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (item, options = {}) => {
        set((state) => {
          const { spiceLevel, sides = [], sauces = [], specialInstructions, customizations = [] } = options;

          // Calculate item price including sides
          const sidesTotal = sides.reduce((sum, side) => sum + side.price, 0);
          const itemTotal = item.price + sidesTotal;

          const existingItem = state.items.find(
            (i) =>
              i.id === item.id &&
              i.selectedSpiceLevel === spiceLevel &&
              JSON.stringify(i.selectedSides) === JSON.stringify(sides) &&
              JSON.stringify(i.selectedSauces) === JSON.stringify(sauces) &&
              i.specialInstructions === specialInstructions
          );

          if (existingItem) {
            const newQuantity = existingItem.quantity + 1;
            const newTotalPrice = itemTotal * newQuantity;
            return {
              items: state.items.map((i) =>
                i === existingItem
                  ? { ...i, quantity: newQuantity, totalPrice: newTotalPrice }
                  : i
              ),
            };
          }

          const cartItem: CartItem = {
            ...item,
            quantity: 1,
            selectedSpiceLevel: spiceLevel,
            selectedSides: sides,
            selectedSauces: sauces,
            specialInstructions,
            customizations,
            totalPrice: itemTotal,
          };

          return { items: [...state.items, cartItem] };
        });
      },

      removeItem: (itemId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        }));
      },

      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }
        set((state) => ({
          items: state.items.map((item) => {
            if (item.id === itemId) {
              // Calculate item price including sides
              const sidesTotal = (item.selectedSides || []).reduce((sum, side) => sum + side.price, 0);
              const itemTotal = item.price + sidesTotal;
              return { ...item, quantity, totalPrice: itemTotal * quantity };
            }
            return item;
          }),
        }));
      },

      clearCart: () => set({ items: [] }),

      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.totalPrice, 0);
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: 'nandos-cart-storage',
    }
  )
);
