import React from 'react';

const RestaurantIntro = ({ onBackClick }) => {
    const categories = [
        {
            name: 'Dairy Items',
            items: [
                {
                    name: 'Raw Milk',
                    price: 270,
                    quantity: '1 Litre',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZF47L9Bm8QEpEKvgLNTRmA7wYLiF9iwA9cQ&s'
                },
                {
                    name: 'Yogurt',
                    price: 100,
                    quantity: '500 ml',
                    img: 'https://www.happysimpleliving.com/wp-content/uploads/2024/02/homemade-greek-yogurt-featured.jpg'
                },
                {
                    name: 'Cheese',
                    price: 400,
                    quantity: '250g',
                    img: 'https://www.allrecipes.com/thmb/iRcip7RaCHF_RmbzDV4bC8gqNYs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-504780334-2000-1caaee9e697c40a8935db7b8d9818a85.jpg'
                },
                {
                    name: 'Butter',
                    price: 200,
                    quantity: '200g',
                    img: 'https://dairyfarmersofcanada.ca/sites/default/files/styles/full_width_large/public/CONSU19-009_DFC_ways_to_make_your_life_butter_IMAGE_Leading_1068x711_0.jpg?itok=4BG3oLmD'
                }
            ]
        },
        {
            name: 'Ice Cream',
            items: [
                {
                    name: 'Vanilla Ice Cream',
                    price: 150,
                    quantity: '500 ml',
                    img: 'https://www.foodandwine.com/thmb/QnTrAIt3aY1g4ToQEk-jULmKMsQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vanilla-ice-cream-FT-RECIPE0324-cebca493f53c4431a0049ea65bfb4796.jpg'
                },
                {
                    name: 'Chocolate Ice Cream',
                    price: 200,
                    quantity: '500 ml',
                    img: 'https://www.allrecipes.com/thmb/qU9RzlqCysXOoaH-urHNCCQLXLs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-56803-very-chocolate-ice-cream-Beauties-4x3-0343db03e550403aaab1a0d52cbef744.jpg'
                },
                {
                    name: 'Strawberry Ice Cream',
                    price: 180,
                    quantity: '500 ml',
                    img: 'https://www.cuisinart.com/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-us-cuisinart-sfra-Library/default/dw8b794b5f/images/recipe-Images/fresh-strawberry-ice-cream2-recipe.jpg?sw=1200&sh=1200&sm=fit'
                },
                {
                    name: 'Mango Ice Cream',
                    price: 160,
                    quantity: '500 ml',
                    img: 'https://sandhyahariharan.co.uk/wp-content/uploads/2018/05/mango-ice-cream-1-of-3-min.jpg'
                }
            ]
        },
        {
            name: 'Desserts',
            items: [
                {
                    name: 'Chocolate Cake',
                    price: 350,
                    quantity: '1 Piece',
                    img: 'https://bluebowlrecipes.com/wp-content/uploads/2023/08/chocolate-truffle-cake-8846-683x1024.jpg'
                },
                {
                    name: 'Apple Pie',
                    price: 250,
                    quantity: '1 Piece',
                    img: 'https://www.southernliving.com/thmb/bbDY1d_ySIrCFcq8WNBkR-3x6pU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2589601_Mailb_Mailbox_Apple_Pie_003-da802ff7a8984b2fa9aa0535997ab246.jpg'
                },
                {
                    name: 'Brownie',
                    price: 100,
                    quantity: '1 Piece',
                    img: 'https://joyfoodsunshine.com/wp-content/uploads/2018/01/best-black-bean-brownies-recipe-4.jpg'
                },
                {
                    name: 'Mousse',
                    price: 120,
                    quantity: '1 Serving',
                    img: 'https://www.allrecipes.com/thmb/2wgE9MHJZzfRAHhlqzUXmsf2zUw=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/IMG_8145_Chocolate-Mousse-for-Beginners-4x3-cropped-757ae43035ff48cc8bc9ccffbd6cf3b7.jpg'
                }
            ]
        },
        {
            name: 'Flavoured Milk',
            items: [
                {
                    name: 'Chocolate Milk',
                    price: 90,
                    quantity: '250 ml',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkyidL0g_wue5wnTiunVjBO6uhIai7oZQejg&s'
                },
                {
                    name: 'Strawberry Milk',
                    price: 90,
                    quantity: '250 ml',
                    img: 'https://celebratingsweets.com/wp-content/uploads/2021/05/Strawberry-Milk-1-5.jpg'
                },
                {
                    name: 'Banana Milk',
                    price: 90,
                    quantity: '250 ml',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKJS50zx0VR170FDkdTNl-UHOE7uUdiYAhg&s'
                },
                {
                    name: 'Vanilla Milk',
                    price: 90,
                    quantity: '250 ml',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKgfxCJbhN5NPJMXFa2u3_iO9v9aERxs7_7g&s'
                }
            ]
        }
    ];

    return (
        <div className='text-black'>
            <div className="container w-full mx-auto text-gray-700 px-4 md:px-12 py-8 border-b-2">
                <button onClick={onBackClick} className="mb-4 text-black font-semibold underline decoration-1">Back to Restaurants</button>
                <div className="flex flex-col md:flex-row">
                    <img src="https://images.deliveryhero.io/image/fd-pk/LH/s1ia-listing.jpg" alt="Restaurant" className="w-36 h-40 object-cover mb-4 rounded-lg mx-auto md:mx-0" />

                    <div className="md:ml-3 mt-3 font-medium text-base text-center md:text-left">
                        <p className="text-sm md:text-md">Category: Dairy</p>
                        <p className="text-lg md:text-3xl text-black font-bold py-2">Sweet Cream</p>

                        {/* Delivery info section with improved styling */}
                        <div className="md:flex py-1 justify-center md:justify-start md:space-x-2 space-y-2 md:space-y-0">
                            <div className="flex items-center text-sm md:text-base">
                                <i className="fa-solid fa-person-biking pr-1 pt-1 text-gray-600"></i>
                                <p className="text-gray-600">Free delivery</p>
                            </div>
                            <div className="flex items-center text-sm md:text-base">
                                <i className="fa-solid fa-basket-shopping pt-1 pl-2 text-gray-600"></i>
                                <p className="pl-2 text-gray-600">Rs. 249 Minimum</p>
                            </div>
                        </div>

                        {/* Buttons with responsive sizing */}
                        <div className="buttons flex flex-col md:flex-row justify-center md:justify-start mt-2 space-y-2 md:space-y-0 md:space-x-4">
                            <button className="bg-slate-300 text-black py-1.5 px-3 md:py-2 md:px-4 rounded-lg border-2 border-black hover:bg-black hover:text-white transition duration-200 text-sm md:text-base">
                                See Reviews
                            </button>
                            <button className="bg-slate-300 text-black py-1.5 px-3 md:py-2 md:px-4 rounded-lg border-2 border-black hover:bg-black hover:text-white transition duration-200 text-sm md:text-base flex items-center justify-center">
                                <i className="fa-solid fa-circle-info p-1"></i>
                                <span className="ml-2">More Info</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='bar text-slate-700 font-medium text-sm py-2 flex overflow-x-auto'>
                <input
                    className='text-black ml-2 mr-2 bg-slate-200 placeholder:text-slate-700 border-0 rounded-lg p-2 text-xs md:text-sm'
                    type="text"
                    placeholder="Search items..."
                />
                <div className='flex whitespace-nowrap'>
                    {categories.map((category, index) => (
                        <a
                            href="#"
                            key={index}
                            className='px-2 pt-1 pl-4 text-xs md:text-lg hover:underline hover:bg-slate-300 rounded-lg transition-colors duration-200 ease-in-out'
                        >
                            {category.name} ({category.items.length})
                        </a>
                    ))}
                </div>
            </div>

            {/* <div className='items bg-slate-100 px-5 border-0 rounded-lg'>
                {categories.map((category, index) => (
                    <div key={index} className="category py-6">
                        <h2 className="text-xl font-bold mb-4">{category.name}</h2>
                        <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {category.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="item-card border-2 rounded-xl flex p-3 md:p-4 lg:p-6">
                                    <div className='text'>
                                        <h4 className="font-semibold text-sm md:text-base lg:text-lg">{item.name}</h4>
                                        <span className="block text-gray-600 text-xs md:text-sm lg:text-base">Rs. {item.price}</span>
                                        <span className="block text-gray-600 text-xs md:text-sm lg:text-base">{item.quantity}</span>
                                    </div>
                                    <div className='pic ml-auto'>
                                        <img src={item.img} alt={item.name} className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover rounded-lg" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div> */}



<div className="items bg-slate-100 px-5 border-0 rounded-lg"> 
    {categories.map((category, index) => (
        <div key={index} className="category py-6">
            <h2 className="text-xl font-bold mb-4">{category.name}</h2>
            <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.items.map((item, itemIndex) => (
                    <div 
                        key={itemIndex} 
                        className="item-card border-2 rounded-xl flex p-3 md:p-4 lg:p-6 transition-transform transform hover:scale-105 hover:bg-slate-200 duration-700 hover:cursor-pointer"
                    >
                        <div className="text">
                            <h4 className="font-semibold text-sm md:text-base lg:text-lg">{item.name}</h4>
                            <span className="block text-gray-600 text-xs md:text-sm lg:text-base">Rs. {item.price}</span>
                            <span className="block text-gray-600 text-xs md:text-sm lg:text-base">{item.quantity}</span>
                        </div>
                        <div className="pic ml-auto">
                            <img 
                                src={item.img} 
                                alt={item.name} 
                                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover rounded-lg" 
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ))}
</div>

        </div>
    );
};

export default RestaurantIntro;
