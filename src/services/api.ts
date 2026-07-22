import axios from 'axios';

// Placeholder for WordPress REST API
export const wpApi = axios.create({
  baseURL: import.meta.env.VITE_WP_API_URL || 'https://api.chopped.local/wp-json/wp/v2',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Placeholder for WooCommerce REST API
export const wooApi = axios.create({
  baseURL: import.meta.env.VITE_WOO_API_URL || 'https://api.chopped.local/wp-json/wc/v3',
  headers: {
    'Content-Type': 'application/json',
    // In production, these should be handled securely, typically via a backend proxy or serverless function
    // 'Authorization': `Basic ${btoa(import.meta.env.VITE_WOO_KEY + ':' + import.meta.env.VITE_WOO_SECRET)}`,
  },
});

// Mock service functions for development
export const fetchProducts = async () => {
  // return wooApi.get('/products').then(res => res.data);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Premium Ribeye', price: '45.00', image: 'ribeye.jpg' },
        { id: 2, name: 'Tomahawk Steak', price: '85.00', image: 'tomahawk.jpg' },
      ]);
    }, 1000);
  });
};
