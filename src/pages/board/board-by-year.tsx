import React, { useState, useEffect } from 'react';
import { IBoard, IBoardMemberDetails } from '../../interfaces/BoardInterface';
import boardData from '../../data/BoardSectionData.json';
import BoardMemberCard from './board-member-card';
import ts from '../../locales/en-US/translation.json';

let translation = ts.translation;

const BoardByYear: React.FC = () => {
  const [id, setid] = useState<number>(0);
  const [year, setyear] = useState<string>('');
  const [boardList, setboardList] = useState<IBoard[]>([]);
  const [boardMemberList, setboardMemberList] = useState<IBoardMemberDetails[]>(
    []
  );

  useEffect(() => {
    const dateInstance = new Date();
    setboardList(boardData);
    setboardMemberList(boardData[0].board);
    setyear((dateInstance.getFullYear() - 1).toString());
  }, []);

  const incrementNumber = (number: string) => {
    const num = Number(number);
    return num + 1;
  };

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedId = parseInt(event.target.value, 10);
    const selectedBoard = boardList[selectedId - 1];
    setid(selectedId - 1);
    setyear(selectedBoard.year);
    setboardMemberList(selectedBoard.board);
  };

  const nextBoard = {
    id,
    year,
  };
  return (
    <div className='board-year'>
      <div className='hero-section-bg' />
      <div className='row'>
        <span className='title'>
          {translation.label['board-board-by-year-title']} {nextBoard.year} -{' '}
          {incrementNumber(nextBoard.year)}
          <span className='wave-hand-emoji' />
        </span>

        {/* Dropdown */}
        <div className='col-md-12 board-dropdown-wrapper'>
          <select
            className='board-dropdown button btn text-center board-button'
            onChange={handleDropdownChange}
          >
            {boardList.map(board => (
              <option key={board.id} value={board.id}>
                {board.year} / {incrementNumber(board.year.slice(-2))}
              </option>
            ))}
          </select>
        </div>

        <div className='col-md-12'>
          <div className='row'>
            {boardMemberList.map(member => (
              <div
                className='col d-flex justify-content-center'
                key={member.id}
              >
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
