import { Field, ID, ObjectType } from 'type-graphql'
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Copies } from './Copies'
import { Inventory } from './Inventory'
import { Publication } from './Publication'

@Entity()
@ObjectType()
export class Books extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  title: string

  @Field()
  @Column()
  author: string

  @Field()
  @Column()
  genre: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  isbn: number

  @Field(() => Publication, { nullable: true })
  @ManyToOne(() => Publication, publication => publication.books)
  @JoinColumn({ name: 'publicationId' })
  publication: Publication

  @Field(() => [Inventory], { nullable: true })
  @OneToMany(() => Inventory, inventory => inventory.books)
  inventory: Inventory[]

  @Field(() => [Copies], { nullable: true })
  @OneToMany(() => Copies, copies => copies.books)
  copies: Copies[]
}
