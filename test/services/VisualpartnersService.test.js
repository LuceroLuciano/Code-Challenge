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
        }

        ];            

        const getEmail = VisualparnertsService.getEmailsWithHaveCertification(students, true)
        expect(students[0].haveCertification).toBe(true)
        expect(students[1].haveCertification).toBe(true)
        expect(students.length).toBe(2)
    });
})