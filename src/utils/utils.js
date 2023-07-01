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
