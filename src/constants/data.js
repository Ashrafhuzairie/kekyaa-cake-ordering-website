import images from "./images"

const indulgence = [
  {
    title: 'Kek Batik Indulgence',
    variants: [
      {size: '6 inches', price:'RM50'},
      {size: '8 inches', price:'RM85'},
      {size: '9 inches', price:'RM105'},
    ],

    img: images.cake1,
  }
]

const indulgenceMousses =[
  {
    title: 'Kek Batik Indulgence Mousses',
    variants: [
      {size: '6 inches', price:'RM60'},
      {size: '8 inches', price:'RM95'},
      {size: '9 inches', price:'RM115'},
    ],

    img: images.cake1,
  }
]

const klasik =[

    {
    title: 'Kek Batik Klasik',
    variants: [
      {size: '6 inches', price:'RM40'},
      {size: '7 inches', price:'RM45'},
    ],

    img: images.cake1,
  }
]

export default { indulgence, indulgenceMousses, klasik };
