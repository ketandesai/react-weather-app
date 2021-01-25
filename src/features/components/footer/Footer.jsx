import React from "react";
import { FaHeart, FaReact } from "react-icons/fa";
import moment from "moment-timezone";
import { selectTheme } from "../../weather/themeSlice";
import { useSelector } from "react-redux";
import "./Footer.css";

export const Footer = () => {
  const theme = useSelector(selectTheme);
  return (
    <div className={`footer-${theme} `}>
      <div
        className={`flex flex-col text-center sm:flex sm:flex-row justify-around p-5 text-${theme} text-sm`}
      >
        <p className="flex flex-no-wrap justify-center items-center my-2 sm:my-0 w-full sm:w-1/2">
          Made with&nbsp;
          <span
            title="Love"
            role="img"
            aria-label="Love"
            className="text-base text-heart"
          >
            <FaHeart />
          </span>
          &nbsp;using&nbsp;
          <span
            title="React"
            role="img"
            aria-label="React"
            className="text-base text-react"
          >
            <FaReact />
          </span>
        </p>
      </div>
      <p className="mx-auto text-center text-sm">
        &copy; {moment().format("YYYY")}{" "}
        <a
          className={`link z-0 hover:text-${theme}`}
          href="https://github.com/ketandesai/weather-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          Ketan Desai
        </a>
      </p>
    </div>
  );
};
