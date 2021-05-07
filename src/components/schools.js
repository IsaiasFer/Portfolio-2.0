import React from "react";

function School(props) {
  return (
    <div className={props.class}>
      <img className='school_image' src={props.image} alt="" />
      <div className="school_info">
        <div className="school_info-up">
          <h2 className='school_name'>{props.title}</h2>
          <h4 className='school_description'>{props.description}</h4>
        </div>
        <div className="school_info-down">
          <h3 className='school_courses'>{props.courses}</h3>
          <h4 className='school_time'>{props.time}</h4>
        </div>
      </div>
    </div>
  );
}

export default School;
