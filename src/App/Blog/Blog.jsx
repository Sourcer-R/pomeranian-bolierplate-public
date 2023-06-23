import { Autor } from './Autor/Autor';
import './styles.css';
import { Title } from './Title/Title';

export const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-post">
        <span className="blog-post-date"> 30-11-2022 </span>
        <Title text="Tytul A" />
        <p>
          Pop culture used to define a generation, but it seems the cultural,
          music and fashion trends of the 1990s have been recycled, and what
          Generation X considered its rite of passage into adulthood, is being
          discovered and claimed by fledgling grown-ups as their own.{' '}
        </p>
        <p1>
          There's been the resurgence of vinyl as the trend-setters' choice of
          music consumption rather than the ease of a digital download, and now
          the hipsters have discovered the nostalgic sound of a whirring
          cassette from which to enjoy the dulcet tones of everyone from
          Salt-N-Pepa to Rick Astley.
        </p1>

        <Autor author="Radosława Majdan" role="Senior Marketing Specialist" />
      </div>
      <div>
        <div className="blog-post-2">
          <span className="blog-post-date2"> 30-11-2022 </span>
          <Title text="Tytul B" />
          <p>
            The death of Queen Elizabeth II on September 8 at the age of 96
            represents a monumental shift for the British monarchy and the
            people of England. Royals have died before, of course, but the Queen
            ruled for more than 70 years, and represented a certain stability
            and decorum that held the institution of the Royal Family together
            as it slowly grew more visibly anachronistic and battered by endless
            scandals.
          </p>

          <Autor author="Radosława Majdan" role="Senior Marketing Specialist" />

          <ul>
            <li>
              <a
                className="blog-link"
                href="hhttps://www.figma.com/file/nkTW0gq2tPQbmJkJN9WAki/KURS_FRONT_END_DEVELOPER_ARP?type=design&node-id=692-6200&t=CuJztuWBqhxbsOf8-0"
                target="_blank"
              >
                WP.PL 1
              </a>
            </li>
            <li>
              <a
                className="blog-link"
                href="hhttps://www.figma.com/file/nkTW0gq2tPQbmJkJN9WAki/KURS_FRONT_END_DEVELOPER_ARP?type=design&node-id=692-6200&t=CuJztuWBqhxbsOf8-0"
                target="_blank"
              >
                WP.PL 2
              </a>
            </li>
            <li>
              <a
                className="blog-link"
                href="hhttps://www.figma.com/file/nkTW0gq2tPQbmJkJN9WAki/KURS_FRONT_END_DEVELOPER_ARP?type=design&node-id=692-6200&t=CuJztuWBqhxbsOf8-0"
                target="_blank"
              >
                ONET.PL
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
