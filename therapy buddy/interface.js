var hobbiesArr = [];

var genIndoor = [
  "3D printing",
  "Acrobatics",
  "Acting",
  "Amateur radio",
  "Animation",
  "Aquascaping",
  "Astrology",
  "Astronomy",
  "Baking",
  "Baton twirling",
  "Blogging",
  "Building",
  "Board/tabletop games",
  "Book discussion clubs",
  "Book restoration",
  "Bowling",
  "Brazilian jiu-jitsu",
  "Breadmaking",
  "Bullet journaling",
  "Cabaret",
  "Calligraphy",
  "Candle making",
  "Candy making",
  "Car fixing & building",
  "Card games",
  "Cheesemaking",
  "Cleaning",
  "Clothesmaking",
  "Coffee roasting",
  "Collecting",
  "Coloring",
  "Computer programming",
  "Confectionery",
  "Cooking",
  "Cosplaying",
  "Couponing",
  "Craft",
  "Creative writing",
  "Crocheting",
  "Cross-stitch",
  "Crossword puzzles",
  "Cryptography",
  "Cue sports",
  "Dance",
  "Digital arts",
  "Distro Hopping",
  "DJing",
  "Do it yourself",
  "Drama",
  "Drawing",
  "Drink mixing",
  "Electronic games",
  "Electronics",
  "Embroidery",
  "Experimenting",
  "Fantasy sports",
  "Fashion",
  "Fashion design",
  "Fishkeeping",
  "Flower arranging",
  "Fly tying",
  "Foreign language learning",
  "Furniture building",
  "Gaming (tabletop games and role-playing games)",
  "Genealogy",
  "Gingerbread house making",
  "Glassblowing",
  "Graphic design",
  "Gunsmithing",
  "Hacking",
  "Herp keeping",
  "Home improvement",
  "Homebrewing",
  "Houseplant care",
  "Hula hooping",
  "Hydroponics",
  "Ice skating",
  "Jewelry making",
  "Jigsaw puzzles",
  "Journaling",
  "Juggling",
  "Karaoke",
  "Karate",
  "Kendama",
  "Knife making",
  "Knitting",
  "Knot tying",
  "Kombucha brewing",
  "Lace making",
  "Lapidary",
  "Leather crafting",
  "Lego building",
  "Lock picking",
  "Listening to music",
  "Listening to podcasts",
  "Machining",
  "Macrame",
  "Magic",
  "Makeup",
  "Metalworking",
  "Model building",
  "Model engineering",
  "Nail art",
  "Needlepoint",
  "Origami",
  "Painting",
  "Palmistry",
  "Pet adoption & fostering",
  "Philately",
  "Photography",
  "Practical jokes",
  "Pressed flower craft",
  "Playing musical instruments",
  "Poi",
  "Pottery",
  "Powerlifting",
  "Puzzles",
  "Quilling",
  "Quilting",
  "Quizzes",
  "Rail transport modeling",
  "Rapping",
  "Reading",
  "Refinishing",
  "Reiki",
  "Robot combat",
  "Rubik's Cube",
  "Scrapbooking",
  "Sculpting",
  "Sewing",
  "Shoemaking",
  "Singing",
  "Sketching",
  "Soapmaking",
  "Social media",
  "Stand-up comedy",
  "Stamp collecting",
  "Table tennis",
  "Tarot",
  "Taxidermy",
  "Thrifting",
  "Video editing",
  "Video game developing",
  "Video gaming",
  "Watching movies",
  "Watching television",
  "Weaving",
  "Weight training",
  "Welding",
  "Whittling",
  "Wikipedia editing",
  "Winemaking",
  "Wood carving",
  "Woodworking",
  "Worldbuilding",
  "Writing",
  "Word searches",
  "Yo-yoing",
  "Yoga",
];

var genOutdoor = [
  "Air sports",
  "Airsoft",
  "Archery",
  "Astronomy",
  "Backpacking",
  "BASE jumping",
  "Baseball",
  "Basketball",
  "Beekeeping",
  "Birdwatching",
  "Blacksmithing",
  "BMX",
  "Board sports",
  "Bodybuilding",
  "Bonsai",
  "Butterfly watching",
  "Camping",
  "Canoeing",
  "Canyoning",
  "Caving",
  "Composting",
  "Cycling",
  "Dowsing",
  "Driving",
  "Fishing",
  "Flag football",
  "Flower growing",
  "Flying",
  "Flying disc",
  "Foraging",
  "Fossicking",
  "Freestyle football",
  "Gardening",
  "Geocaching",
  "Ghost hunting",
  "Gold prospecting",
  "Graffiti",
  "Handball",
  "Herbalism",
  "Herping",
  "High-power rocketry",
  "Hiking",
  "Hobby horsing",
  "Hooping",
  "Horseback riding",
  "Hunting",
  "Inline skating",
  "Jogging",
  "Kayaking",
  "Kite flying",
  "Kitesurfing",
  "Lacrosse",
  "LARPing",
  "Letterboxing",
  "Longboarding",
  "Martial arts",
  "Metal detecting",
  "Meteorology",
  "Motor sports",
  "Mountain biking",
  "Mountaineering",
  "Mushroom hunting/mycology",
  "Netball",
  "Nordic skating",
  "Orienteering",
  "Paintball",
  "Parkour",
  "Photography",
  "Podcast hosting",
  "Polo",
  "Rafting",
  "Rappelling",
  "Road biking",
  "Rock climbing",
  "Roller skating",
  "Rugby",
  "Running",
  "Sailing",
  "Sand art",
  "Scouting",
  "Scuba diving",
  "Sculling or rowing",
  "Shooting",
  "Shopping",
  "Shuffleboard",
  "Skateboarding",
  "Skiing",
  "Skimboarding",
  "Skydiving",
  "Slacklining",
  "Snowboarding",
  "Snowmobiling",
  "Snowshoeing",
  "Soccer",
  "Stone skipping",
  "Sun bathing",
  "Surfing",
  "Survivalism",
  "Swimming",
  "Taekwondo",
  "Tai chi",
  "Topiary",
  "Thru-hiking",
  "Travel",
  "Urban exploration",
  "Vacation",
  "Vegetable farming",
  "Vehicle restoration",
  "Walking",
  "Water sports",
];


$("#randomBtn").click(function (event) {
    // Assemble full array
  hobbiesArr = $.merge(genIndoor, genOutdoor);
    // Select a random entry on the hobbiesArr
  var hobbyName = hobbiesArr[Math.floor(Math.random() * hobbiesArr.length - 1)];
  query = hobbyName;
    // Output the result to wikiData
  wikiData(hobbyName);
  loadVideo();
});
