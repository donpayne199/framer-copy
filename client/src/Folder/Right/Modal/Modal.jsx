import { motion } from "framer-motion";
import Backdrop from "./ModalBackdrop";

const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div>
        <div className="modal-grid-container">
          <div className="grid-item">
            <motion.div
              className="item-1"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0, delay: 1 }}
              transition={{ duration: 0.75, delay: 1 }}
              ease="easeInOut"
            >
              Item 1
            </motion.div>
          </div>

          <motion.div
            className="item-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              delay: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, delay: 3 }}
            ease="easeInOut"
          >
            Item 2
          </motion.div>

          <motion.div
            className="item-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              delay: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, delay: 5 }}
            ease="easeInOut"
          >
            Item 3
          </motion.div>
        </div>
      </motion.div>
    </Backdrop>
  );
};
export default Modal;
