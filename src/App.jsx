import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <MantineProvider >
      <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<Login />} />
            <Route path="/CamiADmin" element={<Dashboard />} />
          
        </Routes>
      </BrowserRouter>
    </MantineProvider>

  )
}

export default App
