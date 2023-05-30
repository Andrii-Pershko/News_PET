import { Route, Routes } from 'react-router-dom';

import { Home } from 'Pages/Home/Home';

import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="/tweets" element={<Users />} />
        <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};
