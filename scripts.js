function enlargeImage(imageSrc) {
    const modal = document.querySelector('.modal');
    const modalImg = document.getElementById('modalImg');
  
    modal.style.display = 'flex';
    modalImg.src = imageSrc;
  }
  
  function closeModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
  }
  
  window.addEventListener('click', function (event) {
    const modal = document.querySelector('.modal');
    if (event.target === modal) {
      closeModal();
    }
  });
  // JavaScript code for handling image modal

function enlargeImage(imageSrc) {
    const modal = document.querySelector('.modal');
    const modalImg = document.getElementById('modalImg');
  
    modal.style.display = 'flex';
    modalImg.src = imageSrc;
  }
  
  function closeModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
  }
  
  window.addEventListener('click', function (event) {
    const modal = document.querySelector('.modal');
    if (event.target === modal) {
      closeModal();
    }
  });
  