import { Route, Routes } from 'react-router-dom';
import { Home } from 'Pages/Home/Home';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Favorite } from 'Pages/Favorite/Favorite';
import { Read } from 'Pages/Read/Read';
import { NotFound } from 'Pages/NotFound/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/read" element={<Read />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
