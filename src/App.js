import "./App.css";
import Home from "./pages/Home";
import HotelInfo from "./pages/HotelInfo";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/hotels/:slug' element={<HotelInfo />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
