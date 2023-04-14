import Calculator from "./Screens/Home";
import History from "./Screens/History";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(): JSX.Element {
  //   const CalculatorContainer = connect((state: any) => ({
  //     calculator: state.calculator,
  //   }))(Calculator);

  //   const HistoryContainer = connect((state: any) => ({
  //     calculator: state.calculator,
  //   }))(HistoryExpresssions);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Calculator} />
          <Route path="/history" Component={History} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
