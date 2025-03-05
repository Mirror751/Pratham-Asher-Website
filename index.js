// Purpose: To add the badges to the website
$(document).ready(function () {
    const badges = [
        {
            url: "https://www.credly.com/badges/33dbbd63-bb16-4199-8d30-d333913809f5/public_url",
            imgSrc:
                "./assets/pic/AWS Certified AI Practitioner/aws-certified-ai-practitioner-early-adopter.png",
        },
        {
            url: "https://www.credly.com/badges/23f56b1d-de4f-4a93-8e46-98be208ec3dd/public_url",
            imgSrc:
                "./assets/pic/AWS Certified AI Practitioner/aws-certified-ai-practitioner.png",
        },
        {
            url: "https://www.credly.com/badges/dad868fe-e0bb-49c7-9e75-e5eed140581e/public_url",
            imgSrc:
                "./assets/pic/AWS Certified Cloud Practitioner/aws-certified-cloud-practitioner.png",
        },
        {
            url: "https://www.credly.com/badges/dc0f9216-7ffd-4760-85bf-43286d7fe64a/public_url",
            imgSrc:
                "./assets/pic/PCEP/pcep-30-02-pcep-certified-entry-level-python-programmer.png",
        },
        {
            url: "https://www.credly.com/badges/c6ef23f1-1721-4379-b287-00264fddc79d/public_url",
            imgSrc: "./assets/pic/PCEP/python-essentials-1.1.png",
        },
    ];

    badges.forEach((badge) => {
        const badgeElement = `
        <div class="col-md-4 themed-grid-col">
          <a href="${badge.url}" target="_blank">
            <img width="200" src="${badge.imgSrc}" alt="" />
          </a>
        </div>
      `;
        $(".row.mb-3.text-center").append(badgeElement);
    });
});

function check_Location(name) {
    return window.location.href.includes(name);
}

const navbar = `<div>
          <h3 class="float-md-start mb-0">Pratham Asher</h3>
          <nav class="nav nav-masthead justify-content-center float-md-end">
            <a
              class="nav-link fw-bold py-1 px-0 ${check_Location("index") ? "active" : ""}"
              ${check_Location("index") ? `aria-current="page"` : ""}
              href="./index.html"
              >Home</a
            >
            <a class="nav-link fw-bold py-1 px-0 ${check_Location("badges") ? "active" : ""}"
            ${check_Location("badges") ? `aria-current="page"` : ""} 
            href="./badges.html"
              >Badges</a
            >
            <a class="nav-link fw-bold py-1 px-0 ${check_Location("certifications") ? "active" : ""}" 
            ${check_Location("certifications") ? `aria-current="page"` : ""}
            href="./certifications.html">Certifications</a>
            <a class="nav-link fw-bold py-1 px-0 ${check_Location("contact") ? "active" : ""}" 
            ${check_Location("contact") ? `aria-current="page"` : ""}
            href="./contact.html">Contact</a>
          </nav>
        </div>`;
$(".mb-auto").append(navbar);
