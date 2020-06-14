export type CountryProps = {
  _id: string;
  name: string;
  code: string;
};

export type DayProps = {
  _id: string;
  country: string;
  date: Date;
  name: string;
};
