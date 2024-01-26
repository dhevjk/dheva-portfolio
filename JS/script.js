const lenis = new lenis();
function raf(time){
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const progressBar=document.querySelectorAll(".progress");
progressBars.forEach(progress =>{
    progress.style.width = progress.dataset.level + "%";
});
window.addEventListener("load",()=>{
    const t1=gsap.timeline();
    t1.to(".preloader", {opacity:0, delay: 0.5,});
    t1.to(".loader", {animation:"none",});
    t1.to(".loader span", {animation:"none",});
    t1.to(".preloader", {display:"none"});

    t1.from(".title1", {opacity:0, x:300,});
    t1.from(".title2", {opacity:0, x:-300,});
    t1.from(".title3", {opacity:0, x:300,});

    t1.from(".img1", {scale:0,});
    t1.from(".img2", {scale:0,});

});
const headings = gsap.utils.toArray('.heading h1');
headings.forEach(h=>{
    gsap.from(h, {
        opacity: 0,
        y: 200,
        ease: "power3.out",
        scrollTrigger: {
            start: "top 70%",
            trigger: h,
        }
    });
});

const progress = gsap.utils.toArray('.progress');
progress.forEach(prog =>{
    gsap.from(prog, {
        width: 0,
        ease: "power3.out",
        scrollTrigger: {
            start: "top 70%",
            trigger: prog,
        }
    });
});

const navbar = document.querySelector(".navbar");
const checkpoints = document.querySelectorAll(".scroll-checkpoint");
const navbarLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{
    if(scrollY > 100){
        navbar.classList.add("navbar-active");
    }else {
        navbar.classList.remove("navbar-active");
    }

    for(let i=0;i<checkpoints.length;i++){
        if(scrollY > checkpoints[i].offsetTop - 50){
            navbarLinks.forEach(link => link.classList.remove("link-active"));
            navbarLinks[i].classList.add("link-active");
        }else if(scrollY < checkpoints[i].offsetTop -50){
            navbarLinks.forEach(link => link.classList.remove("link-active"));
        }
    }
});

const tracker = document.querySelector(".tracker");
let scrollAmount = 0;
let ypos = 0;
let xpos = 0;

function mouseTracker() {
    scrollAmount = window.scrollY + ypos;
    tracker.style.top = '${scrollAmount}px';
    tracker.style.left = '${xpos}px';
}

window.addEventListener("mousemove", e => {
    setTimeout(()=> {
        ypos = e.clientY - tracker.offsetHeight/2;
        xpos = e.clientx - tracker.offsetwidth/2;
        mouseTracker();
    },100);
});

window.addEventListener("scroll", ()=>{
    mouseTracker();
});

const links = document.querySelectorAll("a, button");
links.forEach(link =>{
    link.addEventListener("mouseenter", ()=>{
        tracker.style.display ="none";
    });
    link.addEventListener("mouseleave", ()=>{
        tracker.style.display ="block";
    });

});

if('ontouchstart' in window || navigator.maxTouchPoints){
    tracker.style.display ="none";
}