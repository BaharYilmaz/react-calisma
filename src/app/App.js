import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./Routes";

function App({ store }) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
