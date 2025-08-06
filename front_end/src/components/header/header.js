import './header.css'
import logoUrl from '../../assets/logo.png';
import { Product_section } from '../products_section/product_section.js';


export function Header() {

    return `
    <nav class="container_header">
      <div class="container_header_img">
        <img src="${logoUrl}" alt=""/>
      </div>
      <div class="container_header_search">
        <input type="text" name="search" id="search-product" placeholder="Search..."/>
        <button id="search-button">Search</button>
      </div>
    </nav>
  `;
}

export function initHeaderEvents() {
    const btn = document.querySelector('#search-button');
    const input = document.querySelector('#search-product');

    if (!btn || !input) return;

    btn.addEventListener('click', () => {
        const query = input.value.trim();
        if (!query) return;

        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://localhost:3000/api/scrape?keyword=${encodeURIComponent(query)}&page=1`, true);

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    const data = JSON.parse(xhr.responseText);
                    document.querySelector('#products').innerHTML = Product_section(data);
                } else {
                    console.error('Error:', xhr.status, xhr.statusText);
                }
            }
        };

        xhr.send();
    });
}