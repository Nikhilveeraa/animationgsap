gsap.from("#nav img ", {
  y: -100,
  duration: 1,
  delay: 1,
  opacity: 0,
});
gsap.from("#nav h4 , #nav button", {
  y: -100,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
});

gsap.from("#left-image", {
  scale: 0,
  delay: 2,
  opacity: 0,
});
gsap.from("#right-image", {
  scale: 0,
  delay: 2,
  opacity: 0,
});

gsap.from("h1", {
  y: 100,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.5,
});
