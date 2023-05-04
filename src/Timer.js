import React from "react";
// import { useDispatch } from "react-redux";

export const TimerAdd = ({ handleTimer}) => {

    // const dispatch = useDispatch();
  return (
    <>
    
      <button onClick={() => handleTimer("START")} className="plus">
      Запустить таймер
      </button>
      <button  onClick={() => handleTimer("STOP")} className="minus">
       Остановить таймер
      </button>
     
      <button onClick={() => handleTimer("RESET")} className="reset">
        Сброс
      </button>
    </>
  );
};
