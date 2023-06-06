import { ReactSVG } from 'react-svg';
import sbg from '../../img/svg/svg_sprite.svg';

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <ReactSVG src={`${sbg}#icon-calendar`} />
    </>
  );
};
