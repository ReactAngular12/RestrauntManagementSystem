import { RouterProvider } from "react-router";
import { MantineProvider } from "@mantine/core";

import { routeList } from "./routes/route-list";

import { theme } from "./theme/theme";

const App = () => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <RouterProvider router={routeList} />
    </MantineProvider>
  );
};

export default App;
