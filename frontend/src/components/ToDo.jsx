import React from "react";

import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const ToDo = ({ text, updateMode, deleteToDo, progress, updateProgress }) => {
  const [currentProgress, setCurrentProgress] = React.useState(progress);
  const handleProgressUpdate = () => {
    // Here you can implement the logic to change the progress.
    // For simplicity, I'll just rotate between 'OK', 'Progress', and 'Cancel'.
    const statuses = ['OK', 'Progress', 'Cancel'];
    const currentIndex = statuses.indexOf(currentProgress);
    const nextIndex = (currentIndex + 1) % statuses.length;
    const newProgress = statuses[nextIndex];
    setCurrentProgress(newProgress);

    // Call the updateProgress function to update the progress on the server
    updateProgress(newProgress);
  };
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
      <span className="status-icon" onClick={handleProgressUpdate}>
          {currentProgress === 'OK' && '✔️'}
          {currentProgress === 'Progress' && '⏳'}
          {currentProgress === 'Cancel' && '❌'}
          {currentProgress}
        </span>
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;
