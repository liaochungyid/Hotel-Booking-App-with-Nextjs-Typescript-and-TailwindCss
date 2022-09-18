import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import RateIcon from '../public/icons/rate-start.svg'
import Location from '../public/icons/location-light.svg'
import Building from '../public/icons/building-loght.svg'

interface ISearch {
  image: string;
  place: string;
  resultsCount: number;
}

interface IFeatureDestinationsRes {
  id: string;
  author: string;
  height: number;
  width: number;
  url: string;
  download_url: string;
}

interface IFeatureDestinationsResInfo {
  rate: number;
  place: string;
  avatar: string;
  activities: number;
}

interface IFeatureDestinations extends IFeatureDestinationsRes, IFeatureDestinationsResInfo {
  size: 'lg' | 'md' | 'sm';
}

interface ITopTour {
  country: string;
  city: string;
  places: number;
  img_url: string;
}

interface IExplore {
  rate: number;
  rateTotal: number;
  title: string;
  distant: number;
  price: number;
  location: string;
  roomsAvailable: number;
  img_url: string;
}
interface IProps {
  searches: ISearch[];
  featuredDestinations: IFeatureDestinations[];
  topTours: ITopTour[];
  explores: IExplore[];
}

const SearchCard = ({ image, place, resultsCount: count}: ISearch): JSX.Element => (
  <div className="p-[30px] rounded-[10px] border border-[#E7ECF3] border-solid hover:bg-white hover:border-white transition-all hover:drop-shadow-[0_20px_52px_rgba(96,96,96,0.1)]">
    <img className="rounded-[10px]" src={image} alt={place} />
    <div className="mt-4">
      <h3 className="text-xl mb-3">{place}</h3>
      <p className="text-sm text-[#84878B]">{count} Destinations</p>
    </div>
  </div>
);

const FeaturedCard = ({download_url, rate, place, avatar, activities, size}: IFeatureDestinations): JSX.Element => (
  <div className='w-full h-full relative rounded-[20px] group'>
    <div className={`absolute top-0 left-0 w-full h-full rounded-[20px] overflow-hidden
      ${size === 'lg' ? 'bg-gradient-to-tr from-[#030303]/50 via-[#030303]/0' : size === 'md' ? 'bg-gradient-to-t from-[#1f1f1f]/70 via-[#0e0e0e]/0' : 'bg-gradient-to-t from-[#6e807b]/20 via-[#4e1c16]/0'}
    `}>
      <img src={download_url} className='w-full h-full object-cover object-center rounded-[20px] transition-all group-hover:scale-125' alt="" />
    </div>
    <div className={`
      absolute top-0 left-0 w-full h-full flex flex-col items-start
      ${size === 'lg' ? 'p-[30px]': size === 'md' ? 'px-[30px] py-[10px]' : 'px-[20px] py-[15px]'}
    `}>
      <span className={`
        font-bold drop-shadow-[0_4px_10px_rgba(40,40,40,0.12)] rounded-full text-redPrimary bg-white
        ${size === 'lg' ? 'text-lg leading-6 px-[19px] py-[2px]' : size === 'md' ? 'text-lg leading-6 px-[19px] py-[2px]' : 'text-sm leading-[18px] px-[15px] py-[1px]'}
      `}>{rate}</span>
      <h4 className={`
        mt-auto text-left text-white
        ${size === 'lg' ? 'text-[40px] leading-[60px] mb-[10px]' : size === 'md' ? 'text-[24px] leading-[24px] mb-[12px]' : 'text-[18px] leading-[20px] mb-[6px]'}
      `}>{place}</h4>
      <div className='flex flex-row items-center'>
        <img src={avatar} alt="" className={`
          object-cover object-center
          ${size === 'lg' ? 'mr-[11px] w-7 h-7' : size === 'md' ? 'mr-2 w-5 h5' : 'mr-[6px] w-[14px] h-[14px]'}
        `} />
        <p className={`
          text-white
          ${size === 'lg' ? 'text-[20px] leading-[30px]' : size === 'md' ? 'text-[14px] leading-[21px]' : 'text-[10px] leading-[15px]'}
        `}>{activities} Activities</p>
      </div>
    </div>
  </div>
);

