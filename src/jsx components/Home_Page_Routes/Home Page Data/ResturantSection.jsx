import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rate_profile } from "../../../assets";

const ResturantSection = () => {

    const resturantData = [
        {
            "NAME": "CAFE CHOCOLAT",
            "ADDRESS": " 2 Federal Capital Territory NG, 3 Cairo Cres",
            "DESCRIPTION": "Breakfast•Brunch •Coffee•Meals•Gelato•Cakes ",
            "GOOGLE MAP LINK": "https://g.co/kgs/tkNzSQv",
            "DISH TYPE": "Breakfast ",
            "RESTARANT TYPE": "Cafe",
            "PRICE RANGE": "They run a breakfast buffet every Saturday N10k for adults, 5k kids. They also have a lunch buffet on Sunday at the same Price. Saturday buffet 8am - 12pm, Sunday Buffet 12pm - 6pm",
            "PICTURES": "https://lh3.googleusercontent.com/p/AF1QipN_TnmQR1jwtCev5YiYNvShSMMzQqcSlgvnPnTK=s680-w680-h510",
            "PICTURE 2": "https://lh3.googleusercontent.com/p/AF1QipMvKfsqqQuIMN9lABC-BhIGq7srmdncfXjKkhsq=s680-w680-h510",
            "RATE": "4.1",
            "NUMBER OF RATING": "390+ Ratings"
        },
        {
            "NAME": "PINK BEAR",
            "ADDRESS": "141 Adetokunbo Ademola Cres, Wuse",
            "DESCRIPTION": "an all day breakfast restaurant that is best known for its bubble teas. We recently stopped by to try out their Boba as well as some of their food options. A fun fact is they also offer alcoholic bubble tea.",
            "GOOGLE MAP LINK": "https://g.co/kgs/okA6PyZ",
            "DISH TYPE": "Brunch ",
            "RESTARANT TYPE": "Cafe",
            "PRICE RANGE": "Full English Breakfast & Nigerian Breakfast N8,000 each. This spot is really cozy. The Akara and eggs are good!",
            "PICTURES": "https://lh3.googleusercontent.com/p/AF1QipNVcpsSQ5PN0bgBs22Ux7DthmEC6hNGjifJK8a6=s680-w680-h510",
            "PICTURE 2": "https://lh3.googleusercontent.com/p/AF1QipMQ3iDbFwm-aswNWW9DnxH2JIfl99IrC9pUzw7Q=s680-w680-h510",
            "RATE": "4.0",
            "NUMBER OF RATING": "490+ Ratings"
        },
        {
            "NAME": "TRUCK CENTRAL",
            "ADDRESS": "behind Fraser Suite, 990 Nal Blvd, Central Business District,",
            "DESCRIPTION": "THE BIGGEST FOOD TRUCK PARK IN ABUJA",
            "GOOGLE MAP LINK": "https://g.co/kgs/GyptwxC",
            "DISH TYPE": "Intercontinental dishes",
            "RESTARANT TYPE": "Food trucks",
            "PICTURES": "https://lh3.googleusercontent.com/p/AF1QipO6OMjmZndNorqYRM9dlvfEv_6fMbBXa1_L97TI=s680-w680-h510",
            "PICTURE 2": "https://lh3.googleusercontent.com/p/AF1QipMktA9KIYNaMNsBQuwTFd1Ql6V0A_ATshMnl3_C=s680-w680-h510",
            "RATE": "5.1",
            "NUMBER OF RATING": "290+ Ratings"
        },
        {
            "NAME": "WAFFLE WAY",
            "ADDRESS": "45 Gana St, Maitama,",
            "GOOGLE MAP LINK": "https://g.co/kgs/fxhwmUn",
            "DISH TYPE": "Brunch ",
            "RESTARANT TYPE": "Cafe",
            "PRICE RANGE": "Pancake Breakfast Meal N5,500, Pancake Combo Meal (with Chicken) N5,000. Breakfast does not come with drinks.",
            "PICTURES": "https://lh3.googleusercontent.com/p/AF1QipOqdNyvCjESBR7UPPloOhOGxP_rjshWyYh9tu-i=s680-w680-h510",
            "PICTURE 2": "https://lh3.googleusercontent.com/p/AF1QipPpO5RdEvob-vh5dtqEuAa7wmOLecPzmu1S_JwR=s680-w680-h510",
            "RATE": "4.5",
            "NUMBER OF RATING": "350+ Ratings"
        },
        {
            "NAME": "STROBIE",
            "ADDRESS": "HFIA Garden, Off Tafawa Balewa Rd, Garki,",
            "GOOGLE MAP LINK": "https://g.co/kgs/65o3Gti",
            "DISH TYPE": "Brunch ",
            "RESTARANT TYPE": "Cafe",
            "PRICE RANGE": " English Breakfast N5,500, Butter Pancakes Full Stack N3,500. Breakfast does not come with drinks",
            "PICTURES": "https://lh3.googleusercontent.com/p/AF1QipM5fWoL2FYyZJ70jWJ4ZaXx8yrzcaf4cauggxDo=s680-w680-h510",
            "PICTURE 2": "https://lh3.googleusercontent.com/p/AF1QipNzOr1Vpa6-LvTTpHC8EbKePxWWCqDZza7Dgvyn=s680-w680-h510",
            "RATE": "4.6",
            "NUMBER OF RATING": "450+ Ratings"
        },
        {
            "NAME": "VUE ABUJA",
            "ADDRESS": "Novare mall, Wuse, 904101",
            "DESCRIPTION": "a Pan Asian restaurant. They serve Thai, Japanese, and Indian food. It is part of Cilantro Group. They have indoor dinning and an outdoor rooftop lounge.",
            "GOOGLE MAP LINK": "https://g.co/kgs/u5wHF7E",
            "DISH TYPE": "Pan Asian dishes",
            "RESTARANT TYPE": "Fine dining",
            "PRICE RANGE": "Budget N30k - N45k for two persons.",
            "PICTURES": "https://lh3.googleusercontent.com/p/AF1QipPlyaDSfrQpehI8Khx2Trpq8YX3uxlF5n6FmGrP=s680-w680-h510",
            "PICTURE 2": "https://lh3.googleusercontent.com/p/AF1QipPfFE8JYU4sqKjyVPLrRw4816Sn9Le6lIc3_eud=s680-w680-h510",
            "RATE": "4.3",
            "NUMBER OF RATING": "380+ Ratings"
        },
        {
            "NAME": "ZUMA GRILL",
            "ADDRESS": "Floor, 01, Transcorp Hilton Hotel, No.1, Aguiyi Ironsi Street, Maitama",
            "DESCRIPTION": "a very fancy fine dinning restaurant located in the Hilton. For our Nigerians, the overall flavour of the food has an Oyinbo style as you’d expect",
            "GOOGLE MAP LINK": "https://g.co/kgs/fwNVgd6",
            "DISH TYPE": "Intercontinental dishes",
            "RESTARANT TYPE": "Fine dining",
            "PRICE RANGE": "Budget about 60k - 100k for two",
            "PICTURES": "https://lh3.googleusercontent.com/p/AF1QipNoaHepUrtWa0Yt9MMoF3lhd2MwMfJJK6RYcKyR=s680-w680-h510",
            "PICTURE 2": "https://media-cdn.tripadvisor.com/media/photo-s/19/5b/ca/a3/zuma-grill.jpg",
            "RATE": "5.6",
            "NUMBER OF RATING": "500+ Ratings"
        },
        {
            "NAME": "WOKS & KOI",
            "ADDRESS": "18 Durban St, Wuse,",
            "GOOGLE MAP LINK": "https://g.co/kgs/NJ6kF7n",
            "DISH TYPE": "Pan Asian dishes",
            "RESTARANT TYPE": "Fine dining",
            "PRICE RANGE": "Budget N20k - N25k for two persons",
            "PICTURES": "https://pbs.twimg.com/media/EpX8kpdXUAAoR0y.jpg",
            "PICTURE 2": "https://pbs.twimg.com/media/EpX8ksGWEAAyWIF.jpg",
            "RATE": "4.6",
            "NUMBER OF RATING": "400+ Ratings"
        },
        {
            "NAME": "355 LIFESTYLE",
            "ADDRESS": "38 Osun Cres, Maitama",
            "DESCRIPTION": " restaurant and lounge especially known for their steaks. They also have a wide Mexican menu.",
            "GOOGLE MAP LINK": "https://g.co/kgs/dthG4De",
            "DISH TYPE": "Intercontinental dishes",
            "RESTARANT TYPE": "Fine dining",
            "PRICE RANGE": "Budget about 50k for two persons.",
            "PICTURES": "https://lh3.googleusercontent.com/p/AF1QipPkehcg6I9dmQYiX8hq89CtBn4kzJlssRtoh7Rg=s680-w680-h510",
            "PICTURE 2": "https://lh3.googleusercontent.com/p/AF1QipODbeCjsyIKj65HRgzzxOD_blDtvnNUWbEC-gFT=s680-w680-h510",
            "RATE": "5.0",
            "NUMBER OF RATING": "500+ Ratings"
        },
        {
            "NAME": "4 GUYS ",
            "ADDRESS": "913 Adetokunbo Ademola Cres, Wuse,",
            "GOOGLE MAP LINK": "https://g.co/kgs/QCv2RsS",
            "DISH TYPE": "Intercontinental dishes",
            "RESTARANT TYPE": "Fine dining",
            "PRICE RANGE": "It’s a great option for casual dinning, date night or lunch. Minimum prices for dishes is about 5k. We’d say 30k-40k is the Minimum spend for two persons. This if you’d like starters, mains and cocktails.",
            "PICTURES": "https://media-cdn.tripadvisor.com/media/photo-s/1a/f7/11/a9/4guys-restaurant.jpg",
            "PICTURE 2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaiMnPbSp4SwndXSj-4uTf-HTDrRFLtd-AEzZBzUDCGQ&s",
            "RATE": "4.1",
            "NUMBER OF RATING": "400+ Ratings"
        },
        {
            "NAME": "GARDENIA",
            "ADDRESS": "Amusement Park, IBB Boulevard, Maitama,",
            "GOOGLE MAP LINK": "https://g.co/kgs/V2cNYXu",
            "DISH TYPE": "Intercontinental dishes",
            "RESTARANT TYPE": "Outdoor restaurant",
            "PICTURES": "https://lh3.googleusercontent.com/p/AF1QipMpDOWMlzyx59tQyv1uLZwQFUhuogxgdXLmLmkz=s680-w680-h510",
            "PICTURE 2": "https://lh3.googleusercontent.com/p/AF1QipOMTsZF8--FpTt2jjFNBXi8P-mLQ8UB02s24fWH=s680-w680-h510",
            "RATE": "4.4",
            "NUMBER OF RATING": "439+ Ratings"
        },
        {
            "NAME": "CANTINA",
            "ADDRESS": "30 Yedseram St, Maitama",
            "GOOGLE MAP LINK": "https://g.co/kgs/VyQT5YH",
            "DISH TYPE": "Intercontinental dishes",
            "RESTARANT TYPE": "Outdoor restaurant",
            "PRICE RANGE": "Budget about N20k - N25k for two",
            "PICTURES": "https://lh3.googleusercontent.com/p/AF1QipOR1AM2TAwXusjTq205W_Phj4DxvywUha8oSvrg=s680-w680-h510",
            "PICTURE 2": "https://lh3.googleusercontent.com/p/AF1QipM5PmcZeAAYxQ6JALW-9YV6hFN3CJS_pTZ0-DGU=s680-w680-h510",
            "RATE": "5.0",
            "NUMBER OF RATING": "440+ Ratings"
        },
        {
            "NAME": "BOMBAY 2 BEIRUT",
            "ADDRESS": "Zone 4, 4 Cape Town, Wuse",
            "DESCRIPTION": "It’s a cool rooftop restaurant that also has an outdoor lounge. @bombay2beirut serves Indian, Lebanese and continental food.",
            "GOOGLE MAP LINK": "https://g.co/kgs/fTh95Sf",
            "DISH TYPE": "Intercontinental dishes",
            "RESTARANT TYPE": "Rooftop ",
            "PRICE RANGE": "Budget about 30k for two persons",
            "PICTURES": "https://lh3.googleusercontent.com/p/AF1QipOCi7eEb6oVcaVX2oljjCwoHFx9sKG1qH5bhLvL=s680-w680-h510",
            "PICTURE 2": "https://lh3.googleusercontent.com/p/AF1QipOt0NAc2KgQSsjM3TDzctlfcx6t82eGNyN63Wnc=s680-w680-h510",
            "RATE": "5.1",
            "NUMBER OF RATING": "350+ Ratings"
        },
        {
            "NAME": "CILANTRO",
            "ADDRESS": "Ibrahim Babangida Blvd, Maitama",
            "GOOGLE MAP LINK": "https://g.co/kgs/xK2hm8t",
            "DISH TYPE": "Intercontinental dishes",
            "RESTARANT TYPE": "Outdoor restaurant",
            "PICTURES": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRc9TKKd_8DW6Oy67Z0sSRsRvUA--TyedgumUZD57SA&s",
            "PICTURE 2": "https://media-cdn.tripadvisor.com/media/photo-s/12/6d/94/be/cilantro-abuja.jpg",
            "RATE": "5.6",
            "NUMBER OF RATING": "500+ Ratings"
        },
        {
            "NAME": "TASTIA",
            "ADDRESS": "118, 3rd Avenue, By Tipper Garage",
            "GOOGLE MAP LINK": "https://g.co/kgs/cXCHDup",
            "DISH TYPE": "Intercontinental dishes",
            "RESTARANT TYPE": "Fast food",
            "PICTURES": "https://lh3.googleusercontent.com/p/AF1QipNldnYy5sPkwjyFCPG4lM7Pzkn_8om72skhXmUa=s680-w680-h510",
            "PICTURE 2": "https://lh3.googleusercontent.com/p/AF1QipME68NCravawXixZNwnGoau1fDgsct4msKOwSBw=s680-w680-h510",
            "RATE": "4.6",
            "NUMBER OF RATING": "400+ Ratings"
        },
        {
            "NAME": "DODO PIZZA",
            "ADDRESS": "Along Murtala Mohammed Express Way,",
            "GOOGLE MAP LINK": "https://maps.app.goo.gl/RUR6EfNt6C4qi8tV6",
            "DISH TYPE": "Pizza Place",
            "RESTARANT TYPE": "Fast food",
            "PICTURES": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHVyltKQa0DcMwr2P7bIDgWqvpJY2etmQ5lmyZ-2WzzQ&s",
            "PICTURE 2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUKzmBi-ReMRFBcNCMx-PrIjBuuyyAFg7o0vGmT0ls0w&s",
            "RATE": "4.2",
            "NUMBER OF RATING": "370+ Ratings"
        },
        {
            "NAME": "GENESIS RESTAURANT",
            "ADDRESS": "26 Buchanan Cres, Aminu Kano Cres, Wuse 2,",
            "GOOGLE MAP LINK": "https://maps.app.goo.gl/5L9xc1M1ruD31AGEA",
            "DISH TYPE": "Nigerian dishes",
            "RESTARANT TYPE": "Fast food",
            "PICTURES": "https://lh3.googleusercontent.com/p/AF1QipPRwAcXmzDnng5f7UCfnF7GOWrgWg_9L3SVVeYv=s680-w680-h510",
            "PICTURE 2": "https://lh3.googleusercontent.com/p/AF1QipMRZPYTHcYVkgzh7_NV1BJAOGfZiev-Q7NqNU4E=s680-w680-h510",
            "RATE": "4.2",
            "NUMBER OF RATING": "390+ Ratings"
        },
        {
            "NAME": "PAPARIMZ",
            "ADDRESS": "Bangui St, off Atakpame Street, Wuse",
            "GOOGLE MAP LINK": "https://g.co/kgs/kv5Zeia",
            "DISH TYPE": "Pizza Place",
            "RESTARANT TYPE": "Fast food",
            "PICTURES": "https://lh3.googleusercontent.com/p/AF1QipMHjKpf5S2Ha0WU_llYIyMzYEkU6qYhqd1XmZD_=s680-w680-h510",
            "PICTURE 2": "https://lh3.googleusercontent.com/p/AF1QipMtZT8trfsWmpbgU91GE_UmcVy8sR4xDyrzhF0I=s680-w680-h510",
            "RATE": "4.6",
            "NUMBER OF RATING": "400+ Ratings"
        }
    ]

    return (
        <div className='grid grid-cols-1 justify-center items-center gap-[15px] w-full h-full pt-[70px] pb-[120px] px-[20px] sm:grid-cols-2'>
            {resturantData.map((resturant, index) => (
                <div key={index} className='relative flex flex-col gap-3 justify-center items-center rounded-[10px] py-[18px] px-[24px] bg-secondary box_size_1'>
                    <img src={resturant.PICTURES} alt={resturant.alt} className='box_size_2 rounded-[10px] ' />
                    <FontAwesomeIcon icon="fa-regular fa-heart" className="absolute top-10 right-16 text-primary text-[20px] cursor-pointer" />
                    <div className='flex flex-col gap-3 w-full'>
                        <div className='flex justify-between items-center'>
                            <div className="flex flex-col">
                                <span className='font-bold'>{resturant.NAME}</span>
                                <span className=''>{resturant.ADDRESS}</span>
                                <span className='text-primary'>{resturant["RESTARANT TYPE"]} <i className="text-[14px] text-red-500">({resturant["DISH TYPE"]})</i></span>
                            </div>
                            <span className='self-start'>{resturant.RATE}<FontAwesomeIcon icon="fa-regular fa-star" className='text-[12px] cursor-pointer' /></span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className="flex gap-2">
                                <img src={rate_profile} className='w-[60px] h-[25px]' />
                                <span className=''>{resturant["NUMBER OF RATING"]}</span>
                            </div>
                            <button className=' bg-primary w-[63px] h-[25px] rounded-[10px] text-[10px] px-[10px] py-[6px] text-secondary'>View</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ResturantSection;