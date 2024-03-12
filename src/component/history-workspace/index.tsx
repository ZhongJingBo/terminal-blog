import React from "react";
import HistortyContent from "./Content";
import InputExhibit from "../workspace/history-input";
const HistoryWorkspace = (props: { data: any; onClickCmd: Function }) => {
  const { data, onClickCmd } = props;
  return (
    <div>
      {data.map((item: string) => {
        return (
          <>
            <InputExhibit value={item} isReadOnly={true} />
            <HistortyContent value={item} onClickCmd={onClickCmd} />
          </>
        );
      })}
    </div>
  );
};

export default HistoryWorkspace;


