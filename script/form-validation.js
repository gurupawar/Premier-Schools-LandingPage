// Phone number validation - only allow numbers
document.addEventListener('DOMContentLoaded', function() {
  const phoneInput = document.getElementById('phone-number');
  if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
      this.value = this.value.replace(/[^0-9]/g, '');
    });
  }
});