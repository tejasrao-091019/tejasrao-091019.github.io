document.addEventListener('DOMContentLoaded', () => {
            const dropdownToggle = document.getElementById('dropdownToggle');
            const dropdownContent = document.getElementById('dropdownContent');
            const arrowIcon = document.getElementById('arrowIcon');

            dropdownToggle.addEventListener('click', () => {
                dropdownContent.classList.toggle('show');
                arrowIcon.classList.toggle('rotate');

                // No border-radius adjustments needed for FAQ style
            });
        });