function check_Location(name) {
    return window.location.href.includes(name);
}

console.log(window.location.href);

const navbar = `<div>
          <h3 class="float-md-start mb-0">Pratham Asher</h3>
          <nav class="nav nav-masthead justify-content-center float-md-end">
            <a
              class="nav-link fw-bold py-1 px-0 ${(check_Location("index") || check_Location("https://mirror751.github.io/Pratham-Asher-Website/") || check_Location("https://mirror751.github.io/Pratham-Asher-Website/")) ? "active" : ""}"
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