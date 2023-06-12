function carregarDados() {
    // CARREGA CARDS
    let card = '';
    fetch('https://diwserver.vps.webdock.cloud/products?page=299&page_items=20')
    .then(res => res.json())
    .then(data => { 
        data.products.forEach(element => {
            let cardProduto =   `<div class="col-12 col-md-6 col-lg-4 col-xl-3 p-3">
                                    <div class="card col p-2 h-100">
                                        <img src="${element.image}" class="img-thumbnail" alt="productIMG">
                                        <div class="card-body">
                                            <h5><a href="./detalhes.html?${element.id}" class="card-link">${element.title}</a></h5>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">Categoria: ${element.category}</li>    
                                            <li class="list-group-item pricing">R$: ${element.price}</li>
                                        </ul>
                                    </div>
                                </div>`
            card += cardProduto;
        }); 
        document.getElementById("ProdutosCARD").innerHTML = card;
    })
    // CARREGA QUICK FIND OPTIONS
    let line = '';
    fetch('https://diwserver.vps.webdock.cloud/products/categories')
    .then(res => res.json())
    .then(data => { 
        data.forEach(element => {
            let optionline = `<option selected value="${element}">${element}</option>`
            line += optionline;
        }); 
        document.getElementById("select").innerHTML = line;
    })
}

window.onload = carregarDados();