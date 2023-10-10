import { Field, ObjectType } from 'type-graphql'
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Books } from './Books'

@Entity()
@ObjectType()
export class Publication extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @Field()
  publication_year: number

  @Column()
  @Field()
  publisher: string

  @Column()
  @Field()
  description: string

  @Field(() => [Books], { nullable: true })
  @OneToMany(() => Books, books => books.publication)
  books?: Books[]
}
