export const products = [
    {
        id: 1,
        name: "Mouse ZN-900",
        price: 38.99,
        img: "https://res.cloudinary.com/duafuhu8k/image/upload/v1668786953/astrogames/mouse1_dgbgbh.png",
        category: "mouse"
    },
    {
        id: 2,
        name: "Mouse JS-404",
        price: 35.99,
        img: "https://res.cloudinary.com/duafuhu8k/image/upload/v1668786957/astrogames/mouse2_fhartq.png",
        category: "mouse"
    },
    {
        id: 3,
        name: "Mouse VC-250",
        price: 39.99,
        img: "https://res.cloudinary.com/duafuhu8k/image/upload/v1668786954/astrogames/mouse3_ue48h8.png",
        category: "mouse"
    },
    {
        id: 4,
        name: "Mouse ZR-807",
        price: 42.99,
        img: "https://res.cloudinary.com/duafuhu8k/image/upload/v1668786965/astrogames/mouse4_t7mncq.png",
        category: "mouse"
    },
    {
        id: 5,
        name: "Mouse KD-305",
        price: 39.99,
        img: "https://res.cloudinary.com/duafuhu8k/image/upload/v1668786981/astrogames/mouse5_lfgg36.png",
        category: "mouse"
    },
    {
        id: 6,
        name: "Auriculares CAT-02",
        price: 50.99,
        img: "https://res.cloudinary.com/duafuhu8k/image/upload/v1668786962/astrogames/auris1_wi1x5p.png",
        category: "auriculares"
    },
    {
        id: 7,
        name: "Auriculares SAN-10",
        price: 65.99,
        img: "https://res.cloudinary.com/duafuhu8k/image/upload/v1668786957/astrogames/auris2_etonye.png",
        category: "auriculares"
    },
    {
        id: 8,
        name: "Auriculares CAT-01",
        price: 55.99,
        img: "https://res.cloudinary.com/duafuhu8k/image/upload/v1668786968/astrogames/auris3_d62tku.png",
        category: "auriculares"
    },
    {
        id: 9,
        name: "Auriculares LEN-50",
        price: 58.99,
        img: "https://res.cloudinary.com/duafuhu8k/image/upload/v1668786975/astrogames/auris4_ikokpa.png",
        category: "auriculares"
    },
    {
        id: 10,
        name: "Auriculares NON-40",
        price: 48.99,
        img: "https://res.cloudinary.com/duafuhu8k/image/upload/v1668786970/astrogames/auris5_xjpyd6.png",
        category: "auriculares"
    },
    {
        id: 11,
        name: "Auriculares RED-55",
        price: 64.99,
        img: "https://res.cloudinary.com/duafuhu8k/image/upload/v1668786961/astrogames/auris6_dueva9.png",
        category: "auriculares"
    },
    {
        id: 12,
        name: "Auriculares MINI-20",
        price: 35.99,
        img: "https://res.cloudinary.com/duafuhu8k/image/upload/v1668786957/astrogames/auris7_pkmpco.png",
        category: "auriculares"
    },
    {
        id: 13,
        name: "Parlantes VINK-2",
        price: 89.99,
        img: "https://res.cloudinary.com/duafuhu8k/image/upload/v1668786975/astrogames/parlantes1_dtdulr.png",
        category: "parlantes"
    },
    {
        id: 14,
        name: "Parlantes FOND-5",
        price: 92.99,
        img: "https://res.cloudinary.com/duafuhu8k/image/upload/v1668786960/astrogames/parlantes2_oyeqdk.png",
        category: "parlantes"
    },
    {
        id: 15,
        name: "Parlantes GEBA-9",
        price: 95.99,
        img: "https://res.cloudinary.com/duafuhu8k/image/upload/v1668786962/astrogames/parlantes3_xtyagk.png",
        category: "parlantes"
    },
    {
        id: 16,
        name: "Teclado J-8000",
        price: 70.99,
        img: "https://res.cloudinary.com/duafuhu8k/image/upload/v1668786970/astrogames/teclado1_lsmdjq.png",
        category: "teclados"
    },
    {
        id: 17,
        name: "Teclado Z-4500",
        price: 73.99,
        img: "https://res.cloudinary.com/duafuhu8k/image/upload/v1668786974/astrogames/teclado2_n9tjah.png",
        category: "teclados"
    },
    {
        id: 18,
        name: "Teclado S1-7007",
        price: 78.99,
        img: "https://res.cloudinary.com/duafuhu8k/image/upload/v1668786981/astrogames/teclado3_trd6cp.png",
        category: "teclados"
    },
    {
        id: 19,
        name: "Teclado F-1100",
        price: 69.99,
        img: "https://res.cloudinary.com/duafuhu8k/image/upload/v1668786961/astrogames/teclado4_ekxevw.png",
        category: "teclados"
    },
]

export const TotalProducts = products.length;

export const Products = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
  
    acc[product.category] = [...acc[product.category], product];
  
    return acc;
  }, {});