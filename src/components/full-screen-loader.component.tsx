import { Loader } from "@mantine/core";

import styles from "./styles/full-screen-loader.module.scss";

export const FullScreenLoader = () => {
  return (
    <div className={styles.fullScreenLoader}>
      <Loader size="lg" />
    </div>
  );
};

export default FullScreenLoader;
