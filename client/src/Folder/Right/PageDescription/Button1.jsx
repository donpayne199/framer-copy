import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "../Modal/Modal";
import "./Button1.css";

const Right = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className="right-container">
      <div className="right-btn-set">
        <motion.button
          className="tour-btn"
          onClick={() => (modalOpen ? close() : open())}
        >
          Tour
        </motion.button>
      </div>
      {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
    </div>
  );
};
export default Right;
