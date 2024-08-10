import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Namespace } from '../../namespace/entities/namespace.entity';
import { Service } from '../../service/entities/service.entity';

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Namespace, (namespace) => namespace.members)
  namespace: Namespace;

  @ManyToOne(() => Service, (service) => service.members)
  service: Service;

  @Column()
  user: string; // user id
}
