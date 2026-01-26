



const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "top bottom",   // page2 enter
    end: "top center",     // yahin tak animation
    scrub: true            // smooth + reverse
  }
});

// page1 image vanish
tl.to(".image", {
  opacity: 0,
  scale: 0.6
}, 0);

// page2 image appear (STAYS VISIBLE)
tl.fromTo(".img2 img",
  {
    opacity: 0,
    y: -600,
    x: 350,
    scale: 0.6
  },
  {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    ease: "power3.out"
  },
  0
);


var elem = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3",
        start: "top 50%",
        end: "top top",
        scrub: true
    }
})

elem.from(".leftt", {
    opacity: 0,
    x: -100,
    duration: 1,
    ease: "power3.out"
})
elem.from(".center", {
    opacity: 0,
    y: 200,
    duration: 1,
    ease: "power3.out"
}, "<0.3")
elem.from(".rightt", {
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "power3.out"
}, "<0.3")

gsap.from(".box",{
    opacity: 0,
    duration: 5,
    scrub: 2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".page4",
        start: "top 50%"
    }
})