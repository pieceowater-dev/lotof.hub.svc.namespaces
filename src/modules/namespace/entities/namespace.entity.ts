import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Member } from '../../member/entities/member.entity';
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

  @OneToMany(() => Member, (member) => member.namespace)
  members: Member[];

  @OneToMany(() => Service, (service) => service.namespace)
  services: Service[];
}
