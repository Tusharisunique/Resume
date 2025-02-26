const toggle = document.getElementById('theme-toggle');
const body = document.body;

toggle.addEventListener('change', () => {
    body.classList.toggle('light-mode');
});

function downloadResume() {
    try {
        const link = document.createElement('a');
        link.href = '/path/to/Tushar Joshi Resume.pdf';
        link.download = 'Tushar Joshi Resume.pdf';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Download failed:', error);
        alert('Failed to download resume. Please try again later.');
    }
}

