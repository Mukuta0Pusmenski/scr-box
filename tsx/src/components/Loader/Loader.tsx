import { ClipLoader } from "react-spinners";
import styles from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <ClipLoader size={50} color="#00BFFF" />
    </div>
  );
};

export default Loader;
