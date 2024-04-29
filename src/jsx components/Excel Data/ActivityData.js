const activityData = [
  {
    Id: 1,
    NAME: "I-FITNESS",
    ADDRESS:
      " 1, Road, 11 1st Avenue, Gwarinpa 900108, Federal Capital Territory",
    LOCATION: "Gwarinpa",
    "GOOGLE MAP LINK": "https://g.co/kgs/axRRX25",
    "ACTIVITY TYPE": "GYM",
    "PRICE RANGE":
      "Monthly N24,890, yearly 265,890\nFirst time membership fee N15,890.",
    "PICTURE 1": "https://independent.ng/wp-content/uploads/i-Fitness-Gym.jpg",
    "PICTURE 2":
      "https://ifitness.ng/wp-content/uploads/2023/09/DAV_0944-1024x1024.jpg",
    "TOUR GUIDE": "",
    RATE: "4.0",
  },
  {
    Id: 2,
    NAME: "BODYROX FITNESS",
    ADDRESS:
      "Plot 1161, Memorial Drive, By Musa Yar'adua Center, Central Business District,",
    LOCATION: "Central Business District",
    "GOOGLE MAP LINK": "https://g.co/kgs/JDgfsGJ",
    "ACTIVITY TYPE": "GYM",
    "PRICE RANGE":
      "Monthly N32,250, yearly N193,500. Registration N5,000 (one off)",
    "PICTURE 1":
      "https://lh3.googleusercontent.com/p/AF1QipM-UOtn6kT8nEfScYeiFyhEIYtREOboGwYjlA-P=s680-w680-h510",
    "PICTURE 2":
      "https://lh3.googleusercontent.com/p/AF1QipNZkrP7DB2tRipV4T9pk3aIJ6X-qr_rj2gcyFg8=s680-w680-h510",
    "TOUR GUIDE": "",
    RATE: "5.1",
  },
  {
    Id: 3,
    NAME: "PINKINECTICS",
    ADDRESS: "The Capital Hub, Ahmadu Bello Wy, Mabushi, Abuja 900108,",
    LOCATION: "Mabushi",
    DESCRIPTION: "WOMEN'S ONLY GYM",
    "GOOGLE MAP LINK": "https://g.co/kgs/kY4EzSN",
    "ACTIVITY TYPE": "GYM",
    "PRICE RANGE":
      "Monthly Fee N35k, yearly N180k, new registration fee N2,000",
    "PICTURE 1":
      "https://lh3.googleusercontent.com/p/AF1QipNhSLSXI6sbaat-BVfeb_p2JAOS9HhymXO601Tu=s680-w680-h510",
    "PICTURE 2":
      "https://lh3.googleusercontent.com/p/AF1QipOhGrAO1HR1-HKgfC3ngnEHBvFRdtWw7nLESA3M=s680-w680-h510",
    "TOUR GUIDE": "",
    RATE: "4.2",
  },
  {
    Id: 4,
    NAME: "DOME",
    ADDRESS: "Plot 423 Adekunle Fajyi Close, Central Business District",
    LOCATION: "Central Business District",
    DESCRIPTION: "a pool, restaurant, bowling",
    "GOOGLE MAP LINK": "https://g.co/kgs/VcZwKX3",
    "ACTIVITY TYPE": "FAMILY ACTIVITY",
    "PICTURE 1":
      "https://lh3.googleusercontent.com/p/AF1QipOLKK5bfD3pA1kXY5M6rPD222-UtAGqYfOksekE=s680-w680-h510",
    "PICTURE 2":
      "https://lh3.googleusercontent.com/p/AF1QipMUdb07sO5geyMAnv_aJIqDoa4p0uIaYy6-2jTs=s680-w680-h510",
    "TOUR GUIDE": 1,
    RATE: "3.8",
  },
  {
    Id: 5,
    NAME: "ART TECH DISTRICT",
    ADDRESS:
      "No. 7 Hombori St, Adetokunbo Ademola Cres, opposite premier hotel, Wuse",
    LOCATION: "Wuse",
    DESCRIPTION:
      "restaurants, museum, VR, Arts & Crafts, no longer has a kids playground",
    "GOOGLE MAP LINK": "https://g.co/kgs/w6XJHTt",
    "ACTIVITY TYPE": "FAMILY ACTIVITY",
    "PICTURE 1":
      "https://media-cdn.tripadvisor.com/media/photo-s/1d/9c/73/1e/the-art-tech-district.jpg",
    "PICTURE 2":
      "https://lh3.googleusercontent.com/p/AF1QipP-Gq1tveyMxrEJwsETm2prAlCOqEsdMfaRTp3H=s680-w680-h510",
    "TOUR GUIDE": 5,
    RATE: "4.7",
  },
  {
    Id: 6,
    NAME: "PLAY WORLD",
    ADDRESS: "458 Idris Ibrahim Cres, Utako,",
    LOCATION: "Utako",
    DESCRIPTION:
      "an indoor trampoline Park with VR, soft play area. Minimum of N3,500 to play",
    "GOOGLE MAP LINK": "https://g.co/kgs/WJ9kAbq",
    "ACTIVITY TYPE": "FAMILY ACTIVITY",
    "PICTURE 1":
      "https://lh3.googleusercontent.com/p/AF1QipOmGNA5G-MZs9w6dezze0NHRICj2FXj7zg4cSEO=s680-w680-h510",
    "PICTURE 2":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSItX_sWcgyUz3dsGXSIrvaxd4tdXgq-rf948mG4zUFg&s",
    "TOUR GUIDE": 1,
    RATE: "5.0",
  },
  {
    Id: 7,
    NAME: "MAGICLAND",
    ADDRESS: "No. 1, Kukwaba Hills, Constitution Ave, Wuye, Kunkwaba",
    LOCATION: "Wuye, Kunkwaba",
    DESCRIPTION: "an amusement park, Arcade, soft play area N500 entry",
    "GOOGLE MAP LINK": "https://g.co/kgs/xTbf6Tf",
    "ACTIVITY TYPE": "FAMILY ACTIVITY",
    "PICTURE 1":
      "https://lh3.googleusercontent.com/p/AF1QipPI6rUvzxrXKNZxdE1yhEDOVqP0Rj0qJQC1Zig0=s680-w680-h510",
    "PICTURE 2":
      "https://lh3.googleusercontent.com/p/AF1QipP8380onSBEOmJNxU4fLPTkub0QVMk48facKe3G=s1360-w1360-h1020",
    "TOUR GUIDE": 2,
    RATE: "4.4",
  },
  {
    Id: 8,
    NAME: "CENTRAL PARK",
    ADDRESS: "70 Kur Mohammed Ave, Garki 1",
    LOCATION: "Garki",
    DESCRIPTION:
      "has playgrounds, miniature golf, restaurants, go carts, bicycle trail.",
    "GOOGLE MAP LINK": "https://g.co/kgs/ni79RQF",
    "ACTIVITY TYPE": "FAMILY ACTIVITY",
    "PICTURE 1":
      "https://lh3.googleusercontent.com/p/AF1QipOYupGxhwZ_s8zSRYUvriU2HuZJAQrIPTchHnoY=s680-w680-h510",
    "PICTURE 2":
      "https://i0.wp.com/connectciti.com/wp-content/uploads/listing-uploads/gallery/2021/11/2021-10-17.jpg?fit=592%2C440&ssl=1",
    "TOUR GUIDE": 3,
    RATE: "4.5",
  },
  {
    Id: 9,
    NAME: "ALMAT FARM",
    ADDRESS: "ALMAT Drive, Kuje 900105",
    LOCATION: "Kuje",
    DESCRIPTION: "has lodging, Zoo, Horse Riding, Pool, Restaurant. Entry 6k",
    "GOOGLE MAP LINK": "https://g.co/kgs/cUnnARF",
    "ACTIVITY TYPE": "FARM TOUR",
    "PICTURE 1":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Kc-lFtpAd_hVC7AafeqW4vub3x6QhgHAv51d2WPnSlV-4GwZtT1ADirDB-Z_OhYakjY&usqp=CAU",
    "PICTURE 2":
      "https://www.nairaland.com/attachments/12776847_almatfarms4_jpegce3a68e256291073eeb218ac43cb892e",
    "TOUR GUIDE": 4,
    RATE: "4.7",
  },
  {
    Id: 10,
    NAME: "NATIONAL PARL AND ZOO",
    ADDRESS: "Asokoro abuja, behind the presidential block.",
    LOCATION: "Asokoro abuja",
    DESCRIPTION: "Playground, zoo, picnic grounds. Entry 500 adults, 300 kids.",
    "GOOGLE MAP LINK": "https://g.co/kgs/6GoNZum",
    "ACTIVITY TYPE": "FAMILY ACTIVITY",
    "PICTURE 1":
      "https://lh3.googleusercontent.com/p/AF1QipOZi1644PO5Pl-NB-gVhP2FwblyboKXzaftmjo-=s680-w680-h510",
    "PICTURE 2":
      "https://lh3.googleusercontent.com/p/AF1QipO94Lk7SPwrCjircjLKZbvwtza60iHMxCwNAJCn=s680-w680-h510",
    "TOUR GUIDE": 5,
    RATE: "5.2",
  },
  {
    Id: 11,
    NAME: "PAINT & SIP STUDIO BY FR",
    ADDRESS: "2044 Aguiyi Ironsi St, Maitama,",
    LOCATION: "Maitama",
    DESCRIPTION:
      "t’s N9,500 for painting equipment and a drink. They open 3pm daily. It’s a cozy space for get togethers. They also offer candle making classes and karaoke. There’s food here too. Best experienced at nighttime",
    "GOOGLE MAP LINK": "https://g.co/kgs/avNQx5F",
    "ACTIVITY TYPE": "COUPLE ACTIVITY",
    "PICTURE 1":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJDBJJbWVTlfR2-7tNx3r5oh2ysAp8KR-6uGXgP22vug&s",
    "PICTURE 2":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT76deDmmh9FexxzRSBYetGrP82P6JdpiTc6d3p_zLAg&s",
    "TOUR GUIDE": 1,
    RATE: "5.0",
  },
  {
    Id: 12,
    NAME: "AMAZON KAYAK",
    ADDRESS: "3C78+W5G, Obafemi Awolowo Way, Jabi,",
    LOCATION: "Jabi",
    DESCRIPTION:
      "Kayaking, a popular water sport, offers an exhilarating experience that combines adventure, physical activity, and a deep connection with nature. kayaking presents an opportunity for both beginners and seasoned paddlers to embark on unforgettable journeys. The tranquility of the water engulfs you, creating a space for reflection and escape from the bustling world. The only sounds are the gentle lapping of water against the kayak and the harmonious chorus of birds serenading you from the trees.",
    "GOOGLE MAP LINK": "https://g.co/kgs/hpNDx9k",
    "ACTIVITY TYPE": "COUPLE ACTIVITY",
    "PRICE RANGE": "Price N3.5k -4K.",
    "PICTURE 1":
      "https://lh3.googleusercontent.com/p/AF1QipOaTn6WHxg-KB7b3U8b1vX0n40OFpxmxxStpC_v=s680-w680-h510",
    "PICTURE 2":
      "https://lh3.googleusercontent.com/p/AF1QipOGL_GOPC6KbNwxZYpI3eifN1VvgnIQFXrl_UFl=s680-w680-h510",
    "TOUR GUIDE": 2,
    RATE: "5.2",
  },
  {
    Id: 13,
    NAME: "MILENIUM PARK",
    ADDRESS: "5 Usuma St, Three Arms Zone",
    LOCATION: "Three Arms Zone",
    DESCRIPTION:
      "Millennium Park is a 32-hectare public park in Abuja, Nigeria's capital city, that was established in 2003 by Queen Elizabeth II. It's known for being the largest park in the city, and for hosting many foreign dignitaries. The park is divided into two parts by a small river, with one side featuring natural beauty, brushwood, and greenhouses, while the other side has an Italian-style garden layout that focuses on natural science. The park also has fountains, multi-colored bushes, and a river that many birds use to travel between areas. Some recommend visiting the park on the weekend to experience the freedom and freshness of nature.",
    "GOOGLE MAP LINK": "https://g.co/kgs/wzLs7S3",
    "ACTIVITY TYPE": "PICNICS",
    "PICTURE 1":
      "https://lh3.googleusercontent.com/p/AF1QipO9Ql552utJew9jOXywu_bQ73nyIMb162iRzlzU=s680-w680-h510",
    "PICTURE 2":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV73km5_ePwJPr0Er9BQ32dGYh0_mZLffT7WJrRASvKQ&s",
    "TOUR GUIDE": 3,
    RATE: "4.6",
  },
  {
    Id: 14,
    NAME: "GURUS NEST",
    ADDRESS: "13 fez street off Kumasi crescent, Aminu Kano Cres, Wuse 2,",
    LOCATION: "Wuse 2",
    DESCRIPTION:
      "Trado-Med wellness with a keen focus on sustainable, healthy skincare. our team of licensed estheticians AND well trained therapists are at your service. We use Moroccan, Sudanese, northern Nigerian as well as Western beauty secrets to enhance beauty. we offer Laser treatments, sugar waxing, facials, pedicures, massages, body scrubs, polishes, hammams, stretchmark removal treatment, iv therapy, peels, prp treatments, body sculpting, and lots more pls note that a minimum non refundable deposit of 5000N is required to confirm your booking, this serves as a part payment for your treatments.",
    "GOOGLE MAP LINK": "https://g.co/kgs/XrdjaiG",
    "ACTIVITY TYPE": "SPA",
    "PICTURE 1":
      "https://lh3.googleusercontent.com/p/AF1QipMdIpGbvN2sklQto8Dff_M2gefvPD4K5y06icM=s680-w680-h510",
    "PICTURE 2":
      "https://lh3.googleusercontent.com/p/AF1QipPRrIsyWPhyGqOuuAGrZX-vJ83bHNXzhcHpcB0s=s680-w680-h510",
    "TOUR GUIDE": 4,
    RATE: "4.8",
  },
  {
    Id: 15,
    NAME: "WORK AND CONNECT",
    ADDRESS: "50 Ebitu Ukiwe St, Jabi,",
    LOCATION: "Jabi",
    DESCRIPTION:
      "Work And Connect is a coworking space located in the heart of Abuja. We offer a range of services such as coworking spaces to meet interesting and innovative young Nigerians, private offices, training halls for hosting educational activities. Join our community and meet vibrant, intelligent and friendly Nigerians. ",
    "GOOGLE MAP LINK": "https://g.co/kgs/yRKfW21",
    "ACTIVITY TYPE": "WORK SPACE",
    "PRICE RANGE": "5000 A DAY -50K MONTHLY",
    "PICTURE 1":
      "https://lh3.googleusercontent.com/p/AF1QipO4ODiEnMIi44JApM8257p9KEXaor_S_0tSPYxK=s680-w680-h510",
    "PICTURE 2":
      "https://lh3.googleusercontent.com/p/AF1QipONGEFOd9KyRExD8vdXCIBR3sM0bNROZT8k0uiN=s680-w680-h510",
    "TOUR GUIDE": 5,
    RATE: "4.2",
  },
  {
    Id: 16,
    NAME: "THE VENTURES PARK",
    ADDRESS: "Ventures Park, 5 Kwaji Cl, Maitama,",
    LOCATION: "Maitama",
    DESCRIPTION:
      "Ventures Park is an artsy co-working space with a community for creatives, entrepreneurs, professionals and freelancers to work meet and network!",
    "GOOGLE MAP LINK": "https://g.co/kgs/1vRwiDw",
    "ACTIVITY TYPE": "WORK SPACE",
    "PRICE RANGE": "5000 A DAY -50K MONTHLY",
    "PICTURE 1":
      "https://lh3.googleusercontent.com/p/AF1QipM4cZhFJd4umqYXEgPuADSJhOlFqeUxWDqTFaJz=s680-w680-h510",
    "PICTURE 2":
      "https://lh3.googleusercontent.com/p/AF1QipPULM7mt4SDDHl2F8ydVvU5kQASLaqv3Q9ifZxJ=s680-w680-h510",
    "TOUR GUIDE": "",
    RATE: "3.9",
  },
  {
    Id: 17,
    NAME: "THE COUNCIL",
    ADDRESS: "35 Ibrahim Babangida Wy, Wuse",
    LOCATION: "Wuse",
    "GOOGLE MAP LINK": "https://g.co/kgs/oNzCm3a",
    "ACTIVITY TYPE": "CLUB",
    "PICTURE 1":
      "https://lh3.googleusercontent.com/p/AF1QipOqk6_cWvq3HNd-i6cyUcFn6DeTwcuEb7Vty5uy=s680-w680-h510",
    "PICTURE 2":
      "https://lh3.googleusercontent.com/p/AF1QipPCT42J1VFOM-xoVqAt2LCyeZHsKOln3bb0it5M=s680-w680-h510",
    "TOUR GUIDE": 2,
    RATE: "4.0",
  },
  {
    Id: 18,
    NAME: "MOSCOW UNDERGROUND",
    ADDRESS: "35 Adetokunbo Ademola Cres, Wuse",
    LOCATION: "Wuse",
    DESCRIPTION:
      "Moscow Underground is a perfect blend of music, people & entertainment. With a unique, contemporary atmosphere and private VIP lounges, Moscow Underground sets the standard for Abuja nightlife.\n\nMoscow Underground provides the perfect environment to allow guests unwind, listen to light music on weeknights, while enjoying the full effects of a royal style night club on the weekends.",
    "GOOGLE MAP LINK": "https://g.co/kgs/4qacgnC",
    "ACTIVITY TYPE": "CLUB",
    "PICTURE 1":
      "https://lh3.googleusercontent.com/p/AF1QipOUhbGnA7EC5qLUeREOX9Rx99Mw50WaRXPUeNsX=s680-w680-h510",
    "PICTURE 2":
      "https://lh3.googleusercontent.com/p/AF1QipN250RVmv1xJD29_6uFwzn-68dfqx-13qM5enV6=s680-w680-h510",
    "TOUR GUIDE": 3,
    RATE: "4.5",
  },
  {
    Id: 19,
    NAME: "SUNRISE WATERPARK",
    ADDRESS:
      "Plot 746, Cadastral Zone E17, Sunrise Hills Estate, R1 Sunrise Blvd, Street, Kugbo",
    LOCATION: "Kugb0",
    "GOOGLE MAP LINK": "https://maps.app.goo.gl/gfjZoe8oTUdMEFrXA",
    "ACTIVITY TYPE": "FAMILY ACTIVITY",
    "PICTURE 1":
      "https://lh3.googleusercontent.com/p/AF1QipNlcU_p5EX7YXgWVp16GP6lN47Y5OqzRPVmN9Dp=s680-w680-h510",
    "PICTURE 2":
      "https://lh3.googleusercontent.com/p/AF1QipNrf8MS0tJMFeZaye-0l7WZhMNMSygCL3YmMaIg=s680-w680-h510",
    "TOUR GUIDE": 4,
    RATE: "4.1",
  },
];


export default activityData;
