import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#333', padding: '1rem' }}>
      <Link href="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>
        Dashboard
      </Link>
      <Link href="/contact" style={{ color: 'white', textDecoration: 'none' }}>
        Contact
      </Link>
      <Link href="/aboutus" style={{ color: 'white', textDecoration: 'none' }}>
        About Us
      </Link>
    </nav>
  );
}
