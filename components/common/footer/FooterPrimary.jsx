import Link from "next/link";

export default function FooterPrimary(){
  return (
  <div className="container footer-primary-inner">
<nav className="footer-nav">
<ul>
  <li>
    <Link href="/" title="Information">Information</Link>
  </li>

  <li>
    <Link href="/" title="Contact Us">Contact Us</Link>
  </li>

  <li>
    <Link href="/" title="Track my order">Track my order</Link>
  </li>

  <li>
    <Link href="/" title="Shipping">Shipping</Link>
  </li>

  <li>
    <Link href="/" title="Free Returns*">Free Returns*</Link>
  </li>

  <li>
    <Link href="/" title="My account">My account</Link>
  </li>
</ul>

<ul>
  <li>
    <Link href="/" title="Services">Services</Link>
  </li>

  <li>
    <Link href="/" title="Gift card">Gift card</Link>
  </li>

  <li>
    <Link href="/" title="Online only">Online only</Link>
  </li>

  <li>
    <Link href="/" title="Tips & Tricks">Tips & Tricks</Link>
  </li>

  <li>
    <Link href="/" title="Ship to store">Ship to store</Link>
  </li>

  <li>
    <Link href="/" title="Home">Home</Link>
  </li>
</ul>

<ul>
  <li>
    <Link href="/" title="Loyalty Programs">Loyalty Programs</Link>
  </li>

  <li>
    <Link href="/" title="Sign up to the simons">Sign up to the simons</Link>
  </li>

  <li>
    <Link href="/" title="My account">My account</Link>
  </li>

  <li>
    <Link href="/" title="Conditions">Conditions</Link>
  </li>

  <li>
    <Link href="/" title="Faq">Faq</Link>
  </li>


</ul>

<ul>
  <li>
    <Link href="/" title="Carreers">Carreers</Link>
  </li>

  <li>
    <Link href="/" title="About us">About us</Link>
  </li>

  <li>
    <Link href="/" title="Our story">Our story</Link>
  </li>

  <li>
    <Link href="/" title="Art & Culture">Art & Culture</Link>
  </li>

  <li>
    <Link href="/" title="Our private labels">Our private labels</Link>
  </li>

  <li>
    <Link href="/" title="Stores">Stores</Link>
  </li>
</ul>
</nav>

<section className="footer-contact">
<h1><span>Thread Affair</span>  Milano</h1>

<p>Largo Augusto 3, Milano, 20122, Milano, IT

  <a
    href="tel:0039 02 760 003 66"
    title="Call us"
  >Tel: 0039 02 760 003 66</a>

  <a
    href="mailto:officethread-affair.com"
    title="Email us"
  >office@thread-affair.com</a>
</p>
</section>

<nav className="footer-support">
<ul>
  <li>
    <a href="tel:+071234571" title="Call us">
      <i className="fa-solid fa-phone"></i>
      Support
    </a>
  </li>

  <li>
    <a href="/" title="Chat with us">
      <i className="fa-solid fa-comment"></i>
      Chat
    </a>
  </li>

  <li>
    <a href="mailto:gogu@gigel.com" title="Email us">
      <i className="fa-solid fa-at"></i>
      Email
    </a>
  </li>


</ul>
</nav>
  </div>
  );
}
