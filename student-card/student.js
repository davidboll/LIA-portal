$(() => {
    function Student (
        ID,
        name,
        age,
        location,
        education,
        languages,
        bio,
        goals,
        skills,
        email,
        phone,
        social,
    ) {
        this.ID = ID;
        this.name = name;
        this.age = age;
        this.location = location;
        this.education = education;
        this.languages = languages;
        this.bio = bio;
        this.goals = goals;
        this.skills = skills;
        this.email = email;
        this.phone = phone;
        this.social =social;
    }

    Student.prototype.createStudentContent = function () {
        $('.bio-content').append(`
        <p id="bio">${this.bio}</p>
        `);

        $('.goals').append(`
        <p id="goals">${this.goals}</p>`)
    }

    $('.student-card').on("click", (e) => {
        // Check if the popup is not visible before showing it
        if (!$('.student-popup').hasClass('activePopup')) {
            showPopup();
        }
        e.stopPropagation(); // Prevent the click event from propagating to document
    });

    // Bind a click event to the entire document
    $(document).on('click', (e) => {
        // Check if the clicked element is not part of the active popup
        if (!$(e.target).closest('.activePopup').length) {
            hidePopup();
        }
    });

    function showPopup() {
        $(".student-popup").show().addClass('activePopup'); // Add a class to identify the active popup
        $('.student-card').hide();
    }

    function hidePopup() {
        $(".student-popup").hide().removeClass('activePopup'); // Remove the class on hide
        $('.student-card').show();
    }



    let zlatan = new Student(
        "1",
        "Zlatan Ibrahimovic",
        "41",
        "Milano, Italy",
        "Profesional football player",
        "Swedish, english, italian",
        "Hi! I'm a 41-year-old retired professional football player on a mission to turn my new passion into a career far from the football pitch. Currently studying my second year at Changemaker Educations to become a web developer and are now ready to take the next step and put my new skills to the test in the real world! I'm a very dedicated person and determined to reach every goal I set.",
        "My dream is to secure my first job in the tech industry, where I can apply my expertise in HTML, CSS and JavaScript to create user-friendly, visually appealing websites.",
        "HTML/CSS, JavaScript, WordPress",
        "z.ibrahimovic@cmeducation.se",
        "0731231212",
        "facebook"
    )



    let studentArray = [zlatan];

    studentArray.forEach((student) => student.createStudentContent());
   
  });