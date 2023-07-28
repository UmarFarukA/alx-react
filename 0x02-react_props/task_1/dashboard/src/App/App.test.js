import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import { shallow } from "enzyme";

describe("App tests", () => {
  it("renders without crashing", () => {
    const app = shallow(<App />);

    expect(app).toBeDefined();
  });
  it("should render Notifications component", () => {
    const app = shallow(<App />);

    expect(app.contains(<Notifications />)).toBe(true);
  });
  it("should render Header component", () => {
    const app = shallow(<App />);

    expect(app.contains(<Header />)).toBe(true);
  });
  it("should render Login Component", () => {
    const app = shallow(<App />);

    expect(app.contains(<Login />)).toBe(true);
  });
  it("should render Footer component", () => {
    const app = shallow(<App />);

    expect(app.contains(<Footer />)).toBe(true);
  });
});
