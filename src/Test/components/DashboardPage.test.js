import React from 'react';
import {shallow} from 'enzyme';

import DashboardPage from '../../components/DashboardPage.js'

test('Testing Dashboard page component', ()=>{
    const wrapper = shallow(<DashboardPage/>);
    expect(wrapper).toMatchSnapshot();
})