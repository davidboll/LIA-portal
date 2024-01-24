$(() => {
  class Partner {
    constructor(id, name, email, logo, jobpost, bgColor) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.logo = logo;
      this.jobpost = jobpost;
      this.bgColor = bgColor;
    }

    createPartnerCard() {
      $(".partner-cards").append(`
        <div class="partner-card" data-id="${this.id}" style="background-color:${this.bgColor};">
            <h3 class="job-title">${this.jobpost}</h3>
            <h5 class="partner-name">/ ${this.name}</h5>
        </div>
      `);
    }
  }

  const partners = [
    new Partner(
      1,
      "Volvo",
      "hello@volvo.se",
      "./images/volvo.png",
      "Driving Innovation - Software Engineer Wanted!",
      "#FFD700"
    ),
    new Partner(
      2,
      "HM Home",
      "hello@hm.se",
      "./imges/hm.png",
      "E-commerce Wizard Wanted - Frontend Developer Opportunity!",
      "#448e79"
    ),
    new Partner(
      3,
      "IKEA",
      "hello@ikea.se",
      "./images/ikea.png",
      "Join our team - Fullstack Developer Wanted!",
      "#0058a3"
    ),
    new Partner(
      4,
      "Spotify",
      "hello@spotify",
      "./images/spotify.png",
      "Music Lover Wanted - Backend Developer Opportunity!",
      "#1DB954"
    ),
    new Partner(
      5,
      "Google",
      "hello@googl.com",
      "./images/google.png",
      "Wanna be happy? - Join Google Now!!",
      "#4285F4"
    ),
  ];

  const shuffleCards = (cardsArray) => {
    for (let i = cardsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
    }
  };

  shuffleCards(partners);

  partners.slice(0, 4).forEach((partner) => partner.createPartnerCard());

  function showPopup(partner) {
    $("#popup-name").text(partner.name);
    $("#popup-jobpost").text(partner.jobpost);
    $("#popup-email").text(partner.email);
    $("#popup-logo").attr("src", partner.logo);
    $("#popup-overlay, #partner-popup").removeClass("hidden");
  }

  $(".partner-cards").on("click", ".partner-card", function () {
    const partnerId = $(this).data("id");
    const partner = partners.find((p) => p.id === partnerId);
    if (partner) {
      showPopup(partner);
    }
  });

  $("#close-popup").click(() => {
    $("#popup-overlay, #partner-popup").addClass("hidden");
  });

  $("#popup-overlay").click(() => {
    $("#popup-overlay, #partner-popup").addClass("hidden");
  });

  $("#partner-popup").click((event) => {
    event.stopPropagation();
  });
});
