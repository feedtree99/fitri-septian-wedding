/* =========================================
   ELEMENTS
========================================= */

const openButton = document.getElementById("openInvitation");
const invitation = document.getElementById("invitation");

const page3 = document.querySelector(".page3");
const couple = document.querySelector(".couple");
const page5 = document.querySelector(".page5");
const page6 = document.querySelector(".page6");
const page7 = document.querySelector(".page7");
const page7Story = document.querySelector(".page7-story");

const weddingVideo = document.querySelector(".wedding-video");
const videoElement = weddingVideo?.querySelector("video");

const weddingGift = document.querySelector(".wedding-gift");
const shareBlessing = document.querySelector(".share-blessing");
const countdownSection = document.querySelector(".countdown-section");
const thankYou = document.querySelector(".thank-you");

const page5Amplop = document.querySelector(".page5-amplop");
const page5Tanggal = document.querySelector(".page5-tanggal");
const page5Lokasi = document.querySelector(".page5-lokasi");
const page6Dresscode = document.querySelector(".page6-dresscode");

const page3Image = document.querySelector(".page3 img");
const bride = document.querySelector(".bride");
const groom = document.querySelector(".groom");

const thankYouImage = document.querySelector(".thank-you-image");

const weddingMusic = document.getElementById("weddingMusic");
const musicToggle = document.getElementById("musicToggle");


/* =========================================
   OPEN INVITATION
========================================= */

if (openButton) {

    openButton.addEventListener("click", function () {

        if (invitation) {
            invitation.style.display = "flex";
        }

        if (page3) page3.style.display = "flex";
        if (page5) page5.style.display = "flex";
        if (page6) page6.style.display = "flex";
        if (page7) page7.style.display = "flex";

            if (weddingVideo) weddingVideo.style.display = "flex";
            if (weddingGift) weddingGift.style.display = "flex";
            if (shareBlessing) shareBlessing.style.display = "flex";
            if (countdownSection) countdownSection.style.display = "flex";
            if (thankYou) thankYou.style.display = "flex";


        /* =====================================
           VIDEO
        ===================================== */

        if (videoElement) {

            videoElement.currentTime = 0;
            videoElement.playbackRate = 0.6;
            videoElement.muted = true;

            videoElement.setAttribute("muted", "");
            videoElement.setAttribute("playsinline", "");

            requestAnimationFrame(function () {

                videoElement.play().catch(function (error) {
                    console.log("Video gagal autoplay:", error);
                });

            });

        }


        /* =====================================
           MUSIC
        ===================================== */

        if (weddingMusic) {

            weddingMusic.play().catch(function (error) {
                console.log("Music gagal autoplay:", error);
            });

        }

        if (musicToggle) {
            musicToggle.classList.add("show");
        }


        /* =====================================
           SCROLL
        ===================================== */

        if (invitation) {

            invitation.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


/* =========================================
   PAGE 3 IMAGE ANIMATION
========================================= */

if (page3Image) {

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    page3Image.classList.add("show");
                    observer.unobserve(page3Image);

                }

            });

        },
        {
            threshold: 0.3
        }
    );

    observer.observe(page3Image);

}


/* =========================================
   COUPLE
========================================= */

if (page3 && couple) {

    const page3Observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    couple.style.display = "flex";
                    page3Observer.unobserve(page3);

                }

            });

        },
        {
            threshold: 0.3
        }
    );

    page3Observer.observe(page3);

}


/* =========================================
   BRIDE & GROOM ANIMATION
========================================= */

if (bride && groom) {

    const coupleObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");
                    coupleObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.3
        }
    );

    coupleObserver.observe(bride);
    coupleObserver.observe(groom);

}


/* =========================================
   PAGE 5 ANIMATION
========================================= */

if (page5) {

    const page5Observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    page5Amplop?.classList.add("show");
                    page5Tanggal?.classList.add("show");
                    page5Lokasi?.classList.add("show");

                    page5Observer.unobserve(page5);

                }

            });

        },
        {
            threshold: 0.2
        }
    );

    page5Observer.observe(page5);

}


