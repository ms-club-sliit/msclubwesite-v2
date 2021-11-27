import React, { useState, useEffect } from "react";
import { IBoard, IBoardMemberDetails } from "../../interfaces/BoardInterface";
import boardData from "../../data/BoardSectionData.json";
import BoardMemberCard from "./board-member-card";

const BoardByYear: React.FC = () => {
  const [id, setid] = useState<number>(0);
  const [year, setyear] = useState<string>("2020");
  const [boardList, setboardList] = useState<IBoard[]>([]);
  const [boardMemberList, setboardMemberList] = useState<IBoardMemberDetails[]>([]);

  useEffect(() => {
    setboardList(boardData);
    setboardMemberList(boardData[0].board);
  }, []);

  const incrementNumber = (number: string) => {
    const num = Number(number);
    return num + 1;
  };

  const handleClick = (id: number, year: string) => {
    setid(id - 1);
    setyear(year);
    setboardMemberList(boardList[id - 1].board);
  };

  const nextBoard = {
    id,
    year,
  };
  return (
    <div className="board-year">
      <div className="hero-section-bg" />
      <div className="row">
        <span className="title">
          Meet the Board {nextBoard.year} - {incrementNumber(nextBoard.year)}
          <span className="wave-hand-emoji" />
        </span>
        <div className="d-flex">
          {boardList.map((board) => (
            <div className="mb-4" key={board.id}>
              <button
                type="button"
                className="button btn text-center"
                onClick={() => handleClick(board.id, board.year)}
              >
                <span className="calendar-emoji"></span>{board.year}/{incrementNumber(board.year.slice(-2))}
              </button>
              &nbsp;&nbsp;&nbsp;
            </div>
          ))}
        </div>
        <div className="col-md-12">
          <div className="row">
            {boardMemberList.map((member) => (
              <div className="col d-flex justify-content-center" key={member.id}>
                <BoardMemberCard
                  id={member.id}
                  image={member.image}
                  name={member.name}
                  position={member.position}
                  socialmedia={member.socialmedia}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardByYear;
