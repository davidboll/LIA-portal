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

    let zlatan = new Student(
        "1",
        "Zlatan Ibrahimovic",
        "41",
        "Milano, Italy",
        "Profesional football player",
        "Swedish, english, italian",
        "Hi! I’m a 41-year-old retired professional football player on a mission to turn my new passion into a career far from the football pitch. Currently studying my second year at Changemaker Educations to become a web developer and are now ready to take the next step and put my new skills to the test in the real world! I'm a very dedicated person and determined to reach every goal I set.",
        "My dream is to secure my first job in the tech industry, where I can apply my expertise in HTML, CSS and JavaScript to create user-friendly, visually appealing websites.",
        "HTML/CSS, JavaScript, WordPress",
        "z.ibrahimovic@cmeducation.se",
        "0731231212",
        "facebook"
    )


  
   
  });
  