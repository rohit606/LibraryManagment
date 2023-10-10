import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql'
import { Copies } from '../entities/Copies'
import { Fine } from '../entities/Fine'
import { Members } from '../entities/Members'

@Resolver(() => Fine)
export class FineResolver {
  @Query(() => Fine, { nullable: true })
  async getBranchById(@Arg('fine_id') fine_id: number): Promise<Fine> {
    const fine = await Fine.findOneOrFail(fine_id)
    return fine
  }

  @Query(() => [Fine])
  async fines(): Promise<Fine[]> {
    return await Fine.find()
  }

  @Mutation(() => Fine)
  async createFine(
    @Arg('fineAmount') fineAmount: number,
    @Arg('fineDate') fineDate: Date,
    @Arg('status') status: string,
    @Arg('copyId', () => Int) copyId: number,
    @Arg('memberId') memberId: string
  ): Promise<Fine> {
    const copy = await Copies.findOne(copyId)
    if (!copy) throw new Error(`Copy with ID ${copyId} not found.`)

    const member = await Members.findOne(memberId)
    if (!member) throw new Error(`Member with ID ${memberId} not found.`)

    const fine = Fine.create({
      fine_amount: fineAmount,
      fine_date: fineDate,
      status,
      copy,
      member
    })

    return await fine.save()
  }

  @Query(() => Copies, { nullable: true })
  async copyOfFine(@Arg('id', () => Int) id: number): Promise<Copies | null> {
    const fine = await Fine.findOne(id, { relations: ['copy'] })
    return fine ? fine.copy : null
  }

  @Query(() => Members, { nullable: true })
  async memberOfFine(
    @Arg('id', () => Int) id: number
  ): Promise<Members | null> {
    const fine = await Fine.findOne(id, { relations: ['member'] })
    return fine ? fine.member : null
  }
}
