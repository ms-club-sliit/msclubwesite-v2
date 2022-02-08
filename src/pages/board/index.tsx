import React from "react";
import BoardByYear from "./board-by-year";
import ScrollToTop from "react-scroll-to-top";

const Boards: React.FC = () => (
  <div className="container">
    <ScrollToTop smooth className="scroll-to-top"/>
    <BoardByYear/>
  </div>
);

export default Boards;
