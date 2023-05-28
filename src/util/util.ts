type priceFormatT = (price: number) => string;
export const priceFormat: priceFormatT = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

type dateFormatT1 = (date: Date) => string;
export const dateFormat: dateFormatT1 = (date) => {
  return (
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    date.getDate().toString().padStart(2, "0")
  );
};
