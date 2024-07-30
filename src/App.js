import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TestLayout from "./pages/TestLayout";
import Layout from "./layouts/Layout";
import TestLayoutForm from "./pages/TestLayoutForm";
import TestSelect from "./pages/TestSelect";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="test-layout" element={<TestLayout />} />
            <Route path="test-layout-form" element={<TestLayoutForm />} />
            <Route path="test-select" element={<TestSelect />} />
          </Route>
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
