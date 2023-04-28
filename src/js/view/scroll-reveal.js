const scrollRevealFeature = () => {
  let slideLeft = {
    distance: '150%',
    origin: 'left',
    opacity: 0,
    duration:1200,
  };
  
  ScrollReveal().reveal('article', slideLeft);
  ScrollReveal().reveal('footer', {
    distance: '150%',
    origin: 'bottom',
    opacity: 0,
    duration:1200,
  });
  ScrollReveal().reveal('.card', {
    distance: '150%',
    origin: 'right',
    opacity: 0,
    duration:1000,
  });
  ScrollReveal().reveal('.skills-reveal', {
    distance: '150%',
    origin: 'left',
    opacity: 0,
    duration:1000,
  });
}

export default scrollRevealFeature;