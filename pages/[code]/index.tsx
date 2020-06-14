import Head from 'next/head';
import Router from 'next/router';
import { DayProps, CountryProps } from '#types';
import CalendarItem from '#components/CalendarItem/CalendarItem';
import moment from 'moment';
// Styled
import { Wrapper, Header } from './styles';

const BackButton = ({ onClick }) => (
  <svg width={24} height={24} onClick={onClick}>
    <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
    <path fill="none" d="M0 0h24v24H0z" />
  </svg>
);

export default function Days({ country, days }) {
  const goBack = () => Router.back();

  return (
    <>
      <Head>
        <title>FeriadoBot - {country.name}</title>
      </Head>
      <Wrapper>
        <Header>
          <BackButton onClick={goBack} />
        </Header>
        {days.map((day: DayProps) => (
          <CalendarItem key={day._id} {...day} />
        ))}
      </Wrapper>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { code } = params;
  const today = moment().format('YYYY-MM-DD');
  const daysReq = await fetch(
    `${process.env.API_URL}days/${code}?dateFrom=${today}`
  );
  const { data: days } = await daysReq.json();

  const countryReq = await fetch(`${process.env.API_URL}countries/${code}`);
  const { data: country } = await countryReq.json();

  return {
    props: {
      days,
      country
    }
  };
}

export async function getStaticPaths() {
  const request = await fetch(`${process.env.API_URL}countries`);
  const response = await request.json();

  const paths = response.data.map((country: CountryProps) => ({
    params: { code: country.code.toLowerCase() }
  }));

  return {
    paths,
    fallback: false
  };
}
