import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql'
import { Books } from '../entities/Books'
import { Branches } from '../entities/Branches'
import { Inventory } from '../entities/Inventory'

@Resolver(() => Inventory)
export class InventoryResolver {
  @Query(() => Inventory, { nullable: true })
  async getBranchById(
    @Arg('inventory_id') inventory_id: number
  ): Promise<Inventory> {
    const inventory = await Inventory.findOneOrFail(inventory_id)
    return inventory
  }

  @Query(() => [Inventory])
  async inventories(): Promise<Inventory[]> {
    return await Inventory.find()
  }

  @Mutation(() => Inventory)
  async createInventory(
    @Arg('quantity') quantity: string,
    @Arg('dateAdded') dateAdded: Date,
    @Arg('dateModified') dateModified: Date,
    @Arg('booksId', () => Int) booksId: number
  ): Promise<Inventory> {
    const books = await Books.findOne(booksId)
    if (!books) throw new Error(`Books with ID ${booksId} not found.`)

    const inventory = Inventory.create({
      quantity,
      date_added: dateAdded,
      date_modified: dateModified,
      books
    })

    return await inventory.save()
  }

  @Query(() => Books, { nullable: true })
  async booksOfInventory(
    @Arg('id', () => Int) id: number
  ): Promise<Books | null> {
    const inventory = await Inventory.findOne(id, { relations: ['books'] })
    return inventory ? inventory.books : null
  }

  @Query(() => [Branches])
  async branchesOfInventory(
    @Arg('id', () => Int) id: number
  ): Promise<Branches[]> {
    const inventory = await Inventory.findOne(id, { relations: ['branches'] })
    return inventory ? inventory.branches : []
  }
}
