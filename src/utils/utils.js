export const formatDate = date => {
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  return days[date.getDay()];
};

export const formatDateNews = date => {
  const dateFormating = date.slice(0, 10).split('-');
  return `${dateFormating[2]}/${dateFormating[1]}/${dateFormating[0]}`;
};
export const formatDateNewsRead = date => {
  const dateFormating = date.slice(0, 10).split('-');
  return `${dateFormating[0]}/${dateFormating[1]}/${dateFormating[2]}`;
};

export const getDataFormat = date => {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (Number(month) < 10) {
    month = '0' + month;
  }
  if (Number(day) < 10) {
    day = '0' + day;
  }
  return `${day}/${month}/${year}`;
};

export const formatDateForPublishDate = date => {
  const dateFormating = date.slice(0, 10).split('-');
  return `${dateFormating[2]}/${dateFormating[1]}/${dateFormating[0]}`;
};

export const formatText = (text, currentUserDeviceShowNews) => {
  if (currentUserDeviceShowNews === 'Mobile') {
    if (text.length > 120) {
      return `${text.slice(0, 120)}...`;
    }
  }
  if (currentUserDeviceShowNews !== 'Mobile') {
    if (text.length > 200) {
      return `${text.slice(0, 200)}...`;
    }
  }

  return text;
};

export const formatTitle = title => {
  if (title.length > 65) {
    return `${title.slice(0, 65)}...`;
  }
  return title;
};

export const formatingDataReadRender = date => {
  const dateFormating = date.split('/');
  return `${dateFormating[2]}/${dateFormating[1]}/${dateFormating[0]}`;
};
