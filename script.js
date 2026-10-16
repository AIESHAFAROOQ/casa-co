const products = [
 {name:"Linen Cushion",category:"Textiles",price:24,icon:"🛋️",description:"A soft neutral cushion for a relaxed living space."},
 {name:"Stoneware Vase",category:"Decor",price:32,icon:"🏺",description:"A sculptural vase for flowers or a shelf display."},
 {name:"Everyday Tray",category:"Everyday",price:18,icon:"🪵",description:"A useful tray for keys, candles, or small essentials."},
 {name:"Woven Throw",category:"Textiles",price:45,icon:"🧶",description:"A cosy layer for a sofa or reading chair."},
 {name:"Table Candle",category:"Decor",price:14,icon:"🕯️",description:"A simple candle to create a warm atmosphere."},
 {name:"Ceramic Mug",category:"Everyday",price:12,icon:"☕",description:"A handmade-style mug for your daily tea or coffee."}
];
const grid=document.getElementById("productGrid");
if(grid){
 const search=document.getElementById("productSearch"), filter=document.getElementById("categoryFilter"), count=document.getElementById("resultText"), empty=document.getElementById("emptyState");
 function render(){
  const term=search.value.trim().toLowerCase(), cat=filter.value;
  const shown=products.filter(p=>(p.name.toLowerCase().includes(term)||p.description.toLowerCase().includes(term))&&(cat==="All"||p.category===cat));
  grid.innerHTML=shown.map(p=>`<article class="product-card"><div class="product-art" aria-hidden="true">${p.icon}</div><div class="product-info"><span class="product-category">${p.category}</span><h2>${p.name}</h2><p>${p.description}</p><div class="product-bottom"><b>$${p.price.toFixed(2)}</b><button type="button" data-product="${p.name}">Quick view</button></div></div></article>`).join("");
  count.textContent=`Showing ${shown.length} of ${products.length} sample products`;empty.hidden=shown.length>0;
 }
 search.addEventListener("input",render);filter.addEventListener("change",render);
 grid.addEventListener("click",e=>{const b=e.target.closest("[data-product]");if(!b)return;const p=products.find(x=>x.name===b.dataset.product);if(p)alert(`${p.name}\nCategory: ${p.category}\nPrice: $${p.price.toFixed(2)}\n\n${p.description}`)});
 render();
}
const newsletterForm=document.getElementById("newsletterForm");
if(newsletterForm)newsletterForm.addEventListener("submit",e=>{e.preventDefault();document.getElementById("newsletterMsg").textContent="Thanks! This demo form does not send or store emails.";newsletterForm.reset()});
const contactForm=document.getElementById("contactForm");
if(contactForm)contactForm.addEventListener("submit",e=>{e.preventDefault();document.getElementById("contactMsg").textContent="Thanks for your message! This demo form is front-end only and does not send email.";contactForm.reset()});
