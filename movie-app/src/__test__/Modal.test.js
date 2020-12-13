//#region PACKAGE IMPORTS
import React from 'react';
import { shallow } from 'enzyme';
//#endregion

//#region MODULE IMPORTS
import Modal from '../components/Modal';
//#endregion

describe('Modal component', () => {
  const modal = shallow(<Modal />);

  it('should have "display: block" when isOpen props are given truthy value', () => {
    modal.setProps({ isOpen: true });
    const modalContainer = modal.find('.modal');

    expect(modalContainer.get(0).props.style).toEqual({ display: 'block' });
  });

  it('should have "display: none" when isOpen props are given falsy value', () => {
    modal.setProps({ isOpen: false });
    const modalContainer = modal.find('.modal');

    expect(modalContainer.get(0).props.style).toEqual({
      display: 'none',
    });
  });
});
