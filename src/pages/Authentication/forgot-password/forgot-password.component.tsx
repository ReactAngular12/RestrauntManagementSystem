import { LoginLeftSideComponent } from "@/components";
import {
  Stack,
  Grid,
  Flex,
  Group,
  Title,
  TextInput,
  Button,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconChevronLeft, IconX } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export const ForgotPasswordComponent = () => {
  const form = useForm({
    initialValues: {
      email: "",
    },
    validateInputOnChange: true,
  });

  const navigate = useNavigate();

  return (
    <Stack h={"100vh"}>
      <Grid h={"100vh"}>
        <Grid.Col bg="#FDEAE5" span={{ base: 12, md: 6 }}>
          <LoginLeftSideComponent />
        </Grid.Col>

        <Grid.Col
          h={"100vh"}
          span={{ base: 12, md: 6 }}
          style={{
            display: "flex",
            alignItems: "space-around",
            justifyContent: "center",
          }}
        >
          <Stack w={400} h={"100vh"} justify={"space-around"} py="3rem">
            <Group align={"start"} justify={"start"} mt="5rem">
              <Flex justify="start" align="start" gap={10}>
                <Group
                  onClick={() => navigate(-1)}
                  style={{ borderRadius: "20px" }}
                  bg="#EEEEEE"
                  p={2}
                  w="fit-content"
                >
                  <IconChevronLeft radius="lg" size={14} />
                </Group>
                <Text size="sm">Back</Text>
              </Flex>
            </Group>

            <form>
              <Stack gap="2rem" style={{ width: "100%", maxWidth: 400 }}>
                <Flex direction={"column"}>
                  <Title order={4} mt="lg">
                    Forgot Password
                  </Title>
                  <Text size="12px" c="dimmed">
                    Enter your email id.
                  </Text>
                </Flex>

                <Flex direction={"column"} gap="2rem">
                  <TextInput
                    label="Email Id"
                    placeholder="Enter Email id"
                    mt="md"
                    radius="md"
                    {...form.getInputProps("email")}
                    error={
                      form.errors.email && (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            marginTop: "0.3rem",
                          }}
                        >
                          <IconX
                            size={16}
                            color="white"
                            style={{
                              backgroundColor: "red",
                              padding: "0.2rem",
                              borderRadius: "10px",
                            }}
                          />
                          <span style={{ color: "red" }}>
                            {form.errors.email}
                          </span>
                        </div>
                      )
                    }
                    styles={{
                      input: {
                        marginTop: "0.6rem",
                      },
                    }}
                  />

                  <Button fullWidth mt="lg" color="#FA5729">
                    Continue
                  </Button>
                </Flex>
              </Stack>
            </form>

            <div></div>
          </Stack>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};

export default ForgotPasswordComponent;
