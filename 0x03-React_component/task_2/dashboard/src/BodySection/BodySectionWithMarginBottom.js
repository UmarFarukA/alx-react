import React from "react";
import BodySection from "./BodySection";
import "./BodySectionWithMarginBotton.css";

class BodySectionWithMarginBottom extends React.Component {

    render() {
        return (
            <div className="bodySectionWithMargin">
                <BodySection bodySectionWithMargin={this.props} />
            </div>
        )
    }
}