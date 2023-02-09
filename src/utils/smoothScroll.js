export const smoothScroll = () => {
  const { height: cardHeight } = document
    .querySelector('li')
    .firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 3,
    behavior: 'smooth',
  });
};
