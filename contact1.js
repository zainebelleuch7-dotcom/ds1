// Script global pour toutes les pages
document.addEventListener('DOMContentLoaded', function() {
    console.log('Fitness Life - Site chargé avec succès');
    
    // Animation smooth pour les liens internes
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const target = this.getAttribute('href');
            if (target !== '#') {
                e.preventDefault();
                const element = document.querySelector(target);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Ajouter classe active au lien de navigation selon la page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
});

// Fonction pour afficher les détails des exercices
function showExerciseDetails(exerciseName) {
    const details = {
        'Cardio Training': 'Le cardio training améliore votre endurance cardiovasculaire, brûle des calories et renforce votre cœur. Commencez par 20 minutes, 3 fois par semaine.',
        'Musculation': 'La musculation développe la masse musculaire, augmente la force et améliore la densité osseuse. Alternez les groupes musculaires pour de meilleurs résultats.',
        'Yoga': 'Le yoga combine respiration, méditation et postures pour améliorer flexibilité, équilibre et réduire le stress. Idéal pour tous les âges.',
        'HIIT': 'HIIT (High Intensity Interval Training) alterne périodes d\'effort intense et de repos. Efficace pour brûler des graisses en peu de temps.'
    };
    
    const message = details[exerciseName] || `Découvrez nos programmes "${exerciseName}" avec nos coachs certifiés.`;
    alert(`📋 ${exerciseName}\n\n${message}\n\nContactez-nous pour plus d'informations !`);
}