import moment from 'moment';

export const dateFormatter = (date) => {
  if (date) {
    return `${moment(date).format("MMMM Do YYYY")}`;
  }
};