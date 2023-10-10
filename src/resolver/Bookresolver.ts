import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { Books } from '../entities/Books'

@Resolver(Books)
export class BooksResolver {
  @Query(() => [Books])
  async getAllBooks(): Promise<Books[]> {
    return await Books.find()
  }

  @Query(() => Books, { nullable: true })
  async getBookById(@Arg('book_id') book_id: number): Promise<Books | null> {
    const book = await Books.findOne(book_id)
    return book || null
  }

  @Mutation(() => Books)
  async createBook(
    @Arg('title') title: string,
    @Arg('author') author: string,
    @Arg('genre') genre: string,
    @Arg('isbn') isbn: number
  ): Promise<Books> {
    const book = Books.create({
      title,
      author,
      genre,
      isbn
    })
    return await book.save()
  }

  @Mutation(() => Books)
  async updateBook(
    @Arg('book_id') book_id: number,
    @Arg('title', { nullable: true }) title: string,
    @Arg('author', { nullable: true }) author: string,
    @Arg('genre', { nullable: true }) genre: string,
    @Arg('isbn', { nullable: true }) isbn: number
  ): Promise<Books | null> {
    const book = await Books.findOne(book_id)
    if (!book) {
      return null // if book not found
    }

    // if book found, update the fields
    if (title) book.title = title
    if (author) book.author = author
    if (genre) book.genre = genre
    if (isbn) book.isbn = isbn

    await book.save()
    return book
  }

  @Mutation(() => String)
  async deleteBook(@Arg('book_id') book_id: number): Promise<string> {
    const book = await Books.findOne(book_id)
    if (!book) {
      return 'not found' // Book not found
    }

    await book.remove()
    return 'removed'
  }
}
