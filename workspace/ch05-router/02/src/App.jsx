import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {

  return (
    <RouterProvider router={ router } future={{ v7_fetcherPersist: true }}/>
  );
}

export default App