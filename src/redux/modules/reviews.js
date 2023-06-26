const initialState = [];

const reviews = (state = initialState, aciton) => {
  console.log(aciton);
  switch (aciton.type) {
    case 'ADD_COMMENT':
      return [...state, aciton.payload];
    default:
      return state;
  }
};

export default reviews;
