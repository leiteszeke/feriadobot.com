import Head from 'next/head';
import Link from 'next/link';
// Styled
import { Wrapper, Image, FlagList } from './styles';

export default function Home({ countries }) {
  return (
    <>
      <Head>
        <title>FeriadoBot</title>
      </Head>

      <Wrapper>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/FeriadoBot"
        >
          <Image src="/Robotito.png" alt="FeriadoBot" />
        </a>
        <FlagList>
          {countries?.map((country) => (
            <Link
              key={country._id}
              href="/[code]"
              as={`/${country.code.toLowerCase()}`}
            >
              <a>
                <span
                  className={`flag-icon flag-icon-${country.code.toLowerCase()}`}
                />
              </a>
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
