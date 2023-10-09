
const Banner = () => {
    return (
        <div className="hero min-h-[600px] rounded mb-20" style={{backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOAReF3SoZMLRCRwbKVk4kUquqvCBwabmq2w&usqp=CAU)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="max-w-md text-slate-400  text-left">
            <h1 className="mb-5  text-5xl font-bold leading-[4rem]">HEALTHY TEAM, HEALTHY COMPANY</h1>
            <p className="mb-5 text-slate-300 text-xl">Invest in wellness</p>
            
          </div>
        </div>
      </div>
    );
};

export default Banner;