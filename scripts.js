function validateForm() {
    const errorMessage = document.querySelector('.errorMessage');
    const emailInput = document.querySelector('.emailInput');
    const errorIcon = document.querySelector('.errorIcon');
    errorMessage.style.display = 'block';
    errorIcon.style.opacity = '1';

    const style = getComputedStyle(document.body);
    emailInput.style.border = `solid 2px ${style.getPropertyValue('--soft-red')}`;
}
