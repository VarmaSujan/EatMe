export default function Product({ title = "this is the default text", price }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>Price: {price}Kr</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis facere
        doloribus reprehenderit dolorum placeat obcaecati, asperiores omnis
        atque corporis error molestias natus blanditiis! Quaerat esse vero,
        dicta corporis cumque odio.
      </p>
    </article>
  );
}
