import { Field, ObjectType } from 'type-graphql'
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Copies } from './Copies'
import { Members } from './Members'

@Entity()
@ObjectType()
export class Fine extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  fine_amount: number

  @Field()
  @Column()
  fine_date: Date

  @Field()
  @Column()
  status: string

  @Field()
  @Column()
  copies_id: number

  @Field(() => Copies, { nullable: true })
  @ManyToOne(() => Copies, copy => copy.fines)
  copy: Copies

  @Field(() => Members, { nullable: true })
  @Column()
  memberId: string

  @Field(() => Members, { nullable: true })
  @ManyToOne(() => Members, member => member.fine)
  member: Members

  @Field(() => [Fine], { nullable: true })
  @OneToMany(() => Fine, fine => fine.id)
  fines: Fine[]
}
