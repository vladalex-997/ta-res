import ProductTile from '../catalog/ProductTile';

export default function HomeCatalogPreview(props) {
  const { products } = props;

  return (
    <section className="home-catalog-preview container">
      <header>
        <h1>
          <span>Glamour</span> suits
        </h1>

        <p>
          Accomplish new achievements with a bold new style from the brilliant
          collection of men's designer suits. <br></br>
          For the finest custom tailored experience, be sure to explore our
          selection of premium fabrics from one of the world's oldest fabric
          mills, Vitale Barberis Canonico.
        </p>
      </header>

      <ul className="product-tiles">
        {products.map((product, index) => {
          return (
            <li>
              <ProductTile key={index} product={product}></ProductTile>
            </li>
          );
        })}
        {/* <li>
          <ProductTile></ProductTile>
        </li>
        <li>
          <ProductTile></ProductTile>
        </li>
        <li>
          <ProductTile></ProductTile>
        </li> */}
      </ul>
    </section>
  );
}
