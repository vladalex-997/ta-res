import Link from "next/link";

export default function HeaderSecondary() {
  return (
   <>
      <di className="header-logo">
          <Link href="/" title="Thread Affair">
            <img src="/images/logo.jpg" alt="Thread Affair -Logo" />
          </Link>
      </di>

      <div className="header-search d-block d-lg-none">
        <ul>
          <li>
             <Link href="/" title="Menu">
                <i className="fa-solid fa-bars"></i>
              </Link>
          </li>

          <li>
            <Link href="/" title="Search">
              <i className="fa-solid fa-search"></i>
            </Link>
          </li>
        </ul>

      </div>

      <div className="header-support d-none d-lg-block">
        <ul>
          <li>
            <a href="tel:+0741678953" title="Call Us">
              <i className="fa-solid fa-phone"></i>
            Toll Free 1-877-666-1840
            </a>
          </li>
          <li>
            <a href="mailto:wtv@pixellab.ro" title="Email us">
              office@traidaffairs.com
            </a>
          </li>
        </ul>
      </div>

      <div className="header-controls">
        <ul>
          <li>
            <Link href="/" title="Cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="qty d-none d-lg-flex">3</span>
            </Link>
          </li>

          <li>
            <Link href="/" title="My Account">
              <i className="fa-solid fa-user"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
