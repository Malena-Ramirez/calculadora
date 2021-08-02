import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from "enzyme";
import Calculator from '../../components/Calculator';

configure({ adapter: new Adapter() });
describe('Pruebas en <Calculator />', () => {

  test('Debe mostrarse correctamente', () => {
    const wrapper = shallow(<Calculator />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrarse una lista de números', () => {
    const numbersTest = [
      {
        id: 'uno',
        number: 1
      },
      {
        id: 'dos',
        number: 2
      },
      {
        id: 'tres',
        number: 3
      },
    ];

    const wrapper = shallow(<Calculator numbersList={numbersTest} />);
    expect(wrapper.find('NumberKeys').length).toBe(numbersTest.length);

  })

})
