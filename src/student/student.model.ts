import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Student extends Model{
    
    @Column({primaryKey: true , unique: true , type: DataType.INTEGER})
    id: number;

    @Column({allowNull: false, type: DataType.STRING})
    name: string;

    @Column({allowNull: false , type: DataType.INTEGER})
    age: number;

    @Column({allowNull: false, type: DataType.FLOAT})
    cgpa: number
}