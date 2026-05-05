import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-300 p-3'>
            <p className='text-base-300 px-3 py-2 bg-[#D72050]'>Latest </p>
            <Marquee.default className="flex gap-5" pauseOnHover={true} speed={60}>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          accusantium?
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          accusantium?
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          accusantium?
        </p>
      </Marquee.default>
        </div>
    );
};

export default LatestNews;