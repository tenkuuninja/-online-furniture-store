import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import { store } from "../redux";
import materialUiTheme from './customizeMaterialUi';
import AppRoutes from "./Routes";

import "styles/tailwind.css";
import "styles/main.css";

function App() {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={materialUiTheme}>
        <AppRoutes />
        <ToastContainer />
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
