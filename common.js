function check_Location(name) {
    return window.location.href.includes(name);
}
$(document).ready(function () {
console.log(window.location.href);

const navbar = `<div>
          <h3 class="float-md-start mb-0">Pratham Asher</h3>
          <nav class="nav nav-masthead justify-content-center float-md-end">
            <a
              class="nav-link fw-bold py-1 px-0 ${(check_Location("index") || window.location.href == ("https://mirror751.github.io/Pratham-Asher-Website/")) && "active"}"
              ${check_Location("index") && `aria-current="page"`}
              href="./index.html"
              >Home</a>
            <a class="nav-link fw-bold py-1 px-0 ${check_Location("badges") && "active"}"
            ${check_Location("badges") && `aria-current="page"`} 
            href="./badges-certifications.html"
              >Badges/Certifications</a>
            <a class="nav-link fw-bold py-1 px-0 ${check_Location("contact") && "active"}" 
            ${check_Location("contact") && `aria-current="page"`}
            href="./contact.html">Contact</a>
          </nav>
        </div>`;
  $(".mb-auto").append(navbar);
});