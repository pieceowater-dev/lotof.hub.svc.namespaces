import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Namespace } from '../../namespace/entities/namespace.entity';
import { Member } from '../../member/entities/member.entity';

@Entity()
@Unique(['namespace', 'app'])
export class Service {
  @PrimaryGeneratedColumn()
  id: number; // service id. instance of application. 1 per namespace

  @Column()
  app: string; // application bundle from capital, e.g. 'lotof.calculator'

  @ManyToOne(() => Namespace, (namespace) => namespace.services)
  namespace: Namespace; // namespace id for which the service is registered

  @OneToMany(() => Member, (member) => member.service)
  members: Member[]; // list of members in the service
}
