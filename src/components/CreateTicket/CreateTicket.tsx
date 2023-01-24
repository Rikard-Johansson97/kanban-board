import React from "react";
import "./CreateTicket.scss";

const CreateTicket = () => {
  return (
    <div className='modal'>
      <div className='modal-card'>
        <h3 className='heading-l'>Add New Task</h3>
        <div className='modal-input-group'>
          <label htmlFor='title' className='body-m'>
            Title
          </label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='e.g Kill Darth vader'
          />
        </div>
        <div className='modal-input-group'>
          <label htmlFor='Description' className='body-m'>
            Description
          </label>
          <textarea
            name='Description'
            id='Description'
            placeholder='e.g This is the way'
          />
        </div>
        <div className='modal-input-group'>
          <label htmlFor='Subtask' className='body-m'>
            Subtask
          </label>
          <input
            type='text'
            name='Subtask'
            id='Subtask'
            placeholder='e.q dont die'
          />
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
