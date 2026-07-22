import { create } from 'zustand';

export interface CartItem {
  id: string | number;
  name: string;
  price: number;
  image?: string;
  quantity: number;
  weight?: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string | number) => void;
  updateQuantity: (id: string | number, quantity: number) => void;
  toggleCart: () => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,
  
  addItem: (newItem) => set((state) => {
    const existingItem = state.items.find(item => item.id === newItem.id);
    if (existingItem) {
      return {
        items: state.items.map(item => 
          item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
        isOpen: true, // Auto open cart on add
      };
    }
    return { 
      items: [...state.items, { ...newItem, quantity: 1 }],
      isOpen: true,
    };
  }),

  removeItem: (id) => set((state) => ({
    items: state.items.filter(item => item.id !== id)
  })),

  updateQuantity: (id, quantity) => set((state) => ({
    items: state.items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
    ).filter(item => item.quantity > 0)
  })),

  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  
  clearCart: () => set({ items: [] }),

  getCartTotal: () => {
    const { items } = get();
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  getCartCount: () => {
    const { items } = get();
    return items.reduce((count, item) => count + item.quantity, 0);
  }
}));
