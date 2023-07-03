import './CategoriesList.css';

export const Categories = ({
  categories,
  selectCategories,
  isOpenFilterMenu,
  setIsOpenFilterMenu,
  clickFilter,
  currentUserDeviceShowNews,
  clickFilterShowCateg,
}) => {
  const filterCategoriesForDeviceList = () => {
    const categ = categories;
    if (currentUserDeviceShowNews === 'Tablet') {
      return categ.slice(4);
    }
    if (currentUserDeviceShowNews === 'Desctop') {
      return categ.slice(6);
    }
    return categ;
  };

  const filterCategoriesForDevice = () => {
    const categ = categories;
    if (currentUserDeviceShowNews === 'Tablet') {
      return categ.slice(0, 4);
    }
    if (currentUserDeviceShowNews === 'Desctop') {
      return categ.slice(0, 6);
    }
    return [];
  };

  console.log(
    '  filterCategoriesForDeviceList().indexOf(selectCategories) !== -1',
    filterCategoriesForDeviceList().filter(
      categ => categ.section === selectCategories
    ).length > 0
  );

  return (
    <>
      <ul className="how-categories-list">
        {filterCategoriesForDevice().map((categ, index) => (
          <li key={index} onClick={clickFilterShowCateg}>
            <button
              className={`show-categories ${
                selectCategories === categ.section
                  ? 'select-categories-search'
                  : ''
              }`}
            >
              <p data-inf={`${categ.section}`}>{categ.display_name}</p>
            </button>
          </li>
        ))}
        <li>
          <button
            onKeyDown={e => {
              if (e.code === 'Escape' && isOpenFilterMenu) {
                setIsOpenFilterMenu(!isOpenFilterMenu);
              }
            }}
            className={`open-categories ${
              !isOpenFilterMenu ? 'open-list-filter' : ''
            } ${
              filterCategoriesForDeviceList().filter(
                categ => categ.section === selectCategories
              ).length > 0
                ? 'select-categories-search'
                : ''
            }`}
            onClick={clickFilter}
          >
            {currentUserDeviceShowNews === 'Mobile' ? selectCategories : ''}
            {currentUserDeviceShowNews === 'Tablet'
              ? categories.map(sect => sect.section).indexOf(selectCategories) >
                3
                ? selectCategories
                : 'other'
              : ''}
            {currentUserDeviceShowNews === 'Desctop'
              ? categories.map(sect => sect.section).indexOf(selectCategories) >
                5
                ? selectCategories
                : 'other'
              : ''}
          </button>
        </li>

        <ul
          className={`filter-list ${
            isOpenFilterMenu ? 'is-open-filter-list' : ''
          }`}
        >
          <li onClick={clickFilter}>
            <span data-inf={`categories`}>
              {currentUserDeviceShowNews !== 'Mobile' ? 'Other' : 'Categories'}
            </span>
          </li>
          {filterCategoriesForDeviceList().map(categorie => (
            <li key={categorie.section} onClick={clickFilter}>
              <span data-inf={`${categorie.section}`}>
                {categorie.display_name}
              </span>
            </li>
          ))}
        </ul>
      </ul>
    </>
  );
};
