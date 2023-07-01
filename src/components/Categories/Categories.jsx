export const Categories = ({
  categories,
  selectCategories,
  isOpenFilterMenu,
  setIsOpenFilterMenu,
  clickFilter,
}) => {
  
  return (
    <>
      <button
        onKeyDown={e => {
          if (e.code === 'Escape' && isOpenFilterMenu) {
            setIsOpenFilterMenu(!isOpenFilterMenu);
          }
        }}
        className={`open-categories ${
          !isOpenFilterMenu ? 'open-list-filter' : ''
        }`}
        onClick={clickFilter}
      >
        {selectCategories}
      </button>

      <ul
        className={`filter-list ${
          isOpenFilterMenu ? 'is-open-filter-list' : ''
        }`}
      >
        <li onClick={clickFilter}>
          <span data-inf={`categories`}>Categories</span>
        </li>
        {categories.map(categorie => (
          <li key={categorie.section} onClick={clickFilter}>
            <span data-inf={`${categorie.section}`}>
              {categorie.display_name}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
