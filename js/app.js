
function Order(name, price, imageUrl) {
  this.name = name;
  this.price = price;
  this.imageData = imageUrl; 
}

let orders = JSON.parse(localStorage.getItem('orders')) || [];

const form = document.getElementById('orderForm');
const ordersTable = document.querySelector('#ordersTable tbody');
const clearBtn = document.getElementById('clearOrders');


window.onload = () => {
  renderOrderList();
};


form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('mealName').value;
  const price = document.getElementById('mealPrice').value;
  const imageUrl = document.getElementById('mealImage').value;

  const newOrder = new Order(name, price, imageUrl);

  orders.push(newOrder);
  localStorage.setItem('orders', JSON.stringify(orders));

  renderOrderList();
  form.reset();
});


clearBtn.addEventListener('click', () => {
  localStorage.removeItem('orders');
  orders = [];
  renderOrderList();
});


function renderOrderList() {
  ordersTable.innerHTML = '';
  orders.forEach(order => {
    const row = document.createElement('tr');

    const nameId = document.createElement('td');
    nameId.textContent = order.name;

    const priceId = document.createElement('td');
    priceId.textContent = `${order.price} JOD`;

    const imgId = document.createElement('td');
    const img = document.createElement('img');
    img.src = order.imageData;
    img.alt = order.name;
    img.width = 100;
    imgId.appendChild(img);

    row.appendChild(nameId);
    row.appendChild(priceId);
    row.appendChild(imgId);

    ordersTable.appendChild(row);
  });
}
