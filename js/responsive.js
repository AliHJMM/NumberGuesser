function updateInfoRangeText() {
    const infoRange = document.querySelector('.info-range');
  
    if (window.innerWidth <= 570) {
      infoRange.textContent = 'Between 1 & 20';
    } else {
      infoRange.textContent = 'Guess a number between 1 & 20';
    }
  }
  
  updateInfoRangeText();
  
  window.addEventListener('resize', updateInfoRangeText);
  