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

      <div className="mt-5">
        <span className="badge">new entry</span>
        <span className="badge badge-secondary">signed</span>
        <span className="badge badge-large">%</span>
        <span className="badge badge-large badge-secondary">%</span>
      </div>

  </div>
  );
}
