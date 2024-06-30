import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { ImageData } from "../../api";

Modal.setAppElement("#root");

interface ImageModalProps {
  image: ImageData | null;
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      {image && (
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={css.image}
        />
      )}
    </Modal>
  );
}
