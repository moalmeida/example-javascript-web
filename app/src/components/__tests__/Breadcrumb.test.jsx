import 'raf/polyfill';
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer';
import Breadcrumb from '../Breadcrumb';

configure({ adapter: new Adapter() });

describe('components/Breadcrumb unit test', () => {
  const items = [
    {
      name: 'TEST',
      url: '#',
    },
  ];
  // let tree;
  let wrapper;
  beforeEach(() => {
    const props = {
      items,
    };
    wrapper = mount(<Breadcrumb {...props} />);
    // tree = renderer.create(<Breadcrumb {...props} />).toJSON();
  });
  // test('expect to match snapshot', () => {
  //   expect(tree).toMatchSnapshot();
  // });
  test('expect props to be equal', () => {
    expect(wrapper.prop('items')).toEqual(expect.arrayContaining(items));
  });
});
