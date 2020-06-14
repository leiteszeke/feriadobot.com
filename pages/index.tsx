import Head from 'next/head';
import Link from 'next/link';
// Styled
import { Wrapper, Image, FlagList } from './styles';
import { CountryProps } from '#types';

export default function Home({ countries }) {
  return (
    <>
      <Head>
        <title>FeriadoBot</title>
      </Head>

      <Wrapper>
        <a className="skip-link" href="#maincontent">
          Skip to main
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/FeriadoBot"
        >
          <picture>
            <source type="image/webp" srcSet="/Robotito.webp" />
            <source type="image/png" srcSet="/Robotito.png" />
            <Image alt="FeriadoBot" src="/Robotito.png" />
          </picture>
        </a>
        <FlagList id="maincontent">
          {countries?.map((country: CountryProps) => (
            <Link
              key={country._id}
              href="/[code]"
              as={`/${country.code.toLowerCase()}`}
            >
              <span
                className={`flag-icon flag-icon-${country.code.toLowerCase()}`}
              />
            </Link>
          ))}
        </FlagList>
      </Wrapper>
    </>
  );
}

export async function getStaticProps() {
  const request = await fetch(`${process.env.API_URL}countries/registered`);
  const response = await request.json();

  return {
    props: {
      countries: response.data
    }
  };
}
