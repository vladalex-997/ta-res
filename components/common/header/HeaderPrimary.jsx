import Link from "next/link";

export default function HeaderPrimary(){
  return <>
  <nav className="nav-primary">
    <ul>
      <li>
        <Link href="/" title="Home">Home</Link>
      </li>

      <li>
        <Link href="/" title="Costume">Costume</Link>
      </li>

      <li>
        <Link href="/" title="Camasi">Camasi</Link>
      </li>

      <li>
        <Link href="/" title="Accesorii">Accesorii</Link>
      </li>
    </ul>
  </nav>
  <nav className="nav-secondary">
    <ul>
      <li>
        <Link href="/" title="Glamour Suits">Glamour Suits</Link>
      </li>

      <li>
        <Link href="/" title="Wedding Suits">Wedding Suits</Link>
      </li>

      <li>
        <Link href="/" title="Office Suits">Office Suits</Link>
      </li>

      <li>
        <Link href="/" title="Customize your Suit">Customize your Suit</Link>
      </li>
    </ul>
  </nav>
  </>;
}
