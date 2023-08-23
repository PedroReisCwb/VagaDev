import { useCallback, useEffect, useMemo, useState } from "react";
import http from "../services/http";

export interface IProduct {
  name: string;
  image_url: string;
  type: string;
  price: number;
  seller: string;
  available_sizes: string[];
  details: string;
  sport: string;
}

interface Filter {
  category: string;
  size: string;
}

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [filter, setFilter] = useState<Filter>({
    category: "",
    size: "",
  });

  function getCategoriesFromProducts(products: IProduct[]) {
    const categories: string[] = [];
    for (const product of products) {
      const hasCategory = categories.find((c) => c === product.type);
      if (!hasCategory) {
        categories.push(product.type);
      }
    }

    return categories;
  }

  function getSizesFromProducts(products: IProduct[]) {
    const sizes: string[] = [];
    for (const product of products) {
      for (const productSizes of product.available_sizes) {
        const hasSize = sizes.find((size) => size === productSizes);
        if (!hasSize) {
          sizes.push(productSizes);
        }
      }
    }

    return sizes;
  }

  const requestProducts = useCallback(async function requestProducts() {
    try {
      const { data } = await http.get("/data.json");
      setProducts(data);
      const categories = getCategoriesFromProducts(data);
      const sizes = getSizesFromProducts(data);
      setCategories([...categories]);
      setSizes([...sizes]);
    } catch (e) {
      setProducts([]);
    }
  }, []);

  const productsFilter = useMemo(() => {
    let list = products;
    if (filter.category) {
      list = list.filter((product) => product.type === filter.category);
    }

    if (filter.size) {
      list = list.filter((product) => {
        const hasSize = product.available_sizes.find(
          (size) => size === filter.size
        );
        return hasSize;
      });
    }

    return list;
  }, [filter, products]);

  useEffect(() => {
    requestProducts().catch(() => null);
  }, [requestProducts]);

  return {
    products: productsFilter,
    setFilter,
    filter,
    sizes,
    categories,
  };
}
