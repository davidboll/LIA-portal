$(() => {
  class Partner {
    constructor(id, name, email, logo, jobpost, jobdescription, bgColor) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.logo = logo;
      this.jobpost = jobpost;
      this.jobdescription = jobdescription;
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
      "./../Images/logo-volvo.png",
      "Driving Innovation - Software Engineer Wanted!",
      "Join our innovative team at Volvo as a Software Engineer, where cutting-edge technology meets automotive excellence. In this role, you'll be instrumental in developing the software that powers our next generation of vehicles. From autonomous driving systems to eco-friendly electric engines, your work will shape the future of transportation. Expect to collaborate with a team of passionate engineers and designers, bringing your expertise in software development to create safe, sustainable, and exciting driving experiences. If you have a passion for technology and a drive to innovate in the automotive industry, we want you on board!",
      "#FFD700"
    ),
    new Partner(
      2,
      "HM Home",
      "hello@hm.se",
      "./../Images/logo-hm.png",
      "E-commerce Wizard Wanted - Frontend Developer Opportunity!",
      "As a Frontend Developer at HM Home, you'll play a crucial role in enhancing our e-commerce platform. Your mission is to create an engaging, intuitive, and aesthetically pleasing online shopping experience for our customers. You'll work closely with UI/UX designers and backend developers to implement responsive designs, ensuring a seamless and dynamic user experience across various devices. If you're passionate about crafting beautiful web interfaces and have a knack for bringing digital designs to life, this is the perfect opportunity to leave your mark in the world of e-commerce.",
      "#448e79"
    ),
    new Partner(
      3,
      "IKEA",
      "hello@ikea.se",
      "./../Images/logo-ikea.png",
      "Join our team - Fullstack Developer Wanted!",
      "IKEA is seeking a talented Fullstack Developer to join our IT team. In this role, you'll be responsible for developing and maintaining both the front-end and back-end of our web applications. Your work will directly contribute to enhancing the online shopping experience for millions of IKEA customers worldwide. You'll have the opportunity to work on various projects, from improving our website's user interface to optimizing our back-end systems for performance and scalability. If you're a problem-solver with a passion for both front-end and back-end technologies, IKEA offers an exciting environment to grow and make a significant impact.",
      "#0058a3"
    ),
    new Partner(
      4,
      "Spotify",
      "hello@spotify.se",
      "./../Images/logo-spotify.png",
      "Music Lover Wanted - Backend Developer Opportunity!",
      "Spotify is looking for a Backend Developer with a passion for music and technology. In this role, you'll be at the heart of our mission to connect millions of listeners with the music they love. Your responsibilities will include developing and maintaining the server-side logic, ensuring high performance and responsiveness to requests from the front-end. You'll also be involved in integrating the front-end elements built by your teammates into the application. This role is perfect for someone who loves tackling challenging problems and wants to impact how the world experiences music.",
      "#1DB954"
    ),
    new Partner(
      5,
      "Google",
      "hello@googl.com",
      "./../Images/logo-google.png",
      "Wanna be happy? - Join Google Now!!",
      "As a Generalist Software Engineer at Google, you'll work on a variety of projects that contribute to making information universally accessible and useful. You'll have the chance to solve complex software engineering problems and develop innovative products that impact millions of users worldwide. From developing scalable web applications to creating powerful machine learning algorithms, your work will span across different teams and projects. Google is the perfect place for those who love learning and thrive in fast-paced, collaborative environments. If you're excited about building technology that makes a difference, Google is where you can turn your ideas into reality.",
      "#4285F4"
    ),
    new Partner(
      6,
      "Adobe",
      "hello@adobe.com",
      "./../Images/logo-adobe.png",
      "Creative Minds Wanted - UX/UI Designer Opportunity!",
      "Adobe is on the hunt for a creative and skilled UX/UI Designer to join our team. In this role, you'll have the opportunity to work on cutting-edge software solutions that empower creatives around the world. Your designs will enhance user experiences across our suite of products, from Photoshop to Adobe XD. Collaborate with a team of talented designers and developers to craft intuitive interfaces and transformative design experiences. If you're passionate about design and want to impact how millions of people create, Adobe offers an inspiring environment to innovate and grow.",
      "#FF0000"
    ),
    new Partner(
      7,
      "Tesla",
      "hello@tesla.com",
      "./../Images/logo-tesla.png",
      "Innovators Wanted - Electrical Engineer Opportunity!",
      "Tesla is looking for an Electrical Engineer to join our mission in accelerating the world's transition to sustainable energy. In this role, you'll work on the forefront of technology, developing electrical systems for our electric vehicles and renewable energy products. Your expertise will contribute to the innovation of battery technology, power electronics, and energy storage solutions. Collaborate with a team of engineers and designers to build products that are both powerful and sustainable. If you're driven by innovation and want to make a significant impact on the future of energy, Tesla is the place for you.",
      "#CC0000"
    ),
    new Partner(
      8,
      "Netflix",
      "hello@netflix.com",
      "./../Images/logo-netflix.png",
      "Storytellers Wanted - Content Developer Opportunity!",
      "Netflix is seeking a Content Developer with a passion for storytelling and a knack for creating engaging content. In this role, you'll be part of our content development team, working on original series and movies that captivate audiences worldwide. Your creativity will help shape the future of entertainment, bringing new stories to life and exploring diverse genres. Work alongside talented writers, producers, and directors in an environment that values innovation and creativity. If you're passionate about storytelling and want to contribute to the world of entertainment, Netflix offers a unique platform to showcase your talents.",
      "#E50914"
    ),
  ];

  const shuffleCards = (cardsArray) => {
    for (let i = cardsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
    }
  };

  shuffleCards(partners);

  partners.forEach((partner) => partner.createPartnerCard());

  function showPopup(partner) {
    $("#popup-logo").attr("src", partner.logo);
    $("#popup-name").text(partner.name);
    $("#popup-jobpost").text(`- ${partner.jobpost}`);
    $("#popup-jobdescription").text(partner.jobdescription);
    $("#popup-email").attr("href", "mailto:" + partner.email);
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
