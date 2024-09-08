/* eslint-disable no-unused-vars */
import React from 'react';
import {CategoryFilterI} from '../types/category.type';
import {Checkbox} from '@repo/ui/components/ui/checkbox';

interface CategoriesProps {
  categoryFilter: CategoryFilterI[];
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
  className?: string;
}

const Categories: React.FC<CategoriesProps> = ({
  categoryFilter,
  selectedCategory,
  setSelectedCategory,
  className,
}) => {
  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug === selectedCategory ? 'default' : slug);
  };

  return (
    <aside
      className={`bg-dark-yellow text-white p-4 rounded-lg shadow-md max-w-full md:max-w-md lg:max-w-lg xl:max-w-xl ${className}`}
    >
      <h3 className="text-lg sm:text-xl font-bold mb-4 text-center md:text-left">
        Filter by Category
      </h3>
      <div className="grid grid-cols-1 gap-4">
        {categoryFilter.map((category, index) => (
          <div
            key={`category.slug-${index}`}
            className="flex items-center space-x-3 cursor-pointer"
            role="button"
            onClick={() => handleCategoryChange(category.slug)} // Use onClick for better user experience
            tabIndex={0}
            aria-pressed={selectedCategory === category.slug} // Improve accessibility
          >
            <Checkbox
              id={category.slug}
              checked={selectedCategory === category.slug}
              onCheckedChange={() => handleCategoryChange(category.slug)}
            />
            <label htmlFor={category.slug} className="text-sm font-medium">
              {category.name}
            </label>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Categories;
