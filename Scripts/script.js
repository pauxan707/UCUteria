export const PRODUCTS = [
  { id: "c1", name: "Espresso",      price: 120, category: "Café",       img: "☕️", desc: "Corto e intenso." },
  { id: "c2", name: "Latte",         price: 180, category: "Café",       img: "🥛☕️", desc: "Con leche espumada." },
  { id: "t1", name: "Té Verde",      price: 140, category: "Té",         img: "🍵", desc: "Suave y herbal." },
  { id: "t2", name: "Té Chai",       price: 160, category: "Té",         img: "🫖", desc: "Especias aromáticas." },
  { id: "p1", name: "Medialuna",     price: 90,  category: "Pastelería", img: "🥐", desc: "Mantecosas y doradas." },
  { id: "p2", name: "Torta Choc",    price: 220, category: "Pastelería", img: "🍰", desc: "Fudge intenso." },
  { id: "s1", name: "Sándwich Jamón",price: 260, category: "Sándwiches", img: "🥪", desc: "Clásico de la casa." },
  { id: "s2", name: "Veggie Grill",  price: 280, category: "Sándwiches", img: "🥗", desc: "Verduras asadas." }
];

function traerProductos(lista){
    const contenido = document.getElementsById("comidasLista");
    contenido.innerHTML = "";

    lista.forEach(comida => {
        const li = document.createElement("li");
        li.innerHTML = `<h3>${comida.name}</h3><p>${comida.desc}</p><p><strong>${comida.price}</strong></p>
        <button onclick="agregarCarrito('${comida.id}')">Agregar al carrito</button>`;
    contenido.appendChild(li);
    });
    
}
