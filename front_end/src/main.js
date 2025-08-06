import './style.css'
import {Header, initHeaderEvents} from './components/header/header.js';
import {Product_section} from "./components/products_section/product_section.js";

document.querySelector('#app').innerHTML = `
  ${Header()}
  <div id="products">${Product_section([])}</div>
`;

initHeaderEvents();


