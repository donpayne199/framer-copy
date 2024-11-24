import { motion } from "framer-motion";
import Backdrop from "./ModalBackdrop";
const Modal = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div>
        <div className="modal-grid-container">
          {/* Item 1 */}
          <motion.div
            className="column pronoun1-tooltip"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 1, 0], y: [0, 15, 15, 15] }}
            transition={{
              duration: 3, // Longer duration for smoother fade in/out
              times: [0, 0.5, 0.9, 1], // Adjust timing for fade in/out phases
              ease: "easeOut", // Smooth easing
            }}
          >
            Item 1
          </motion.div>
          {/* Item 2 */}
          <motion.div
            className="column verb-tense-tooltip"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 1, 0], y: [0, 15, 15, 15] }}
            transition={{
              duration: 3, // Longer duration for smoother fade in/out
              times: [0, 0.5, 0.9, 1], // Adjust timing for fade in/out phases
              delay: 3, // Delay to give more breathing space
              // ease: "easeOut", // Smooth easing
            }}
          >
            Item 2
          </motion.div>
          {/* Item 3 */}
          <motion.div
            className="grid-item item-3"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: [0, 1, 0], y: [0, 0, 0] }}
            transition={{
              duration: 3,
              delay: 7, // Increased delay to give more breathing space
              times: [0, 0.5, 1],
              ease: "easeInOut",
            }}
          >
            Item 3
          </motion.div>
        </div>
      </motion.div>
    </Backdrop>
  );
};
export default Modal;
