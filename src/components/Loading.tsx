import { Spinner } from "react-bootstrap";
import styles from "@/styles/loading.module.css";

function Loading() {
  return (
    <>
      <div className={styles.loading_backdrop}>
        <Spinner animation="border" variant="primary"></Spinner>
      </div>
    </>
  );
}

export default Loading;
