import React, { useContext } from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils";
import AppContext from "../App/AppContext";

function Footer() {

  const { user } = useContext(AppContext);

  return (
    <>
      {user.isLoggedIn && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )
      }
      <div className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy()}
      </div>

    </>
  );
}

export default Footer;
