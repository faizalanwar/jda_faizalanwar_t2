import Link from 'next/link';

const Navbar = () => (
    <div style={{ padding: 16, background: '#222', color: 'white', display: 'flex', gap: 16 }}>
        <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Beranda</Link>
        <Link href="/profile" style={{ color: 'white', textDecoration: 'none' }}>Profile</Link>
        <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        <Link href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
        <Link href="/product" style={{ color: 'white', textDecoration: 'none' }}>Product</Link>
        <Link href="/test-not-found" style={{ color: 'orange', textDecoration: 'none', marginLeft: 'auto' }}>Klik disini untuk testing not found </Link>
    </div>

);

export default Navbar; 