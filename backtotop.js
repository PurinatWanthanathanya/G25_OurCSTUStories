//function ตรวจว่าถึงตรงไหนแล้วให้โชว์ปุ่ม
document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('back-to-top');
  
    function toggleButtonVisibility() {
      if (window.scrollY > 450) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    }
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  
  
    window.addEventListener('scroll', toggleButtonVisibility);
  
    backToTopButton.addEventListener('click', scrollToTop);
    
  });