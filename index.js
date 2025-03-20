// Purpose: To add the badges to the website
const credly_start = "https://www.credly.com/badges"
const file_start = "./assets/pic"
const certmetrics_start = "https://cp.certmetrics.com/amazon/en/public/verify/credential"
const udemy_start = "https://www.udemy.com/certificate/UC-"

let showEggs = false;
showEggs = localStorage.getItem('showEggs') === "true";
let colorInterval;
let color = false
color = localStorage.getItem('color') === "true";

const temp = `<li class="nav-item "><a id="hide" class="nav-link fw-bold py-1 px-auto ${check_Location("easter_egg.html") && "active"}" 
            ${check_Location("contact") && `aria-current="page"`}
            href="./easter_egg.html">🥚</a></li>`

const badges = [
  {
    url: `${credly_start}/33dbbd63-bb16-4199-8d30-d333913809f5/public_url`,
    imgSrc:
      `${file_start}/AWS Certified AI Practitioner/aws-certified-ai-practitioner-early-adopter.png`,
  },
  {
    url: `${credly_start}/23f56b1d-de4f-4a93-8e46-98be208ec3dd/public_url`,
    imgSrc:
      `${file_start}/AWS Certified AI Practitioner/aws-certified-ai-practitioner.png`,
  },
  {
    url: `${credly_start}/dad868fe-e0bb-49c7-9e75-e5eed140581e/public_url`,
    imgSrc:
      `${file_start}/AWS Certified Cloud Practitioner/aws-certified-cloud-practitioner.png`,
  },
  {
    url: `${credly_start}/dc0f9216-7ffd-4760-85bf-43286d7fe64a/public_url`,
    imgSrc:
      `${file_start}/PCEP/pcep-30-02-pcep-certified-entry-level-python-programmer.png`,
  },
  {
    url: `${credly_start}/c6ef23f1-1721-4379-b287-00264fddc79d/public_url`,
    imgSrc: `${file_start}/PCEP/python-essentials-1.1.png`,
  },
];
const certifications = [
  {
    url: `${certmetrics_start}/c198f0811f30412d95a243844799f1a3`,
    imgSrc:
      `${file_start}/AWS Certified AI Practitioner/AWS Certified AI Practitioner certificate.png`,
  },
  {
    url: `${certmetrics_start}/c595a20af0f04f19ba51d983af95c507`,
    imgSrc:
      `${file_start}/AWS Certified Cloud Practitioner/AWS Certified Cloud Practitioner certificate.png`,
  },
  {
    url: `${credly_start}/c6ef23f1-1721-4379-b287-00264fddc79d/public_url`,
    imgSrc:
      `${file_start}/PCEP/cisco.png`,
  },
  {
    url: "https://verify.openedg.org/?id=i44d.60HO.csCh",
    imgSrc:
      `${file_start}/PCEP/PCEP-Pratham Asher.png`,
  }
];
const other_certifications = [
  {
    url: `${udemy_start}3f843250-6186-4852-ab89-03f4424eed96`,
    imgSrc:
      `${file_start}/1.jpg`,
  },
  {
    url: `${udemy_start}86065177-cc06-44e9-9cbe-560db270f041`,
    imgSrc:
      `${file_start}/4.jpg`,
  },
  {
    url: `${udemy_start}417f626e-2ea7-42db-b3c1-cc2f970ecbbc`,
    imgSrc:
      `${file_start}/3.jpg`,
  },
  {
    url: `${udemy_start}7bd125ad-81f2-4bfc-a9b5-9bb7e496205b`,
    imgSrc:
      `${file_start}/2.jpg`,
  }
];

const navElements = [
  { name: "Home", link: "index.html" },
  { name: "About Me", link: "About-Me.html" },
  { name: "Badges/Certifications", link: "badges-certifications.html" },
  { name: "Contact", link: "contact.html" }
];

const navStart = `
<nav class="navbar navbar-expand-md navbar-dark" style="position: fixed;">
  <div class="container-fluid">
    <h3><a id="name" href="https://www.prathamasher.com/">Pratham Asher</a></h3>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
`;

const navEnd = `
      </ul>
    </div>
  </div>
</nav>
`;

