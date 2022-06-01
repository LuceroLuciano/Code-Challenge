const VisualparnertsService = require('../../lib/services/VisualpartnersService')

describe("Unit Testing Code Challenge", () => {
    test("1. Consult all emails of students with haveCertifition is equals True", () => {
        const students = [{                            
            id: "6264d5d89f1df827eb84bb23",
            name: "Warren",
            email: "Todd@visualpartnership.xyz",
            credits: 508,
            enrollments: [
                "Visual Thinking Intermedio",
                "Visual Thinking Avanzado"
                ],
            previousCourses: 1,
            haveCertification: true
        },
        {                            
            id: "6264d5d85cf81c496446b67f",
            name: "Lucinda",
            email: "Sexton@visualpartnership.xyz",
            credits: 677,
            enrollments: [
                "Visual Thinking Avanzado"
            ],
            previousCourses: 6,
            haveCertification: true
        }];            

        const getEmail = VisualparnertsService.getEmailsWithHaveCertification(students, true)
        expect(students[0].haveCertification).toBe(true)
        expect(students[1].haveCertification).toBe(true)
        expect(students.length).toBe(2)
    });
    
    test("2. Filter all emails of students where haveCertification = true ", () => {
        const students = [{                            
            id: "6264d5d89f1df827eb84bb23",
            name: "Warren",
            email: "Todd@visualpartnership.xyz",
            credits: 508,
            enrollments: [
                "Visual Thinking Intermedio",
                "Visual Thinking Avanzado"
                ],
            previousCourses: 1,
            haveCertification: true
        },
        {                            
            id: "6264d5d85cf81c496446b67f",
            name: "Lucinda",
            email: "Sexton@visualpartnership.xyz",
            credits: 677,
            enrollments: [
                "Visual Thinking Avanzado"
            ],
            previousCourses: 6,
            haveCertification: true
        }];
        const getAllEmailsOfStudents = VisualparnertsService.getEmailsWhereHaveCertificationIsTrue(students, true)
        expect(students[0].haveCertification).toBe(true)
        expect(students[1].haveCertification).toBe(true)
        expect(students[0].email).toBe("Todd@visualpartnership.xyz")  
        expect(students[1].email).toBe("Sexton@visualpartnership.xyz")  
        expect(students.length).toBe(2)    
    })
})