document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('event-form');
  const submitBtn = document.getElementById('submit-btn');
  const bannerInput = document.getElementById('banner');
  const previewContainer = document.getElementById('preview');

  // Image preview
  bannerInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        previewContainer.innerHTML = `<img src="${e.target.result}" alt="Event banner preview">`;
        previewContainer.style.display = 'block';
      }
      reader.readAsDataURL(file);
    }
  });

  // Form submission simulation
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    // Simulate server processing
    setTimeout(() => {
      alert('Your campus event has been submitted successfully! 🎉\n\n(Frontend demo only)');
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
      form.reset();
      previewContainer.innerHTML = '';
      previewContainer.style.display = 'none';
    }, 1600);
  });
});