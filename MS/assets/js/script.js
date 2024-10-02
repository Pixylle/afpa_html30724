document.addEventListener('DOMContentLoaded', function() {
    // Обработчик для карусели
    const carouselWrapper = document.querySelector('.carousel-coverflow-wrapper');
    let angle = 0;

    document.querySelector('.carousel-control-next').addEventListener('click', () => {
        angle -= 60;
        carouselWrapper.style.transform = `rotateY(${angle}deg)`;
    });

    document.querySelector('.carousel-control-prev').addEventListener('click', () => {
        angle += 60;
        carouselWrapper.style.transform = `rotateY(${angle}deg)`;
    });

    // Обработчик для кнопок с данными
    const addToCartButtons = document.querySelectorAll('.btn-outline-success[data-bs-toggle="modal"]');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.getAttribute('data-item-name');
            const itemPrice = this.getAttribute('data-item-price');
            const itemDescription = this.getAttribute('data-item-description');

          
            
            
            document.getElementById('modalItemName').textContent = itemName;
            document.getElementById('modalItemPrice').textContent = 'Цена: ' + itemPrice;
            document.getElementById('modalItemDescription').textContent = 'Состав: ' + itemDescription;
        });
    });

    // Обработчик для кнопок "Добавить в корзину"
    const addToCartButtons2 = document.querySelectorAll('.btn-add-to-cart');
    addToCartButtons2.forEach(button => {
        button.addEventListener('click', function() {
            const card = button.closest('.card');
            const imgSrc = card.querySelector('.card-img-top').getAttribute('src');
            const title = card.querySelector('.card-title').textContent;
            const text = card.querySelector('.card-text').textContent;
            const price = card.querySelector('.card-title').textContent;

            const modalImage = document.querySelector('#addToCartModal .modal-body img');
            const modalTitle = document.querySelector('#addToCartModal .modal-body h5');
            const modalDescription = document.querySelector('#addToCartModal .modal-body p:nth-of-type(1)');
            const modalPrice = document.querySelector('#addToCartModal .modal-body p:nth-of-type(2)');

            modalImage.setAttribute('src', imgSrc);
            modalTitle.textContent = title;
            modalDescription.textContent = text;
            modalPrice.textContent = `Цена: ${price}`;

            const modal = new bootstrap.Modal(document.getElementById('addToCartModal'));
            modal.show();
        });
    });
});
