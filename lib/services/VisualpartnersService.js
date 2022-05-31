// Los services son para los metodos get de los futuros endpoints

class VisualparnertsService {
    static getEmailsWithHaveCertification(students, haveCertification){
        const emailWithHaveCertification = students.filter((student) => student.haveCertification === haveCertification)
        return emailWithHaveCertification;
    }
}


module.exports = VisualparnertsService;
