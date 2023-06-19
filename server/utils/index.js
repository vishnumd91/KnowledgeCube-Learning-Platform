export const getUnixTimestamp = (dateString) => {
  return Math.floor(dateString.getTime() / 1000);
};
