import bannerImage from '../../../assets/bookbanner.webp'

const Banner = () => {
    return (
        <div className="hero xl:h-[70vh] lg:h-[100vh] h-[80vh] lg:w-full" style={{backgroundImage: `url(${bannerImage})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 lg:text-5xl mt-4 lg:mt-8 text-2xl font-bold text-purple-600">Welcome</h1>
            <p className="mb-5 text-black text-xs lg:text-lg ">Your journey to beauty excellence begins here.Beauty bee offers a carefully curated collection of beauty products and insights to elevate your daily beauty routine.</p>
            <button className="btn text-xl bg-pink-300">Buy Now</button>
          </div>
        </div>
        </div>
    );
};

export default Banner;