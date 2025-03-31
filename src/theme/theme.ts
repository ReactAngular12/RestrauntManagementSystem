import { createTheme, rem, em } from "@mantine/core";

export const theme = createTheme({
  colors: {
    pumpkin: [
      "#FFF5E7", // 50
      "#FDCDB0", // 100
      "#FCAA83", // 200
      "#F8866B", // 300
      "#F16447", // 400
      "#F14629", // 500
      "#F15025", // 600
      "#E14A09", // 700
      "#D04310", // 800
      "#A43715", // 900
    ],
    gray: [
      "#FAFAFA", // 50
      "#F5F5F5", // 100
      "#EEEEEE", // 200
      "#E0E0E0", // 300
      "#BDBDBD", // 400
      "#9E9E9E", // 500
      "#757575", // 600
      "#616161", // 700
      "#424242", // 800
      "#212121", // 900
    ],
    blackWhite: [
      "#000000", // 50
      "#0D0D0D", // 100
      "#1A1A1A", // 200
      "#262626", // 300
      "#333333", // 400
      "#404040", // 500
      "#4D4D4D", // 600
      "#5A5A5A", // 700
      "#666666", // 800
      "#FFFFFF", // 900
    ],
    surface: [
      "#FFFFFF", // 50
      "#FDFDFD", // 100
      "#FBFBFB", // 200
      "#FAFAFA", // 300
      "#F8F8F8", // 400
      "#F6F6F6", // 500
      "#F4F4F4", // 600
      "#F2F2F2", // 700
      "#F0F0F0", // 800
      "#EEEEEE", // 900
    ],
    background: [
      "#F5F5F5", // 50
      "#F3F3F3", // 100
      "#F1F1F1", // 200
      "#EFEFEF", // 300
      "#EDEDED", // 400
      "#EBEBEB", // 500
      "#E9E9E9", // 600
      "#E7E7E7", // 700
      "#E5E5E5", // 800
      "#E3E3E3", // 900
    ],
    text: [
      "#212121", // 50
      "#2A2A2A", // 100
      "#333333", // 200
      "#3D3D3D", // 300
      "#474747", // 400
      "#515151", // 500
      "#5B5B5B", // 600
      "#656565", // 700
      "#6F6F6F", // 800
      "#9E9E9E", // 900
    ],
  },
  primaryColor: "pumpkin", // Default primary color
  spacing: {
    xs: em(2),
    sm: em(4),
    md: em(8),
    lg: em(12),
    xl: em(16),
    "2xl": em(20),
    "3xl": em(24),
    "4xl": em(32),
    "5xl": em(40),
    "6xl": em(48),
    "7xl": em(56),
  },
  fontFamily: "Avenir, sans-serif",
  fontSizes: {
    xs: rem(12), // DescriptionSmall
    sm: rem(14), // DescriptionRegular
    md: rem(16), // Label
    lg: rem(18), // TitleSmall
    xl: rem(20), // TitleRegular
    "2xl": rem(24), // TitleLarge
    "3xl": rem(32), // HeadingSmall
    "4xl": rem(40), // HeadingLarge
  },
  headings: {
    fontFamily: "Avenir, sans-serif",
    sizes: {
      h1: { fontSize: rem(40), lineHeight: rem(48), fontWeight: "700" },
      h2: { fontSize: rem(32), lineHeight: rem(38), fontWeight: "700" },
      h3: { fontSize: rem(24), lineHeight: rem(28), fontWeight: "600" },
      h4: { fontSize: rem(20), lineHeight: rem(30), fontWeight: "600" },
      h5: { fontSize: rem(18), lineHeight: rem(27), fontWeight: "500" },
      h6: { fontSize: rem(16), lineHeight: rem(24), fontWeight: "500" },
    },
  },
  other: {
    text: {
      label: { fontSize: rem(16), lineHeight: rem(24), fontWeight: "500" },
      descriptionRegular: {
        fontSize: rem(14),
        lineHeight: rem(21),
        fontWeight: "400",
      },
      descriptionSmall: {
        fontSize: rem(12),
        lineHeight: rem(18),
        fontWeight: "400",
      },
    },
  },
});
