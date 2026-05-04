/**
 * ====================================================================
 * GYANSCHOOL - COURSES DATA FILE
 * ====================================================================
 * To ADD a new course: Copy any course object below and paste it into
 * the `courses` array. Update the fields and save the file.
 *
 * Fields:
 *   title      - Course title
 *   badge      - Price label e.g. "FREE", "$49", "₹999"
 *   image      - Path to course image (put the image in images/ folder)
 *   rating     - Number from 0 to 5 (supports 0.5 increments)
 *   ratingText - Text shown next to stars e.g. "(4.8)"
 *   lessons    - Number of lessons
 *   students   - Student count string e.g. "5k+"
 *   description- Short course description
 *   enrollUrl  - URL to redirect when "Enroll in LMS" is clicked
 * ====================================================================
 */

const courses = [
    {
        title: "“White collar” Executive AI package",
        badge: "₹7999",
        image: "images/white collar executives.jpeg",
        rating: 4.5,
        ratingText: "(4.8)",
        description: "For your Personal Productivity – Finish 10 hours work in minutes! Build professional Business presentations, quick podcasts, videos, analysis, Quick visuals, summaries, infographics, Process diagrams & more",
        enrollUrl: "https://lms.capoasis.com/checkout/7"
    },
    {
        title: "AI for Marketing",
        badge: "₹8999",
        image: "images/Marketing.jpeg",
        rating: 5,
        ratingText: "(5.0)",
        description: "Prepare production ready Graphic designs for product & services marketing, video ADs, use your Brand and Content studio, along with Digital Marketing AD campaigns",
        enrollUrl: "https://lms.capoasis.com/checkout/8"
    },
    {
        title: "AI for Finance",
        badge: "₹9999",
        image: "images/finance.png",
        rating: 4,
        ratingText: "(4.6)",
        description: "Impress Managers with dynamic business and Finance CFO-level Dashboards, Build professional Business presentations in minutes with visuals",
        enrollUrl: "https://lms.capoasis.com/checkout/9"
    },
    {
        title: "AI for Sales",
        badge: "₹7999",
        image: "images/sales.jpeg",
        rating: 4,
        ratingText: "(4.4)",
        description: "Run Sales leads generation with quick Digital Marketing AD campaigns, Website making.",
        enrollUrl: "https://lms.capoasis.com/checkout/10"
    },
    {
        title: "AI for Business Workflow Automation",
        badge: "₹5999",
        image: "images/operations automation.jpeg",
        rating: 4,
        ratingText: "(4.1)",
        description: "Learn common business workflow automations and set new Business rules ahead to make your operations 3-5 times faster, reduce daily manual work",
        enrollUrl: "https://lms.capoasis.com/checkout/11"
    },
    {
        title: "Degree & MBA Graduate – Business Productivity package",
        badge: "₹14999",
        image: "images/AI for Business Productivity of Graduates.jpeg",
        rating: 4,
        ratingText: "(4.8)",
        description: "Boost your Business Productivity at work – finish 10 hours of work in minutes and stand out as the Smart worker in your organization",
        enrollUrl: "https://lms.capoasis.com/checkout/12"
    },


    // ---- ADD NEW COURSES BELOW THIS LINE ----
    // {
    //     title: "Your New Course Title",
    //     badge: "$99",
    //     image: "images/your_course_image.png",
    //     rating: 4.5,
    //     ratingText: "(4.5)",
    //     lessons: 20,
    //     students: "1k+",
    //     description: "Short description of the course.",
    //     enrollUrl: "https://your-lms-link.com/course"
    // },
];

// ====================================================================
// RENDERING ENGINE — DO NOT MODIFY BELOW THIS LINE
// ====================================================================

function renderStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars += '<i class="fa-solid fa-star"></i>';
        } else if (rating >= i - 0.5) {
            stars += '<i class="fa-solid fa-star-half-stroke"></i>';
        } else {
            stars += '<i class="fa-regular fa-star"></i>';
        }
    }
    return stars;
}

function renderCourses() {
    const grid = document.getElementById('courses-grid');
    if (!grid) return;

    const delays = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3'];

    courses.forEach((course, index) => {
        const delay = delays[index % delays.length];
        const card = document.createElement('div');
        card.className = `course-card reveal ${delay}`;
        card.innerHTML = `
            <div class="course-img">
                <span class="course-badge">${course.badge}</span>
                <img src="${course.image}" alt="${course.title}">
            </div>
            <div class="course-content">
                <div class="course-rating" style="color: var(--accent-color); font-size: 0.875rem; margin-bottom: 0.5rem;">
                    ${renderStars(course.rating)}
                    <span style="color: var(--text-muted); margin-left: 0.5rem;">${course.ratingText}</span>
                </div>
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-meta">
                    <span><i class="fa-solid fa-book-open"></i> ${course.lessons} Lessons</span>
                    <span><i class="fa-solid fa-user-graduate"></i> ${course.students} Students</span>
                </div>
                <a href="${course.enrollUrl}" class="btn btn-outline" style="margin-top: auto;">Get Started</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Run when page loads
document.addEventListener('DOMContentLoaded', renderCourses);
