// Create a footer component that displays the current year, the name of the company.

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} - Educati
      </p>
    </footer>
  );
}

export default Footer;