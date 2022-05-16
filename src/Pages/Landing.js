import React from 'react';
import bucket from '../../src/assets/images/bucketgirl.png'

const Landing = () => {
    return (
        <>
            <div class="hero h-screen lg:h-[60vh] bg-accent mt-16">
                <div class="hero-content flex-col lg:flex-row">
                    <div>
                        <h2 data-aos="fade-right" data-aos-duration='1000'  data-aos-delay="200" className='text-2xl'>Best Quality</h2>
                        <h1 data-aos="fade-right" data-aos-duration='900'  data-aos-delay="400"  class="text-5xl font-bold">Professional Cleaning Service</h1>
                        <p data-aos="fade-right" data-aos-duration='800'  data-aos-delay="600" class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button data-aos='zoom-in' data-aos-delay='1300' class="btn btn-primary">Get Started</button>
                    </div>
                    <div className='h-[60vh] shrink-0'>
                        <img className='h-full' src={bucket} alt="" />
                    </div>
                </div>
            </div>
            <div className='rounded-2xl grid-cols-1 shadow-lg p-10 mt-[-50px] relative z-40 bg-base-200 mx-auto w-5/6'>
                <h1 className='text-xl text-primary mb-4'>Get Free Estimate</h1>
                <div className='grid md:grid-cols-2 grid-cols-4 lg:grid-cols-4 gap-4'>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                </div>
                <button className='uppercase btn btn-primary mt-5'>Request a Qoute</button>
            </div>
        </>
    );
};

export default Landing;