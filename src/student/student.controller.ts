import { Controller, Get, HttpCode, Post } from "@nestjs/common";
import { StudentService } from "./student.service";

const students = [
    {
        id: 2203176,
        name: "Eiad Sorour",
        age: 21,
        cgpa: 3.8
    },
    {
        id: 2203175,
        name: "Hazem Ahmed",
        age: 21,
        cgpa: 4
    },
    {
        id: 2203173,
        name: "Ahmed Mohamed",
        age: 20,
        cgpa: 3.5
    },
]

@Controller("/api")
export class StudentController{
    constructor(private readonly studentService:StudentService){}

    @Post("/student")
    @HttpCode(201)
    async addAllStudents(){
        students.forEach( async (student) => {
            await this.studentService.addStudent(student)
        });
        return "Students saved in database successfully"
    }

    @Get("/student")
    @HttpCode(200)
    async getAllStudents(){
        return await this.studentService.getAllStudents();
    }
}