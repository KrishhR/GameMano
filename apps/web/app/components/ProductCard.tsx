// packages/ui/components/ProductCard.tsx
import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@repo/ui/components/ui/card';
import {Product} from '../types';
import Image from 'next/image';
import {StarFilledIcon, StarIcon} from '@radix-ui/react-icons';
import {Button} from '@repo/ui/components/ui/button';
import NoImage from '../assets/images/noImage.png';
import {useRouter} from 'next/navigation';
// import LazyLoad from 'react-lazyload';

const ProductCard: React.FC<{product: Product; customClass?: string}> = ({
  product,
  customClass,
}) => {
  const router = useRouter();

  const ratings = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map(
          (
            _,
            index, //Loop to generate 5 stars
          ) => (
            <span key={index}>
              {index < Math.round(+rating) ? (
                <StarFilledIcon className="bg-star" />
              ) : (
                <StarIcon className="bg-star" />
              )}
            </span>
          ),
        )}
      </div>
    );
  };
  return (
    <Card
      className={`${customClass} h-auto max-w-sm border rounded-md shadow-md relative`}
    >
      <CardHeader>
        <Image
          width={200}
          height={100}
          src={product.thumbnail || NoImage}
          alt={product.title}
          className="mx-auto rounded"
        />
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <CardTitle>{product.title}</CardTitle>
        {ratings(+product.rating ?? 0)}
        <p className="text-sm text-gray-700">{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center flex-wrap gap-4">
        <p>${product.price}</p>
        <Button
          className="bg-product-card-btn"
          onClick={() => router.push(`/products/${product.id}`)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
