import React from "react";
import { shallow } from "enzyme";
import NotificationItem from './NotificationItem';

describe("Notification Item tests", () => {
    it("renders without crashing", () => {
        const component = shallow(<NotificationItem />);
        expect(component.exists()).toBeDefined();
    });

    it('renders correct html from type="default" value="test" props', () => {
        const wrapper = shallow(<NotificationItem />);

        wrapper.setProps({ type: "default", value: "test" });
        expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
    });

    it('renders correct html from  html="<u>test</u>" props', () => {
        const wrapper = shallow(<NotificationItem />);

        wrapper.setProps({ html: "<u>test</u>" });
        expect(wrapper.html()).toEqual('<li data-urgent="true"><u>test</u></li>');
    });
});
