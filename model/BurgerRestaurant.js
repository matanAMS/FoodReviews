const Images = [
  {image: require('../assets/Images/Agadir.png')},
  {image: require('../assets/Images/BBB.png')},
  {image: require('../assets/Images/Burger-Saloon.png')},
  {image: require('../assets/Images/Ruben.png')},
  {image: require('../assets/Images/Angusri.png')},
  {image: require('../assets/Images/Merindo.png')},
  {image: require('../assets/Images/Yumengs.png')}
];

export const BurgerRestaurant = [
  {
    id: '1',
    coordinate: {
      latitude: 22.6293867,
      longitude: 88.4354486,
    },
    title: 'Agadir restaurant',
    description: `מסעדה יפנית עם ניחוחות מיפן ששווה להגיע.`,
    image: Images[0].image,
    rating: 4,
    reviews: 99,
    categories: ['Restaurant', 'Hotel', 'Dineout'],
  },
  {
    id: '2',
    coordinate: {
      latitude: 22.6345648,
      longitude: 88.4377279,
    },
    title: 'BBB restaurant',
    description: `אוכל טעים השירות על הפנים`,
    image: Images[1].image,
    rating: 5,
    reviews: 102,
    categories: ['Restaurant', 'Fastfood Center', 'Snacks Corner'],
  },
  {
    id: '3',
    coordinate: {
      latitude: 22.6281662,
      longitude: 88.4410113,
    },
    title: 'Burger Saloon restaurant',
    description: `אוכל מטורף ממליץ בחום`,
    image: Images[2].image,
    rating: 3,
    reviews: 220,
    categories: ['Restaurant', 'Hotel', 'Dineout'],
  },
  {
    id: '4',
    coordinate: {
      latitude: 22.6341137,
      longitude: 88.4497463,
    },
    title: 'Ruben restaurant',
    description: `מסעדה רוסית כמו ברוסיה`,
    image: Images[3].image,
    rating: 4,
    reviews: 48,
    categories: ['Restaurant', 'Fastfood Center', 'Snacks Corner'],
  },
  {
    id: '5',
    coordinate: {
      latitude: 22.6292757,
      longitude: 88.444781,
    },
    title: 'Angusri restaurant',
    description: `לא מבין את ההתלהבות ג'אפניקה יקרה`,
    image: Images[4].image,
    rating: 4,
    reviews: 178,
    categories: ['Restaurant', 'Hotel', 'Dineout'],
  },
  {
    id: '6',
    coordinate: {
      latitude: 22.6293867,
      longitude: 88.4354486,
    },
    title: 'Merindo restaurant',
    description: `צוות מהמם אוכל מושלם`,
    image: Images[0].image,
    rating: 4,
    reviews: 99,
    categories: ['Restaurant', 'Hotel', 'Dineout'],
  },
  {
    id: '7',
    coordinate: {
      latitude: 22.6345648,
      longitude: 88.4377279,
    },
    title: 'Yumengs restaurant',
    description: `שווה כל שקל לראות את יפן בלי לטוס ליפן `,
    image: Images[1].image,
    rating: 5,
    reviews: 102,
    categories: ['Restaurant', 'Fastfood Center', 'Snacks Corner'],
  },
];