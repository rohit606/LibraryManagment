import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { Members } from '../entities/Members'

@Resolver(Members)
export class MembersResolver {
  @Query(() => [Members])
  async getAllMembers(): Promise<Members[]> {
    return Members.find()
  }

  @Query(() => Members)
  async getMembersById(@Arg('member_id') member_id: number): Promise<Members> {
    const member: Members = await Members.findOneOrFail(member_id)

    return member
  }

  @Mutation(() => Members)
  async createMember(
    @Arg('first_name') first_name: string,
    @Arg('last_name') last_name: string,
    @Arg('Email') email: string,
    @Arg('Phone_number') phone_number: number,
    @Arg('Password') password: string,
    @Arg('Address') address: string,
    @Arg('Is_Librarian') is_librarian: boolean
  ): Promise<Members> {
    const member = Members.create({
      first_name,
      last_name,
      phone_number,
      email,
      password,
      address,
      is_librarian
    })
    return await member.save()
  }

  @Mutation(() => Members)
  async updateMember(
    @Arg('member_id') member_id: number,
    @Arg('first_name', { nullable: true }) first_name: string,
    @Arg('last_name', { nullable: true }) last_name: string,
    @Arg('email', { nullable: true }) email: string,
    @Arg('phone_number', { nullable: true }) phone_number: number,
    @Arg('password', { nullable: true }) password: string,
    @Arg('address', { nullable: true }) address: string,
    @Arg('is_librarian', { nullable: true }) is_librarian: boolean
  ): Promise<Members | null> {
    const member = await Members.findOne(member_id)
    if (!member) {
      return null
    }
    if (first_name) member.first_name = first_name
    if (last_name) member.last_name = last_name
    if (email) member.email = email
    if (phone_number) member.phone_number = phone_number
    if (password) member.password = password
    if (address) member.address = address
    if (is_librarian) member.is_librarian = is_librarian

    await member.save()
    return member
  }

  @Mutation(() => String)
  async DeleteMember(@Arg('member_id') member_id: number): Promise<String> {
    const member = await Members.findOne(member_id)
    if (!member) {
      return 'Not Found'
    }
    await member.remove()
    return 'Removed '
  }
}
