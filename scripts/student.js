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
        skillOne,
        skillTwo,
        skillThree,
        email,
        phone,
        image,
    ) {
        this.ID = ID;
        this.name = name;
        this.age = age;
        this.location = location;
        this.education = education;
        this.languages = languages;
        this.bio = bio;
        this.goals = goals;
        this.skillOne = skillOne;
        this.skillTwo = skillTwo;
        this.skillThree = skillThree;
        this.email = email;
        this.phone = phone;
        this.image = image;
    }

    const createStudentContent = student => {
        $('.sidebar').empty();
        $('.bio, .goals, .skills').empty();
        $('.bio').append(`
        <h5>Bio</h5>
        <p>${student.bio}</p>
        `);

        $('.goals').append(`
        <h5>Goals</h5>
        <p>${student.goals}</p>`);

        $('.skills').append(`
        <h5>Skills</h5>
        <p>Languages we have studied so far:</p>
        <ul>
            <li>${student.skillOne}</li>
            <li>${student.skillTwo}</li>
            <li>${student.skillThree}</li>
        <ul> 
        `);

        $('.sidebar').append(`
        <div class="img-wrapper">
            <img class="img" src="${student.image}" alt="avatar">
        </div>
        <div class="info-content">
            <h4>${student.name}</h4>
            <p><b>Age:</b> ${student.age}</p>
            <p><b>From:</b> ${student.location}</p>
            <p><b>Education:</b> ${student.education}</p>
            <p><b>Language:</b> ${student.languages}</p>
            <h4>Contact Me</h4>
            <p>${student.phone}</p>
            <p>${student.email}</p>
        </div>
        `);
    }
 
    function showPopup(student) {
      // e.stopPropagation(); // Prevent the click event from propagating to document
        $(".student-popup-overlay").show().addClass('activePopup').css("display","flex"); // Add a class to identify the active popup
        createStudentContent(student);
    }

    $(".student-popup-overlay").on("click", hidePopup)

    function hidePopup() {
        $(".student-popup-overlay").hide().removeClass('activePopup'); // Remove the class on hide
    }

    const studentArray = [
    new Student(
        1,
        "Anna Stewart",
        "41",
        "Milano, Italy",
        "Frontend Developer",
        "Swedish, english, italian",
        "Hi! I'm a 41-year-old retired professional football player on a mission to turn my new passion into a career far from the football pitch. Currently studying my second year at Changemaker Educations to become a web developer and are now ready to take the next step and put my new skills to the test in the real world! I'm a very dedicated person and determined to reach every goal I set.",
        "My dream is to secure my first job in the tech industry, where I can apply my expertise in HTML, CSS and JavaScript to create user-friendly, visually appealing websites.",
        "HTML/CSS",
        "Javascript",
        "React",
        "z.ibrahimovic@cmeducation.se",
        "0731231212",
        "../images/Student-slider/student1.png"
    ),
     new Student(
        2,
        "John Doe",
        "23",
        "New York, USA",
        "Backend Developer",
        "English, Spanish",
        "Greetings! I'm John Doe, a 23-year-old aspiring backend developer studying computer science in the bustling city of New York. My passion lies in creating efficient and scalable solutions. As a dedicated learner, I actively contribute to open-source projects, aiming to specialize in server-side technologies and database management.",
        "My goal is to become an expert in server-side technologies, apply my skills to real-world projects, and contribute to the ever-evolving landscape of web development.",
        "Java",
        "Python",
        "Node.js",
        "john.doe@example.com",
        "555-1234",
        "../images/Student-slider/student2.png"
    ),
    new Student(
        3,
        "Alice Johnson",
        "22",
        "London, UK",
        "UX/UI Designer",
        "English, French",
        "Hello! I'm Alice Johnson, a 22-year-old design enthusiast studying at London Design School. I am passionate about creating delightful user experiences and elegant interfaces. Specializing in user-centered design principles and modern design tools, my goal is to contribute innovative designs that enhance overall user experiences.",
        "I aim to excel in UX/UI design, incorporating creativity and technology to deliver user-friendly interfaces. My goal is to contribute to the field with innovative and engaging designs.",
        "Adobe XD",
        "Figma",
        "Sketch",
        "alice.johnson@example.com",
        "555-5678",
        "../images/Student-slider/student3.png"
    ),
    new Student(
        4,
        "Ahmed Hassan",
        "26",
        "Cairo, Egypt",
        "Mobile App Developer",
        "Arabic, English",
        "Marhaban! I'm Ahmed Hassan, a 26-year-old mobile app developer passionate about creating innovative and user-friendly applications for both Android and iOS platforms. My dedication to mobile app development fuels my pursuit of delivering impactful and user-centric applications.",
        "My goal is to build apps that positively impact users' lives, utilizing my skills in Java, Kotlin, and Swift. I am eager to contribute to the dynamic field of mobile app development.",
        "Java",
        "Kotlin",
        "Swift",
        "ahmed.hassan@example.com",
        "555-6789",
        "../images/Student-slider/student4.png"
    ),
    new Student(
        5,
        "Eva Martinez",
        "24",
        "Barcelona, Spain",
        "Frontend Developer",
        "Spanish, English",
        "Hola! I'm Eva Martinez, a 24-year-old frontend developer with a passion for crafting user-friendly interfaces. I love turning design concepts into responsive and interactive web applications. My dedication to creating seamless user experiences drives my journey in web development.",
        "My goal is to enhance user experiences through innovative front-end solutions. I aim to apply my skills in HTML, CSS, and JavaScript to create visually appealing and user-friendly websites.",
        "HTML/CSS",
        "JavaScript",
        "React",
        "eva.martinez@example.com",
        "555-4321",
        "../images/Student-slider/student5.png"
    ),
    new Student(
        6,
        "Sophia Kim",
        "23",
        "Seoul, South Korea",
        "Cybersecurity Analyst",
        "Korean, English",
        "Annyeonghaseyo! I'm Sophia Kim, a 23-year-old cybersecurity enthusiast. My focus is on protecting digital assets and ensuring the security of online systems. My commitment to cybersecurity drives my dedication to contributing to the safety of digital environments.",
        "My goal is to contribute to building robust and secure digital environments. I aim to address cybersecurity challenges and make meaningful contributions to the field.",
        "Network Security",
        "Penetration Testing",
        "Incident Response",
        "sophia.kim@example.com",
        "555-2345",
        "../images/Student-slider/student6.png"
    ),
    new Student(
        7,
        "Bob Smith",
        "25",
        "San Francisco, USA",
        "Data Scientist",
        "English, Mandarin",
        "Greetings! I'm Bob Smith, a 25-year-old data enthusiast on a journey to become a data scientist. I enjoy extracting insights from complex datasets and creating data-driven solutions. My commitment to learning and applying machine learning techniques drives my pursuit of solving real-world problems.",
        "My goal is to become proficient in machine learning, apply data-driven solutions to real-world challenges, and contribute to the ever-expanding field of data science.",
        "Python",
        "R",
        "SQL",
        "bob.smith@example.com",
        "555-9876",
        "../images/Student-slider/student7.png"
    ),
    new Student(
        8,
        "Mia Johnson",
        "21",
        "Toronto, Canada",
        "Game Developer",
        "English, French",
        "Hello! I'm Mia Johnson, a 21-year-old game developer with a passion for creating immersive and engaging gaming experiences. I enjoy exploring new technologies and pushing the boundaries of interactive entertainment. My dedication to game development drives my pursuit of creating captivating and innovative gaming experiences.",
        "My goal is to contribute to the development of innovative and successful video games. I aim to leverage my skills in Unity, C#, and 3D modeling to create unique and captivating gaming experiences.",
        "Unity",
        "C#",
        "3D Modeling",
        "mia.johnson@example.com",
        "555-5432",
        "../images/Student-slider/student8.png"
    ),
    new Student(
        9,
        "Michael Chen",
        "22",
        "Beijing, China",
        "AI Researcher",
        "English, Mandarin",
        "Ni hao! I'm Michael Chen, a 22-year-old AI enthusiast exploring the depths of artificial intelligence. My passion lies in developing intelligent systems and machine learning algorithms. I aspire to contribute to cutting-edge AI research and advancements.",
        "My goal is to contribute to cutting-edge AI research and advancements, pushing the boundaries of what's possible with artificial intelligence.",
        "Python",
        "TensorFlow",
        "PyTorch",
        "michael.chen@example.com",
        "555-8765",
        "../images/Student-slider/student9.png"
    ),
    new Student(
        10,
        "Luca Rossi",
        "24",
        "Rome, Italy",
        "Blockchain Developer",
        "Italian, English",
        "Ciao! I'm Luca Rossi, a 24-year-old blockchain enthusiast. I specialize in developing decentralized applications and smart contracts to bring transparency and security to various industries. My dedication to blockchain development drives my pursuit of creating secure and transparent solutions.",
        "My goal is to contribute to the widespread adoption of blockchain technology, building secure and transparent solutions. I am excited to be part of the evolving field of blockchain development.",
        "Solidity",
        "Web3.js",
        "Hyperledger Fabric",
        "luca.rossi@example.com",
        "555-7654",
        "../images/Student-slider/student10.png"
    ),
    new Student(
        11,
        "Yuki Tanaka",
        "22",
        "Tokyo, Japan",
        "AI Ethics Advocate",
        "Japanese, English",
        "Konnichiwa! I'm Yuki Tanaka, a 22-year-old passionate advocate for ethical AI based in Tokyo, Japan. Committed to promoting responsible AI development, I believe in ensuring the fair and unbiased use of artificial intelligence to benefit society. My journey involves actively contributing to conversations surrounding the ethical considerations in AI, fostering awareness, and collaborating with like-minded individuals to create a positive impact.",
        "My goal is to contribute to shaping ethical guidelines for AI implementation, leading policy advocacy initiatives, and engaging with the community to raise awareness about the importance of ethical considerations in artificial intelligence.",
        "Ethics in AI",
        "Policy Advocacy",
        "Community Engagement",
        "yuki.tanaka@example.com",
        "555-8765",
        "../images/Student-slider/student11.png"
    ),
    new Student(
        12,
        "Emma Anderson",
        "25",
        "Stockholm, Sweden",
        "Full Stack Developer",
        "Swedish, English",
        "Hej! I'm Emma Anderson, a 25-year-old enthusiastic full-stack developer from Stockholm, Sweden. My passion for technology and coding has led me to pursue a career where I can create seamless and innovative web applications. As a dedicated learner, I am currently exploring various technologies to enhance my skills and contribute to the ever-evolving world of web development.",
        "My goal is to become a versatile full-stack developer, proficient in both front-end and back-end technologies. I aim to work on challenging projects, collaborate with diverse teams, and make a positive impact in the tech industry.",
        "JavaScript",
        "React",
        "Node.js",
        "emma.anderson@example.com",
        "555-9876",
        "../images/Student-slider/student12.png"
    ), 
    ];

    studentArray.forEach(student => {
        let studentElement = `
            <div class="student-ava" >
            <img src=${student.image} alt="student">
            <h4>${student.name}</h4>
            </div>
        `
        $('.student-wrapper').append($(studentElement).on("click", () => showPopup(student)));
    }) 
    

  });