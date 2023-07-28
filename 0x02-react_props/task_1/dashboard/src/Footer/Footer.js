import React from "react";
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.js';

export default function Footer() {
    return <>
        <div className="App-footer">
            Copyright {getFullYear()} - {getFooterCopy()}
        </div>
    </>
}