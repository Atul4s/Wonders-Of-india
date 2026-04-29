const scroller = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    smartphone: {
      smooth: true
  },
  tablet: {
      smooth: true
  },
  lerp:0.1,
});


const destinationsData = {
    mathura: {
        title: "Mathura, Uttar Pradesh",
        img: "./images/mathura.jpg",
        desc: "A major pilgrimage site with deep historical and religious significance, believed to be the exact birthplace of Lord Krishna. The city is famous for its vibrant Holi celebrations.",
        time: "Best Time: October to March",
        attractions: "Attractions: Shri Krishna Janmasthan Temple, Dwarkadhish Temple, Vishram Ghat"
    },
    jaipur: {
        title: "Jaipur, Rajasthan",
        img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop",
        desc: "Known as the Pink City, Jaipur is a vibrant mix of old and new. It's home to a few UNESCO World Heritage sites including Amer Fort and Jantar Mantar.",
        time: "Best Time: November to February",
        attractions: "Attractions: Hawa Mahal, City Palace, Jal Mahal"
    },
    varanasi: {
        title: "Varanasi, Uttar Pradesh",
        img: "./images/ganga-river-crafts-hero.jpg",
        desc: "One of the world's oldest continually inhabited cities, Varanasi is the spiritual capital of India. Witnessing the Ganga Aarti at the ghats is a life-changing experience.",
        time: "Best Time: October to March",
        attractions: "Attractions: Dashashwamedh Ghat, Kashi Vishwanath, Sarnath"
    },
    kerala: {
        title: "Kerala Backwaters",
        img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop",
        desc: "A network of interconnected canals, rivers, lakes, and inlets formed by more than 900 km of waterways. Cruising through these in a houseboat is pure bliss.",
        time: "Best Time: September to March",
        attractions: "Attractions: Alleppey Houseboats, Kumarakom Bird Sanctuary"
    }
};

const homeModal = document.getElementById("homeModal");
const closeHomeModal = document.getElementById("closeHomeModal");
const destCards = document.querySelectorAll(".dest-card");

if (homeModal) {
    const homeModalImg = document.getElementById("homeModalImg");
    const homeModalTitle = document.getElementById("homeModalTitle");
    const homeModalDesc = document.getElementById("homeModalDesc");
    const homeModalTime = document.getElementById("homeModalTime");
    const homeModalAttractions = document.getElementById("homeModalAttractions");

    destCards.forEach(card => {
        card.addEventListener("click", () => {
            const destKey = card.getAttribute("data-dest");
            const data = destinationsData[destKey];

            if (data) {
                homeModalImg.src = data.img;
                homeModalTitle.innerText = data.title;
                homeModalDesc.innerText = data.desc;
                homeModalTime.innerText = data.time;
                homeModalAttractions.innerText = data.attractions;

                homeModal.classList.add("active");
                scroller.stop();
            }
        });
    });

    closeHomeModal.addEventListener("click", () => {
        homeModal.classList.remove("active");
        scroller.start();
    });

    homeModal.addEventListener("click", (e) => {
        if (e.target === homeModal) {
            homeModal.classList.remove("active");
            scroller.start();
        }
    });
}
