import { BackgroundImage, Center, Overlay, Title } from "@mantine/core";

import { theme } from "@/theme/theme";

import RestaurantKitchen from "@/assets/images/tokyo-restaurant-kitchen-and-chefs.jpg";

import styles from "./styles/hero.module.scss";

export const HeroComponent = () => {
  return (
    <BackgroundImage src={RestaurantKitchen} className={styles.hero}>
      <Overlay
        color={theme.colors!.blackWhite![0]}
        backgroundOpacity={0.7}
        className={styles.heroOverlay}
      />
      <Center className={styles.heroContainer}>
        <Title order={1} className={styles.heroTitle}>
          Welcome
          <br />
          to the&nbsp;<span className={styles.heroTitleBold}>Dashboard</span>
        </Title>
      </Center>
    </BackgroundImage>
  );
};

export default HeroComponent;

// 40
// Regular
// Black
// ffffff
// 120%
// center
