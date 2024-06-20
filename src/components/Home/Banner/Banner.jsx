import bannerImage from '../../../assets/bookbanner.webp'

const Banner = () => {
    return (
      <div className="hero xl:h-[70vh] lg:h-[100vh] h-[80vh] lg:w-full" style={{backgroundImage: `url(${bannerImage})`}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
              <h1 className="mb-5 lg:text-5xl mt-4 lg:mt-8 text-2xl font-bold text-yellow-100">Welcome</h1>
              <p className="mb-5 text-yellow-200 text-xs lg:text-lg">Embark on literary journeys with us. Discover captivating books, curated for your reading pleasure at BookNestor. Explore today!</p>
              <button className="btn text-xl bg-yellow-500">Get started</button>
          </div>
      </div>
  </div>
    );
};

export default Banner;