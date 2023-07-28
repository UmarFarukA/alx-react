import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.js';

export function Footer() {
    return <>
        <div className="App-footer">
            Copyright {getFullYear()} - {getFooterCopy()}
        </div>
    </>
}