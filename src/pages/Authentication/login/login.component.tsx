import {
  Stack,
  Grid,
  Title,
  Text,
  TextInput,
  PasswordInput,
  Button,
  Anchor,
  Flex,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { yupResolver } from "mantine-form-yup-resolver";
import { loginSchema } from "../../../schemas/Authentication/loginSchema";
import { LoginLeftSideComponent } from "@/components";
import { IconX } from "@tabler/icons-react";
import "@mantine/carousel/styles.css";

export const LoginComponent = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validateInputOnChange: true,
    validate: yupResolver(loginSchema),
  });

  return (
    <Stack>
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <LoginLeftSideComponent />
        </Grid.Col>

        <Grid.Col
          span={{ base: 12, md: 6 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          mih={"100vh"}
        >
          <form style={{ width: "100%", maxWidth: 400 }}>
            <Stack w={"100%"} gap={"2rem"}>
              <Title order={2} c="#FB6C44" fw={700} fs="32px">
                Hello,
              </Title>

              <Flex direction={"column"} style={{ gap: "0.8rem" }}>
                <Title order={4} mt="lg">
                  Login
                </Title>

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

                <PasswordInput
                  fs={"14px"}
                  label="Password"
                  placeholder="Enter Password"
                  mt="md"
                  radius="md"
                  {...form.getInputProps("password")}
                  styles={{
                    input: {
                      marginTop: "0.6rem",
                    },
                  }}
                  error={
                    form.errors.password && (
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
                          {form.errors.password}
                        </span>
                      </div>
                    )
                  }
                />

                <Anchor
                  href="/login/forgot-password"
                  color="#FA5729"
                  size="sm"
                  mt="xs"
                  ta={"end"}
                >
                  Forgot Password?
                </Anchor>
                <Button fullWidth mt="lg" color="#FA5729" type="submit">
                  Login
                </Button>

                <Text ta={"center"} mt="md">
                  Don't Have an Account?{" "}
                  <Anchor href="/signup" color="#FA5729">
                    Sign Up
                  </Anchor>
                </Text>
              </Flex>
            </Stack>
          </form>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};

export default LoginComponent;
