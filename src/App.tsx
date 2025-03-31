import { RouterProvider } from "react-router";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme/theme";
import { routeList } from "./routes/route-list";

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={routeList} />
    </MantineProvider>
  );
};

export default App;
