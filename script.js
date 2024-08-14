  <script>
        function activateLink(sectionId) {
            // Ascunde toate secțiunile
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Afișează secțiunea corespunzătoare
            const section = document.getElementById(sectionId);
            section.style.display = 'block';
        }
    console.log('Script loaded');
      
    </script>
