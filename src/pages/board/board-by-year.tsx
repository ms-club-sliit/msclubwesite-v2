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
    <div className="container">
      <div className="row">
        <span className="board-topic mt-2">
          Meet the Board
          <b className="board-topic-year">
            {nextBoard.year} - {incrementNumber(nextBoard.year)}
          </b>
        </span>
        <hr />
        <div className="col-md-2 pt-4">
          {boardList.map((board) => (
            <div className="row">
              <button
                type="button"
                className="btndiv year-btn col text-center"
                onClick={() => handleClick(board.id, board.year)}
              >
                {board.year} - {incrementNumber(board.year)}
              </button>
            </div>
          ))}
        </div>
        <div className="col-md-10">
          <div className="row">
            {boardMemberList.map((member) => (
              <div className="col-md-4 col-sm-6">
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
