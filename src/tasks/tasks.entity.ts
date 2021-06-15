import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum TaskStatus {
  Active = 'active',
  Solved = 'solved',
  Pending = 'pending',
  ON_Hold = 'on hold', // OnHold or ON_Hold ?? How to name better?
}
@Entity()
class Tasks {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column({
    type: 'enum',
    enum: TaskStatus,
  })
  public status: string;

  @Column({ name: 'task_name' })
  public taskName: string;

  @Column({ name: 'start_date' })
  public startDate: Date;

  @Column({ name: 'finish_date' })
  public finishDate: Date;
}
export default Tasks;
