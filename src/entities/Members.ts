import { Field, ObjectType } from 'type-graphql'
import { BaseEntity, OneToMany } from 'typeorm'

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Checkout } from './Checkout'
import { Fine } from './Fine'

@Entity()
@ObjectType()
export class Members extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  // @OneToMany(() => Fine, fine => fine.id)
  // fine: Fine[]

  @Field()
  @Column()
  first_name: string

  @Field()
  @Column()
  last_name: string

  @Field()
  @Column()
  phone_number: number

  @Field()
  @Column()
  email: string

  @Field()
  @Column()
  password: string

  @Field()
  @Column()
  address: string

  @Field()
  @Column()
  is_librarian: boolean

  @Field(() => [Fine])
  @OneToMany(() => Fine, fine => fine.member)
  fine: Fine[]

  @Field(() => [Checkout])
  @OneToMany(() => Checkout, checkout => checkout.members)
  checkout: Checkout[]
}
