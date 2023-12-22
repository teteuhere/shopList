let totality;
clea();

function add(){
    let product = document.getElementById('produto').value;
    let name = product.split('-')[0];
    let value = product.split('R$')[1];
    let quantity = document.getElementById('quantidade').value; 
    let price = quantity * value;
    if (isNaN(value) || isNaN(quantity) || quantity <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return; }
    let car = document.getElementById('lista-produtos');
    car.innerHTML = car.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul"> ${quantity} x </span> ${name} <span class="texto-azul"> R$${value} </span>
</section>`;
    totality = totality + price;
    let totalid = document.getElementById('valor-total');
    totalid.textContent = `R$ ${totality}`;
    document.getElementById('quantidade').value = 0;
}
function clea(){
    totality = 0
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}