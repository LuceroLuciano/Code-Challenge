// Los services son para los metodos get de los futuros endpoints

class VisualparnertsService {
    static getEmailsWithHaveCertification(students, haveCertification){
        const emailWithHaveCertification = students.filter((student) => student.haveCertification === haveCertification)
        return emailWithHaveCertification;
    }

    static getEmailsWhereHaveCertificationIsTrue(students, haveCertification){
       const haveCertificationIsTrue = students.filter((student) => student.haveCertification === haveCertification);
       return haveCertificationIsTrue.map((student) => student.email)
    }
}


module.exports = VisualparnertsService;
