import Link from 'next/link';

const Header = () => {
  return(
  <header>
    <h1 className="custom-heading">PORTFOLIO</h1>

    <ul>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </ul>
  </header>
);
}
export default Header;
