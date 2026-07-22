import axios from 'axios';

// ==========================================
// SECURE ARCHITECTURE
// We no longer store API keys in the frontend. All requests are routed
// through api.php which securely holds the keys on the server and strictly
// whitelists allowed actions to prevent hacking.
// ==========================================

// In production (Hostinger), use the relative /api.php file.
// In local development, use the absolute URL to the Hostinger deployment to avoid needing local PHP.
const PROXY_URL = import.meta.env.DEV 
  ? 'https://skyblue-dunlin-456849.hostingersite.com/api.php' 
  : '/api.php';

export const wcApi = axios.create({
  baseURL: PROXY_URL,
});

export interface WCProduct {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created: string;
  type: string;
  status: string;
  featured: boolean;
  catalog_visibility: string;
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  price_html: string;
  on_sale: boolean;
  purchasable: boolean;
  total_sales: number;
  weight: string;
  dimensions: { length: string; width: string; height: string };
  stock_status: string;
  stock_quantity: number | null;
  categories: { id: number; name: string; slug: string }[];
  tags: { id: number; name: string; slug: string }[];
  images: { id: number; src: string; name: string; alt: string }[];
  attributes: {
    id: number;
    name: string;
    position: number;
    visible: boolean;
    variation: boolean;
    options: string[];
  }[];
}

export const fetchProducts = async (params = {}): Promise<WCProduct[]> => {
  // Pass the target WooCommerce endpoint to the proxy
  const { data } = await wcApi.get('', { 
    params: { endpoint: '/wp-json/wc/v3/products', ...params } 
  });
  return data;
};

export const fetchProductById = async (id: number): Promise<WCProduct> => {
  const { data } = await wcApi.get('', { 
    params: { endpoint: `/wp-json/wc/v3/products/${id}` } 
  });
  return data;
};

export const fetchCategories = async (): Promise<any[]> => {
  const { data } = await wcApi.get('', { 
    params: { endpoint: '/wp-json/wc/v3/products/categories' } 
  });
  return data;
};

export const createOrder = async (orderData: any): Promise<any> => {
  // POST requests to the proxy
  const { data } = await wcApi.post(`?endpoint=/wp-json/wc/v3/orders`, orderData, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return data;
};
