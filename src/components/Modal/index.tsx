import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    // height: "250px",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

interface Props {
  modalIsOpen: boolean;
  closeModal?: () => void;
  afterOpenModal?: () => void;
}
const CustomModal: React.FC<Props> = ({
  modalIsOpen,
  closeModal,
  afterOpenModal,
  children,
}) => {
  return (
    // <div>
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img
        style={{
          height: 20,
          width: 20,
          position: "absolute",
          right: "20px",
          top: "15px",
        }}
        onClick={() => closeModal?.()}
        src="./close.png"
      />
      {children}
    </Modal>
    // </div>
  );
};
export default CustomModal;
