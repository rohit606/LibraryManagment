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

@Entity()
@ObjectType()
export class Inventory extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  quantity: string

  @Field()
  @Column()
  date_added: Date

  @Field()
  @Column()
  date_modified: Date

  @Field(() => Books, { nullable: true })
  @Column()
  booksId: number

  @Field(() => Books, { nullable: true })
  @ManyToOne(() => Books, books => books.inventory)
  books: Books

  @Field(() => [Branches])
  @OneToMany(() => Branches, branches => branches.inventory)
  branches: Branches[]
}
