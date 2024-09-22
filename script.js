function showPage(pageId) {
  // Hide all sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => section.style.display = 'none');

  // Show the selected section
  document.getElementById(pageId).style.display = 'block';
}
