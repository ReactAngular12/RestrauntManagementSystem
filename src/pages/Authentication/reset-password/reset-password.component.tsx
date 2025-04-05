import { useForm } from "@mantine/form";
import {
  Stack,
  Grid,
  Flex,
  Group,
  Title,
  Button,
  Text,
  PasswordInput,
} from "@mantine/core";
import { IconChevronLeft, IconX } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { LoginLeftSideComponent } from "@/components";
import { yupResolver } from "mantine-form-yup-resolver";
import { resetPasswordSchema } from "@/schemas/Authentication/resetPasswordSchema";

export const ResetPasswordComponent = () => {
  const form = useForm({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validateInputOnChange: true,
    validate: yupResolver(resetPasswordSchema),
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
              <Stack style={{ width: "100%", maxWidth: 400 }}>
                <Flex direction={"column"}>
                  <Title order={4} mt="lg">
                    Reset Password
                  </Title>
                  <Text size="12px" c="dimmed">
                    Set New Password.
                  </Text>
                </Flex>

                <Flex direction={"column"} gap="2rem">
                  <PasswordInput
                    fs={"14px"}
                    label="New Password"
                    placeholder="Enter New Password"
                    mt="md"
                    radius="md"
                    {...form.getInputProps("newPassword")}
                    styles={{
                      input: {
                        marginTop: "0.6rem",
                      },
                    }}
                    error={
                      form.errors.newPassword && (
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
                            {form.errors.newPassword}
                          </span>
                        </div>
                      )
                    }
                  />

                  <PasswordInput
                    fs={"14px"}
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    mt="md"
                    radius="md"
                    {...form.getInputProps("confirmPassword")}
                    styles={{
                      input: {
                        marginTop: "0.6rem",
                      },
                    }}
                    error={
                      form.errors.confirmPassword && (
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
                            {form.errors.confirmPassword}
                          </span>
                        </div>
                      )
                    }
                  />

                  <Button fullWidth mt="lg" color="#FA5729">
                    Reset Password
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
