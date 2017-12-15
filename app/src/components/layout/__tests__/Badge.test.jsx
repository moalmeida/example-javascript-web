import 'raf/polyfill';
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Badge from '../Badge';

configure({ adapter: new Adapter() });

describe('components/layout/Badge unit test', () => {
  let wrapper;
  let tree;
  beforeEach(() => {
    const props = {
      name: '',
      url: '#',
      count: 0,
      className: '',
      delay: '200',
    };
    wrapper = mount(<Badge {...props} />);
    tree = renderer.create(<Badge {...props} />).toJSON();
  });

  test('expect to match snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
  test('expect props to be equal', () => {
    expect(wrapper.prop('name')).toEqual('');
    expect(wrapper.prop('url')).toEqual('#');
    expect(wrapper.prop('count')).toEqual(0);
    expect(wrapper.prop('className')).toEqual('');
    expect(wrapper.prop('delay')).toEqual('200');
  });
});
