import React from 'react';
import './style.css';
import { FaCheck } from 'react-icons/fa';

export default function ModalFinish(props) {
  return (
    <>
      <section className="modalFinish fadeIn">
        <div className="modal-content">
          <div className="flex">
            <div>
              <FaCheck size={34} />
            </div>
            <div>
              <h1>Parabéns</h1>
              <p>Compra realizada com sucesso!</p>
            </div>
            <div className="closeDiv">
              <span className="close" onClick={props.hideModalFinish}>&times;</span>
            </div>
          </div>
          <div className="codigo">
            <p>Numero do seu pedido:</p>
            <span>1847561-12</span>
          </div>
        </div>
      </section>
    </>
  );
}
