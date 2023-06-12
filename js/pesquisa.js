// SEARCH BAR

//DESKTOP
let button = document.getElementById('buttoninput');

button.addEventListener("click", function(e) {
    e.preventDefault()

    var input = document.getElementById('userinput');
    var texto = input.value;

    let card = '';
    fetch(`https://diwserver.vps.webdock.cloud/products/search?query=${texto}`)
    .then(res => res.json())
    .then(data => { 
        if(data.length !== 0) {
            data.forEach(element => {
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
        }else {
            alert("Nenhum produto foi encontrado com esse critério de busca.\nTente novamente com outro critério!")
        }
    })
})

//MOBILE
    let buttonM = document.getElementById('buttoninputmobile');

    buttonM.addEventListener("click", function(e) {
        e.preventDefault()
    
        var input = document.getElementById('userinputmobile');
        var texto = input.value;
    
        let card = '';
        fetch(`https://diwserver.vps.webdock.cloud/products/search?query=${texto}`)
        .then(res => res.json())
        .then(data => { 
            if(data.length !== 0) {
                data.forEach(element => {
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
            }else {
                alert("Nenhum produto foi encontrado com esse critério de busca.\nTente novamente com outro critério!")
            }
        })
    })
// SEARCH BAR END

// QUICK FIND
let buttonqf = document.getElementById('buttonselect');

buttonqf.addEventListener("click", function(e) {
    e.preventDefault()
    var select = document.getElementById('select');
    var valor = select.value;
    console.log(valor)

    let card = '';
    fetch(`https://diwserver.vps.webdock.cloud/products/category/${valor}`)
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
})
// QUICK FIND END