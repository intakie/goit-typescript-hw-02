import { Audio } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loader}>
      <Audio height={80} width={80} color="green" ariaLabel="loading" />
    </div>
  );
}
