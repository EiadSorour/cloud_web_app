import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { StudentModule } from './student/student.module';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "eiad1422003",
    database: "Student_Data",
    autoLoadModels: true,
    synchronize: true, 
  }),
    StudentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
