import './Container.css';

export const Container = ({ children }) => {
  const theme = localStorage.getItem('Theme') ?? false;

  return (
    <div className={`theme ${theme ? 'dark-theme' : 'white-theme'}`}>
      <div className={`container`}>{children}</div>
    </div>
  );
};
