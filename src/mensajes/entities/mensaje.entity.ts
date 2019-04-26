import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
import { identity } from 'rxjs';

@Entity()
export class Mensaje {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nick: string;

    @Column()
    mensaje: string;
}
