import React from 'react';
import { shallow } from 'enzyme';
import Button from "..";

describe('Button', () => {
    it('should render correctly in primary mode', () => {
        const component = shallow(<Button>Primary</Button>);
        expect(component).toMatchSnapshot();
    });
});