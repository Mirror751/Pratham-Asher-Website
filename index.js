// Purpose: To add the badges to the website
credly_start = "https://www.credly.com/badges"
file_start = "./assets/pic"
certmetrics_start = "https://cp.certmetrics.com/amazon/en/public/verify/credential"
udemy_start = "https://www.udemy.com/certificate/UC-"

$(document).ready(function () {
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

  badges.forEach((badge) => {
    const badgeElement = `
        <div class="col-md-4 themed-grid-col">
          <a href="${badge.url}" target="_blank">
            <img width="200" src="${badge.imgSrc}" alt="" />
          </a>
        </div>
      `;
    $(".badge-container").append(badgeElement);
  });

  certifications.forEach((certification) => {
    const certificationElement = `
        <div class="col-md-auto themed-grid-col">
          <a href="${certification.url}" target="_blank">
            <img width="300" src="${certification.imgSrc}" alt="" />
          </a>
        </div>
      `;
    $(".certifications-container").append(certificationElement);
  });


other_certifications.forEach((certification) => {
  const certificationElement = `
        <div class="col-md-auto themed-grid-col">
          <a href="${certification.url}" target="_blank">
            <img width="300" src="${certification.imgSrc}" alt="" />
          </a>
        </div>
      `;
  $(".other-certifications-container").append(certificationElement);
});

});