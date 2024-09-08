/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */

'use client';

import React, { useEffect, useState } from 'react';
import ProtectedRoute from '../../hoc/ProtectedRoute';
import { fetchProductById } from '~/app/services/productService';
import { usePathname, useRouter } from 'next/navigation';
import { Product, Review } from '~/app/types';
import { ChevronLeft } from 'lucide-react';
import { StarFilledIcon, StarIcon } from '@radix-ui/react-icons';
import '../../styles/style.css';
import Carousel from '@repo/ui/components/ui/custom-carousel';
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/components/ui/avatar"


const ProductPage = () => {
	const pathname = usePathname();
	const router = useRouter();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState<boolean>(true);
	const [slides, setSlides] = useState<string[]>([]);
	const [reviews, setReviews] = useState<Review[]>([]);
	const [product, setProduct] = useState<Product>({
		id: 0,
		title: '',
		price: 0,
		thumbnail: '',
		description: '',
		rating: 0,
		returnPolicy: '',
		stock: '',
		images: [],
		reviews: [],
	});

	// api calls
	useEffect(() => {
		const product_id = pathname.split('/')[2];
		const gProductById = async () => {
			// api call to get product details using ID
			try {
				const data = await fetchProductById(product_id + '');
				setProduct(data);
			} catch (err) {
				setError('Failed to fetch categories');
			}
		};

		Promise.all([gProductById()]).finally(() => {
			setLoading(false);
		});
	}, []);

	useEffect(() => {
		setSlides(product.images ?? []);
		setReviews(product.reviews ?? []);
	}, [product]);

	const ratings = (rating: number) => {
		return (
			<div className="flex space-x-1">
				{[...Array(5)].map((_, index) => (
					<span key={index}>
						{index < Math.round(+rating) ? (
							<StarFilledIcon className="bg-star" />
						) : (
							<StarIcon className="bg-star" />
						)}
					</span>
				))}
			</div>
		);
	};

	const slideStructure = (slide: string, index: number) => {
		return (
			<img
				src={slide}
				alt={`Slide ${index}`}
				className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[30rem] object-cover rounded-lg shadow-lg"
			/>
		);
	};

	return (
		<ProtectedRoute>
			{loading ? (
				<div className="flex justify-center items-center w-full min-h-[80vh]">
					<div className="loader"></div>
				</div>
			) : (
				<div className="min-h-screen text-white p-6 flex flex-col items-center">
					{/* Back Button */}
					<div className="w-full max-w-4xl mb-6">
						<button
							className="flex items-center text-sm text-neutral-400 hover:text-neutral-100 transition"
							onClick={() => router.push('/products')}
						>
							<ChevronLeft className="mr-2" />
						</button>
					</div>

					{/* Product Card */}
					<div className=" rounded-lg shadow-lg w-full max-w-4xl relative border-product">
						<div className="p-8">
							<div className="absolute bg-gray-900  md:px-20 px-8 rounded-25 custom-product-badge">
								<h3 className="text-neutral-400 text-sm">
									{product.returnPolicy ?? 'RELEASE DATE: 30TH DECEMBER'}
								</h3>
							</div>

							<div className="flex items-center mt-12 justify-between">
								<div className="flex mt-6 md:mt-2">
									{ratings(product.rating)}
								</div>
							</div>

							<div className="w-full">
								{slides.length > 0 ? (
									<Carousel
										slides={slides}
										slideStructure={slideStructure}
										interval={3000}
										dots={false}
										containerClassName="relative w-full overflow-hidden"
									/>
								) : (
									<img
										src={product.thumbnail}
										alt={product.title}
										className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[30rem] object-cover rounded-lg shadow-lg"
									/>
								)}
							</div>
							{/* Product Name */}
							<h1 className="text-5xl font-bold mt-4">
								{product.title ?? 'LEAGUE OF LEGENDS'}
							</h1>

							<p className="text-neutral-400 leading-relaxed mt-4">
								{product.description ??
									`Wild Rift! Built from the ground up for mobile-first PvP, Wild
              Rift is a 5v5 multiplayer online battle arena (MOBA) game with
              exciting action where your skills, strategy, and combat senses are
              put to the test.`}
							</p>

							{/* CTA Button */}
							<div className="my-6">
								<button className="bg-orange-500 text-white text-md font-semibold py-2 px-6 rounded-full hover:bg-orange-400 transition">
									Buy Now
								</button>
							</div>

							<div className="flex items-center text-sm text-neutral-400 mt-4">
								<span className="rounded-full h-2 w-2 flex bg-green-400 m-2"></span>
								<span>{`${product?.stock || 0} ${product?.stock || 0 > 1 ? ' items' : ' item'} in stocks`}</span>
							</div>
						</div>
					</div>

					{/* Description */}
					<div className="bg-overshadow p-8 b-0 rounded-10 shadow-lg w-full max-w-4xl mt-4 ">
						<h3 className="text-2xl font-bold mt-6">
							Your one-stop shop for everything.
						</h3>
						<p className="text-neutral-400 leading-relaxed mt-4">
							Discover, shop, and enjoy thousands of products at your
							fingertips. Find the best deals, fast delivery, and endless
							options for all your needs in one convenient shopping experience.
						</p>

						<div className="mt-10">
							<h4 className="text-2xl font-bold mt-6">
								Reviews from our other customers
							</h4>
							<div className="flex flex-wrap justify-center gap-6 mt-6">
								{reviews.length > 0 ? (
									reviews.map((review, index) => {
										return (
											<div
												className="bg-light-yellow rounded-10 shadow-md rounded-lg p-6 w-full sm:w-[48%] lg:w-[30%] max-w-sm"
												key={index}
											>
												{/* Header with Avatar and Info */}
												<div className="flex items-center space-x-4 mb-4">
													<Avatar>
														<AvatarImage src="https://github.com/shadcn.png" />
														<AvatarFallback className='text-gray-600'>US</AvatarFallback>
													</Avatar>
													<div>
														<h4 className="text-gray-900 text-lg font-semibold">
															{review.reviewerName ?? 'User'}
														</h4>
													</div>
												</div>

												{/* Rating */}
												<div className="flex items-center mb-4">
													{ratings(review.rating ?? 0)}
												</div>

												{/* Review Text */}
												<p className="text-gray-700 text-sm">
													{review.comment}
												</p>
											</div>
										);
									})
								) : (
									<></>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</ProtectedRoute>
	);
};

export default ProductPage;
