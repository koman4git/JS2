class ProductList{
    constructor(container = '.products'){
        this.container = container;
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000, img: 'https://img.mvideo.ru/Pdb/30043694b.jpg'},
            {id: 2, title: 'Mouse', price: 20, img: 'https://img.mvideo.ru/Pdb/50038582b.jpg'},
            {id: 3, title: 'Keyboard', price: 200, img: 'https://img.mvideo.ru/Pdb/50141063b.jpg'},
            {id: 4, title: 'Gamepad', price: 50, img: 'https://img.mvideo.ru/Pdb/50038762b.jpg'},
        ];
    }
    render(){
        const block = document.querySelector(this.container);
        for( let product of this.goods){
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend',productObj.render());
        }
    }
}

class ProductItem{
    constructor(product){
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = product.img;
    }
    render(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
                </div>`
    }
}

let list = new ProductList();
list.render();
