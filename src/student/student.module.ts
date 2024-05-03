import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Student } from "./student.model";
import { StudentController } from "./student.controller";
import { StudentService } from "./student.service";


@Module({
    imports: [SequelizeModule.forFeature([Student])],
    controllers: [StudentController],
    providers: [StudentService],
    exports: []
})
export class StudentModule{}