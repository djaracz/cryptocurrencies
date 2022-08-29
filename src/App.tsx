import { Provider } from "react-redux";
import { store } from "./store/store";
import { CryptocurrenciesPage } from "./page/CryptocurrenciesPage/CryptocurrenciesPage";
import { Content } from "./component/Content/Content";

function App() {
  return (
    <Provider store={store}>
      <Content>
        <CryptocurrenciesPage />
      </Content>
    </Provider>
  );
}

export default App;
