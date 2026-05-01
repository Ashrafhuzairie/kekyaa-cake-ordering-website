import images from "./images"

const indulgence = [
  {
    title: 'Kek Batik Indulgence',
    variants: [
      {size: '6"', price:'RM55'},
      {size: '8"', price:'RM85'},
      {size: '9"', price:'RM105'},
    ],

    img: images.cake6,
  }
]

const indulgenceMousses =[
  {
    title: 'Kek Batik Indulgence Mousses',
    variants: [
      {size: '6"', price:'RM60'},
      {size: '8"', price:'RM95'},
      {size: '9"', price:'RM110'},
    ],

    img: images.cake4,
  }
]

const klasikGanache =[

    {
    title: 'Kek Batik Klasik Ganache',
    variants: [
      {size: '6"', price:'RM40'},
      {size: '7"', price:'RM50'},
      {size: '8"', price:'RM60'},
      {size: '9"', price:'RM80'},
    ],

    img: images.cake19,
  }
]

const klasik =[

    {
    title: 'Kek Batik Klasik',
    variants: [
      {size: '6"', price:'RM30'},
      {size: '7"', price:'RM40'},
      {size: '8"', price:'RM50'},
      {size: '9"', price:'RM60'},
    ],

    img: images.cake1,
  }
]

export default { indulgence, indulgenceMousses,klasikGanache, klasik };
