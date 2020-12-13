//#region PACKAGE IMPORTS
import React from 'react';
import { shallow } from 'enzyme';
//#endregion

//#region MODULE IMPORTS
import MovieCard from '../components/MovieCard';
//#endregion

const mockData = {
  Poster:
    'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
};

describe('MovieCard component', () => {
  const movieCard = shallow(<MovieCard image={mockData.Poster} />);
  it('should render content correctly with the given data', () => {
    const posterEl = movieCard.find('.poster');
    expect(posterEl.props()).toEqual({
      className: 'poster',
      onClick: undefined,
      style: {
        backgroundImage: `url('${mockData.Poster}')`,
      },
    });
  });
});
