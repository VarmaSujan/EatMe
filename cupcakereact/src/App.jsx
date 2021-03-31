import Product from "./components/Products";

export default function App() {
  return (
    <header>
      <nav class="nav">
        <div>
          <img
            src="images/EatMe_CustomCakes_Logo_RGB.png"
            id="logo_nav"
            alt=""
          />
        </div>
        <div class="nav-list">
          <ul>
            <li>
              <a href="index.html" class="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="about.html" class="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="products.html" class="nav-link">
                Products
              </a>
            </li>
            <li>
              <a href="contact.html" class="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
