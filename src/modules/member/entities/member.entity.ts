import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Service } from '../../service/entities/service.entity';

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number; // membership id

  @ManyToOne(() => Service, (service) => service.members)
  service: Service; // service id

  @Column()
  user: string; // user uuid from user service
}
