import { Route, Routes } from 'react-router-dom';
import { Home } from 'Pages/Home/Home';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Favorite } from 'Pages/Favorite/Favorite';

import { NotFound } from 'Pages/NotFound/NotFound';
import { Read } from 'Pages/Read/Read';

export const App = () => {
  return (
    <Routes>
      <Route path="/" Component={SharedLayout}>
        <Route index Component={Home} />
        <Route path="/favorite" Component={Favorite} />
        <Route path="/read" Component={Read} />
        <Route path="*" Component={NotFound} />
      </Route>
    </Routes>
  );
};
