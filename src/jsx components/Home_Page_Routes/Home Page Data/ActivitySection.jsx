import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ActivitySection = () => {

    const ActivitiesData = [
        {
            "NAMES": "I-FITNESS",
            "ADDRESS": " 1, Road, 11 1st Avenue, Gwarinpa 900108, Federal Capital Territory",
            "GOOGLE MAP LINK": "https://g.co/kgs/axRRX25",
            "ACTIVITY TYPE": "GYM",
            "PRICE RANGE": "Monthly N24,890, yearly 265,890\nFirst time membership fee N15,890.",
            "PICTURES 1": "https://independent.ng/wp-content/uploads/i-Fitness-Gym.jpg",
            "PICTURES 2": "https://ifitness.ng/wp-content/uploads/2023/09/DAV_0944-1024x1024.jpg",
            "TOUR GUIDE": 8
        },
        {
            "NAMES": "BODYROX FITNESS",
            "ADDRESS": "Plot 1161, Memorial Drive, By Musa Yar'adua Center, Central Business District,",
            "GOOGLE MAP LINK": "https://g.co/kgs/JDgfsGJ",
            "ACTIVITY TYPE": "GYM",
            "PRICE RANGE": "Monthly N32,250, yearly N193,500. Registration N5,000 (one off)",
            "PICTURES 1": "https://lh3.googleusercontent.com/p/AF1QipM-UOtn6kT8nEfScYeiFyhEIYtREOboGwYjlA-P=s680-w680-h510",
            "PICTURES 2": "https://lh3.googleusercontent.com/p/AF1QipNZkrP7DB2tRipV4T9pk3aIJ6X-qr_rj2gcyFg8=s680-w680-h510",
            "TOUR GUIDE": 8
        },
        {
            "NAMES": "PINKINECTICS",
            "ADDRESS": "The Capital Hub, Ahmadu Bello Wy, Mabushi, Abuja 900108,",
            "DESCRIPTION": "WOMEN'S ONLY GYM",
            "GOOGLE MAP LINK": "https://g.co/kgs/kY4EzSN",
            "ACTIVITY TYPE": "GYM",
            "PRICE RANGE": "Monthly Fee N35k, yearly N180k, new registration fee N2,000",
            "PICTURES 1": "https://lh3.googleusercontent.com/p/AF1QipNhSLSXI6sbaat-BVfeb_p2JAOS9HhymXO601Tu=s680-w680-h510",
            "PICTURES 2": "https://lh3.googleusercontent.com/p/AF1QipOhGrAO1HR1-HKgfC3ngnEHBvFRdtWw7nLESA3M=s680-w680-h510",
            "TOUR GUIDE": 8
        },
        {
            "NAMES": "DOME",
            "ADDRESS": "Plot 423 Adekunle Fajyi Close, Central Business District",
            "DESCRIPTION": "a pool, restaurant, bowling",
            "GOOGLE MAP LINK": "https://g.co/kgs/VcZwKX3",
            "ACTIVITY TYPE": "FAMILY ACTIVITY",
            "PICTURES 1": "https://lh3.googleusercontent.com/p/AF1QipOLKK5bfD3pA1kXY5M6rPD222-UtAGqYfOksekE=s680-w680-h510",
            "PICTURES 2": "https://lh3.googleusercontent.com/p/AF1QipMUdb07sO5geyMAnv_aJIqDoa4p0uIaYy6-2jTs=s680-w680-h510",
            "TOUR GUIDE": 8
        },
        {
            "NAMES": "ART TECH DISTRICT",
            "ADDRESS": "No. 7 Hombori St, Adetokunbo Ademola Cres, opposite premier hotel, Wuse",
            "DESCRIPTION": "restaurants, museum, VR, Arts & Crafts, no longer has a kids playground",
            "GOOGLE MAP LINK": "https://g.co/kgs/w6XJHTt",
            "ACTIVITY TYPE": "FAMILY ACTIVITY",
            "PICTURES 1": "https://media-cdn.tripadvisor.com/media/photo-s/1d/9c/73/1e/the-art-tech-district.jpg",
            "PICTURES 2": "https://lh3.googleusercontent.com/p/AF1QipP-Gq1tveyMxrEJwsETm2prAlCOqEsdMfaRTp3H=s680-w680-h510",
            "TOUR GUIDE": 8
        },
        {
            "NAMES": "PLAY WORLD",
            "ADDRESS": "458 Idris Ibrahim Cres, Utako,",
            "DESCRIPTION": "an indoor trampoline Park with VR, soft play area. Minimum of N3,500 to play",
            "GOOGLE MAP LINK": "https://g.co/kgs/WJ9kAbq",
            "ACTIVITY TYPE": "FAMILY ACTIVITY",
            "PICTURES 1": "https://lh3.googleusercontent.com/p/AF1QipOmGNA5G-MZs9w6dezze0NHRICj2FXj7zg4cSEO=s680-w680-h510",
            "PICTURES 2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSItX_sWcgyUz3dsGXSIrvaxd4tdXgq-rf948mG4zUFg&s",
            "TOUR GUIDE": 8
        },
        {
            "NAMES": "MAGICLAND",
            "ADDRESS": "No. 1, Kukwaba Hills, Constitution Ave, Wuye, Kunkwaba",
            "DESCRIPTION": "an amusement park, Arcade, soft play area N500 entry",
            "GOOGLE MAP LINK": "https://g.co/kgs/xTbf6Tf",
            "ACTIVITY TYPE": "FAMILY ACTIVITY",
            "PICTURES 1": "https://lh3.googleusercontent.com/p/AF1QipPI6rUvzxrXKNZxdE1yhEDOVqP0Rj0qJQC1Zig0=s680-w680-h510",
            "PICTURES 2": "data:image/jpeg;base64,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",
            "TOUR GUIDE": 8
        },
        {
            "NAMES": "CENTRAL PARK",
            "ADDRESS": "70 Kur Mohammed Ave, Garki 1",
            "DESCRIPTION": "has playgrounds, miniature golf, restaurants, go carts, bicycle trail.",
            "GOOGLE MAP LINK": "https://g.co/kgs/ni79RQF",
            "ACTIVITY TYPE": "FAMILY ACTIVITY",
            "PICTURES 1": "https://lh3.googleusercontent.com/p/AF1QipOYupGxhwZ_s8zSRYUvriU2HuZJAQrIPTchHnoY=s680-w680-h510",
            "PICTURES 2": "https://i0.wp.com/connectciti.com/wp-content/uploads/listing-uploads/gallery/2021/11/2021-10-17.jpg?fit=592%2C440&ssl=1",
            "TOUR GUIDE": 8
        },
        {
            "NAMES": "ALMAT FARM",
            "ADDRESS": "ALMAT Drive, Kuje 900105",
            "DESCRIPTION": "has lodging, Zoo, Horse Riding, Pool, Restaurant. Entry 6k",
            "GOOGLE MAP LINK": "https://g.co/kgs/cUnnARF",
            "ACTIVITY TYPE": "FARM TOUR",
            "PICTURES 1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Kc-lFtpAd_hVC7AafeqW4vub3x6QhgHAv51d2WPnSlV-4GwZtT1ADirDB-Z_OhYakjY&usqp=CAU",
            "PICTURES 2": "https://www.nairaland.com/attachments/12776847_almatfarms4_jpegce3a68e256291073eeb218ac43cb892e",
            "TOUR GUIDE": 8
        },
        {
            "NAMES": "NATIONAL PARL AND ZOO",
            "ADDRESS": "Asokoro abuja, behind the presidential block.",
            "DESCRIPTION": "Playground, zoo, picnic grounds. Entry 500 adults, 300 kids.",
            "GOOGLE MAP LINK": "https://g.co/kgs/6GoNZum",
            "ACTIVITY TYPE": "FAMILY ACTIVITY",
            "PICTURES 1": "https://lh3.googleusercontent.com/p/AF1QipOZi1644PO5Pl-NB-gVhP2FwblyboKXzaftmjo-=s680-w680-h510",
            "PICTURES 2": "https://lh3.googleusercontent.com/p/AF1QipO94Lk7SPwrCjircjLKZbvwtza60iHMxCwNAJCn=s680-w680-h510",
            "TOUR GUIDE": 8
        },
        {
            "NAMES": "PAINT & SIP STUDIO BY FR",
            "ADDRESS": "2044 Aguiyi Ironsi St, Maitama,",
            "DESCRIPTION": "t’s N9,500 for painting equipment and a drink. They open 3pm daily. It’s a cozy space for get togethers. They also offer candle making classes and karaoke. There’s food here too. Best experienced at nighttime",
            "GOOGLE MAP LINK": "https://g.co/kgs/avNQx5F",
            "ACTIVITY TYPE": "COUPLE ACTIVITY",
            "PICTURES 1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJDBJJbWVTlfR2-7tNx3r5oh2ysAp8KR-6uGXgP22vug&s",
            "PICTURES 2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT76deDmmh9FexxzRSBYetGrP82P6JdpiTc6d3p_zLAg&s",
            "TOUR GUIDE": 8
        },
        {
            "NAMES": "AMAZON KAYAK",
            "ADDRESS": "3C78+W5G, Obafemi Awolowo Way, Jabi,",
            "DESCRIPTION": "Kayaking, a popular water sport, offers an exhilarating experience that combines adventure, physical activity, and a deep connection with nature. kayaking presents an opportunity for both beginners and seasoned paddlers to embark on unforgettable journeys. The tranquility of the water engulfs you, creating a space for reflection and escape from the bustling world. The only sounds are the gentle lapping of water against the kayak and the harmonious chorus of birds serenading you from the trees.",
            "GOOGLE MAP LINK": "https://g.co/kgs/hpNDx9k",
            "ACTIVITY TYPE": "COUPLE ACTIVITY",
            "PRICE RANGE": "Price N3.5k -4K.",
            "PICTURES 1": "https://lh3.googleusercontent.com/p/AF1QipOaTn6WHxg-KB7b3U8b1vX0n40OFpxmxxStpC_v=s680-w680-h510",
            "PICTURES 2": "https://lh3.googleusercontent.com/p/AF1QipOGL_GOPC6KbNwxZYpI3eifN1VvgnIQFXrl_UFl=s680-w680-h510",
            "TOUR GUIDE": 8
        },
        {
            "NAMES": "MILENIUM PARK",
            "ADDRESS": "5 Usuma St, Three Arms Zone",
            "DESCRIPTION": "Millennium Park is a 32-hectare public park in Abuja, Nigeria's capital city, that was established in 2003 by Queen Elizabeth II. It's known for being the largest park in the city, and for hosting many foreign dignitaries. The park is divided into two parts by a small river, with one side featuring natural beauty, brushwood, and greenhouses, while the other side has an Italian-style garden layout that focuses on natural science. The park also has fountains, multi-colored bushes, and a river that many birds use to travel between areas. Some recommend visiting the park on the weekend to experience the freedom and freshness of nature.",
            "GOOGLE MAP LINK": "https://g.co/kgs/wzLs7S3",
            "ACTIVITY TYPE": "PICNICS",
            "PICTURES 1": "https://lh3.googleusercontent.com/p/AF1QipO9Ql552utJew9jOXywu_bQ73nyIMb162iRzlzU=s680-w680-h510",
            "PICTURES 2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV73km5_ePwJPr0Er9BQ32dGYh0_mZLffT7WJrRASvKQ&s",
            "TOUR GUIDE": 8
        },
        {
            "NAMES": "GURUS NEST",
            "ADDRESS": "13 fez street off Kumasi crescent, Aminu Kano Cres, Wuse 2,",
            "DESCRIPTION": "Trado-Med wellness with a keen focus on sustainable, healthy skincare. our team of licensed estheticians AND well trained therapists are at your service. We use Moroccan, Sudanese, northern Nigerian as well as Western beauty secrets to enhance beauty. we offer Laser treatments, sugar waxing, facials, pedicures, massages, body scrubs, polishes, hammams, stretchmark removal treatment, iv therapy, peels, prp treatments, body sculpting, and lots more pls note that a minimum non refundable deposit of 5000N is required to confirm your booking, this serves as a part payment for your treatments.",
            "GOOGLE MAP LINK": "https://g.co/kgs/XrdjaiG",
            "ACTIVITY TYPE": "SPA",
            "PICTURES 1": "https://lh3.googleusercontent.com/p/AF1QipMdIpGbvN2sklQto8Dff_M2gefvPD4K5y06icM=s680-w680-h510",
            "PICTURES 2": "https://lh3.googleusercontent.com/p/AF1QipPRrIsyWPhyGqOuuAGrZX-vJ83bHNXzhcHpcB0s=s680-w680-h510",
            "TOUR GUIDE": 8
        },
        {
            "NAMES": "WORK AND CONNECT",
            "ADDRESS": "50 Ebitu Ukiwe St, Jabi,",
            "DESCRIPTION": "Work And Connect is a coworking space located in the heart of Abuja. We offer a range of services such as coworking spaces to meet interesting and innovative young Nigerians, private offices, training halls for hosting educational activities. Join our community and meet vibrant, intelligent and friendly Nigerians. ",
            "GOOGLE MAP LINK": "https://g.co/kgs/yRKfW21",
            "ACTIVITY TYPE": "WORK SPACE",
            "PRICE RANGE": "5000 A DAY -50K MONTHLY",
            "PICTURES 1": "https://lh3.googleusercontent.com/p/AF1QipO4ODiEnMIi44JApM8257p9KEXaor_S_0tSPYxK=s680-w680-h510",
            "PICTURES 2": "https://lh3.googleusercontent.com/p/AF1QipONGEFOd9KyRExD8vdXCIBR3sM0bNROZT8k0uiN=s680-w680-h510",
            "TOUR GUIDE": 8
        },
        {
            "NAMES": "THE VENTURES PARK",
            "ADDRESS": "Ventures Park, 5 Kwaji Cl, Maitama,",
            "DESCRIPTION": "Ventures Park is an artsy co-working space with a community for creatives, entrepreneurs, professionals and freelancers to work meet and network!",
            "GOOGLE MAP LINK": "https://g.co/kgs/1vRwiDw",
            "ACTIVITY TYPE": "WORK SPACE",
            "PRICE RANGE": "5000 A DAY -50K MONTHLY",
            "PICTURES 1": "https://lh3.googleusercontent.com/p/AF1QipM4cZhFJd4umqYXEgPuADSJhOlFqeUxWDqTFaJz=s680-w680-h510",
            "PICTURES 2": "https://lh3.googleusercontent.com/p/AF1QipPULM7mt4SDDHl2F8ydVvU5kQASLaqv3Q9ifZxJ=s680-w680-h510",
            "TOUR GUIDE": 8
        },
        {
            "NAMES": "THE COUNCIL",
            "ADDRESS": "35 Ibrahim Babangida Wy, Wuse",
            "GOOGLE MAP LINK": "https://g.co/kgs/oNzCm3a",
            "ACTIVITY TYPE": "CLUB",
            "PICTURES 1": "https://lh3.googleusercontent.com/p/AF1QipOqk6_cWvq3HNd-i6cyUcFn6DeTwcuEb7Vty5uy=s680-w680-h510",
            "PICTURES 2": "https://lh3.googleusercontent.com/p/AF1QipPCT42J1VFOM-xoVqAt2LCyeZHsKOln3bb0it5M=s680-w680-h510",
            "TOUR GUIDE": 8
        },
        {
            "NAMES": "MOSCOW UNDERGROUND",
            "ADDRESS": "35 Adetokunbo Ademola Cres, Wuse",
            "DESCRIPTION": "Moscow Underground is a perfect blend of music, people & entertainment. With a unique, contemporary atmosphere and private VIP lounges, Moscow Underground sets the standard for Abuja nightlife.\n\nMoscow Underground provides the perfect environment to allow guests unwind, listen to light music on weeknights, while enjoying the full effects of a royal style night club on the weekends.",
            "GOOGLE MAP LINK": "https://g.co/kgs/4qacgnC",
            "ACTIVITY TYPE": "CLUB",
            "PICTURES 1": "https://lh3.googleusercontent.com/p/AF1QipOUhbGnA7EC5qLUeREOX9Rx99Mw50WaRXPUeNsX=s680-w680-h510",
            "PICTURES 2": "https://lh3.googleusercontent.com/p/AF1QipN250RVmv1xJD29_6uFwzn-68dfqx-13qM5enV6=s680-w680-h510",
            "TOUR GUIDE": 8
        },
        {
            "NAMES": "SUNRISE WATERPARK",
            "ADDRESS": "Plot 746, Cadastral Zone E17, Sunrise Hills Estate, R1 Sunrise Blvd, Street, Kugb",
            "GOOGLE MAP LINK": "https://maps.app.goo.gl/gfjZoe8oTUdMEFrXA",
            "ACTIVITY TYPE": "FAMILY ACTIVITY",
            "PICTURES 1": "https://lh3.googleusercontent.com/p/AF1QipNlcU_p5EX7YXgWVp16GP6lN47Y5OqzRPVmN9Dp=s680-w680-h510",
            "PICTURES 2": "https://lh3.googleusercontent.com/p/AF1QipNrf8MS0tJMFeZaye-0l7WZhMNMSygCL3YmMaIg=s680-w680-h510",
            "TOUR GUIDE": 8
        }
    ]

    return (
        <div className='grid grid-cols-2 justify-center items-center gap-[20px] lg:gap-[50px] w-full h-full pt-[70px] pb-[120px] px-[20px] sm:grid-cols-3'>
            {ActivitiesData.map((activity, index) => (
                <div key={index} className='relative flex rounded-[22px] box_size'>
                    <img src={activity["PICTURES 1"]} alt={activity.alt} className="rounded-[22px] box_size" />
                    <FontAwesomeIcon icon="fa-solid fa-heart" className="absolute top-5 right-5 text-red-500 text-[20px] cursor-pointer" />
                    <div className="flex flex-col justify-between items-center absolute bottom-5 left-3 text-secondary text-[12px]">
                        <span className='w-full justify-end px-2 flex'>5.0<FontAwesomeIcon icon="fa-regular fa-star" className='text-[12px] cursor-pointer' /></span>
                        <div className="flex flex-col ">
                            <span className="text-[14px] font-bold">{activity.NAMES}</span>
                            <span><FontAwesomeIcon icon="fa-solid fa-location-dot" /> {activity.ADDRESS}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ActivitySection