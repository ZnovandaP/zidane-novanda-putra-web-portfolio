const typeWriterFeature = () => {
  let typewriter = new Typewriter('code', {
    loop:true,
    delay: 80,
  });
  
  typewriter
    .pauseFor(1000)
    .typeString('Junior Front-End Web Developer')
    .start();
}

export default typeWriterFeature