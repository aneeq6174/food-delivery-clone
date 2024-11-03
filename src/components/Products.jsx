import React, { useState } from 'react';
import RestaurantIntro from './RestaurantIntro';

// Sample data array with different image URLs
const restaurantData = [
  {
    name: 'Pizza Heart',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/s1ia-listing.jpg',
    rating: 4.9,
    reviews: 500,
    category: 'Fast Food'
  },
  {
    name: 'Bon Ton',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/b1ur-listing.jpg',
    rating: 4.7,
    reviews: 300,
    category: 'Fast Food'
  },
  {
    name: 'Moosa Bar B Q',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/x1z3-listing.jpg',
    rating: 4.8,
    reviews: 200,
    category: 'Pakistani'
  },
  
 {
    name: 'Coffee Nerds',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/qi3m-listing.jpg',
    rating: 4.6,
    reviews: 150,
    category: 'Deserts'
  },
  {
    name: 'SOLO INDULGENCES',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/aakh-listing.jpg',
    rating: 4.5,
    reviews: 100,
    category: 'Arabic'
  },
  {
    name: 'Quetta Paratha 110-A',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/mpj2-listing.jpg',
    rating: 4.9,
    reviews: 250,
    category: 'Pakistani'
  },
  {
    name: 'Snacpac',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/uxat-listing.jpg',
    rating: 4.9,
    reviews: 500,
    category: 'Deserts and tradition'
  },
  {
    name: 'China Cook Restaurant',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/n0wk-listing.jpg',
    rating: 4.7,
    reviews: 300,
    category: 'Chinese'
  },
  {
    name: 'Food For Foodies',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/wucj-listing.jpg',
    rating: 4.8,
    reviews: 200,
    category: 'Fast Food'
  },
  {
    name: 'Crosta vendor',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/kg4f-listing.jpg',
    rating: 4.6,
    reviews: 150,
    category: 'Fast Food'
  },
  {
    name: 'Chef Shahid',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/xp09-listing.jpg',
    rating: 4.5,
    reviews: 100,
    category: 'Pakistani'
  },
  {
    name: 'Rice Fusion ',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/r5jm-listing.jpg',
    rating: 4.9,
    reviews: 250,
    category: 'Pakistani'
  },
  {
    name: 'Pizza Hot - Cavalry',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/ix0t-listing.jpg',
    rating: 4.9,
    reviews: 500,
    category: 'Fast Food'
  },
  {
    name: 'Tasty Traditions ',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/eg7z-listing.jpg',
    rating: 4.7,
    reviews: 300,
    category: 'Pakistani'
  },
  {
    name: 'Xo Pan Asian Cuisine',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/kyrl-listing.jpg',
    rating: 4.8,
    reviews: 200,
    category: 'Chinese'
  },

  {
    name: 'TIM Hunger ',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/h8qm-listing.jpg',
    rating: 4.6,
    reviews: 150,
    category: 'Fast Food'
  },
  {
    name: 'Vicky Restaurant &amp; Nan Shop',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/rh6n-listing.jpg',
    rating: 4.5,
    reviews: 100,
    category: 'Pakistani'
  },
  {
    name: 'Yumto - The House Of Arabic Mandi',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/pk-logos/cr6ek-logo.jpg',
    rating: 4.9,
    reviews: 250,
    category: 'Arabic'
  },
  {
    name: 'Coco Cubano',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/yyx6-listing.jpg',
    rating: 4.9,
    reviews: 500,
    category: 'Italian'
  },
  {
    name: 'Malik Fast Food',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/wrez-listing.jpg',
    rating: 4.7,
    reviews: 300,
    category: 'Fast Food'
  },
  {
    name: 'Giramondo',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/cqqi-listing.jpg?width=400&amp;height=225',
    rating: 4.8,
    reviews: 200,
    category: 'italian'
  },
  {
    name: 'OX &amp; Grill Steak House',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/n1p0-listing.jpg?width=400&amp;height=225',
    rating: 4.6,
    reviews: 150,
    category: 'Chinese'
  },
  {
    name: 'DASH Burgers',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/dnqt-listing.jpg?width=400&amp;height=225',
    rating: 4.5,
    reviews: 100,
    category: 'Fast Food'
  },
  {
    name: 'CIAO Italian',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/y294-listing.jpg?width=400&amp;height=225',
    rating: 4.9,
    reviews: 250,
    category: 'Italian'
  },
  {
    name: 'Pizza Heart',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/s1ia-listing.jpg',
    rating: 4.9,
    reviews: 500,
    category: 'Fast Food'
  },
  {
    name: 'Bon Ton',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/b1ur-listing.jpg',
    rating: 4.7,
    reviews: 300,
    category: 'deserts'
  },
  {
    name: 'Moosa Bar B Q',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/x1z3-listing.jpg',
    rating: 4.8,
    reviews: 200,
    category: 'Pakistani'
  },
  {
    name: 'Coffee Nerds',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/qi3m-listing.jpg',
    rating: 4.6,
    reviews: 150,
    category: 'deserts'
  },
  {
    name: 'SOLO INDULGENCES',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/aakh-listing.jpg',
    rating: 4.5,
    reviews: 100,
    category: 'Deserts'
  },
  {
    name: 'Quetta Paratha 110-A',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/mpj2-listing.jpg',
    rating: 4.9,
    reviews: 250,
    category: 'Sea Food'
  },
  {
    name: 'Snacpac',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/uxat-listing.jpg',
    rating: 4.9,
    reviews: 500,
    category: 'Italian'
  },
  {
    name: 'China Cook Restaurant',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/n0wk-listing.jpg',
    rating: 4.7,
    reviews: 300,
    category: 'Chinese'
  },
  {
    name: 'Food For Foodies',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/wucj-listing.jpg',
    rating: 4.8,
    reviews: 200,
    category: 'Fast Food'
  },
  {
    name: 'Crosta vendor',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/kg4f-listing.jpg',
    rating: 4.6,
    reviews: 150,
    category: 'Italian'
  },
  {
    name: 'Chef Shahid',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/xp09-listing.jpg',
    rating: 4.5,
    reviews: 100,
    category: 'Pakistani'
  },
  {
    name: 'Rice Fusion ',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/r5jm-listing.jpg',
    rating: 4.9,
    reviews: 250,
    category: 'Italian'
  },
  {
    name: 'Pizza Hot - Cavalry',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/ix0t-listing.jpg',
    rating: 4.9,
    reviews: 500,
    category: 'Fast Food'
  },
  {
    name: 'Tasty Traditions ',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/eg7z-listing.jpg',
    rating: 4.7,
    reviews: 300,
    category: 'Pakistani'
  },
  {
    name: 'Xo Pan Asian Cuisine',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/kyrl-listing.jpg',
    rating: 4.8,
    reviews: 200,
    category: 'Chinese'
  },
  {
    name: 'TIM Hunger ',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/h8qm-listing.jpg',
    rating: 4.6,
    reviews: 150,
    category: 'Fast Food'
  },
  {
    name: 'Vicky Restaurant &amp; Nan Shop',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/rh6n-listing.jpg',
    rating: 4.5,
    reviews: 100,
    category: 'Pakistani'
  },
  {
    name: 'Yumto - The House Of Arabic Mandi',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/pk-logos/cr6ek-logo.jpg',
    rating: 4.9,
    reviews: 250,
    category: 'Arabic'
  },
  {
    name: 'Coco Cubano',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/yyx6-listing.jpg',
    rating: 4.9,
    reviews: 500,
    category: 'Chinese'
  },
  {
    name: 'Malik Fast Food',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/wrez-listing.jpg',
    rating: 4.7,
    reviews: 300,
    category: 'Fast Food'
  },
  {
    name: 'Giramondo',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/cqqi-listing.jpg?width=400&amp;height=225',
    rating: 4.8,
    reviews: 200,
    category: 'Sea Food'
  },
  {
    name: 'OX &amp; Grill Steak House',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/n1p0-listing.jpg?width=400&amp;height=225',
    rating: 4.6,
    reviews: 150,
    category: 'Pakistani'
  },
  {
    name: 'DASH Burgers',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/dnqt-listing.jpg?width=400&amp;height=225',
    rating: 4.5,
    reviews: 100,
    category: 'fast food'
  },
  {
    name: 'CIAO Italian',
    imageUrl: 'https://images.deliveryhero.io/image/fd-pk/LH/y294-listing.jpg?width=400&amp;height=225',
    rating: 4.9,
    reviews: 250,
    category: 'Italian'
  },



];

const Products = () => {
  const [showIntro, setShowIntro] = useState(false);

  const handleCardClick = () => {
    setShowIntro(true);
  };

  const handleBackClick = () => {
    setShowIntro(false);
  };

  return (
    <section className="container mx-auto text-gray-700 px-4 sm:px-6 md:px-12 py-8">
      {showIntro ? (
        <RestaurantIntro onBackClick={handleBackClick} />
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6">All Restaurants</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {restaurantData.map((restaurant, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={handleCardClick}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={restaurant.imageUrl}
                    alt={restaurant.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-3 transition-colors duration-300 hover:bg-gray-100">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{restaurant.name}</h3>
                    <div className="flex items-center mt-1">
                      <span className="text-yellow-500 pr-1 text-lg">&#9733;</span>
                      <span className="text-black">{restaurant.rating}</span>
                      <span className="text-sm font-semibold text-gray-500 ml-2">({restaurant.reviews} reviews)</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">{restaurant.category}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Products;
