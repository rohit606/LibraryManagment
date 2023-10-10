import { Field, ObjectType } from 'type-graphql'
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Books } from './Books'
import { Branches } from './Branches'
import { Checkout } from './Checkout'
import { Fine } from './Fine'

@Entity()
@ObjectType()
export class Copies extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  status: string

  @Field()
  @Column(() => Date)
  due: Date

  @Field(() => Books, { nullable: true })
  @Column()
  booksId: number

  @Field(() => Books, { nullable: true })
  @ManyToOne(() => Books, books => books.copies)
  books: Books

  @Field(() => Branches, { nullable: true })
  @ManyToOne(() => Branches, branches => branches.copies)
  branches: Branches

  @Field(() => [Fine], { nullable: true })
  @OneToMany(() => Fine, fine => fine.copy)
  fines: Fine[]

  @Field(() => [Checkout], { nullable: true })
  @OneToMany(() => Checkout, checkout => checkout.copy)
  checkout: Checkout[]
}
