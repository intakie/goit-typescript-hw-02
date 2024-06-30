import css from "./ImageCard.module.css";
import { ImageData } from "../../api";

interface ImageCardProps {
  image: ImageData;
  onClick: (image: ImageData) => void;
}

export default function ImageCard({ image, onClick }: ImageCardProps) {
  return (
    <div className={css.card} onClick={() => onClick(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.image}
      />
    </div>
  );
}
