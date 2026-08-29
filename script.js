const openButton = document.getElementById("openInvitation");
const invitation = document.getElementById("invitation");
const page3 = document.querySelector(".page3");
const couple = document.querySelector(".couple");
const page5 = document.querySelector(".page5");
const page6 = document.querySelector(".page6");
const page7 = document.querySelector(".page7");
const page7Story = document.querySelector(".page7-story");
const weddingVideo = document.querySelector(".wedding-video");
const videoElement = weddingVideo.querySelector("video");
const weddingGift = document.querySelector(".wedding-gift");
const shareBlessing = document.querySelector(".share-blessing");
const countdownSection = document.querySelector(".countdown-section");
const thankYou = document.querySelector(".thank-you");

const page5Amplop = document.querySelector(".page5-amplop");
const page5Tanggal = document.querySelector(".page5-tanggal");
const page5Lokasi = document.querySelector(".page5-lokasi");
const page6Dresscode = document.querySelector(".page6-dresscode");

const weddingMusic = document.getElementById("weddingMusic");
const musicToggle = document.getElementById("musicToggle");

openButton.addEventListener("click", function () {
    invitation.style.display = "flex";
    page3.style.display = "flex";
    page5.style.display = "flex";
    page6.style.display = "flex";
    page7.style.display = "flex";
    weddingVideo.style.display = "flex";

    videoElement.currentTime = 0;
    videoElement.playbackRate = 0.8;
    videoElement.muted = true;
    videoElement.setAttribute("muted", "");
    videoElement.setAttribute("playsinline", "");

videoElement.load();

requestAnimationFrame(() => {
    videoElement.play().catch(error => {
        console.log("Video gagal autoplay:", error);
    });
});

    weddingGift.style.display = "flex";
    shareBlessing.style.display = "flex";
    countdownSection.style.display = "flex";
    thankYou.style.display = "flex";




    weddingMusic.play();
    musicToggle.classList.add("show");
    invitation.scrollIntoView({
        behavior: "smooth"
    });
});

const page3Image = document.querySelector(".page3 img");

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                page3Image.classList.add("show");
            }
        });
    },
    {
        threshold: 0.3
    }
);

observer.observe(page3Image);

const page3Observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                couple.style.display = "flex";
            }
        });
    },
    {
        threshold: 0.3
    }
);

page3Observer.observe(page3);

const bride = document.querySelector(".bride");
const groom = document.querySelector(".groom");

const coupleObserver = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.3
    }
);

coupleObserver.observe(bride);
coupleObserver.observe(groom);

const page5Observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                page5Amplop.classList.add("show");
                page5Tanggal.classList.add("show");
                page5Lokasi.classList.add("show");

                page5Observer.unobserve(page5);
            }
        });
    },
    {
        threshold: 0.2
    }
);

page5Observer.observe(page5);

const page6Observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                page6Dresscode.classList.add("show");

                page6Observer.unobserve(page6);
            }
        });
    },
    {
        threshold: 0.2
    }
);

page6Observer.observe(page6);

const page7Observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                page7Story.classList.add("show");

                page7Observer.unobserve(page7);
            }
        });
    },
    {
        threshold: 0.2
    }
);

page7Observer.observe(page7);

musicToggle.addEventListener("click", function () {

    if (weddingMusic.paused) {
        weddingMusic.play();
        musicToggle.textContent = "♫";
    } else {
        weddingMusic.pause();
        musicToggle.textContent = "🔇";
    }

});

const weddingVideoObserver = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                weddingVideo.style.display = "flex";
            }
        });
    },
    {
        threshold: 0.3
    }
);

weddingVideoObserver.observe(weddingVideo);

function copyAccount() {
  navigator.clipboard.writeText("6755514261");

  const button = document.querySelector(".copy-account");

  button.textContent = "Copied!";

  setTimeout(function () {
    button.textContent = "Copy Account Number";
  }, 2000);
}

// GOOGLE SHEETS
const scriptURL = "https://script.google.com/macros/s/AKfycbyaGL0lcUflYG03GurcNJQoXl66DAo18IM7bHI3lIRWcKHaZzRGpNY3UftGatUcyZ-y/exec";

const sendBlessing = document.querySelector(".send-blessing");

sendBlessing.addEventListener("click", function () {

    const name = document.getElementById("blessingName").value.trim();
    const message = document.getElementById("blessingMessage").value.trim();

    if (!name || !message) {
        alert("Please fill in your name and message.");
        return;
    }

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({
            name: name,
            message: message
        })
    })

    .then(() => {

        alert("Thank you for your blessing! ♡");

        document.getElementById("blessingName").value = "";
        document.getElementById("blessingMessage").value = "";

        setTimeout(function () {
            loadBlessings();
        }, 1500);

    })

    .catch(error => {

        console.error(error);

        setTimeout(function () {
            loadBlessings();
        }, 1500);

    });

});


function loadBlessings() {

    fetch(scriptURL)

        .then(response => response.json())

        .then(data => {

            const blessingList = document.getElementById("blessingList");

            blessingList.innerHTML = "";

            data.reverse().forEach(blessing => {

                const card = document.createElement("div");
                card.className = "blessing-card";

                const name = document.createElement("div");
                name.className = "blessing-name";
                name.textContent = blessing.name;

                const message = document.createElement("div");
                message.className = "blessing-message";
                message.textContent = blessing.message;

                card.appendChild(name);
                card.appendChild(message);

                blessingList.appendChild(card);

            });

        })

        .catch(error => {
            console.error("Error loading blessings:", error);
        });

}


loadBlessings();


// COUNTDOWN
// COUNTDOWN

const countdownDate = new Date(2026, 11, 13, 0, 0, 0).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance <= 0) {
        document.getElementById("countdownDays").textContent = "00";
        document.getElementById("countdownHours").textContent = "00";
        return;
    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    document.getElementById("countdownDays").textContent =
        String(days).padStart(2, "0");

    document.getElementById("countdownHours").textContent =
        String(hours).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);

const thankYouImage = document.querySelector(".thank-you-image");

const thankYouObserver = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                thankYouImage.classList.add("show");
                thankYouObserver.unobserve(thankYou);
            }

        });
    },
    {
        threshold: 0.2
    }
);

thankYouObserver.observe(thankYou);