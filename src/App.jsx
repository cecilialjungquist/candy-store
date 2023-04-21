import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './views/HomePage';
import CartPage from './views/CartPage';
import Layout from './views/Layout';
import CandyPage from './views/CandyPage';
import NoPage from './views/NoPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={'/cart'} element={<CartPage />} />
          <Route path={'/:id'} element={<CandyPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
