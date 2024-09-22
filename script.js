// Show or hide the button based on scroll position
window.onscroll = function() {
  const button = document.getElementById('scrollToTopBtn');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.style.display = "block"; // Show button
  } else {
    button.style.display = "none"; // Hide button
  }
};

// Scroll to top functionality
document.getElementById('scrollToTopBtn').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default anchor behavior
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
});

function showPage(pageId) {
  // Hide all sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => section.style.display = 'none');

  // Show the selected section
  document.getElementById(pageId).style.display = 'block';
}