/* =========================================
   PAGE 6 ANIMATION
========================================= */

if (page6 && page6Dresscode) {

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

}


/* =========================================
   PAGE 7 STORY ANIMATION
========================================= */

if (page7 && page7Story) {

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

}


/* =========================================
   MUSIC TOGGLE
========================================= */

if (musicToggle && weddingMusic) {

    musicToggle.addEventListener("click", function () {

        if (weddingMusic.paused) {

            weddingMusic.play();

            musicToggle.textContent = "♫";

        } else {

            weddingMusic.pause();

            musicToggle.textContent = "🔇";

        }

    });

}


/* =========================================
   WEDDING VIDEO
========================================= */

if (weddingVideo && videoElement) {

    const weddingVideoObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    weddingVideo.style.display = "flex";

                    videoElement.play().catch(function (error) {
                        console.log("Video gagal autoplay:", error);
                    });

                    weddingVideoObserver.unobserve(weddingVideo);

                }

            });

        },
        {
            threshold: 0.2
        }
    );

    weddingVideoObserver.observe(weddingVideo);

}


/* =========================================
   COPY ACCOUNT
========================================= */

function copyAccount(accountNumber, button) {

    if (!button) return;

    navigator.clipboard.writeText(accountNumber)
        .then(function () {

            button.textContent = "Copied!";

            setTimeout(function () {
                button.textContent = "Copy Account Number";
            }, 2000);

        })
        .catch(function (error) {

            console.error("Gagal copy:", error);

        });

}


/* =========================================
   WEDDING GIFT
========================================= */

function toggleGift() {

    const bankDetails = document.getElementById("bankDetails");
    const giftButton = document.querySelector(".gift-button");

    if (!bankDetails || !giftButton) return;

    const isOpen = bankDetails.classList.contains("show");

    if (isOpen) {

        bankDetails.classList.remove("show");
        giftButton.textContent = "Click Here";

    } else {

        bankDetails.classList.add("show");
        giftButton.textContent = "Close";

    }

}


/* =========================================
   COPY ADDRESS
========================================= */

function copyAddress(button) {

    const address =
        "Purinusaphala Blok N-21, RT 005/012, Kel. Jatiluhur, Kec. Jatiasih, Kota Bekasi, 17425";

    if (!button) return;

    navigator.clipboard.writeText(address)
        .then(function () {

            button.textContent = "Copied!";

            setTimeout(function () {
                button.textContent = "Copy Address";
            }, 2000);

        })
        .catch(function (error) {

            console.error("Gagal copy alamat:", error);

        });

}


// =========================================
// SHARE YOUR BLESSING - GOOGLE SHEETS
// =========================================

const scriptURL =
    "https://script.google.com/macros/s/AKfycbyaGL0lcUflYG03GurcNJQoXl66DAo18IM7bHI3lIRWcKHaZzRGpNY3UftGatUcyZ-y/exec";

const sendBlessing = document.querySelector(".send-blessing");
const blessingName = document.getElementById("blessingName");
const blessingMessage = document.getElementById("blessingMessage");
const blessingList = document.getElementById("blessingList");

const BLESSING_CACHE = "fitriSeptianBlessings";


// =========================================
// RENDER BLESSINGS
// =========================================

function renderBlessings(data) {

    if (!blessingList) return;

    if (!Array.isArray(data) || data.length === 0) {

        blessingList.innerHTML = `
            <div class="no-blessing">
                No messages yet ♡
            </div>
        `;

        return;
    }

    const fragment = document.createDocumentFragment();

    [...data].reverse().forEach(function (blessing) {

        const card = document.createElement("div");
        card.className = "blessing-card";

        const name = document.createElement("div");
        name.className = "blessing-name";
        name.textContent = blessing.name || "";

        const message = document.createElement("div");
        message.className = "blessing-message";
        message.textContent = blessing.message || "";

        card.appendChild(name);
        card.appendChild(message);

        fragment.appendChild(card);

    });

    blessingList.innerHTML = "";
    blessingList.appendChild(fragment);

}


