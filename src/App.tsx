import { RouterProvider } from "react-router";
import { MantineProvider } from "@mantine/core";

import { routeList } from "./routes/route-list";

const App = () => {
  return (
    <MantineProvider>
      <RouterProvider router={routeList} />
    </MantineProvider>
  );
};

export default App;
