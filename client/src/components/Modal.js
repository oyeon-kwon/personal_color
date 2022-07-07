import React, { useEffect, useState } from 'react';
import './modal.css';

function Modal ({ content }) {

  return (
    <>
        <div className='modal-background'>
            <div className='modal-container'>
                <span className='close-button'>&times;</span>
                {content}
                <div className='confirm-button'>확인</div>
            </div>
        </div>
    </>
  );
}

export default Modal;
