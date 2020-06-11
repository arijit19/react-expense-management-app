import React from 'react';
import {shallow} from 'enzyme';

import PageNotFound from '../../components/PageNotFound.js'

test('Testing Not found page component', ()=>{
    const wrapper = shallow(<PageNotFound/>);
    expect(wrapper).toMatchSnapshot();
})