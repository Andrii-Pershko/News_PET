import './NotFoundNews.css';

export const NotFoundNews = () => {
  return (
    <div className="error">
      <p className="title-error">We haven’t found news from this category</p>
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet={`${require('../../img/not-found-img/not_found_mobile@1.png')}  1x, ${require('../../img/not-found-img/not_found_mobile@2.png')}  2x`}
          sizes="768px"
        />
        <source
          media="(max-width: 1279px)"
          srcSet={`${require('../../img/not-found-img/not_found_table@1.png')}  1x, ${require('../../img/not-found-img/not_found_table@2.png')}  2x,`}
          sizes="1279px"
        />
        <source
          srcSet={`${require('../../img/not-found-img/not_found.webp')} 1x, ${require('../../img/not-found-img/not_found@x2.webp')} 2x,`}
          sizes="1280px"
        />
        <img src="image-url-1280.jpeg" alt="not found news" />
      </picture>
    </div>
  );
};

// srcSet="image-url-300.jpg 300w, image-url-768.jpg 768w, image-url-1280.jpg 1280w"
