const restaurantData = [
    {
        "NAME": "CAFE CHOCOLAT",
        "ADDRESS": " 2 Federal Capital Territory NG, 3 Cairo Cres",
        "DESCRIPTION": "Breakfast•Brunch •Coffee•Meals•Gelato•Cakes ",
        "GOOGLE MAP LINK": "https://www.google.com/maps/dir//2+Federal+Capital+Territory+NG,+3+Cairo+Cres,+Wuse,+Abuja+900288/@9.0758008,7.3958119,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x104e0b815e205011:0xbd6dd0a541745a03!2m2!1d7.4782222!2d9.0758205?entry=ttu",
        "DISH TYPE": "Breakfast ",
        "RESTARANT TYPE": "Cafe",
        "PRICE RANGE": "They run a breakfast buffet every Saturday N10k for adults, 5k kids. They also have a lunch buffet on Sunday at the same Price. Saturday buffet 8am - 12pm, Sunday Buffet 12pm - 6pm",
        "PICTURES": "https://lh3.googleusercontent.com/p/AF1QipMvKfsqqQuIMN9lABC-BhIGq7srmdncfXjKkhsq=s1360-w1360-h1020",
        "PICTURE 2": "https://lh3.googleusercontent.com/p/AF1QipM7hULEbt45-RyT3ISeclUDDBPh82adqFH-YOqp=s1360-w1360-h1020",
        "RATE": "4.1",
        "NUMBER OF RATING": "390+ Ratings"
    },
    {
        "NAME": "PINK BEAR",
        "ADDRESS": "141 Adetokunbo Ademola Cres, Wuse",
        "DESCRIPTION": "an all day breakfast restaurant that is best known for its bubble teas. We recently stopped by to try out their Boba as well as some of their food options. A fun fact is they also offer alcoholic bubble tea.",
        "GOOGLE MAP LINK": "https://www.google.com/maps/dir//141+Adetokunbo+Ademola+Cres,+Wuse,+Abuja+904101,+Federal+Capital+Territory/@9.079369,7.3973379,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x104e0b620dc80dbf:0xac30fd1c215f8081!2m2!1d7.4797398!2d9.0793782?entry=ttu",
        "DISH TYPE": "Brunch ",
        "RESTARANT TYPE": "Cafe",
        "PRICE RANGE": "Full English Breakfast & Nigerian Breakfast N8,000 each. This spot is really cozy. The Akara and eggs are good!",
        "PICTURES": "https://lh3.googleusercontent.com/p/AF1QipNVcpsSQ5PN0bgBs22Ux7DthmEC6hNGjifJK8a6=s680-w680-h510",
        "PICTURE 2": "https://lh3.googleusercontent.com/p/AF1QipMQ3iDbFwm-aswNWW9DnxH2JIfl99IrC9pUzw7Q=s1360-w1360-h1020",
        "RATE": "4.0",
        "NUMBER OF RATING": "490+ Ratings"
    },
    {
        "NAME": "TRUCK CENTRAL",
        "ADDRESS": "behind Fraser Suite, 990 Nal Blvd, Central Business District,",
        "DESCRIPTION": "THE BIGGEST FOOD TRUCK PARK IN ABUJA",
        "GOOGLE MAP LINK": "https://www.google.com/maps/dir//990+Nal+Blvd,+behind+Fraser+Suite,+Central+Business+District,+Abuja+900103,+Federal+Capital+Territory/@9.0554075,7.3930279,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x104e0b26dd10aed1:0xc6882c6bc9e0d958!2m2!1d7.4754541!2d9.0553799?entry=ttu",
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
        "GOOGLE MAP LINK": "https://www.google.com/maps/dir//45+Gana+St,+Maitama,+Abuja+900271,+Federal+Capital+Territory/@9.0774474,7.4177193,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x104e0a593e3f95b3:0x5b35efb49b4d938f!2m2!1d7.5001212!2d9.0774566?entry=ttu",
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
        "GOOGLE MAP LINK": "https://www.google.com/maps/dir//HFIA+Garden,+Off+Tafawa+Balewa+Rd,+Garki,+Abuja+900103,+Federal+Capital+Territory/@9.0329236,7.4015212,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x104e0b0e926179e7:0x7d395735b6078161!2m2!1d7.4839366!2d9.0329445?entry=ttu",
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
        "GOOGLE MAP LINK": "https://www.google.com/maps/dir//3F75%2BW86+Novare+mall,+Wuse,+904101,+Federal+Capital+Territory/@9.0647854,7.3758664,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x104e0b01adbd51eb:0xf9226e4b095ac4fc!2m2!1d7.4582683!2d9.0647946?entry=ttu",
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
        "GOOGLE MAP LINK": "https://www.google.com/maps/dir//Floor,+01,+Transcorp+Hilton+Hotel,+No.1,+Aguiyi+Ironsi+Street,+Maitama,+Abuja,+FCT/@9.0779808,7.4135381,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x104e0a4f11518bbb:0xd49f3b76368437dd!2m2!1d7.49594!2d9.07799?entry=ttu",
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
        "GOOGLE MAP LINK": "https://www.google.com/maps/dir//18+Durban+St,+Wuse,+Abuja+904101,+Federal+Capital+Territory/@9.0701781,7.4039603,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x104e0bd72e9d6fe7:0x228fb4b685c0fdd!2m2!1d7.4863622!2d9.0701873?entry=ttu",
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
        "GOOGLE MAP LINK": "https://www.google.com/maps/dir//38+Osun+Cres,+Maitama,+Abuja+900271,+Federal+Capital+Territory/@9.1006712,7.4108622,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x104e0a7aa40a28f3:0x3bf5564547bd2086!2m2!1d7.4932641!2d9.1006805?entry=ttu",
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
        "GOOGLE MAP LINK": "https://www.google.com/maps/dir//913+Adetokunbo+Ademola+Cres,+Wuse,+Abuja+904101,+Federal+Capital+Territory/@9.0798979,7.3985583,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x104e0bf5388e0fe1:0x434de1dc25957726!2m2!1d7.4809602!2d9.0799071?entry=ttu",
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
        "GOOGLE MAP LINK": "https://www.google.com/maps/dir//Amusement+Park,+IBB+Boulevard,+Maitama,+AMAC+900271,+Federal+Capital+Territory/@9.0867656,7.4160154,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x104e0bc54e0760df:0x6d67059db036c15b!2m2!1d7.4984067!2d9.0867848?entry=ttu",
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
        "GOOGLE MAP LINK": "https://www.google.com/maps/dir//30+Yedseram+St,+Maitama,+Abuja+900271,+Federal+Capital+Territory/@9.0905746,7.4118381,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x104e0ba3198cbc89:0xf4ceab184648cbd8!2m2!1d7.4942238!2d9.0905839?entry=ttu",
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
        "GOOGLE MAP LINK": "https://www.google.com/maps/dir//Zone+4,+4+Cape+Town,+Wuse,+Abuja+900281,+Federal+Capital+Territory/@9.0657182,7.3909331,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x104e0b7ab2d9f269:0xff6db6f62d31d0a6!2m2!1d7.473335!2d9.0657274?entry=ttu",
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
        "GOOGLE MAP LINK": "https://www.google.com/maps/dir//Ibrahim+Babangida+Blvd,+Maitama,+Abuja+904101,+Federal+Capital+Territory/@9.0989202,7.407937,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x104e0a65a44bea11:0x469225a61e5b3b2b!2m2!1d7.4903389!2d9.0989295?entry=ttu",
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
        "GOOGLE MAP LINK": "https://www.google.com/maps?rlz=1CAPRAG_enNG1089&sca_esv=64f7be2b9ddec3ab&cs=0&lsig=AB86z5UFx7FjC-zTkeNV5BzwwbH-&kgs=a3d3dc2eed10f152&shndl=30&shem=lnole,lsde,lsp&um=1&ie=UTF-8&fb=1&gl=ng&sa=X&geocode=KY3p00ssdU4QMeYL9qaFfcqh&daddr=118,+3rd+Avenue,+By+Tipper+Garage,+Gwarinpa",
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
        "GOOGLE MAP LINK": "https://www.google.com/maps/dir//Bangui+St,+off+Atakpame+Street,+Wuse,+Abuja+904101,+Federal+Capital+Territory/@9.0694526,7.3967162,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x104e0b7e66de25eb:0xdd20a57a6fb12f1f!2m2!1d7.4791181!2d9.0694618?entry=ttu",
        "DISH TYPE": "Pizza Place",
        "RESTARANT TYPE": "Fast food",
        "PICTURES": "https://lh3.googleusercontent.com/p/AF1QipMHjKpf5S2Ha0WU_llYIyMzYEkU6qYhqd1XmZD_=s680-w680-h510",
        "PICTURE 2": "https://lh3.googleusercontent.com/p/AF1QipMtZT8trfsWmpbgU91GE_UmcVy8sR4xDyrzhF0I=s680-w680-h510",
        "RATE": "4.6",
        "NUMBER OF RATING": "400+ Ratings"
    }
]

export default restaurantData;