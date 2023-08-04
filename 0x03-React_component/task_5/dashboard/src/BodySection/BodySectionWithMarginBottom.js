import React from "react";
import BodySection from "./BodySection";
import "./BodySectionWithMarginBotton.css";

class BodySectionWithMarginBottom extends React.Component {

    render() {
        return (
            <div className="bodySectionWithMargin">
                <BodySection {...this.props} />
            </div>
        )
    }
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default BodySectionWithMarginBottom;