import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql'
import { Books } from '../entities/Books'
import { Publication } from '../entities/Publication'

@Resolver(() => Publication)
export class PublicationResolver {
  @Query(() => Publication, { nullable: true })
  async getBranchById(
    @Arg('publication_id') publication_id: number
  ): Promise<Publication> {
    const publication = await Publication.findOneOrFail(publication_id)
    return publication
  }

  @Query(() => [Publication])
  async publications(): Promise<Publication[]> {
    return await Publication.find()
  }

  @Mutation(() => Publication)
  async createPublication(
    @Arg('publicationYear') publicationYear: number,
    @Arg('publisher') publisher: string,
    @Arg('description') description: string
  ): Promise<Publication> {
    const publication = Publication.create({
      publication_year: publicationYear,
      publisher,
      description
    })

    return await publication.save()
  }

  @Query(() => [Books])
  async booksOfPublication(@Arg('id', () => Int) id: number): Promise<Books[]> {
    const publication = await Publication.findOne(id, { relations: ['books'] })
    return publication && publication.books ? publication.books : []
  }
}
