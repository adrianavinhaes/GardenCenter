
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  const fadeItems = document.querySelectorAll('.fade-in-item');

  fadeItems.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add('active');
    }
  });
}

window.addEventListener('scroll', handleScroll);
handleScroll();
