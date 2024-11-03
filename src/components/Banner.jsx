import React from 'react';
import appStore from '../assets/apple-store.png'; 
import googlePlay from '../assets/google-play.png'; 

const Banner = () => {
    return (
        <section>
            <div className='flex px-28 align-middle h-16 justify-center items-center mt-10 bg-slate-100 mb-10'>
                {/* Hide image on smaller screens */}
                <div className="h-24 relative bottom-4 sm:flex hidden items-center">
                    <img 
                        src="https://images.deliveryhero.io/image/foodpanda/phones-app-banner/foodpanda.png?width=139&height=98" 
                        alt="cellphone illustration banner" 
                        className='mr-5 object-contain h-full'
                    />
                </div>
                
                {/* Hide text on smaller screens */}
                <p className='font-light hidden sm:block'>Download our free app</p>

                {/* Buttons always visible */}
                <div className='flex space-x-4'>
                    <button className='h-12 w-32 flex items-center justify-center'>
                        <img src={appStore} alt="app store logo" />
                    </button>
                    <button className='h-12 w-32 flex items-center justify-center'>
                        <img src={googlePlay} alt="google play logo" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
