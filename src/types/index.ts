export type SpiceLevel = "Lemon & Herb" | "Mild" | "Medium" | "Hot" | "Extra Hot" | "XX Hot";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  spiceLevel?: SpiceLevel;
  isVegetarian: boolean;
  isVegan?: boolean;
  allergens?: string[];
  calories?: number;
  protein?: number;
  customizable: boolean;
  popular?: boolean;
  new?: boolean;
}

export type MenuCategory =
  | "Chicken"
  | "Burgers & Wraps"
  | "Platters"
  | "Starters"
  | "Sides"
  | "Desserts"
  | "Beverages";

export interface CartItem extends MenuItem {
  quantity: number;
  selectedSpiceLevel?: SpiceLevel;
  customizations?: string[];
  totalPrice: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  addresses: Address[];
  loyaltyPoints: number;
  orders: Order[];
}

export interface Address {
  id: string;
  type: "home" | "work" | "other";
  street: string;
  city: string;
  state: string;
  pincode: string;
  landmark?: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  orderType: "delivery" | "pickup" | "dine-in";
  restaurantId: string;
  address?: Address;
  createdAt: Date;
  estimatedDeliveryTime?: Date;
  paymentMethod: PaymentMethod;
  paymentStatus: "pending" | "completed" | "failed";
}

export type OrderStatus =
  | "placed"
  | "confirmed"
  | "preparing"
  | "ready"
  | "out-for-delivery"
  | "delivered"
  | "cancelled";

export type PaymentMethod = "card" | "upi" | "cash" | "wallet";

export interface Restaurant {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  phone: string;
  hours: {
    open: string;
    close: string;
  };
  isOpen: boolean;
  hasDelivery: boolean;
  hasDineIn: boolean;
  hasPickup: boolean;
  rating: number;
  reviewCount: number;
  image: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  ingredients: string[];
  instructions: string[];
  nutrition?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  author?: string;
  rating?: number;
  reviews?: number;
}
