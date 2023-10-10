import { Field, ObjectType } from 'type-graphql'

import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Copies } from './Copies'
import { Members } from './Members'

@Entity()
@ObjectType()
export class Checkout extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  checkout_Date: Date

  @Field()
  @Column()
  return_Date: Date

  @Field()
  @Column()
  due_Date: Date

  @Field(() => Copies, { nullable: true })
  @ManyToOne(() => Copies, copies => copies.checkout)
  copy: Copies

  @Field(() => Members, { nullable: true })
  @Column()
  memberId: string

  @Field(() => Members, { nullable: true })
  @ManyToOne(() => Members, members => members.id)
  members: Members
}
