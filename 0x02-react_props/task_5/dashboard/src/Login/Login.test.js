import React from "react";
import { shallow } from "enzyme";
import Login from './Login';

describe("Login tests", () => {
    it("renders without crashing", () => {
        const login = shallow(<Login />);
        expect(login.exists()).toBeDefined();
    });

    it("should have 2 input tags and 2 label tags", () => {
        const login = shallow(<Login />);
        expect(login.find("label")).toHaveLength(2);
        expect(login.find("input")).toHaveLength(2);
    });

});
