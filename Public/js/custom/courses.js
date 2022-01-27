$(document).ready(()=>{


    const turnOver = (course) =>{
        // responsible for turning over a course
        
    }


    // courses details
    const courses = [
        {
            course_name: "Mathematics",
            course_img: "./assets/images/1.jpeg",
            course_grade: '8 - 12',
            course_state: "Compulsory",
        },

        {
            course_name: "Physical Sciences",
            course_img: "./assets/images/2.jpeg",
            course_grade: '10 - 12',
            course_state: "Compulsory",
        },

        {
            course_name: "English",
            course_img: "./assets/images/4.jpeg",
            course_grade: '8 - 12',
            course_state: "Compulsory",
        },

        {
            course_name: "Afrikaans",
            course_img: "./assets/images/5.jpeg",
            course_grade: '8 - 12',
            course_state: "Choice Subject",
        },

        {
            course_name: "isiZulu",
            course_img: "./assets/images/6.jpeg",
            course_grade: '8 - 12',
            course_state: "Choice Subject",
        },

        {
            course_name: "Accounting",
            course_img: "./assets/images/6.jpeg",
            course_grade: '10 - 12',
            course_state: "Choice subject",
        },

        {
            course_name: "Religion Studies",
            course_img: "./assets/images/7.jpeg",
            course_grade: '10 - 12',
            course_state: "Compulsory",
        },

        {
            course_name: "Life Orientation",
            course_img: "./assets/images/8.jpeg",
            course_grade: '8 - 12',
            course_state: "Compulsory",
        },

        {
            course_name: "Life Sciences",
            course_img: "./assets/images/1.jpeg",
            course_grade: '10 - 12',
            course_state: "Choice subject",
        },

        {
            course_name: "Technology",
            course_img: "./assets/images/6.jpeg",
            course_grade: '8 - 9',
            course_state: "Compulsory",
        },

        {
            course_name: "Social Sciences",
            course_img: "./assets/images/4.jpeg",
            course_grade: '8 - 9',
            course_state: "Compulsory",
        },

        {
            course_name: "Natural Sciences",
            course_img: "./assets/images/7.jpeg",
            course_grade: '8 - 9',
            course_state: "Compulsory",
        },

        {
            course_name: "Coding",
            course_img: "./assets/images/7.jpeg",
            course_grade: '8 - 9',
            course_state: "Compulsory",
        },
    ];

    // getting the courses container
    const courses_container = $('.courses');

    // adding the courses 
    courses.forEach((course) => {
        const course_item_html = `
        <div class="course-item">
            <div class="course-front">

                <div class="course-front-details-container">
                    <img class="course-img" src='${course.course_img}'></img>

                    <div class="course-details">
                        <div>
                            <p class="course-name">
                                ${course.course_name}
                            </p>
                            <p class="course-grade">
                                Grade: ${course.course_grade}
                            </p>
                        </div>

                        <div class="course-tag">
                            <p class="font-body text-primary text-md font-bold">
                                ${course.course_state}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
         `

        courses_container.append(course_item_html);
    })
    
})

