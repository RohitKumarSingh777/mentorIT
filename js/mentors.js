// Mock mentors data
const mentorsData = [
    {
        id: '1',
        name: 'Rohit Singh Rajput',
        title: 'Senior Frontend Developer',
        specialization: 'React, Next.js, TypeScript',
        experience: '8 years',
        education: 'MS in Computer Science, Uttaranchal University',
        company: 'Infosys',
        bio: "I'm a passionate frontend developer with 8 years of experience building scalable web applications. I specialize in React and Next.js, and I love helping others learn and grow in their development journey.",
        hourlyRate: 2500,
        rating: 4.9,
        reviews: 124,
        imageUrl: 'images/rrr.jpg',
    },
    {
        id: '2',
        name: 'Shivam Kurmi',
        title: 'Full Stack Engineer',
        specialization: 'MERN Stack, TypeScript',
        experience: '6 years',
        education: 'B.Tech in Computer Science, IIT Delhi',
        company: 'Microsoft',
        bio: "Full stack developer with expertise in building modern web applications using the MERN stack. I enjoy solving complex problems and mentoring junior developers.",
        hourlyRate: 150,
        rating: -3.5,
        reviews: 98,
        imageUrl: 'images/natta.jpg',
    },
    {
        id: '3',
        name: 'Natti Goel',
        title: 'DevOps Specialist',
        specialization: 'AWS, Docker, Kubernetes',
        experience: '10 years',
        education: 'M.Tech in Computer Engineering, NIT Trichy',
        company: 'Amazon',
        bio: "DevOps engineer with a decade of experience in cloud infrastructure and CI/CD pipelines. I help teams implement best practices for deployment and scaling applications.",
        hourlyRate: 500,
        rating: 4.7,
        reviews: 87,
        imageUrl: 'images/natti.jpg',
    },
    {
        id: '4',
        name: 'Mithi Kansal',
        title: 'Mobile Developer',
        specialization: 'React Native, Flutter',
        experience: '5 years',
        education: 'B.E. in Information Technology, BITS Pilani',
        company: 'Flipkart',
        bio: "Mobile app developer specializing in cross-platform solutions. I've built and published over 20 apps for iOS and Android using React Native and Flutter.",
        hourlyRate: 1500,
        rating: 4.9,
        reviews: 112,
        imageUrl: 'images/roshita.jpg',
    },
    {
        id: '5',
        name: 'Choco Gupta',
        title: 'Backend Engineer',
        specialization: 'Node.js, Python, Databases',
        experience: '7 years',
        education: 'M.S. in Software Engineering, IIIT Hyderabad',
        company: 'Paytm',
        bio: "Backend developer with strong expertise in building scalable APIs and database design. I enjoy working on performance optimization and system architecture.",
        hourlyRate: 1800,
        rating: 4.8,
        reviews: 76,
        imageUrl: 'images/chocoo.jpg',
    },
];

// Get all mentors
function getMentors() {
    return mentorsData;
}

// Get mentor by ID
function getMentorById(id) {
    return mentorsData.find(mentor => mentor.id === id);
}