import { Post } from '@nestjs/common';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Task {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public status: string;
    @Column()
    public task_name: string;
    @Column()
    public start_date: Date;
    @Column()
    public finish_date: Date;
}
export default Task;