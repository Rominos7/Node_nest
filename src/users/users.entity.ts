import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
class Users {
    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column({ name: 'user_login' })
    public userLogin: string;

    @Column({ name: 'user_password' })
    public userPassword: string;
}
export default Users;