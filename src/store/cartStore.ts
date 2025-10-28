import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, MenuItem, SpiceLevel } from '@/types';

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: MenuItem, spiceLevel?: SpiceLevel, customizations?: string[]) => void;
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

      addItem: (item, spiceLevel, customizations) => {
        set((state) => {
          const existingItem = state.items.find(
            (i) =>
              i.id === item.id &&
              i.selectedSpiceLevel === spiceLevel &&
              JSON.stringify(i.customizations) === JSON.stringify(customizations)
          );

          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === existingItem.id &&
                i.selectedSpiceLevel === existingItem.selectedSpiceLevel
                  ? { ...i, quantity: i.quantity + 1, totalPrice: i.price * (i.quantity + 1) }
                  : i
              ),
            };
          }

          const cartItem: CartItem = {
            ...item,
            quantity: 1,
            selectedSpiceLevel: spiceLevel,
            customizations,
            totalPrice: item.price,
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
          items: state.items.map((item) =>
            item.id === itemId
              ? { ...item, quantity, totalPrice: item.price * quantity }
              : item
          ),
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
