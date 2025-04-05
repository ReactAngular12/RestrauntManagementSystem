import { LoginLeftSideComponent } from "@/components/loginLeftSide.component";
import {
  Stack,
  Grid,
  Flex,
  Group,
  Title,
  Anchor,
  PinInput,
  Button,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconChevronLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export const OTPVerificationComponent = () => {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      otp: "",
    },
  });

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
          <Stack w={400} h={"100vh"} justify={"space-between"} py="3rem">
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

            <Stack align="start" gap={"0.1rem"}>
              <Title order={3} mt="xl">
                Enter OTP
              </Title>
              <style>
                {`
                  .mantine-PinInput-input:not(:placeholder-shown) {
                    border: 1px solid #FA5729;
                  }
                `}
              </style>

              <Group justify="center" mt="xl">
                <PinInput
                  placeholder=""
                  length={4}
                  size="md"
                  type="number"
                  gap="lg"
                  {...form.getInputProps("otp")}
                />
              </Group>
              <Text size="12px" c="dimmed" mt="md" ta="center">
                Enter the OTP you received on your email id.
              </Text>

              <Button
                disabled={form.values.otp.length !== 4}
                type="submit"
                fullWidth
                mt="2rem"
                mb="1rem"
                color="#FA5729"
              >
                Submit
              </Button>

              <Stack align="center" justify="center" w="100%">
                <Anchor
                  href="#"
                  color="#FA5729"
                  underline="always"
                  size="sm"
                  ta="center"
                  mt="md"
                  fw={700}
                >
                  Resend
                </Anchor>
              </Stack>
            </Stack>

            <div></div>
          </Stack>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};
