import { Carousel } from "@mantine/carousel";
import { Group, Title, Text, Image, Stack } from "@mantine/core";

export const LoginLeftSideComponent = () => {
  return (
    <Stack
      style={{
        height: "100vh",
        backgroundColor: "#FDEAE5",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
      }}
      p={20}
    >
      <Group maw={580} p={{ base: 10, md: 20 }} gap={20} align="flex-start">
        <Text
          style={{ lineHeight: "40px", letterSpacing: "1px" }}
          size={"32px"}
          ta={"start"}
        >
          Streamline <br /> Your{" "}
          <Title order={1} component="span" c="#FA5729" fw={700}>
            Restaurant Operations
          </Title>
        </Text>
        <Text
          style={{ lineHeight: "20px", letterSpacing: "1px" }}
          c="#212121"
          fw={400}
          size={"12px"}
          maw={400}
        >
          A complete restaurant management solution for your seamless business
          operations...
        </Text>
      </Group>
      <Carousel
        styles={{
          indicator: {
            width: 8,
            height: 8,
            backgroundColor: "#000000",
          },
        }}
        withControls={false}
        withIndicators
        loop
        height={400}
      >
        <Carousel.Slide bg="none">
          <Group h={400}>
            <Image
              src="/assets/images/login.svg"
              alt="Restaurant Illustration"
            />
          </Group>
        </Carousel.Slide>
        <Carousel.Slide>
          <Group h={400}>
            <Image
              src="/assets/images/login.svg"
              alt="Restaurant Illustration"
            />
          </Group>
        </Carousel.Slide>
        <Carousel.Slide>
          <Group h={400}>
            <Image
              src="/assets/images/login.svg"
              alt="Restaurant Illustration"
            />
          </Group>
        </Carousel.Slide>
      </Carousel>
    </Stack>
  );
};
