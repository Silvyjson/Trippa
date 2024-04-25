import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rate_profile } from "../../../assets";

const HotelSection = () => {

    const hotelData = [
        {
            "S/N": 1,
            "NAME": "DEVON VILLA & APARTMENTS",
            "ADDRESS": "19 & 20 Shitu Mohammed Street Zone A, Apo Resetlement Abuja, Nigeria",
            "DESCRIPTION": "Devon's villa and Apartments is a place of choice to live, play and find comfort.",
            "GOOGLE MAP LINK": "https://g.co/kgs/a4uvPEK",
            "PRICE FOR BOOKING": "Standard Single - N35,000\nExclusive Simple - N35,000\nStandard Deluxe - N45,000\nDeluxe - N55,000\nExecutive Deluxe - N60,000\nDevons Suite - N65,000\n5 Bed Duplex - N275,000\n4 Bed Duplex - N250,000\n3 Bed Duplex - N200,000",
            "PICTURES 1": "https://lh3.googleusercontent.com/p/AF1QipNuAAkY2iBHUOXeYxYOV5c5YADw8ul_b-MFaknQ=s680-w680-h510",
            "PICTURE 2": "https://lh3.googleusercontent.com/p/AF1QipOQIdUkW_M_euBV_yARPVoctHql32sabIo1giSr=s680-w680-h510",
            "RATE": "5.0",
            "NUMBER OF RATING": "399+ Ratings"
        },
        {
            "S/N": 3,
            "NAME": "HALIT APARTMENT",
            "ADDRESS": "federal housing, 10 303 road, off Gado Nasko Rd, Kubwa 901002",
            "DESCRIPTION": "a 3 bedroom Shortlet apartment located in Kubwa. Whether you’re in Abuja visiting with family, friends or alone, it’s definitely the place to be\n\nThe apartment is equipped with a range of facilities such as Netflix & Internet, PS5, 24hrs power supply, Fully equipped kitchen with cooking utensils and equipments, gated compound, in-house chef (on request) and more!",
            "GOOGLE MAP LINK": "https://www.google.com/travel/hotels/s/r3mnPL7uQrqbrhHh6",
            "PRICE FOR BOOKING": "Single rooms - N20,000\nTwo Room - N45,000\nEntire Apartment - N60,000",
            "PICTURES 1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRasi3hQy5vfWGo6SNuY5dssLWUX-xgyjNYC8W0QuXGoj8k1HhZ",
            "PICTURE 2": "https://lh3.googleusercontent.com/p/AF1QipPmTRbWFlfltHTJKRbNEwc3SNIWE0I3yZiczMh8=s680-w680-h510",
            "RATE": "4.0",
            "NUMBER OF RATING": "400+ Ratings"
        },
        {
            "S/N": 5,
            "NAME": "TOKYO APARTMENT",
            "ADDRESS": "6 Sambrerio Close, off Limpopo Street, Maitama",
            "DESCRIPTION": "It’s a new range of stunning and luxurious 3 bedroom Shortlet apartments in Maitama.\n\nEach apartment is modern and has a unique touch. We especially loved the designs and artwork in each room, it definitely had a lot of character. We could see bits of the tokyo inspiration too. The apartments are also very clean and well lit.",
            "GOOGLE MAP LINK": "https://g.co/kgs/MRLfpSi",
            "PRICE RANGE (NO BOOKING)": "It goes for N120k per night",
            "PICTURES 1": "https://lh3.googleusercontent.com/p/AF1QipMLmJk5i_6dHBdDYsJu4ZGXynwfrEMqdBDMS3H7=s680-w680-h510",
            "PICTURES 2": "https://lh3.googleusercontent.com/p/AF1QipPPMn7vN-awl0KMgRAwZQjD6PTRy07lVcrTePAa=s680-w680-h510",
            "RATE": "4.5",
            "NUMBER OF RATING": "510+ Ratings"
        },
        {
            "S/N": 6,
            "NAME": "ABUJA CONTINENTAL HOTEL",
            "ADDRESS": "1 ladi Kwali St, Wuse Zone 4",
            "DESCRIPTION": "Laid-back rooms & suites in a refined hotel featuring an outdoor pool, 3 restaurants & a gym.",
            "GOOGLE MAP LINK": "https://g.co/kgs/4QPsyd2",
            "PRICE RANGE (NO BOOKING)": "257k - 572k",
            "PICTURES 1": "https://lh5.googleusercontent.com/p/AF1QipMBOP-DNZ7TCOVOnNuwn-e78veCE4I8dbrgCzWZ=w253-h168-k-no",
            "PICTURE 2": "https://lh3.googleusercontent.com/gps-proxy/ALd4DhHkpXiR8TYh8SmnHmnTs52VemeIw1_gx8Wc3RNlU6Zlxd-vzBaiBwQwJnE1r6VtPZHGVryjkx797JYRKrg5wTMM3WUm8s9Yp2zmB5xgI9gyld-qzOzF_JYTNUgwpQyLkVehdvpYWZ3tBfiCW5J6PTUAMrCxZ5I4aMDxaUK7njL9q93SuTWETyzRjw=w480-h360-n-k-rw-no-v1",
            "RATE": "4.0",
            "NUMBER OF RATING": "320+ Ratings"
        },
        {
            "S/N": 7,
            "NAME": "TRANSCORP HILTON",
            "ADDRESS": "1 Aguiyi Ironsi St, Maitama,",
            "DESCRIPTION": "Located in the center of Nigeria's capital city in close proximity to government offices, business and diplomatic districts, Transcorp Hilton offers 667 art-deco style rooms and suites for the comfort of discernible travellers. The spacious, bright and airy rooms are complete with original artwork and have large windows with stunning city views. Catch up with work at the desk, check your emails with high-speed internet, recline on the mini chaise lounge or simply re-energise in the marble bathroom. From local Nigerian and continental cuisines to themed international buffets, Transcorp Hilton offers a delightful culinary experience with 4 restaurants and 4 bars. ",
            "GOOGLE MAP LINK": "https://g.co/kgs/trMTwK5",
            "PRICE RANGE (NO BOOKING)": "350k on average",
            "PICTURES 1": "https://lh3.googleusercontent.com/p/AF1QipMAmuBn1FYw3nFSNiOz2Esf7LSEpGyKU-OFrZqw=s680-w680-h510",
            "PICTURE 2": "https://lh3.googleusercontent.com/p/AF1QipOKofO1_1MZXi-t56KssmNr8h8qqR7c60zHvbEQ=s680-w680-h510",
            "RATE": "4.0",
            "NUMBER OF RATING": "370+ Ratings"
        },
        {
            "S/N": 8,
            "NAME": "FOUR PALMS RESIDENCE",
            "ADDRESS": "38 Libreville Cres, Wuse 2",
            "DESCRIPTION": "Four Palms Apartment, situated off an impressive central foyer. Each room offers spectacular comfort and either a view of the Pool or views of Wuse 2, Abuja.\nAll units have been exquisitely decorated with contemporary interiors and luxurious finishing, while also featuring avantgarde kitchenettes, internet-enabled Smart TVs, State of the Art bathroom facilities.",
            "GOOGLE MAP LINK": "https://g.co/kgs/zJ6TDmN",
            "PRICE RANGE (NO BOOKING)": "88000-350,000",
            "PICTURES 1": "https://lh3.googleusercontent.com/p/AF1QipOBfvDjxxqOZyfrYbVMq3QvMpStP409oMGbCz7I=s680-w680-h510",
            "PICTURE 2": "https://lh3.googleusercontent.com/p/AF1QipPH0z8A5jkTlgq1C_y9hy1pFyY703gDM-Nq3clm=s680-w680-h510",
            "RATE": "4.4",
            "NUMBER OF RATING": "410+ Ratings"
        },
        {
            "S/N": 9,
            "NAME": "HOTEL 2020",
            "ADDRESS": "PLOT 1796 NGOZI, N Okonjo-Iweala Wy, Wuye",
            "DESCRIPTION": "is a one stop spot for a range of services. It’s literally the hotel you can check into and won’t have to leave because they have everything!\n\nThere’s a pool, gym, in-house restaurant & lounge, pool, pool bar, cafe, spa, salon for men and women. They have everything!\n\nWe love the way the hotel lights up at night, especially the view by the poolside. Every Saturday a live band plays by the poolside. The gym also offers a cool view of the poolside",
            "GOOGLE MAP LINK": "https://g.co/kgs/ih8eW5J",
            "PRICE FOR BOOKING": "Deluxe Room - N70,500\nSuperior Room - N88,125\nExecutive Room - N99,875\nPremium - N117, 500\nCrystal Suite - N176,250\nDemes Suite - 188,000",
            "PICTURES 1": "https://lh3.googleusercontent.com/p/AF1QipO0qBi1GWRa-F_nysBbFtSZe9kLGsG3T1x5q79W=s680-w680-h510",
            "PICTURE 2": "https://lh3.googleusercontent.com/p/AF1QipPvYysHnYDU2U3UiMwY1A3yivdJ_wourLRd6tJ5=s680-w680-h510",
            "RATE": "4.2",
            "NUMBER OF RATING": "360+ Ratings"
        },
        {
            "S/N": 10,
            "NAME": "The9 by Naji Apartments",
            "ADDRESS": "Address: Plot 557, Oladunmi Ayandipo Close, Guzape",
            "DESCRIPTION": "offers a range of tastefully furnished two to three bedroom shortlet apartments. Apartments are equipped with\n- Standby security\n- 24/7 electricity\n- Smart TV\n- En-suite bathrooms\n- House keeping\n- On-site Customer Services\n- Mini Gym\n- Bluetooth speaker lights\n- Guitar Shaped Swimming Pool",
            "GOOGLE MAP LINK": "https://g.co/kgs/PeYmH2R",
            "PRICE FOR BOOKING": "They have 9 apartments in the premises.\n2 two bedrooms - N100,000\n7 three bedrooms - N120,000",
            "PICTURES 1": "https://lh3.googleusercontent.com/p/AF1QipMIuT3tqVwPji_nqC3MQYa-w-S9tiz1VCZfWKE2=s680-w680-h510",
            "PICTURE 2": "https://lh3.googleusercontent.com/p/AF1QipN52HGWdVmHZ7OLpRsbZEIgiGMG10ZBpEH6ESMd=s680-w680-h510",
            "RATE": "4.4",
            "NUMBER OF RATING": "430+ Ratings"
        },
        {
            "S/N": 11,
            "NAME": "HYDE 19 APARTMENT",
            "ADDRESS": "Zone 1, 19 Nouakchott St, Wuse",
            "DESCRIPTION": " Hyde 19 Apartments is a vacation rental located at 19 Nouakchott Street, Abuja, Federal Capital Territory. The apartments offer free WiFi and private parking, and the units have tiled floors, a fully equipped kitchen, a dining area, a flat-screen TV with streaming services, and a private bathroom with walk-in shower and slippers. The entire home can sleep up to five guests",
            "GOOGLE MAP LINK": "https://g.co/kgs/tD5RnaX",
            "PRICE RANGE (NO BOOKING)": "60,000-70,000",
            "PICTURES 1": "https://lh3.googleusercontent.com/p/AF1QipP69JQ0HQC9MA8-NI7tEwCfE4beXw6GOPwbbVj3=s680-w680-h510",
            "PICTURE 2": "https://lh3.googleusercontent.com/p/AF1QipP_bwY48vvQDx-6PcJP60oqe-34DkTxD7KHluBr=s680-w680-h510",
            "RATE": "3.9",
            "NUMBER OF RATING": "300+ Ratings"
        },
        {
            "S/N": 12,
            "NAME": "HERA ABUJA",
            "ADDRESS": "4 Kindia close, Wuse 2",
            "DESCRIPTION": "Abuja awaits! Relax in style at Hera Hotel. Poolside views, prime location & comfort. Explore art, culture & family fun nearby. Dine in or venture out - unforgettable experiences begin here.",
            "GOOGLE MAP LINK": "https://g.co/kgs/StCRHeP",
            "PICTURES 1": "https://lh3.googleusercontent.com/p/AF1QipPKEZrP3CbSj5kJZQazr_7FC1jUdYrhh1h9WbaD=s680-w680-h510",
            "RATE": "5.0",
            "NUMBER OF RATING": "450+ Ratings"
        },
        {
            "S/N": 14,
            "NAME": "VICHI GATES",
            "ADDRESS": "1499 Ahmadu Bello Wy, Kado",
            "GOOGLE MAP LINK": "https://g.co/kgs/6WS1eok",
            "PRICE RANGE (NO BOOKING)": "18,000 - 50,000",
            "PICTURES 1": "https://lh3.googleusercontent.com/p/AF1QipNQuXgwES4zf9rL5lQiABHuwcqNecOqtYBGuCBo=s680-w680-h510",
            "PICTURE 2": "https://lh3.googleusercontent.com/p/AF1QipPoiB3-OWqZkDNOSm_e08YKJ1S7ZcAp4fmjDSyL=s680-w680-h510",
            "RATE": "4.0",
            "NUMBER OF RATING": "168+ Ratings"
        },
        {
            "S/N": 15,
            "NAME": "THE PANAMA",
            "ADDRESS": "43 Panama St, Maitama",
            "GOOGLE MAP LINK": "https://g.co/kgs/6xSafnY",
            "PRICE RANGE (NO BOOKING)": "105-305,0000",
            "PICTURES 1": "https://lh3.googleusercontent.com/p/AF1QipMyjZWPhDpsIKN2Y0oBUApWdZ8U7uzo__W_PD0X=s680-w680-h510",
            "PICTURE 2": "https://lh3.googleusercontent.com/p/AF1QipOh_xYvUy9Yx-X8446BovLB9sS7OLUEtKoGFHnX=s680-w680-h510",
            "RATE": "4.3",
            "NUMBER OF RATING": "360+ Ratings"
        },
        {
            "S/N": 16,
            "NAME": "JOHN WOOD HOTEL",
            "ADDRESS": "6 Sokode Cres, Wuse, Abuja",
            "DESCRIPTION": "Casual accommodations in a refined hotel with global dining, a rooftop hot tub & a poolside bar.",
            "GOOGLE MAP LINK": "https://g.co/kgs/hh6SW78",
            "PICTURES 1": "https://lh3.googleusercontent.com/p/AF1QipNnMQB81lO1XrVB-qr1diUVzbX30dHrdkQKWMzp=s680-w680-h510",
            "PICTURE 2": "https://lh3.googleusercontent.com/proxy/qVdOXBcnNYb9RkUdhqeO_-TMep_fB5sViFyidsfuyfdDPHF6-w2WWeYku_j3_OINXZoiYYmxIZPYG3JYXTV4KGBWtajC9R4w8jW9WUAx-VsVSvWSTZvDsNyyGkhMa4A4SgktlKIryMmwXzBRg0Qm-7iL0VbSFA=s680-w680-h510",
            "RATE": "4.1",
            "NUMBER OF RATING": "290+ Ratings"
        },
    ];

    return (
        <div className='grid grid-cols-1 justify-center items-center gap-[15px] w-full h-full pt-[70px] pb-[120px] px-[20px] sm:grid-cols-2'>
            {hotelData.map((hotel, index) => (
                <div key={index} className='relative flex flex-col gap-3 justify-center items-center rounded-[10px] py-[18px] px-[24px] bg-secondary box_size_1'>
                    <img src={hotel["PICTURES 1"]} alt={hotel.alt} className=' box_size_2 rounded-[10px] ' />
                    <FontAwesomeIcon icon="fa-regular fa-heart" className="absolute top-10 right-16 text-primary text-[20px] cursor-pointer"/>
                    <div className='flex flex-col gap-3 w-full'>
                        <div className='flex justify-between items-center'>
                            <span className='font-bold'>{hotel.NAME}</span>
                            <span className=''>{hotel.RATE}<FontAwesomeIcon icon="fa-regular fa-star" className='text-[12px] cursor-pointer' /></span>
                        </div>
                        <span className=''>{hotel.ADDRESS}</span>
                        <div className='flex justify-between items-center'>
                            <div className="flex gap-2">
                                <img src={rate_profile} className='w-[60px] h-[25px]' />
                                <span className=''>{hotel["NUMBER OF RATING"]}</span>
                            </div>
                            <button className=' bg-primary w-[63px] h-[25px] rounded-[10px] text-[10px] px-[10px] py-[6px] text-secondary'>View</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HotelSection;