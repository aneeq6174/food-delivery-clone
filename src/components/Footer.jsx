import React from 'react';
import logo from '../assets/logo-1.png';
import logo2 from '../assets/logo-2.jpeg';

const Footer = () => {
    return (
        <section className=" text-gray-700 font-medium">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <hr className="my-4" />

                {/* Popular Section */}
                <div className="popularSection grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:px-2 lg:px-5">
                    <div className="p-4">
                        <h4 className="font-semibold">American Food Delivery in Lahore</h4>
                        <p className="space-y-1">
                            <a href="#">KFC - Johar Town</a><br />
                            <a href="#">OPTP - T Block</a><br />
                            <a href="#">Subway - Jail Road</a><br />
                            <a href="#">Hardees - Z Block</a><br />
                            <a href="#">Foodeez</a><br />
                            <a href="#">Cafe Aylanto - Dha</a>
                        </p>
                    </div>
                    <div className="p-4">
                        <h4 className="font-semibold">Italian Food Delivery in Lahore</h4>
                        <p className="space-y-1">
                            <a href="#">Pasta La Vista</a><br />
                            <a href="#">Delizioso</a><br />
                            <a href="#">Cosa Nostra</a><br />
                            <a href="#">Spice Bazzar</a><br />
                            <a href="#">Ristorante Gelato</a>
                        </p>
                    </div>
                    <div className="p-4">
                        <h4 className="font-semibold">Fast Food Delivery in Lahore</h4>
                        <p className="space-y-1">
                            <a href="#">McDonald's - Main Blvd</a><br />
                            <a href="#">Burger King - DHA</a><br />
                            <a href="#">Johnny & Jugnu</a><br />
                            <a href="#">Howdy's</a><br />
                            <a href="#">Rico's</a>
                        </p>
                    </div>
                    <div className="p-4">
                        <h4 className="font-semibold">Pakistani Food Delivery in Lahore</h4>
                        <p className="space-y-1">
                            <a href="#">Butt Karahi - Gawalmandi</a><br />
                            <a href="#">Lal Qila</a><br />
                            <a href="#">Salt'n Pepper</a><br />
                            <a href="#">Monal Lahore</a><br />
                            <a href="#">Qabail</a>
                        </p>
                    </div>
                </div>

                <hr className="my-4" />

                {/* Countries Section */}
                <div className="countriesSection flex flex-wrap justify-center gap-2 mt-8 mb-8 max-w-full">
    <p className="text-center flex flex-wrap gap-2">
        <a href="#">Bulgaria</a>
        <span>|</span>
        <a href="#">Romania</a>
        <span>|</span>
        <a href="#">Hong Kong</a>
        <span>|</span>
        <a href="#">Bangladesh</a>
        <span>|</span>
        <a href="#">Singapore</a>
        <span>|</span>
        <a href="#">Malaysia</a>
        <span>|</span>
        <a href="#">Philippines</a>
        <span>|</span>
        <a href="#">Thailand</a>
        <span>|</span>
        <a href="#">Laos</a>
        <span>|</span>
        <a href="#">Myanmar</a>
        <span>|</span>
        <a href="#">Cambodia</a>
        <span>|</span>
        <a href="#">Japan</a>
        <span>|</span>
        <a href="#">Taiwan</a>
    </p>
</div>

                <hr className="my-4" />

                {/* Top Areas Section */}
                <div className="topAreasSection grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                    <div>
                        <h3 className="font-bold">Near Lahore</h3>
                        <ul className="space-y-1">
                            <li>Restaurants in Sheikhupura</li>
                            <li>Restaurants in Gujranwala</li>
                            <li>Restaurants in Gujrat</li>
                            <li>Restaurants in Chakwal</li>
                            <li>All Cities in Pakistan</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold">Top Areas in Lahore</h3>
                        <ul className="space-y-1">
                            <li>Restaurants in Johar Town North</li>
                            <li>Restaurants in Allama Iqbal Town</li>
                            <li>Restaurants in Bahria Town</li>
                            <li>Restaurants in DHA Lahore</li>
                            <li>Restaurants in Shahdara</li>
                        </ul>
                    </div>
                </div>

                <hr className="my-4" />

                {/* Copyright Section */}
                <div className="copyrightSection flex flex-col sm:flex-row justify-between items-start p-4">
                    <div className="flex items-center space-x-1">
                        <i className="fa-regular fa-copyright"></i>
                        <span>foodpanda</span>
                    </div>
                    <div className="flex flex-wrap space-y-2 sm:space-y-0 sm:space-x-8 mt-4 sm:mt-0">
                        <ul className="space-y-1">
                            <li>Press</li>
                            <li>Help Center</li>
                            <li>Refunds with pandapay</li>
                            <li>pandapay Terms and Conditions</li>
                            <li>Terms and Conditions</li>
                            <li>Privacy policy</li>
                        </ul>
                        <ul className="space-y-1">
                            <li>Suggest a Restaurant</li>
                            <li>Corporate Customer</li>
                            <li>Cashback Terms and Conditions</li>
                            <li>All cuisines</li>
                            <li>foodpanda Magazine</li>
                        </ul>
                        <ul className="space-y-1">
                            <li>pandapro - Monthly Subscription Programme</li>
                            <li>foodpanda Home Chef</li>
                            <li>Become an Affiliate</li>
                            <li>Ramzan deals</li>
                            <li>Areas delivered in Lahore</li>
                        </ul>
                    </div>
                </div>

                <hr className="my-4" />

                {/* Branding Section */}
                <div className="branding flex flex-col sm:flex-row justify-between items-center py-3 px-4">
                    <div className="logos flex items-center space-x-4">
                        <img src={logo} alt="FoodPanda Logo" className="h-8 w-auto rounded-md" />
                        <span className="text-pink-600 text-2xl font-bold">foodpanda</span>
                        <img src={logo2} alt="Delivery Hero Logo" className="h-8 w-auto rounded-md" />
                    </div>
                    <div className="SocialMediaAccounts flex space-x-4 mt-4 sm:mt-0">
                        <a href="#" className="p-2 border rounded-full">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#" className="p-2 border rounded-full">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
