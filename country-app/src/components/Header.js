import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Container from "./Container";
import { ThemeContext } from "../context/ThemeProvider";

export default function Header() {
  const { theme, handleThemeSwitch } = useContext(ThemeContext);
  let icon =
    theme === "dark" ? (
      <FontAwesomeIcon icon={faSun} className="pt-1 px-4 " />
    ) : (
      <FontAwesomeIcon icon={faMoon} className="pt-1 px-4 " />
    );

  let themeMode= theme==="dark"? 'Light Mode': "Dark Mode"
  return (
    <div className="bg-secondary_light shadow dark:bg-secondary_dark mb-8">
      <Container className="px-4 py-8">
        <div className="flex justify-between">
          <Link to={"/"}>
            <h1 className="  font-black text-2xl prevent-select">
              Where in the world?
            </h1>
          </Link>

          <div
            className="flex text-xl cursor-pointer"
            onClick={handleThemeSwitch}
          >
            {icon}
            <button className="prevent-select">{themeMode}</button>
          </div>
        </div>
      </Container>
    </div>
  );
}
