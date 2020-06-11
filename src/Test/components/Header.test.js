import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../components/Header.js';

test('Testing Header renderer',()=>{
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
});