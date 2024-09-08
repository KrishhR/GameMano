'use client';

import React, {useEffect, useState} from 'react';
import {
  fetchAllCategories,
  fetchAllProducts,
  fetchProductsByCategory,
} from '../services/productService';
import {Category, CategoryFilterI, filterI, Product} from '../types';
import ProductCard from '../components/ProductCard';
import Categories from '../components/Categories';
import '../styles/style.css';
import {ChevronDown, Info} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@repo/ui/components/ui/dropdown-menu';
import Advertisment from '../components/Advertisment';

const Page = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<filterI>({
    categoryFilter: [{name: 'All Products', slug: 'default'}],
    sorting: {},
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading
  const [productsLoading, setProductsLoading] = useState<boolean>(true); // State to manage loading in all products section
  const [selectedCategory, setSelectedCategory] = useState<string>('default');
  const [selectedOption, setSelectedOption] = useState('low-to-high'); // State to store selected option

  // Handler function to update selected option
  const handleSelect = (option: any) => {
    setSelectedOption(option);
  };

  // api calls
  useEffect(() => {
    const getCategories = async () => {
      // api call to get all the categories
      try {
        const data = await fetchAllCategories();
        setCategories(data.data);
      } catch (err) {
        setError('Failed to fetch categories');
      }
    };

    const getProducts = async () => {
      // api call to get all the products
      try {
        const data = await fetchAllProducts();
        setProducts(data.products);
        sortProducts(data.products, 'low-to-high');
      } catch (err) {
        setError('Failed to fetch products');
      }
    };

    Promise.all([getCategories(), getProducts()]).finally(() => {
      setLoading(false);
      setProductsLoading(false);
    });
  }, []);

  // Making of custom filter structure which will render the filters
  useEffect(() => {
    let temp: CategoryFilterI[] = [...filter.categoryFilter];
    if (categories.length !== 0) {
      categories.forEach((category: Category) => {
        temp.push({name: category.name, slug: category.slug});
      });
    }
    setFilter({...filter, categoryFilter: temp});
  }, [categories]);

  useEffect(() => {
    const getProducts = async () => {
      // api call to get all the products
      try {
        const data = await fetchAllProducts();
        setProducts(data.products);
        sortProducts(data.products, 'low-to-high');
      } catch (err) {
        setError('Failed to fetch products');
      }
      setProductsLoading(false);
    };

    const getproductsByCategory = async (category: string) => {
      // api call to get all the products according to the category selected
      try {
        const data = await fetchProductsByCategory(category);
        setProducts(data.data?.products || []);
      } catch (err) {
        setError('Failed to fetch categories');
      }
      setProductsLoading(false);
    };
    if (selectedCategory == 'default') {
      setProductsLoading(true);
      getProducts();
    } else {
      setProductsLoading(true);
      getproductsByCategory(selectedCategory);
    }
  }, [selectedCategory]);

  useEffect(() => {
    sortProducts(products, selectedOption);
  }, [selectedOption]);

  const sortProducts = (products: Product[], sortOrder: string) => {
    let temp = [];
    temp = products.slice().sort((a, b) => {
      if (sortOrder === 'low-to-high') {
        return a.price - b.price; // Sort from low to high
      } else if (sortOrder === 'high-to-low') {
        return b.price - a.price; // Sort from high to low
      }
      return 0; // No sorting if no valid sort order is provided
    });
    setProducts([...temp]);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col md:flex-row gap-6 p-6">
        {loading ? (
          <div className="flex justify-center items-center w-full min-h-[80vh]">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-6 w-full mx-auto">
            {filter.categoryFilter.length > 0 && (
              <Categories
                categoryFilter={filter.categoryFilter}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                className="w-full md:w-1/4"
              />
            )}
            {productsLoading ? (
              <div className="flex justify-center items-center w-full min-h-[20vh] max-h-[80vh]">
                <div className="loader"></div>
              </div>
            ) : (
              <>
                {products.length > 0 ? (
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-wrap justify-between items-center gap-4">
                      <div className="text-gray-300 text-sm flex gap-2 items-center">
                        <Info color="#ffffff" />
                        <em>
                          Products sorted (Price):{' '}
                          {selectedOption === 'low-to-high'
                            ? 'Low to High'
                            : 'High to Low'}
                        </em>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger className="text-white px-4 py-2 border-2 border-gray-300 rounded-full flex gap-2 items-center">
                          Sort By <ChevronDown color="#ffffff" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          className="bg-dark-brown text-white p-3 border-0"
                          style={{borderRadius: '10px'}}
                        >
                          <DropdownMenuItem
                            className="px-4 py-2 cursor-pointer bg-hover-orange rounded-md"
                            onSelect={() => handleSelect('low-to-high')}
                          >
                            Price: Low to High
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="px-4 py-2 cursor-pointer bg-hover-orange rounded-md"
                            onSelect={() => handleSelect('high-to-low')}
                          >
                            Price: High to Low
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                      {products.map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          customClass="bg-light-yellow rounded-10"
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <p>{error || 'No products available'}</p>
                )}
              </>
            )}
          </div>
        )}
      </div>

      <p className="text-white text-xl px-10">
        Checkout our other games and products
      </p>
      <Advertisment
        gameDetails={{
          title: 'Evolution',
          desc: `Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in
					a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players
					are surrounded by death and danger on all sides, the world that they get to explore feels
					as though it's truly alive, which can encourage players to take risks when they probably shouldn't.`,
        }}
      />

      <Advertisment
        gameDetails={{
          title: 'Valorant',
          desc: `Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.`,
        }}
      />
    </div>
  );
};

export default Page;
