

//------------------text animation section---------------------------------

document.querySelectorAll(".reveal")

        .forEach(function (elem) {

                // create two spans
                let parent = document.createElement("span");
                let child = document.createElement("span");

                // parent and child both sets their class
                parent.classList.add("parent");
                child.classList.add("child");

                // child gets elem details and span parent gets child
                child.innerHTML = elem.innerHTML;
                parent.appendChild(child);

                // elem replaces its value with parent span
                elem.innerHTML = " ";
                elem.appendChild(parent);

        });


//---------- gsap Animation loading----
var tl = gsap.timeline();

tl
        .from(".child span", {
                x: "100",
                duration: 1,
                stagger: .2,
                ease: Circ.easeInOut

        })

        .to(".parent .child", {
                y: "-100%",
                duration: 1.5,
                ease: Circ.easeInOut


        })

        .to("#loader", {
                height: 0,
                duration: 1,
                ease: Circ.easeInOut


        })

        .to("#green", {
                height: "100%",
                top: 0,
                duration: 1,
                delay: -.5,
                ease: Circ.easeInOut
        })

        .to("#green", {
                height: 0,
                duration: 1,
                delay: -.3,
                ease: Circ.easeInOut
        });

//  <!-- jsdelivr scroll images, cnt -->

function locoInitialize() {
        const scroll = new LocomotiveScroll({
                el: document.querySelector('#main'),
                smooth: true,
        });
};


function cardHoverEffect() {
        document.querySelectorAll(".cnt")
                .forEach(function (cnt) {

                        var showingImage;
                        cnt.addEventListener("mousemove", function (dets) {
                                // ........ image par move karte hi image style change ............

                                document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = '1',
                                        showingImage = dets.target;
                                document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;

                                showingImage.style.filter = "grayscale(1)";
                                showingImage.style.background =  "#0a4834"
                                document.querySelector("#work").style.backgroundColor = "#" + dets.target.dataset.color;
                        });
                        // ........ image se leave karte hi image style change ............

                        cnt.addEventListener("mouseleave", function (dets) {
                                document.querySelector("#cursor").children[showingImage.dataset.index].style.opacity = '0';
                                        
                                        showingImage.style.filter = "grayscale(0)";
                                        showingImage.style.background =  "#14cf93"
                                        document.querySelector("#work").style.backgroundColor = "#dadada"

                        });


                })
}


cardHoverEffect();
locoInitialize();






