import { Route, Routes } from "react-router-dom";
import AddCustomer from "./pages/add-customer";
import Header from "./components/header";
import CustomerList from "./pages/customer-list";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<CustomerList />} />
        <Route path="/add-customer" element={<AddCustomer />} />
      </Routes>
    </div >
  );
}

export default App;
