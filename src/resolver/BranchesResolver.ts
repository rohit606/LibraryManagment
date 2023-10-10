import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { BaseEntity } from 'typeorm'
import { Branches } from '../entities/Branches'
@Resolver()
export class BranchesResolver extends BaseEntity {
  @Query(() => [Branches])
  async getAllBranches(): Promise<Branches[]> {
    return await Branches.find()
  }

  @Query(() => Branches, { nullable: true })
  async getBranchById(@Arg('branch_id') branch_id: number): Promise<Branches> {
    const branch = await Branches.findOneOrFail(branch_id)
    return branch
  }

  @Mutation(() => Branches)
  async createBranch(
    @Arg('branch') branch: string,
    @Arg('address') address: string,
    @Arg('phone_Number') phone_Number: number,
    @Arg('email') email: string,
    @Arg('inventoryId', { nullable: true }) inventoryId: number
  ): Promise<Branches> {
    const branches = Branches.create({
      branch,
      address,
      phone_Number,
      email,
      inventoryId // Use the provided inventoryId
    })
    return await branches.save()
  }

  @Mutation(() => Branches)
  async updateBranch(
    @Arg('branch_id') branch_id: number,
    @Arg('branch', { nullable: true }) branch: string,
    @Arg('address', { nullable: true }) address: string,
    @Arg('phone_Number', { nullable: true }) phone_Number: number,
    @Arg('email', { nullable: true }) email: string
  ): Promise<Branches | null> {
    const branches = await Branches.findOne(branch_id)
    if (!branches) {
      return null
    }
    if (branch) branches.branch = branch
    if (address) branches.address = address
    if (phone_Number) branches.phone_Number = phone_Number
    if (email) branches.email = email

    await branches.save()
    return branches
  }
  @Mutation(() => String)
  async deleteBranch(@Arg('branch_id') branch_id: number): Promise<string> {
    const branch = await Branches.findOne(branch_id)
    if (!branch) {
      return 'Branch not found'
    }
    await branch.remove()
    return 'Branch deleted successfully'
  }
}
