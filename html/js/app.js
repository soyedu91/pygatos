function initCatGallery() {
  clearContainer();
  showLoading();
  fetchCatImages(6)
    .then(renderCatCards)
    .catch(handleError);
}