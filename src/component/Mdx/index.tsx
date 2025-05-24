import React, { useEffect , useState} from "react";
import DynamicComponent from "../dynamic";
import { useParams } from "react-router-dom";
import { getNoteDetail, NoteItem } from "../../service/index";

const Posts = () => {
  const { id } = useParams();
  const [noteDetail, setNoteDetail] = useState<NoteItem>();
  useEffect(() => {
    getNoteDetail(id || "").then((res: NoteItem) => {
      setNoteDetail(res);

    });
  }, []);


  return <DynamicComponent content={noteDetail?.content} title={noteDetail?.title} createdAt={noteDetail?.createdAt} updatedAt={noteDetail?.updatedAt}  />;
};

export default Posts;
