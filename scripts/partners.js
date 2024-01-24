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
        <div class="partner-card" style="background-color:${this.bgColor};">
          <div class="center-container">
            <h3 class="job-title">${this.jobpost}</h3>
          </div>
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Volvo_logo.svg/1200px-Volvo_logo.svg.png",
      "Driving Innovation - Software Engineer Wanted!",
      "#FFD700"
    ),
    new Partner(
      2,
      "HM Home",
      "hello@hm.se",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png",
      "E-commerce Wizard Wanted - Frontend Developer Opportunity!",
      "#448e79"
    ),
    new Partner(
      3,
      "IKEA",
      "hello@ikea.se",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/IKEA_logo.svg/1200px-IKEA_logo.svg.png",
      "Join our team - Fullstack Developer Wanted!",
      "#0058a3"
    ),
    new Partner(
      4,
      "Spotify",
      "hello@spotify",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png",
      "Music Lover Wanted - Backend Developer Opportunity!",
      "#1DB954"
    ),
  ];

  partners.forEach((partner) => partner.createPartnerCard());
});
