import { useNavigate } from 'react-router-dom';

export const useHomePageNavigation = () => {
  const navigate = useNavigate();

  const handleNavClick = (section: string) => {
    console.log(`Navigation to ${section} clicked`);
    switch (section) {
      case 'lyrics':
        navigate('/lyrics');
        break;
      case 'add':
        navigate('/add');
        break;
      case 'search':
        navigate('/search');
        break;
      default:
        navigate('/');
    }
  };

  const initializeAnimations = () => {
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.animation = 'bounce 0.6s ease';
        }
      });
    }, { threshold: 0.1 });

    cards.forEach((card) => {
      observer.observe(card);
    });
  };

  return { handleNavClick, initializeAnimations };
};