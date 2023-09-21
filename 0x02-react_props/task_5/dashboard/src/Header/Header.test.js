import React from "react";
import { shallow } from "enzyme";
import Header from './Header';

describe("Header tests", () => {
    it("renders without crashing", () => {
        const header = shallow(<Header />);
        expect(header.exists()).toBeDefined();
    });

    it("should render h1", () => {
        const header = shallow(<Header />);
        expect(header.exists("img")).toEqual(true);
        expect(header.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
    });

});