const TopTourCard = ({ country, city, places, img_url }: ITopTour): JSX.Element => (
  <div className='w-full h-full relative rounded-2xl group'>
    <div className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden bg-gradient-to-t from-[#0e0b2c]/60 via-[#2a2265]/0 to-[#02000e]/10">
      <img src={img_url} className='w-full h-full object-cover object-center rounded-2xl transition-all group-hover:scale-125' alt="" />
    </div>
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start p-[30px]">
      <span className="py-[11px] px-7 bg-[#141416]/20 rounded-full text-white text-[20px] leading-[26px]">{country}</span>
      <h4 className="mt-auto text-left text-white text-[34px] leading-[44px] mb-[8px]">{city}</h4>
      <div className='flex flex-row items-center'>
        <p className="text-white text-[20px] leading-[30px]">{places} Popular Places</p>
      </div>
    </div>
  </div>
);

const ExploreCard = ({ rate, rateTotal, title, distant, price, location, roomsAvailable, img_url }: IExplore): JSX.Element => (
  <div className="w-full h-full bg-white p-[14px] pb-[26px] rounded-2xl transition-all hover:drop-shadow-[0_15px_45px_rgba(102,102,102,0.1)]">
    <img src={img_url} alt={title} className="w-full h-[152px] rounded-2xl object-cover object-center mb-5" />
    <div className='mb-4 flex flex-row items-center gap-2'>
      <RateIcon />
      <span>{rate}</span>
      <span className='text-[#84878B]'>({rateTotal})</span>
    </div>
    <div className="flex flex-row justify-between items-start">
      <div>
        <h4 className="text-xl leading-[26px] text-[#3B3E44] mb-0.5">{title}</h4>
        <p className='text-sm text-[#84878B] mb-3.5'>{`${distant} km to Town Center`}</p>
      </div>
      <button className='bg-bluePrimary px-3 py-[4.5px] text-white font-bold rounded-md'>
        {`$${price}`}
      </button>
    </div>
    <div className="flex flex-row items-center gap-1 mb-2">
      <Location />
      <span className='text-[#84878B]'>{location}</span>
    </div>
    <div className="flex flex-row items-center gap-1">
      <Building />
      <span className='text-[#84878B]'>{`Rooms available: ${roomsAvailable}`}</span>
    </div>
  </div>
);

const Home: NextPage<IProps> = ({ searches, featuredDestinations, topTours, explores }) => {
  return (
    <div className="flex flex-col items-center gap-10 font-['DM_Sans'] bg-[#FAFAFA]">
      <Head>
        <title>Home | Trip Guide</title>
      </Head>
      {/* navbar */}
      <nav className='flex flex-row justify-between bg-white w-full px-10 py-5 fixed z-50 max-w-[1440px]'>
        {/* left logo */}
        <div className="flex flex-row items-center">
          <img src="/TripGuide.svg" alt="Trip Guid" />
          <h4 className='pl-2.5 font-bold font-["open_sans"] text-xl text-[#222529]'>TripGuide</h4>
        </div>
        {/* right buttons */}
        <div className="flex flex-row items-center gap-[23px]">
          <button className='font-bold w-[106px] h-[49px] text-xl'>Login</button>
          <button className='font-bold text-white bg-bluePrimary w-[106px] h-[49px] text-xl rounded-[10px]'>signup</button>
        </div>
      </nav>

      {/* hero section */}
      <section className='relative bg-[url("/image/bg/hero_bg.png")] bg-center bg-no-repeat pt-[229px] px-[135px] pb-[187px] mb-[76px] w-full max-w-[1440px]'>
        {/* gradien on bg image */}
        <div className='absolute bg-gradient-to-r from-[#CFF1FF]/80 to-white/0 top-0 left-0 w-full h-full'></div>
        <h1 className="text-[#3B3E44] text-[64px] tracking-[-0.5%] leading-[80px] font-bold font-['poppins'] drop-shadow-[0_8px_16px_rgba(51,51,51,0.08)]">
          Book With Us<br/>And Enjoy Your<br/>Journy
        </h1>
      </section>

      {/* search section */}
      <section className="px-[135px] py-[30px] w-full max-w-[1440px]">
        <div className='mb-[70px]'>
          <h2 className="text-5xl leading-[70px] font-bold text-center mb-3">Search a best place in the world</h2>
          <p className="text-base text-center text-[#84878B]">
            Whether you’re looking for places for a vacation. We are here to Guide you<br/>
            about the details you need to check in and ease your trips in advance
          </p>
        </div>
        <div className="grid grid-cols-4 grid-flow-row gap-[30px]">
          {searches.map(s => <SearchCard key={s.place} place={s.place} image={s.image} resultsCount={s.resultsCount} />)}
        </div>
      </section>

      {/* Featured Destinations section */}
      <section className="px-[135px] py-[40px] w-full max-w-[1440px]">
        <div className='mb-[50px]'>
          <h2 className="text-5xl leading-[70px] font-bold text-left mb-3">Featured Destinations</h2>
          <p className="text-base text-left text-[#3B3E44]">
            Popular destinations open to visitors from Indonesia
          </p>
        </div>

        <div className='grid grid-cols-3 grid-rows-3 gap-[30px]'>
          <div className="col-start-1 col-span-2 row-start-1 row-span-3 flex flex-col gap-[30px]">
            <div className='h-[280px]'>
              <FeaturedCard {...featuredDestinations[0]} />
            </div>
            <div className='grow flex flex-row flex-nowrap gap-[30px]'>
              <FeaturedCard {...featuredDestinations[1]} />
              <FeaturedCard {...featuredDestinations[2]} />
            </div>
          </div>
          <div className="col-span-1 col-start-3 row-start-1 h-[220px]">
            <FeaturedCard {...featuredDestinations[3]} />
          </div>
          <div className="col-span-1 col-start-3 row-start-2 h-[220px]">
            <FeaturedCard {...featuredDestinations[4]} />
          </div>
          <div className="col-span-1 col-start-3 row-start-3 h-[220px]">
            <FeaturedCard {...featuredDestinations[5]} />
          </div>
        </div>
      </section>

      {/* Top Tour section */}
      <section className="px-[135px] py-[40px] w-full max-w-[1440px]">
        <div className='mb-[50px]'>
          <h2 className="text-5xl leading-[70px] font-bold text-left mb-3">Top Tour</h2>
          <p className="text-base text-left text-[#84878B]">
            Keep calm & Travel on
          </p>
        </div>

        <div className='grid grid-cols-3 gap-[30px]'>
          {topTours.map(topTour => (
            <div className="col-span-1 h-[495px]">
              <TopTourCard {...topTour} />
            </div>
          ))}
        </div>
      </section>

      {/* Explore section */}
      <section className="px-[135px] py-[40px] w-full max-w-[1440px]">
        <div className='mb-[50px]'>
          <h2 className="text-5xl leading-[70px] font-bold text-left mb-3">Explore The World</h2>
          <p className="text-base text-left text-[#84878B]">
            10,788 beautiful places to go
          </p>
        </div>

        <div className='grid grid-cols-4 gap-[30px]'>
          {explores.map(explore => (
            <div className="col-span-1 h-[362px]">
              <ExploreCard {...explore} />
            </div>
          ))}
        </div>
      </section>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/TripGuide.svg" alt="Vercel Logo" width={80} height={78} />
        </a>
      </footer>
    </div>
  )
}

export default Home


export const getServerSideProps = async () => {
  const featuredDestinationsRes: IFeatureDestinationsRes[] = await fetch('https://picsum.photos/v2/list?page=10&limit=19').then(res => res.json() );
  const featuredDestinationsResInfo: IFeatureDestinationsResInfo[] = [
    {
      rate: 3.5,
      place: 'Barcelona, Spain',
      avatar: '/image/home-feature/avatar-01.png',
      activities: 196
    },
    {
      rate: 3.5,
      place: 'London, UK',
      avatar: '/image/home-feature/avatar-02.png',
      activities: 196
    },
    {
      rate: 3.5,
      place: 'Paris, France',
      avatar: '/image/home-feature/avatar-02.png',
      activities: 196
    },
    {
      rate: 3.5,
      place: 'Sydney, Australia',
      avatar: '/image/home-feature/avatar-02.png',
      activities: 196
    },
    {
      rate: 3.5,
      place: 'Tokyo, Japan',
      avatar: '/image/home-feature/avatar-02.png',
      activities: 196
    },
    {
      rate: 3.5,
      place: 'Hanoi, Vietnam',
      avatar: '/image/home-feature/avatar-02.png',
      activities: 196
    }
  ];
  const featuredDestinations: IFeatureDestinations[] = featuredDestinationsResInfo.map((fdri, ind) => ({
    ...fdri,
    ...featuredDestinationsRes[ind],
    size: ind === 0 ? 'lg' : ind < 3 ? 'md' : 'sm'
  }));
  const topTours: ITopTour[] = [
    {
      country: 'Japan',
      city: 'Japan',
      places: 10,
      img_url: featuredDestinationsRes[6].download_url,
    }, {
      country: 'Spain',
      city: 'Bercelona',
      places: 10,
      img_url: featuredDestinationsRes[7].download_url,
    }, {
      country: 'Indonesia',
      city: 'Bali',
      places: 10,
      img_url: featuredDestinationsRes[8].download_url,
    }
  ];
  const exploresFakeInfo = {
    rate: 4.91,
    rateTotal: 147,
    title: 'Comfort Space',
    distant: 1.2,
    price: 120,
    location: 'Turkey, Mamaris',
    roomsAvailable: 375
  };
  const explores: IExplore[] = [
    {
      img_url: featuredDestinationsRes[9].download_url,
      ...exploresFakeInfo
    }, {
      img_url: featuredDestinationsRes[10].download_url,
      ...exploresFakeInfo
    }, {
      img_url: featuredDestinationsRes[11].download_url,
      ...exploresFakeInfo
    }, {
      img_url: featuredDestinationsRes[12].download_url,
      ...exploresFakeInfo
    }
  ];

  return {
    props: {
      searches: [{
        image: '/image/home-search/01.png',
        place: 'Batu, East Java',
        resultsCount: 86
      }, {
        image: '/image/home-search/02.png',
        place: 'Kuta',
        resultsCount: 86
      }, {
        image: '/image/home-search/03.png',
        place: 'Surabaya, East Java',
        resultsCount: 86
      }, {
        image: '/image/home-search/04.png',
        place: 'Malang, East Java',
        resultsCount: 186
      }, {
        image: '/image/home-search/04.png',
        place: 'Doemg, Central Java',
        resultsCount: 186
      }, {
        image: '/image/home-search/05.png',
        place: 'Nusa Dua, Lombok',
        resultsCount: 86
      }, {
        image: '/image/home-search/02.png',
        place: 'Bandung,West Java',
        resultsCount: 86
      }, {
        image: '/image/home-search/01.png',
        place: 'Watatobi,Sumatera',
        resultsCount: 86
      }],
      featuredDestinations,
      topTours,
      explores,
    }
  }
}