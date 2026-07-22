import axios from 'axios';

const WC_URL = import.meta.env.VITE_WC_URL;
const WC_KEY = import.meta.env.VITE_WC_CONSUMER_KEY;
const WC_SECRET = import.meta.env.VITE_WC_CONSUMER_SECRET;

if (!WC_URL || !WC_KEY || !WC_SECRET) {
  console.warn("WooCommerce environment variables are missing.");
}

// Use relative URL in development to hit the Vite proxy and avoid CORS issues
const baseURL = import.meta.env.DEV 
  ? '/wp-json/wc/v3' 
  : `${WC_URL}/wp-json/wc/v3`;

export const wcApi = axios.create({
  baseURL,
});

wcApi.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    consumer_key: WC_KEY,
    consumer_secret: WC_SECRET,
  };
  return config;
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
  const { data } = await wcApi.get('/products', { params });
  return data;
};

export const fetchProductById = async (id: number): Promise<WCProduct> => {
  const { data } = await wcApi.get(`/products/${id}`);
  return data;
};

export const fetchCategories = async (): Promise<any[]> => {
  const { data } = await wcApi.get('/products/categories');
  return data;
};

export const createOrder = async (orderData: any): Promise<any> => {
  const authHeader = 'Basic ' + btoa(`${WC_KEY}:${WC_SECRET}`);
  const { data } = await axios.post(`${baseURL}/orders`, orderData, {
    headers: {
      'Authorization': authHeader,
      'Content-Type': 'application/json'
    }
  });
  return data;
};
