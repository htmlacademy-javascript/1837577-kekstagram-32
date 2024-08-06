import { createPhotos } from './data.js';

function renderPreview (count){
  const template = document.querySelector('#picture').content;
  const picturesElement = document.querySelector('.pictures');
  const photos = createPhotos(count);
  const previewListFragment = document.createDocumentFragment();
  photos.forEach(({url, description, comments, likes}) => {
    const newPicture = template.cloneNode(true);
    newPicture.querySelector('.picture__img').src = url;
    newPicture.querySelector('.picture__img').alt = description;
    newPicture.querySelector('.picture__comments').textContent = comments.length;
    newPicture.querySelector('.picture__likes').textContent = likes;
    previewListFragment.append(newPicture);
  });
  picturesElement.append(previewListFragment);
}

export{renderPreview};