let navMid = ``;
let count = 0;
navElements.forEach((element) => {
  navMid += `
    <li class="nav-item ">
      <a id="${count}" class="nav-link fw-bold py-1 px-auto ${check_Location(element.link) ? "active" : ""}"
         ${check_Location(element.link) ? `aria-current="page"` : ""}
         href="./${element.link}">${element.name}</a>
    </li>
  `;
});

const navbar = `${navStart}${navMid}${navEnd}`;


// const navbar = `<div>
//           <h3 class="float-md-start mb-0">Pratham Asher</h3>
//           <nav class="nav nav-masthead justify-content-center float-md-end">
//             <a
//               class="nav-link fw-bold py-1 px-0 ${(check_Location("index") || window.location.href == ("https://mirror751.github.io/Pratham-Asher-Website/") || window.location.href == ("https://www.prathamasher.com/")) && "active"}"
//               ${check_Location("index") && `aria-current="page"`}
//               href="./index.html"
//               >Home</a>
//             <a
//               class="nav-link fw-bold py-1 px-0 ${check_Location("About-Me") && "active"}"
//               ${check_Location("About-Me") && `aria-current="page"`}
//               href="./About-Me.html"
//               >About Me</a>
//             <a class="nav-link fw-bold py-1 px-0 ${check_Location("badges") && "active"}"
//             ${check_Location("badges") && `aria-current="page"`} 
//             href="./badges-certifications.html"
//               >Badges/Certifications</a>
//             <a class="nav-link fw-bold py-1 px-0 ${check_Location("contact") && "active"}" 
//             ${check_Location("contact") && `aria-current="page"`}
//             href="./contact.html">Contact</a>
//           </nav>
//         </div>`;

async function setRandomColor() {
  const letters = '0123456789ABCDEF';
  colorInterval = setInterval(() => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    $("#easter-egg").css("color", color);
    $(".btn-light-egg").css("color", color);
    // console.log("Color changed to: " + color);
  }, 500); // Change color every 500 milliseconds
}

function resetColor() {
  $("#easter-egg").css("color", "white");
  $(".btn-light-egg").css("color", "#333333");
}

function check_Location(page) { return window.location.pathname.includes(page); }

function eggs() {
  console.log(showEggs);
  if (showEggs) {
    $(".ms-auto").append(temp);
  }
  else {
    $("#hide").remove();
  };
}

function setColor() {
  // console.log(color);
  if (color) {
    setRandomColor()
  }
  else {
    clearInterval(colorInterval);
    resetColor();
  };
}

function setBadges(x, size, col) {
  return `
        <div class="${col} themed-grid-col">
          <a href="${x.url}" target="_blank">
            <img class= "${size}" src="${x.imgSrc}" alt="" />
          </a>
        </div>
      `
}

$(document).ready(function () {
  console.log(window.location.href);


  $(".mb-auto").append(navbar);

  $("#color-mode-switch").prop("checked", color);

  $(".read-more-btn").click(function () {
    const $this = $(this); // Wrap 'this' in a jQuery object

    if ($this.text().trim() === "Read More") {
      // Change text to "Read Less" and update classes
      $this.text("Read Less");
      $this.addClass("read-more-btn-open").removeClass("read-more-btn-close");
    } else {
      // Change text to "Read More" and update classes
      $this.text("Read More");
      $this.addClass("read-more-btn-close").removeClass("read-more-btn-open");
    }
  });

  $("#easter-egg-btn").click(function () {
    // Action to perform when #myButton is clicked
    alert("Button with ID 'myButton' clicked!");
    // $("#easter-egg-btn").hide();
    showEggs = !showEggs;
    localStorage.setItem('showEggs', showEggs);
    eggs();
  });

  $("#color-mode-switch").change(function () {
    color = this.checked;
    localStorage.setItem('color', color);
    setColor();
  });

  eggs();
  setColor();
  // $("#hide").remove();
  if (check_Location("index") || window.location.href == ("https://mirror751.github.io/Pratham-Asher-Website/") || window.location.href == ("https://www.prathamasher.com/")) {
    $(".1").addClass("active");
    $(".1").addClass(`aria-current="page"`);
  }

  badges.forEach((badge) => { $(".badge-container").append(setBadges(badge, "badges", "col-md-4")); });

  certifications.forEach((certification) => { $(".certifications-container").append(setBadges(certification, "certification", "col-md-auto")); });


  other_certifications.forEach((other_certification) => { $(".other-certifications-container").append(setBadges(other_certification, "certification", "col-md-auto")); });

});