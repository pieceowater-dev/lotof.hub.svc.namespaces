import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Member } from '../../member/entities/member.entity';
import { Namespace } from '../../namespace/entities/namespace.entity';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  app: string; // app bundle from capital

  @ManyToOne(() => Namespace, (namespace) => namespace.services)
  namespace: Namespace;

  @OneToMany(() => Member, (member) => member.service)
  members: Member[];
}
