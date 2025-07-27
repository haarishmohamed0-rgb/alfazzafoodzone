// Scroll-to-Top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Theme Toggle (for simple demo purposes; toggles a "light-theme" class)
function toggleTheme() {
  document.body.classList.toggle('light-theme');
}

// Optional: if you want a welcome popup uncomment below
// window.addEventListener('load', () => {
//   setTimeout(() => {
//     alert("👋 Welcome to AL FAZZA! Enjoy our tasty deals!");
//   }, 500);
// });
