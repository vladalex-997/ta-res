import Footer from "../components/common/footer/Footer";
import Header from "../components/common/header/Header";
import BsCatalogPreview from '../components/homepage/BsCatalogPreview';
import HomeCatalogPreview from "../components/homepage/HomeCatalogPreview";
import HomeNewsletter from "../components/homepage/HomeNewsletter";
import HomePayment from "../components/homepage/HomePayment";
import Link from 'next/link';

export default function Home(){
  return(
<div>

<header className="header container mt-lg-5 mb-lg-3">
<Header></Header>
</header>

<main className="content">

<header className="banner-main">
          <div className="banner-main-inner container">
            <div>
              <h1>Office Suits</h1>
              <h2>Get back to work in style</h2>

              <Link
                href="/"
                title="CTA"
                className="banner-cta button button-large mt-lg-5"
              >
                Create Your Suit
              </Link>
            </div>

            <footer className="banner-main-copy">
              <p>
                <span>A Tailored Suit</span> that will fit you perfectly is a
                dream for everybody.
              </p>
              <p>
                We provide you with the design and you choose if you like it or
                if you want to change the details with our online configurator.
              </p>
            </footer>
          </div>
        </header>

<div className="content-main">

  <HomeCatalogPreview></HomeCatalogPreview>

  <HomeCatalogPreview></HomeCatalogPreview>


  <HomeCatalogPreview></HomeCatalogPreview>

  {/* <HomeCatalogPreview></HomeCatalogPreview> */}

  <BsCatalogPreview></BsCatalogPreview>

  <HomePayment></HomePayment>

  <HomeNewsletter></HomeNewsletter>



</div>
</main>

<footer className="footer">
<Footer></Footer>
</footer>

</div>

  );

}
