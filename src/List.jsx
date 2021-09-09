import React from "react";

const List = (props) => {
  return (
    <>
      <div className="todo_style">
        <i
          className="fas fa-times-circle"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <li>{props.text}</li>
      </div>
    </>
  );
};
export default List;
