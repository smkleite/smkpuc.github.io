let url = window.location.href;
let id = url.split('?')[1];

function CarregarCard() {
  let card = '';
  fetch(`https://diwserver.vps.webdock.cloud/products/${id}`)
    .then(res => res.json())
    .then(element => {
      let cardProduto = `<div class="col m-2 mb-3">
                          <div class="card h-100 p-3">
                            <div class="row g-0">
                              <div class="col-md-6">
                                <img src="${element.image}" class="img-fluid rounded-start p-1" alt="productIMG">
                              </div>
                              <div class="col-md-6">
                                <div class="card-body">
                                <br><h2 class="text-center"><a href="./detalhes.html?${element.id}" class="card-link">${element.title}</a></h2><br><br><br>
                                  <p class="card-text">Categoria: ${element.category}</p>
                                  <p class="card-text">Tags: ${element.brandName}, ${element.season}, ${element.usage}, 
                                  ${element.gender}, ${element.baseColour}, ${element.year}, ${element.articleType}, ${element.displayCategories}</p>
                                  <p class="card-text">Rating: ${element.rating.rate} de 5.0 (${element.rating.count} Avaliações)</p><br>
                                  <div class="row">
                                    <div class="col">
                                    <p class="card-text pricing mb-0">R$: ${element.price}</p>
                                    </div>
                                    <div class="col">
                                    <button class="btn w-100 mt-2" type="submit">COMPRAR</button><br><br><br>
                                    </div>
                                  </div>
                                  <p class="card-text"><small class="text-body-secondary">À vista no PIX com 10% OFF<br>
                                  Em até 10x sem juros no cartão</small><br><a href="#">Ver mais opções de pagamento</a></p><br><br><br>
                                  <h6>Consultar frete e prazo de entrega</h6>
                                  <div class="input-group mb-3 w-50">
                                  <input type="text" class="form-control" placeholder="Insira o CEP" aria-label="Insira o CEP" aria-describedby="button-addon2">
                                  <button class="btn" type="button" id="button-addon2">OK</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="accordion mt-4" id="accordionPanelsStayOpenExample">
                              <div class="accordion-item">
                                <h2 class="accordion-header">
                                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                  <i class="me-2 fa-solid fa-file-lines fa-xl"></i><strong>DESCRIÇÃO DO PRODUTO</strong>
                                  </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                  <div class="accordion-body">
                                    ${element.description}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>`
      card += cardProduto;
      document.getElementById("ProdutosCARD").innerHTML = card;
    });
};

window.onload = CarregarCard();