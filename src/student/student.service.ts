import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Student } from "./student.model";
import { AddStudentDto } from "./dto/addStudentDto";


@Injectable()
export class StudentService{
    constructor(@InjectModel(Student) private readonly studentModel: typeof Student){}

    async getAllStudents(): Promise<Student[]>{
        return await this.studentModel.findAll({attributes: ["id","name","age","cgpa"]});
    }

    async addStudent(addStudentDto:AddStudentDto): Promise<void>{
        await this.studentModel.create(addStudentDto as any);
    }
}