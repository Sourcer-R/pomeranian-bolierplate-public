import './styles/footer.css';

const email = 'mariam8yunis@gmail.com';
const phone = '+48-518-130-491';

export function AppFooter() {
  return (
    <footer>
      <div>
        Projekt uzyskał dofinansowanie ze środków Unii Europejskiej z
        Europejskiego Funduszu Rozwoju
      </div>
      <a href={`mailto:${email}`}>{`Email: ${email}`}</a>
      <div>
        Regionalnego w ramach projektu grantowego „Invest in Pomerania 2020”.
      </div>
      <a href={`tel:${phone}`}>{`Tel: ${phone}`}</a>
    </footer>
  );
}
