const itemsData = [
  {
    id: 1,
    name: "SKINNY TRIBECA",
    price: 2900,
    description:
      "High-waisted skinny pants with five pockets. Regular hemmed hem and acid wash.",
    promotion: 2009,
    image:
      "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660151423/proyecto%20coderhouse%20react/products/pantalon1-1_xudijv.jpg",
    imageTwo:
      "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660151423/proyecto%20coderhouse%20react/products/pantalon1-2_xugfl7.jpg",
    imageThree:
      "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660151424/proyecto%20coderhouse%20react/products/pantalon1-3_kr87o8.jpg",
    category: "jeans",
    outlet: true,
    stock: 18,
  },
  {
    id: 2,
    name: "SKINNY BROKEN",
    price: 2800,
    description:
      "Mid-rise skinny pants with five pockets and rolled hem. Heavy worn dark blue wash with a rip in the right knee. Stretch textile.",
    image:
      "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660151423/proyecto%20coderhouse%20react/products/pantalon2-1_vxa9jz.jpg",
    imageTwo:
      "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660151424/proyecto%20coderhouse%20react/products/pantalon2-2_hdxl62.jpg",
    imageThree:
      "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660151424/proyecto%20coderhouse%20react/products/pantalon2-3_put1to.jpg",
    category: "jeans",
    outlet: false,
    stock: 19,
  },
  {
    id: 3,
    name: "SKINNY BAIRES",
    price: 2762,
    description:
      "Mid-rise five-pocket blue jean pants, softened direct wash. Contract seams. Front closure with Italian copper button.",
    image:
      "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660151424/proyecto%20coderhouse%20react/products/pantalon3-1_vtuxmv.jpg",
    imageTwo:
      "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660151424/proyecto%20coderhouse%20react/products/pantalon3-2_zylth8.jpg",
    imageThree:
      "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660151425/proyecto%20coderhouse%20react/products/pantalon3-3_cwsnrb.jpg",
    category: "jeans",
    outlet: false,
    stock: 4,
  },

  {
    id: 4,
    name: "BLOUSE CEYLA",
    price: 2200,
    description:
      "Blouse in woven fabric, long sleeves with cuffs, two buttons and a V-neckline with a view and a turn-down collar.",
    image:
      "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660151425/proyecto%20coderhouse%20react/products/top1-1_uwizud.jpg",
    imageTwo:
      "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660151425/proyecto%20coderhouse%20react/products/top1-2_ogws67.jpg",
    imageThree:
      "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660151426/proyecto%20coderhouse%20react/products/top1-3_werh5l.jpg",
    category: "tops",
    outlet: false,
    stock: 12,
  },
  {
    id: 5,
    name: "BLOUSE TRAIN",
    price: 2600,
    description:
      "Plain shirt in light crepe, dropped shoulder and lapel collar and central pockets.",
    image:
      "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660151426/proyecto%20coderhouse%20react/products/top2-1_igbzrr.jpg",
    imageTwo:
      "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660151427/proyecto%20coderhouse%20react/products/top2-2_xyiywo.jpg",
    imageThree:
      "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660151426/proyecto%20coderhouse%20react/products/top2-3_kmxaai.jpg",
    category: "tops",
    outlet: true,
    stock: 15,
  },
  {
    id: 6,
    name: "BLOUSE ONIX",
    price: 2500,
    description:
      "Morley knit top with a polo neck. Detail of thermofused studs applied on the front. slim fit.",
    image:
      "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660151426/proyecto%20coderhouse%20react/products/top3-1_y7ubti.jpg",
    imageTwo:
      "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660151427/proyecto%20coderhouse%20react/products/top3-2_qhrcjr.jpg",
    imageThree:
      "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660151427/proyecto%20coderhouse%20react/products/top3-3_ngdpvo.jpg",
    category: "tops",
    outlet: false,
    stock: 18,
  },

  {
    id: 7,
    name: "DRESS SWAN",
    price: 3500,
    description:
      "Short printed crepe dress with long sleeves with cuffs and elastic, round neckline with drop. It has a gathered skirt on the front and back.",
    image:
      "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660151731/proyecto%20coderhouse%20react/products/vestido1-1_bjcibu.jpg",
    imageTwo:
      "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660151731/proyecto%20coderhouse%20react/products/vestido1-3_bbd32q.jpg",
    imageThree:
      "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660151731/proyecto%20coderhouse%20react/products/vestido1-2_bx9klv.jpg",
    category: "dresses",
    outlet: false,
    stock: 19,
  },
  {
    id: 8,
    name: "DRESS HATA",
    price: 3200,
    description:
      "Plain morley midi dress with 7/8 sleeves and boat neckline. It has a cut on the sides.",
    image:
      "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660151731/proyecto%20coderhouse%20react/products/vestido2-1_fta2bu.jpg",
    imageTwo:
      "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660151731/proyecto%20coderhouse%20react/products/vestido2-2_qe25op.jpg",
    imageThree:
      "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660151731/proyecto%20coderhouse%20react/products/vestido2-3_rruvz6.jpg",
    category: "dresses",
    outlet: false,
    stock: 17,
  },
  {
    id: 9,
    name: "DRESS BANKS",
    price: 3000,
    description:
      " Plain jersey dress, V-neckline and elbow-length sleeves with gathers. It has patch pockets on the front.",
    image:
      "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660151733/proyecto%20coderhouse%20react/products/vestido3-1_g9qe4a.jpg",
    imageTwo:
      "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660151733/proyecto%20coderhouse%20react/products/vestido3-3_tndnbu.jpg",
    imageThree:
      "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660151732/proyecto%20coderhouse%20react/products/vestido3-2_irm5ag.jpg",
    category: "dresses",
    outlet: true,
    stock: 17,
  },
];

export default itemsData;
