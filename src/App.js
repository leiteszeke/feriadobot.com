// Dependencies
import React, { useEffect, useState } from "react";
import axios from "axios";
// Components
import CalendarItem from "./components/CalendarItem/CalendarItem";
// Config
import { API_URL } from "./env";
// Styled
import { Wrapper, Image, Loader, Header, FlagList } from "./styles";
// Images
import Robotito from './images/Robotito.png';
// Flags
import 'flag-icon-css/sass/flag-icon.scss';

const Loading = () => (
  <Wrapper>
    <Loader>Loading...</Loader>
  </Wrapper>
);

const BackButton = props => (
  <svg width={24} height={24} {...props}>
    <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
    <path fill="none" d="M0 0h24v24H0z" />
  </svg>
)

const CountrySelect = ({ countries, onChange }) => (
  <Wrapper>
    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/FeriadoBot">
      <Image src={Robotito} alt="FeriadoBot" />
    </a>
    <FlagList>
      {countries.map(country =>
        <span
          key={country._id}
          onClick={onChange(country.code)}
          className={`flag-icon flag-icon-${country.code.toLowerCase()}`}
        />
      )}
    </FlagList>
  </Wrapper>
);

const App = () => {
  const [countries, setCountries] = useState(null);
  const [country, setCountry] = useState(null);
  const [days, setDays] = useState(null);

  const fetchCountries = () =>
    axios
      .get(`${API_URL}countries/registered`)
      .then(res => setCountries(res.data.data));

  const fetchDays = () =>
    axios.get(`${API_URL}days/${country}`).then(res => setDays(res.data.data));
  const handleChange = country => () => setCountry(country);
  const clearCountry = () => setCountry(null);

  useEffect(() => {
    fetchCountries();
  }, []);


  useEffect(() => {
    setDays(null);

    if (country) {
      fetchDays();
    }
  }, [country]); // eslint-disable-line

  if (!countries) return <Loading />;

  if (!country)
    return <CountrySelect countries={countries} onChange={handleChange} />;

  if (!days) return <Loading />;

  return (
    <Wrapper className="withHeader">
      <Header>
        <BackButton onClick={clearCountry} />
      </Header>
      {days.map(day => (
        <CalendarItem key={day._id} {...day} />
      ))}
    </Wrapper>
  );
};

export default App;
