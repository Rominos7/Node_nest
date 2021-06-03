import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Tasks {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column()
  public status: string;
  @Column({ name: 'task_name' })
  public taskName: string;
  @Column({ name: 'start_date' })
  public startDate: Date;
  @Column({ name: 'finish_date' })
  public finishDate: Date;
}
export default Tasks;
