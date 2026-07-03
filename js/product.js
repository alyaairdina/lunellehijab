/*==================================================
                PRODUCTS DATABASE
==================================================*/

const products = [

/*==========================================
            BASIC SHAWL
==========================================*/

{
    id: "BS001",

    category: "basic-shawl",

    mainCategory: "basic-hijab",

    collection: "Air Shawl",

    name: "Navy Blue",

    material: "Premium Chiffon",

    price: 25,

    badge: "",

    rating: 5,

    reviews: 128,

    stock: "In Stock",

    description: "A lightweight premium chiffon shawl designed for comfortable everyday wear.",

    image: "images/navy-blue.jpeg"
},

{
    id: "BS002",

    category: "basic-shawl",

    mainCategory: "basic-hijab",

    collection: "Air Shawl",

    name: "Beige",

    material: "Premium Chiffon",

    price: 25,

    badge: "Best Seller",

    rating: 5,

    reviews: 215,

    stock: "In Stock",

    description: "A lightweight premium chiffon shawl designed for comfortable everyday wear.",

    image: "images/beige.jpeg"
},

{
    id: "BS003",

    category: "basic-shawl",

    mainCategory: "basic-hijab",

    collection: "Air Shawl",

    name: "Red Cherry",

    material: "Premium Chiffon",

    price: 25,

    badge: "",

    rating: 5,

    reviews: 96,

    stock: "In Stock",

    description: "A lightweight premium chiffon shawl designed for comfortable everyday wear.",

    image: "images/red-cherry.jpeg"
},

{
    id: "BS004",

    category: "basic-shawl",

    mainCategory: "basic-hijab",

    collection: "Air Shawl",

    name: "Purple",

    material: "Premium Chiffon",

    price: 20,

    originalPrice: 25,

    badge: "Sale",

    rating: 5,

    reviews: 84,

    stock: "In Stock",

    description: "A lightweight premium chiffon shawl designed for comfortable everyday wear.",

    image: "images/purple.jpeg"
},

{
    id: "BS005",

    category: "basic-shawl",

    mainCategory: "basic-hijab",

    collection: "Air Shawl",

    name: "Soft Pink",

    material: "Premium Chiffon",

    price: 25,

    badge: "Best Seller",

    rating: 5,

    reviews: 182,

    stock: "In Stock",

    description: "A lightweight premium chiffon shawl designed for comfortable everyday wear.",

    image: "images/soft-pink.jpeg"
},

{
    id: "BS006",

    category: "basic-shawl",

    mainCategory: "basic-hijab",

    collection: "Air Shawl",

    name: "Choco",

    material: "Premium Chiffon",

    price: 25,

    badge: "",

    rating: 5,

    reviews: 91,

    stock: "In Stock",

    description: "A lightweight premium chiffon shawl designed for comfortable everyday wear.",

    image: "images/choco.jpeg"
},

/*==========================================
            BASIC SQUARE
==========================================*/

{
    id: "BSQ001",

    category: "basic-square",

    mainCategory: "basic-hijab",

    collection: "Classic Square",

    name: "Wine Red",

    material: "Premium Cotton Voile",

    price: 25,

    badge: "",

    rating: 5,

    reviews: 104,

    stock: "In Stock",

    description: "A breathable premium cotton voile square hijab designed for effortless everyday elegance.",

    image: "images/wine-red.jpeg"
},

{
    id: "BSQ002",

    category: "basic-square",

    mainCategory: "basic-hijab",

    collection: "Classic Square",

    name: "Olive Green",

    material: "Premium Cotton Voile",

    price: 25,

    badge: "Best Seller",

    rating: 5,

    reviews: 188,

    stock: "In Stock",

    description: "A breathable premium cotton voile square hijab designed for effortless everyday elegance.",

    image: "images/olive-green.jpeg"
},

{
    id: "BSQ003",

    category: "basic-square",

    mainCategory: "basic-hijab",

    collection: "Classic Square",

    name: "Light Grey",

    material: "Premium Cotton Voile",

    price: 25,

    badge: "",

    rating: 5,

    reviews: 96,

    stock: "In Stock",

    description: "A breathable premium cotton voile square hijab designed for effortless everyday elegance.",

    image: "images/light-grey.jpeg"
},

{
    id: "BSQ004",

    category: "basic-square",

    mainCategory: "basic-hijab",

    collection: "Classic Square",

    name: "Champagne",

    material: "Premium Cotton Voile",

    price: 25,

    badge: "",

    rating: 5,

    reviews: 121,

    stock: "In Stock",

    description: "A breathable premium cotton voile square hijab designed for effortless everyday elegance.",

    image: "images/champagne.jpeg"
},

{
    id: "BSQ005",

    category: "basic-square",

    mainCategory: "basic-hijab",

    collection: "Classic Square",

    name: "Baby Blue",

    material: "Premium Cotton Voile",

    price: 20,

    originalPrice: 25,

    badge: "Sale",

    rating: 5,

    reviews: 82,

    stock: "In Stock",

    description: "A breathable premium cotton voile square hijab designed for effortless everyday elegance.",

    image: "images/baby-blue.jpeg"
},

{
    id: "BSQ006",

    category: "basic-square",

    mainCategory: "basic-hijab",

    collection: "Classic Square",

    name: "Baby Pink",

    material: "Premium Cotton Voile",

    price: 25,

    badge: "Best Seller",

    rating: 5,

    reviews: 205,

    stock: "In Stock",

    description: "A breathable premium cotton voile square hijab designed for effortless everyday elegance.",

    image: "images/baby-pink.jpeg"
},

/*==========================================
            EASE INSTANT
==========================================*/

{
    id: "BI001",

    category: "instant",

    mainCategory: "basic-hijab",

    collection: "Ease Instant",

    name: "Soft Blue",

    material: "Cotton",

    price: 12,

    badge: "",

    rating: 5,

    reviews: 92,

    stock: "In Stock",

    description: "A soft and breathable instant hijab made from cotton for all-day comfort.",

    image: "images/soft-blue.jpeg"
},

{
    id: "BI002",

    category: "instant",

    mainCategory: "basic-hijab",

    collection: "Ease Instant",

    name: "Nudey",

    material: "Cotton",

    price: 12,

    badge: "",

    rating: 5,

    reviews: 113,

    stock: "In Stock",

    description: "A soft and breathable instant hijab made from cotton for all-day comfort.",

    image: "images/nudey.jpeg"
},

{
    id: "BI003",

    category: "instant",

    mainCategory: "basic-hijab",

    collection: "Ease Instant",

    name: "Latte",

    material: "Korean Moss Crepe",

    price: 15,

    badge: "New",

    rating: 5,

    reviews: 56,

    stock: "In Stock",

    description: "A soft and breathable instant hijab made from premium Korean Moss Crepe for all-day comfort.",

    image: "images/latte.jpeg"
},

{
    id: "BI004",

    category: "instant",

    mainCategory: "basic-hijab",

    collection: "Ease Instant",

    name: "Brown",

    material: "Korean Moss Crepe",

    price: 15,

    badge: "New",

    rating: 5,

    reviews: 61,

    stock: "In Stock",

    description: "A soft and breathable instant hijab made from premium Korean Moss Crepe for all-day comfort.",

    image: "images/brown.jpeg"
},

/*==========================================
        SIGNATURE PRINTED SHAWL
==========================================*/

{
    id: "PS001",
    category: "printed-shawl",

    mainCategory: "printed-hijab",
    collection: "Signature Printed Shawl",
    name: "Abstract Printed",
    material: "Premium Cotton",
    price: 38,
    badge: "New",
    rating: 5,
    reviews: 76,
    stock: "In Stock",
    description: "A luxurious printed cotton shawl featuring exclusive Lunelle designs.",
    image: "images/abstract-printed.jpeg"
},

{
    id: "PS002",
    category: "printed-shawl",

    mainCategory: "printed-hijab",
    collection: "Signature Printed Shawl",
    name: "Monogram Printed",
    material: "Premium Cotton",
    price: 38,
    badge: "New",
    rating: 5,
    reviews: 88,
    stock: "In Stock",
    description: "A luxurious printed cotton shawl featuring exclusive Lunelle designs.",
    image: "images/monogram-printed.jpeg"
},

{
    id: "PS003",
    category: "printed-shawl",

    mainCategory: "printed-hijab",
    collection: "Signature Printed Shawl",
    name: "White Floral",
    material: "Premium Cotton",
    price: 28,

    originalPrice: 35,
    badge: "Sale",
    rating: 5,
    reviews: 95,
    stock: "In Stock",
    description: "A luxurious printed cotton shawl featuring exclusive Lunelle designs.",
    image: "images/white-floral.jpeg"
},

{
    id: "PS004",
    category: "printed-shawl",

    mainCategory: "printed-hijab",
    collection: "Signature Printed Shawl",
    name: "Mini Floral",
    material: "Premium Cotton",
    price: 35,
    badge: "",
    rating: 5,
    reviews: 84,
    stock: "In Stock",
    description: "A luxurious printed cotton shawl featuring exclusive Lunelle designs.",
    image: "images/mini-floral.jpeg"
},

{
    id: "PS005",
    category: "printed-shawl",

    mainCategory: "printed-hijab",
    collection: "Signature Printed Shawl",
    name: "Batik Printed",
    material: "Premium Cotton",
    price: 35,
    badge: "",
    rating: 5,
    reviews: 69,
    stock: "In Stock",
    description: "A luxurious printed cotton shawl featuring exclusive Lunelle designs.",
    image: "images/batik-printed.jpeg"
},

{
    id: "PS006",
    category: "printed-shawl",

    mainCategory: "printed-hijab",
    collection: "Signature Printed Shawl",
    name: "Ethnic Jacquard",
    material: "Premium Cotton",
    price: 35,
    badge: "",
    rating: 5,
    reviews: 73,
    stock: "In Stock",
    description: "A luxurious printed cotton shawl featuring exclusive Lunelle designs.",
    image: "images/ethnic-jacquard.jpeg"
},

/*==========================================
        SIGNATURE PRINTED SQUARE
==========================================*/

{
    id: "PSQ001",
    category: "printed-square",

    mainCategory: "printed-hijab",
    collection: "Signature Printed Square",
    name: "Heritage Mosaic",
    material: "Premium Cotton Voile",
    price: 30,
    badge: "Best Seller",
    rating: 5,
    reviews: 143,
    stock: "In Stock",
    description: "A premium printed square hijab with elegant timeless patterns.",
    image: "images/heritage-mosaic.jpeg"
},

{
    id: "PSQ002",
    category: "printed-square",

    mainCategory: "printed-hijab",
    collection: "Signature Printed Square",
    name: "Soft Garden",
    material: "Premium Cotton Voile",
    price: 30,
    badge: "",
    rating: 5,
    reviews: 98,
    stock: "In Stock",
    description: "A premium printed square hijab with elegant timeless patterns.",
    image: "images/soft-garden.jpeg"
},

{
    id: "PSQ003",
    category: "printed-square",

    mainCategory: "printed-hijab",
    collection: "Signature Printed Square",
    name: "Botanical Bloom",
    material: "Premium Cotton Voile",
    price: 30,
    badge: "",
    rating: 5,
    reviews: 102,
    stock: "In Stock",
    description: "A premium printed square hijab with elegant timeless patterns.",
    image: "images/botanical-bloom.jpeg"
},

{
    id: "PSQ004",
    category: "printed-square",

    mainCategory: "printed-hijab",
    collection: "Signature Printed Square",
    name: "Vintage Geometric",
    material: "Premium Cotton Voile",
    price: 24,

    originalPrice: 30,
    badge: "Sale",
    rating: 5,
    reviews: 91,
    stock: "In Stock",
    description: "A premium printed square hijab with elegant timeless patterns.",
    image: "images/vintage-geometric.jpeg"
},

{
    id: "PSQ005",
    category: "printed-square",

    mainCategory: "printed-hijab",
    collection: "Signature Printed Square",
    name: "Classic Monogram",
    material: "Premium Cotton Voile",
    price: 30,
    badge: "Best Seller",
    rating: 5,
    reviews: 167,
    stock: "In Stock",
    description: "A premium printed square hijab with elegant timeless patterns.",
    image: "images/classic-monogram.jpeg"
},

{
    id: "PSQ006",
    category: "printed-square",

    mainCategory: "printed-hijab",
    collection: "Signature Printed Square",
    name: "Lattice Monogram",
    material: "Premium Cotton Voile",
    price: 30,
    badge: "",
    rating: 5,
    reviews: 85,
    stock: "In Stock",
    description: "A premium printed square hijab with elegant timeless patterns.",
    image: "images/lattice-monogram.jpeg"
},

/*==========================================
        LUNELLE BROOCH COLLECTION
==========================================*/

{
    id: "BR001",
    category: "brooch",

    mainCategory: "accessories",
    collection: "Lunelle Brooch Collection",
    name: "Aurora Pearl",
    material: "Premium Alloy",
    price: 10,
    badge: "New",
    rating: 5,
    reviews: 118,
    stock: "In Stock",
    description: "An elegant premium brooch designed to complement your hijab beautifully.",
    image: "images/aurora-pearl.jpeg"
},

{
    id: "BR002",
    category: "brooch",

    mainCategory: "accessories",
    collection: "Lunelle Brooch Collection",
    name: "Luna Bloom",
    material: "Premium Alloy",
    price: 10,
    badge: "New",
    rating: 5,
    reviews: 102,
    stock: "In Stock",
    description: "An elegant premium brooch designed to complement your hijab beautifully.",
    image: "images/luna-bloom.jpeg"
},

{
    id: "BR003",
    category: "brooch",

    mainCategory: "accessories",
    collection: "Lunelle Brooch Collection",
    name: "Rose Luxe",
    material: "Premium Alloy",
    price: 10,
    badge: "New",
    rating: 5,
    reviews: 96,
    stock: "In Stock",
    description: "An elegant premium brooch designed to complement your hijab beautifully.",
    image: "images/rose-luxe.jpeg"
},

{
    id: "BR004",
    category: "brooch",

    mainCategory: "accessories",
    collection: "Lunelle Brooch Collection",
    name: "Crystal Dew",
    material: "Premium Alloy",
    price: 10,
    badge: "New",
    rating: 5,
    reviews: 83,
    stock: "In Stock",
    description: "An elegant premium brooch designed to complement your hijab beautifully.",
    image: "images/crystal-dew.jpeg"
},

{
    id: "BR005",
    category: "brooch",

    mainCategory: "accessories",
    collection: "Lunelle Brooch Collection",
    name: "Golden Petal",
    material: "Premium Alloy",
    price: 10,
    badge: "",
    rating: 5,
    reviews: 77,
    stock: "In Stock",
    description: "An elegant premium brooch designed to complement your hijab beautifully.",
    image: "images/golden-petal.jpeg"
},

{
    id: "BR006",
    category: "brooch",

    mainCategory: "accessories",
    collection: "Lunelle Brooch Collection",
    name: "Moonlight Charm",
    material: "Premium Alloy",
    price: 8,

    originalPrice: 10,
    badge: "Sale",
    rating: 5,
    reviews: 69,
    stock: "In Stock",
    description: "An elegant premium brooch designed to complement your hijab beautifully.",
    image: "images/moonlight-charm.jpeg"
},

/*==========================================
        LUNELLE HIJAB PINS
==========================================*/

{
    id: "HP001",
    category: "pins",

    mainCategory: "accessories",
    collection: "Lunelle Hijab Pins",
    name: "Magic Pins (50 pcs)",
    material: "Stainless Steel",
    price: 2.4,

    originalPrice: 3,
    badge: "Sale",
    rating: 5,
    reviews: 142,
    stock: "In Stock",
    description: "Strong and durable hijab pins that keep your hijab secure all day.",
    image: "images/magic-pins.jpeg"
},

{
    id: "HP002",
    category: "pins",

    mainCategory: "accessories",
    collection: "Lunelle Hijab Pins",
    name: "Steel Pins (200 pcs)",
    material: "Stainless Steel",
    price: 2,
    badge: "Best Seller",
    rating: 5,
    reviews: 224,
    stock: "In Stock",
    description: "Strong and durable hijab pins that keep your hijab secure all day.",
    image: "images/steel-pins.jpeg"
},

{
    id: "HP003",
    category: "pins",

    mainCategory: "accessories",
    collection: "Lunelle Hijab Pins",
    name: "Everyday Pins (18 pcs)",
    material: "Stainless Steel",
    price: 12,
    badge: "",
    rating: 5,
    reviews: 98,
    stock: "In Stock",
    description: "Strong and durable hijab pins that keep your hijab secure all day.",
    image: "images/everyday-pins.jpeg"
},

/*==========================================
        TRENDING COLLECTIONS
==========================================*/

{
    id: "TC001",
    category: "trending",

    mainCategory: "trending",
    collection: "Polka Dot Collection",
    name: "Black",
    material: "Cotton",
    price: 33,
    badge: "",
    rating: 5,
    reviews: 126,
    stock: "In Stock",
    description: "A soft cotton shawl featuring a timeless polka dot pattern.",
    image: "images/polkadot-black.jpeg"
},

{
    id: "TC002",
    category: "trending",

    mainCategory: "trending",
    collection: "Polka Dot Collection",
    name: "Red",
    material: "Cotton",
    price: 33,
    badge: "",
    rating: 5,
    reviews: 108,
    stock: "In Stock",
    description: "A soft cotton shawl featuring a timeless polka dot pattern.",
    image: "images/polkadot-red.jpeg"
},

{
    id: "TC003",
    category: "trending",

    mainCategory: "trending",
    collection: "Animal Printed Collection",
    name: "White",
    material: "Cotton",
    price: 33,
    badge: "",
    rating: 5,
    reviews: 143,
    stock: "In Stock",
    description: "A modern cotton shawl with a bold animal print design.",
    image: "images/animal-white.jpeg"
},

{
    id: "TC004",
    category: "trending",

    mainCategory: "trending",
    collection: "Animal Printed Collection",
    name: "Brown",
    material: "Cotton",
    price: 33,
    badge: "",
    rating: 5,
    reviews: 151,
    stock: "In Stock",
    description: "A modern cotton shawl with a bold animal print design.",
    image: "images/animal-brown.jpeg"
},

{
    id: "TC005",
    category: "trending",

    mainCategory: "trending",
    collection: "Modal Shawl Collection",
    name: "Soft Brown",
    material: "Cotton",
    price: 33,
    badge: "",
    rating: 5,
    reviews: 167,
    stock: "In Stock",
    description: "A lightweight cotton modal shawl designed for effortless elegance.",
    image: "images/softbrown.jpeg"
},

{
    id: "TC006",
    category: "trending",

    mainCategory: "trending",
    collection: "Modal Shawl Collection",
    name: "Nudey Beige",
    material: "Cotton",
    price: 33,
    badge: "",
    rating: 5,
    reviews: 182,
    stock: "In Stock",
    description: "A lightweight cotton modal shawl designed for effortless elegance.",
    image: "images/nudey-beige.jpeg"
},

{
    id: "TC007",
    category: "trending",

    mainCategory: "trending",
    collection: "Modal Shawl Collection",
    name: "Soft Pink",
    material: "Cotton",
    price: 33,
    badge: "",
    rating: 5,
    reviews: 174,
    stock: "In Stock",
    description: "A lightweight cotton modal shawl designed for effortless elegance.",
    image: "images/modal-pink.jpeg"
}

];