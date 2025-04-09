import { Box, Center, FileInput, TextInput } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

import styles from "./styles/welcome-form.module.scss";

export const WelcomeFormComponent = () => {
  return (
    <Center className={styles.welcomeForm}>
      <Box className={styles.welcomeFormContainer}>
        <TextInput
          className={styles.welcomeFormInput}
          label="What's Your Business Name?"
          placeholder="Enter Business Name"
          description="Lorem ipsum dolor sit amet consectetur."
          inputWrapperOrder={["label", "input", "description", "error"]}
          labelProps={{ className: styles.welcomeFormInputLabel }}
          descriptionProps={{ className: styles.welcomeFormInputDescription }}
        />
        <FileInput
          label="Business Logo (Optional)"
          placeholder="Upload Image"
          description="Lorem ipsum dolor sit amet consectetur."
          leftSection={<IconPlus size={18} />}
          inputWrapperOrder={["label", "input", "description", "error"]}
          labelProps={{ className: styles.welcomeFormInputLabel }}
          descriptionProps={{ className: styles.welcomeFormInputDescription }}
        />
      </Box>
    </Center>
  );
};

export default WelcomeFormComponent;
