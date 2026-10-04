// ================================
// LogoForge - app.js (Part 1)
// Live Preview + Industry Icons
// ================================

// INPUTS
const businessInput = document.getElementById("businessName");
const taglineInput = document.getElementById("tagline");
const industrySelect = document.getElementById("industry");
const styleSelect = document.getElementById("style");

// BUTTON
const generateBtn = document.getElementById("generateBtn");

// LIVE PREVIEW
const previewName = document.getElementById("previewName");
const previewTagline = document.getElementById("previewTagline");
const previewIcon = document.getElementById("previewIcon");

// GENERATED LOGOS
const logoContainer = document.getElementById("logoContainer");

// SELECTED LOGO
const selectedPreview = document.getElementById("selectedPreview");

// ================================
// Live Business Name
// ================================

businessInput.addEventListener("input", function () {

    if (businessInput.value.trim() === "") {
        previewName.textContent = "Your Business";
    } else {
        previewName.textContent = businessInput.value;
    }

});

// ================================
// Live Tagline
// ================================

taglineInput.addEventListener("input", function () {

    if (taglineInput.value.trim() === "") {
        previewTagline.textContent = "Your Tagline";
    } else {
        previewTagline.textContent = taglineInput.value;
    }

});

// ================================
// Industry Icons
// ================================

industrySelect.addEventListener("change", function () {

    switch (industrySelect.value) {

        case "Restaurant":
            previewIcon.className = "fa-solid fa-mug-hot";
            break;

        case "Technology":
            previewIcon.className = "fa-solid fa-microchip";
            break;

        case "Education":
            previewIcon.className = "fa-solid fa-graduation-cap";
            break;

        case "Healthcare":
            previewIcon.className = "fa-solid fa-heart-pulse";
            break;

        case "Finance":
            previewIcon.className = "fa-solid fa-money-bill-trend-up";
            break;

        case "Fashion":
            previewIcon.className = "fa-solid fa-shirt";
            break;

        case "Fitness":
            previewIcon.className = "fa-solid fa-dumbbell";
            break;

        case "Real Estate":
            previewIcon.className = "fa-solid fa-house";
            break;

        default:
            previewIcon.className = "fa-solid fa-pen-ruler";
    }

});

// ================================
// Generate Button
// ================================

generateBtn.addEventListener("click", generateLogos);

// ================================
// Generate Logos
// (Part 2 will be added next)
// ================================
function generateLogos() {

    const businessName = businessInput.value.trim();
    const tagline = taglineInput.value.trim();
    const industry = industrySelect.value;

    if (businessName === "") {
        alert("Please enter your business name.");
        return;
    }

    logoContainer.innerHTML = "";

    let icon = "fa-pen-ruler";
    let color = "#2563eb";

    switch (industry) {

        case "Restaurant":
            icon = "fa-mug-hot";
            color = "#8B4513";
            break;

        case "Technology":
            icon = "fa-microchip";
            color = "#2563eb";
            break;

        case "Education":
            icon = "fa-graduation-cap";
            color = "#1d4ed8";
            break;

        case "Healthcare":
            icon = "fa-heart-pulse";
            color = "#dc2626";
            break;

        case "Finance":
            icon = "fa-money-bill-trend-up";
            color = "#16a34a";
            break;

        case "Fashion":
            icon = "fa-shirt";
            color = "#9333ea";
            break;

        case "Fitness":
            icon = "fa-dumbbell";
            color = "#ea580c";
            break;

        case "Real Estate":
            icon = "fa-house";
            color = "#374151";
            break;
    }

    const templates = [
        businessName,
        businessName.toUpperCase(),
        businessName + " Studio",
        businessName + " Co.",
        businessName.charAt(0),
        businessName.toLowerCase()
    ];

    templates.forEach(function(name, index){

        let design = "";

        switch(index){

            case 0:

                design = `
                    <div class="logo-icon">
                        <i class="fa-solid ${icon}" style="color:${color};font-size:60px;"></i>
                    </div>

                    <h2 style="color:${color};">${name}</h2>

                    <p>${tagline}</p>
                `;

                break;

            case 1:

                design = `
                    <div style="display:flex;justify-content:center;align-items:center;gap:12px;">

                        <i class="fa-solid ${icon}" style="font-size:42px;color:${color};"></i>

                        <h2 style="color:${color};">${name}</h2>

                    </div>

                    <p>${tagline}</p>
                `;

                break;

            case 2:

                design = `
                    <div style="width:90px;height:90px;border-radius:50%;background:${color};display:flex;justify-content:center;align-items:center;margin:auto;">

                        <i class="fa-solid ${icon}" style="font-size:40px;color:white;"></i>

                    </div>

                    <h2>${name}</h2>

                    <p>${tagline}</p>
                `;

                break;

            case 3:

                design = `
                    <div style="border:3px solid ${color};padding:25px;border-radius:15px;">

                        <i class="fa-solid ${icon}" style="font-size:45px;color:${color};"></i>

                        <h2>${name}</h2>

                        <p>${tagline}</p>

                    </div>
                `;

                break;

            case 4:

                design = `
                    <h1 style="font-size:70px;color:${color};">${businessName.charAt(0)}</h1>

                    <h2>${businessName}</h2>

                    <p>${tagline}</p>
                `;

                break;

            default:

                design = `
                    <h2 style="letter-spacing:4px;color:${color};">${businessName.toUpperCase()}</h2>

                    <hr style="margin:15px 0;">

                    <p>${tagline}</p>
                `;
        }

        logoContainer.innerHTML += `
    <div class="logo-card" data-index="${index}">
        ${design}
    </div>
`;
    });
    const cards = document.querySelectorAll(".logo-card");

cards.forEach(function(card){

    card.addEventListener("click", function(){

        // Remove selection from all cards
        cards.forEach(function(c){

            c.style.border = "2px solid transparent";
            c.style.transform = "scale(1)";

        });

        // Highlight selected card
        card.style.border = "3px solid #2563eb";
        card.style.transform = "scale(1.03)";

        // Update Selected Logo preview
        selectedPreview.innerHTML = card.innerHTML;

    });

});

}
// ===============================
// Download Selected Logo as PNG
// ===============================

const downloadPNG = document.getElementById("downloadPNG");

downloadPNG.addEventListener("click", function () {

    if (selectedPreview.innerHTML.trim() === "") {
        alert("Please generate and select a logo first.");
        return;
    }

    html2canvas(selectedPreview, {
        scale: 3,
        backgroundColor: "#ffffff"
    }).then(function (canvas) {

        const link = document.createElement("a");

        const fileName = businessInput.value.trim() || "LogoForge-Logo";

        link.download = fileName + ".png";
        link.href = canvas.toDataURL("image/png");

        link.click();

    });

});