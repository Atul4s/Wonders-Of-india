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

const placesData = {
    leh: {
        title: "Leh Ladakh",
        img: "./images/Leh-Ladakh.jpeg",
        desc: "Known for its stunning landscapes, crystal clear skies, highest mountain passes, thrilling adventure activities, Buddhist Monasteries and festivals, Leh Ladakh is a paradise on earth.",
        time: "Best Time: April to July",
        attractions: "Attractions: Pangong Lake, Magnetic Hill, Nubra Valley"
    },
    manali: {
        title: "Manali",
        img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
        desc: "A high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination.",
        time: "Best Time: October to June",
        attractions: "Attractions: Solang Valley, Rohtang Pass, Hadimba Temple"
    },
    shimla: {
        title: "Shimla",
        img: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop",
        desc: "Once the summer capital of British India, Shimla remains the terminus of the narrow-gauge Kalka-Shimla Railway and is known for its handicraft shops.",
        time: "Best Time: March to June",
        attractions: "Attractions: The Ridge, Mall Road, Jakhoo Temple"
    },
    darjeeling: {
        title: "Darjeeling",
        img: "./images/pexels-sayan-samanta-1460859263-26764486.jpg",
        desc: "Famous throughout the world for the tea it grows and the great view of the Kanchenjunga range of mountains that it offers, Darjeeling is a popular destination.",
        time: "Best Time: April to June",
        attractions: "Attractions: Tiger Hill, Batasia Loop, Himalayan Railway"
    },
    auli: {
        title: "Auli",
        img: "./images/auli.webp",
        desc: "A Himalayan ski resort and hill station in the north Indian state of Uttarakhand. It’s surrounded by coniferous and oak forests, with panoramic views of the peaks.",
        time: "Best Time: November to March",
        attractions: "Attractions: Skiing, Auli Artificial Lake, Joshimath"
    },
    munnar: {
        title: "Munnar",
        img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800&auto=format&fit=crop",
        desc: "Famous for its tea estates, exotic lush greenery and craggy peaks, it is located in the Western Ghats, in the state of Kerala.",
        time: "Best Time: September to March",
        attractions: "Attractions: Echo Point, Eravikulam National Park, Tea Gardens"
    },
    nainital: {
        title: "Nainital",
        img: "./images/nanitaal.jpeg",
        desc: "A popular hill station in Uttarakhand, known for its beautiful pear-shaped lake surrounded by green hills, offering a perfect weekend getaway.",
        time: "Best Time: March to June",
        attractions: "Attractions: Naini Lake, Naina Peak, Snow View Point"
    },
    rishikesh: {
        title: "Rishikesh",
        img: "./images/rishikesh-3715497.webp",
        desc: "Known as the 'Yoga Capital of the World', Rishikesh is a spiritual town nestled in the foothills of the Himalayas along the banks of the holy river Ganges.",
        time: "Best Time: September to November, February to May",
        attractions: "Attractions: Laxman Jhula, Triveni Ghat, Parmarth Niketan"
    }
};

const modal = document.getElementById("placeModal");
const closeModal = document.getElementById("closeModal");
const placeCards = document.querySelectorAll(".place-card");

const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalTime = document.getElementById("modalTime");
const modalAttractions = document.getElementById("modalAttractions");

placeCards.forEach(card => {
    card.addEventListener("click", () => {
        const placeKey = card.getAttribute("data-place");
        const data = placesData[placeKey];

        if (data) {
            modalImg.src = data.img;
            modalTitle.innerText = data.title;
            modalDesc.innerText = data.desc;
            modalTime.innerText = data.time;
            modalAttractions.innerText = data.attractions;

            modal.classList.add("active");
            scroller.stop(); 
        }
    });
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
    scroller.start();
});


modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
        scroller.start();
    }
});
