import './Container.css';

export const Container = ({ children }) => {
  const theme = JSON.parse(localStorage.getItem('Theme')) ?? false;
  console.log('container', theme);

  return (
    <div className={`theme ${theme ? 'dark-theme' : 'white-theme'}`}>
      <div className={`container`}>{children}</div>
    </div>
  );
};
