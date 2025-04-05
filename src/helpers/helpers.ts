const activeOpacity = 0.8;

const emailValidation = (email: string): boolean => /\S+@\S+\.\S+/.test(email);

const priceRange = [
  {
    id: 1,
    range: '1-200',
  },
  {
    id: 2,
    range: '201-400',
  },
  {
    id: 3,
    range: '401-600',
  },
  {
    id: 4,
    range: '601-800',
  },
];

export {activeOpacity, emailValidation, priceRange};
