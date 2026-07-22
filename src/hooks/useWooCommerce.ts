import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchProductById, fetchCategories } from '../lib/woocommerce';

export function useProducts(params = {}) {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => fetchProducts(params),
  });
}

export function useProduct(id: number | null) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id!),
    enabled: !!id,
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
}
