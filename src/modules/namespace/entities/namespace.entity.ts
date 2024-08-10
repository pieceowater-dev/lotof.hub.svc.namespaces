import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Service } from '../../service/entities/service.entity';

@Entity()
export class Namespace {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string; // John's Personal Namespace

  @Column({ unique: true })
  slug: string; // like prefix, short, unique name - john22869

  @Column({ nullable: true })
  description: string;

  @Column()
  owner: string; // user uuid created this NS

  @OneToMany(() => Service, (service) => service.namespace, { cascade: true })
  services: Service[]; // services of some namespace
}
