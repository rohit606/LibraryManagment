import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql'
import { Checkout } from '../entities/Checkout'
import { Copies } from '../entities/Copies'
import { Members } from '../entities/Members'

@Resolver(() => Checkout)
export class CheckoutResolver {
  @Query(() => Checkout, { nullable: true })
  async getBranchById(
    @Arg('checkout_id') checkout_id: number
  ): Promise<Checkout> {
    const checkout = await Checkout.findOneOrFail(checkout_id)
    return checkout
  }

  @Query(() => [Checkout])
  async checkoutsAll(): Promise<Checkout[]> {
    return await Checkout.find()
  }

  @Mutation(() => Checkout)
  async createCheckout(
    @Arg('checkoutDate') checkoutDate: Date,
    @Arg('returnDate') returnDate: Date,
    @Arg('dueDate') dueDate: Date,
    @Arg('copyId', () => Int) copyId: number,
    @Arg('memberId') memberId: string
  ): Promise<Checkout> {
    const copy = await Copies.findOne(copyId)
    if (!copy) throw new Error(`Copy with ID ${copyId} not found.`)

    const member = await Members.findOne(memberId)
    if (!member) throw new Error(`Member with ID ${memberId} not found.`)

    const checkout = Checkout.create({
      checkout_Date: checkoutDate,
      return_Date: returnDate,
      due_Date: dueDate,
      copy,
      memberId,
      members: member
    })

    return await checkout.save()
  }
}
