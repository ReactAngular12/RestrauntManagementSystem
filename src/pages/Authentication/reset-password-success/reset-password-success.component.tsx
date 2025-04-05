import { LoginLeftSideComponent } from "@/components";
import { Stack, Grid, Flex, Group, Title, Image, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export const ResetPasswordSuccessComponent = () => {
  const navigate = useNavigate();
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
          <form style={{ width: "100%" }}>
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
                    src="/assets/icons/success.svg"
                    alt="Restaurant Illustration"
                  />
                </Group>

                <Title order={4} fw={700} fs="32px">
                  Password has been Changed Successfully
                </Title>

                <Button
                  onClick={() => navigate("/login")}
                  fullWidth
                  mt="lg"
                  color="#FA5729"
                >
                  Back to Login
                </Button>
              </Flex>
            </Stack>
          </form>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};
