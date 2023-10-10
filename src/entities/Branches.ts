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
import { Inventory } from './Inventory'

@Entity()
@ObjectType()
export class Branches extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  branch: string

  @Field()
  @Column()
  address: string

  @Field()
  @Column()
  phone_Number: number

  @Field()
  @Column()
  email: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  inventoryId: number

  @Field(() => Inventory, { nullable: true })
  @ManyToOne(() => Inventory, inventory => inventory.branches)
  inventory?: Inventory

  @Field(() => [Copies], { nullable: true })
  @OneToMany(() => Copies, copies => copies.branches)
  copies: Copies[]
}
