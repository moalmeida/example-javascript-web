import 'raf/polyfill';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Footer from '../Footer';

configure({ adapter: new Adapter() });

describe('components/layout/Footer unit test', () => {
  let tree;
  beforeEach(() => {
    const props = {
    };
    tree = renderer.create(<Footer {...props} />).toJSON();
  });
  test('expect to match snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
