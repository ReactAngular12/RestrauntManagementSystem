import { LoginLeftSideComponent } from "@/components";
import {
  Stack,
  Grid,
  Title,
  Flex,
  Anchor,
  Image,
  Text,
  Group,
} from "@mantine/core";

export const EmailVerificationComponent = () => {
  return (
    <Stack h={"100vh"}>
      <Grid h={"100vh"}>
        <Grid.Col bg="#FDEAE5" span={{ base: 12, md: 6 }}>
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
            <Stack
              justify={"center"}
              align={"center"}
              h={"100vh"}
              w={"100%"}
              gap={"2rem"}
            >
              <Flex
                direction={"column"}
                justify={"center"}
                align={"center"}
                style={{ gap: "3rem" }}
              >
                <Group align={"center"} justify={"center"}>
                  <Image
                    src="/assets/icons/email.svg"
                    alt="Restaurant Illustration"
                  />
                </Group>

                <Title order={4} fw={700} fs="32px">
                  Verification Link Sent to your Email Id
                </Title>

                <Group gap={8} align={"center"} justify={"center"}>
                  <Text size={"14px"} c="#9A9B9A">
                    Please check your email id {""}
                    <Text component="text" color="#FA5729">
                      test@test.com.
                    </Text>
                  </Text>
                  <Text size={"14px"} c="#9A9B9A">
                    Click on the link in the email we just sent you.
                  </Text>
                </Group>

                <Anchor
                  // href="/login/forgot-password"
                  color="#FA5729"
                  size="sm"
                  mt="xs"
                  ta={"center"}
                  underline="always"
                >
                  Resend Link
                </Anchor>
              </Flex>
            </Stack>
          </form>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};

export default EmailVerificationComponent;
