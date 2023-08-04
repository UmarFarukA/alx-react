import React from "react";


// class WithLogging extends React.Component {

//     constructor() {
//         super(props);
//         this.state = { WrappedComponent: '' };
//         this.getDisplayName = this.getDisplayName.bind(this);
//     }

//     componentDidMount() {
//         console.log(`Component ${this.getDisplayName(this.state.WrappedComponent)}`);
//     }

//     componentWillUnmount() {
//         console.log(`Component ${this.getDisplayName(this.state.WrappedComponent)} is going to unmount`);
//     }

//     getDisplayName = (WrappedComponent) => {
//         WrappedComponent.displayName || WrappedComponent.name || "Component";
//     }

//     render() {
//         return (
//             <>
//             </>
//         )
//     }
// }

import React, { Component } from "react";

const WithLogging = ({ WrappedComponent }) => {
    const getDisplayName = (WrappedComponent) => WrappedComponent.displayName || WrappedComponent.name || "Component";

    WithLogging.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`;

    return class extends Component {
        componentDidMount() {
            console.log(`Component ${getDisplayName(WrappedComponent)} is mounted`);
        }

        componentWillUnmount() {
            console.log(`Component ${getDisplayName(WrappedComponent)} is going to unmount`);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
};

export default WithLogging;