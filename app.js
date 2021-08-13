const galleryItems = [
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
        description: 'Hokkaido Flower',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
    },
];

const galleryList = document.querySelector('.js-gallery');
const modal = document.querySelector(".lightbox");
const image = document.querySelector('.lightbox__image');





// Создаём изображения----------------------------------

    const gallery = galleryItems.map((item) => {

    // Создаем <li>
    const listItem = document.createElement('li');
    listItem.classList.add('gallery__item');
    
    // Создаем <a>
    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.setAttribute('href', item.original)

    // Создаем <img>
    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.setAttribute('src', item.preview);
    image.setAttribute('data-source', item.original);
    image.setAttribute('alt', item.description);
    

    // Создаем ветку
    link.append(image);
    listItem.append(link);

    return listItem;
   
    })

    // Встраиваем в html
    galleryList.append(...gallery);

// ------------------------------------------------------------

// Модалка-----------------------------------------------
galleryList.addEventListener('click', galaryClickHandler);
    
function galaryClickHandler(evt) {
    evt.preventDefault();
    if (event.target.nodeName !== "IMG") return;

    // Открытие модалки
    modal.classList.add('is-open');

    // Изображение
    const image = document.querySelector('.lightbox__image');

    image.setAttribute('src', event.target.dataset.source)
    image.setAttribute('alt', event.target.alt)
    
    // Закрытие модалки
    const modalCloseBtn = document.querySelector('.lightbox__button');
    modalCloseBtn.addEventListener('click', modalCloseClickHandler);

     function modalCloseClickHandler() {

        modal.classList.remove('is-open');
        
        image.removeAttribute('src');
        
    }
    
}

// ---------------------------------------------------------------

// Закрытие модального окна по клику на div.lightbox__overlay.----

const overlay = document.querySelector('.lightbox__overlay');
overlay.addEventListener('click', overlayCloseClickHandler)

function overlayCloseClickHandler(evt) {

    modal.classList.remove('is-open');
    image.removeAttribute('src');

}

// ---------------------------------------------------------------

// Закрытие модального окна по нажатию клавиши ESC.---------------

window.addEventListener('keydown', overlayCloseEscHandler)

function overlayCloseEscHandler(evt) {

    if (evt.key === "Escape") {
        modal.classList.remove('is-open');
        image.removeAttribute('src');
    }

}

// ---------------------------------------------------------------

// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".

// Вправо

window.addEventListener('keydown', changeImageKeyRightHandler);
const smallImage = document.querySelector('.gallery__image');

function changeImageKeyRightHandler(evt) {
    if (evt.key === 'ArrowRight') {


        for (let i = 0; i < galleryItems.length; i += 1){
                
            if (galleryItems[i].original === image.src) {
                   

                if (i === galleryItems.length - 1) {
                        return;
                }
                    
                image.setAttribute('src', galleryItems[i + 1].original)
                break;
            }
        }
    }       
}

// Влево

window.addEventListener('keydown', changeImageKeyLeftHandler);

function changeImageKeyLeftHandler(evt) {

    if (evt.key === 'ArrowLeft') {
        
        for (let i = 0; i < galleryItems.length; i += 1) {
        
            if (galleryItems[i].original === image.src) {

                if (i === 0) {
                    return;
                }

                image.setAttribute('src', galleryItems[i - 1].original)
                break;
            
            }
        }
    }
}
// -----------------------------------------------------------------------------


