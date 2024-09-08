export type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  rating: number;
  returnPolicy?: string;
  stock?: string | number;
  images?: string[];
  reviews?: Review[];
};

export type Review = {
  comment?: string;
  rating?: number;
  reviewerEmail?: string;
  reviewerName?: string;
};
