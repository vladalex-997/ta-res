import Image from "next/image";

export default function Home() {
  return (
  <div>
  Hello  <i className="fa-solid fa-house"></i>
    <img src="/images/logo.jpg" alt="Alt" />

<button className="button button-primary">Button Primary</button>

<button className="button button-primary button-large">Button primary Large</button>

<a className="button button-primary">Button Primary</a>

<a className="button button-primary button-large">Button primary Large</a>



  </div>
  );
}