// =========================================
// LOAD FROM GOOGLE SHEETS
// =========================================

async function loadBlessings() {

    try {

        const response = await fetch(scriptURL, {
            method: "GET",
            cache: "no-store"
        });

        if (!response.ok) {
            throw new Error("Failed to load blessings");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
            return;
        }

        // Simpan ke cache browser
        localStorage.setItem(
            BLESSING_CACHE,
            JSON.stringify(data)
        );

        // Render
        renderBlessings(data);

    } catch (error) {

        console.error(
            "Error loading blessings:",
            error
        );

    }

}


// =========================================
// SHOW CACHED BLESSINGS IMMEDIATELY
// =========================================

function loadCachedBlessings() {

    try {

        const cached =
            localStorage.getItem(BLESSING_CACHE);

        if (!cached) return;

        const data = JSON.parse(cached);

        renderBlessings(data);

    } catch (error) {

        console.error(
            "Error loading cached blessings:",
            error
        );

    }

}


// =========================================
// SEND BLESSING
// =========================================

if (sendBlessing) {

    sendBlessing.addEventListener(
        "click",
        function () {

            const name =
                blessingName.value.trim();

            const message =
                blessingMessage.value.trim();


            if (!name || !message) {

                alert(
                    "Please fill in your name and message."
                );

                return;

            }


            // Disable supaya tidak double click
            sendBlessing.disabled = true;
            sendBlessing.textContent = "Sending...";


            // Simpan isi sebelum form dikosongkan
            const newBlessing = {
                name: name,
                message: message
            };


            // =================================
            // TAMPILKAN LANGSUNG DI LIST
            // =================================

            const cached =
                localStorage.getItem(BLESSING_CACHE);

            let currentBlessings = [];

            try {

                currentBlessings =
                    cached
                        ? JSON.parse(cached)
                        : [];

            } catch (error) {

                currentBlessings = [];

            }


            currentBlessings.push(newBlessing);

            localStorage.setItem(
                BLESSING_CACHE,
                JSON.stringify(currentBlessings)
            );


            // Render langsung
            renderBlessings(currentBlessings);


            // Kosongkan form
            blessingName.value = "";
            blessingMessage.value = "";


            // =================================
            // KIRIM KE GOOGLE DI BACKGROUND
            // =================================

            fetch(scriptURL, {

                method: "POST",

                body: JSON.stringify({
                    name: name,
                    message: message
                })

            })

            .then(function () {

                console.log(
                    "Blessing successfully sent."
                );

                // Ambil data terbaru
                setTimeout(function () {
                    loadBlessings();
                }, 1500);

            })

            .catch(function (error) {

                console.error(
                    "Error sending blessing:",
                    error
                );

            });


            // Tombol kembali normal
            setTimeout(function () {

                sendBlessing.disabled = false;
                sendBlessing.textContent = "Send";

            }, 1000);

        }
    );

}


// =========================================
// LOAD CACHE + PRELOAD GOOGLE SHEETS
// =========================================

// Tampilkan komentar lama SECEPATNYA
loadCachedBlessings();


// Request Google Sheets di background
// Tidak menunggu user scroll
setTimeout(function () {

    loadBlessings();

}, 1000);


/* =========================================
   COUNTDOWN
========================================= */

const countdownDate =
    new Date(2026, 11, 13, 0, 0, 0).getTime();

const countdownDays =
    document.getElementById("countdownDays");

const countdownHours =
    document.getElementById("countdownHours");


function updateCountdown() {

    if (!countdownDays || !countdownHours) {
        return;
    }

    const now = Date.now();

    const distance =
        countdownDate - now;


    if (distance <= 0) {

        countdownDays.textContent = "00";
        countdownHours.textContent = "00";

        return;

    }


    const days = Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (distance %
            (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );


    countdownDays.textContent =
        String(days).padStart(2, "0");

    countdownHours.textContent =
        String(hours).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================================
   THANK YOU ANIMATION
========================================= */

if (thankYou && thankYouImage) {

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

}