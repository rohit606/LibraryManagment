import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql'
import { Books } from '../entities/Books'
import { Branches } from '../entities/Branches'
import { Copies } from '../entities/Copies'

@Resolver(() => Copies)
export class CopiesResolver {
  @Query(() => Copies, { nullable: true })
  async getBranchById(@Arg('copies_id') copies_id: number): Promise<Copies> {
    const copies = await Copies.findOneOrFail(copies_id)
    return copies
  }

  @Query(() => [Copies])
  async copies(): Promise<Copies[]> {
    return await Copies.find()
  }

  @Mutation(() => Copies)
  async createCopy(
    @Arg('status') status: string,
    @Arg('due') due: Date,
    @Arg('booksId', () => Int) booksId: number
  ): Promise<Copies> {
    const books = await Books.findOne(booksId)
    if (!books) throw new Error(`Books with ID ${booksId} not found.`)

    const copy = Copies.create({
      status,
      due,
      books
    })

    return await copy.save()
  }

  @Query(() => Books, { nullable: true })
  async bookOfCopy(@Arg('id', () => Int) id: number): Promise<Books | null> {
    const copy = await Copies.findOne(id, { relations: ['books'] })
    return copy ? copy.books : null
  }

  @Query(() => Branches, { nullable: true })
  async branchOfCopy(
    @Arg('id', () => Int) id: number
  ): Promise<Branches | null> {
    const copy = await Copies.findOne(id, { relations: ['branches'] })
    return copy ? copy.branches : null
  }
}
