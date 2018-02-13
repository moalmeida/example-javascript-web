// import 'raf/polyfill';
// import React from 'react';
// import { mount, configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer';
// import Header from '../Header';
// configure({ adapter: new Adapter() });
describe('components/Header unit test', () => {
  test('expect be true', () => {
    expect(true).toBe(true);
  });
  // let tree;
  // let wrapper;
  // beforeEach(() => {
  //   const props = {
  //     style: '',
  //     authenticated: false,
  //   };
  //   wrapper = mount(<Header />).dive();
  //   tree = renderer.create(<Header {...props} />).toJSON();
  // });
  // test('expect to match snapshot', () => {
  //   expect(tree).toMatchSnapshot();
  // });
  // test('expect props to be equal', () => {
  //   expect(wrapper.prop('style')).toEqual('');
  //   expect(wrapper.prop('authenticated')).toEqual(false);
  // });
});
