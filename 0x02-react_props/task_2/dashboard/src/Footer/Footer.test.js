import React from "react";
import { shallow } from "enzyme";
import Footer from './Footer';
import { getFullYear, getFooterCopy } from '../utils/utils';

describe("Footer tests", () => {
    it("renders without crashing", () => {
        const footer = shallow(<Footer />);
        expect(footer.exists()).toBeDefined();
    });

    it("should render copyright text", () => {
        const footer = shallow(<Footer />);
        expect(footer.text()).toEqual(`Copyright ${getFullYear} - ${getFooterCopy}`);
    });
});