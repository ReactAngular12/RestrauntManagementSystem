import { Box, Center } from "@mantine/core";

import { HeroComponent, WelcomeFormComponent } from "./components";

import styles from "./welcome.module.scss";

export const WelcomeComponent = () => {
  return (
    <Center className={styles.welcome}>
      <Box className={styles.welcomeContainer}>
        <HeroComponent />
        <WelcomeFormComponent />
      </Box>
    </Center>
  );
};

export default WelcomeComponent;
