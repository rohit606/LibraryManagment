"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembersResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Members_1 = require("../entities/Members");
let MembersResolver = class MembersResolver {
    async getAllMembers() {
        return Members_1.Members.find();
    }
    async getMembersById(member_id) {
        const member = await Members_1.Members.findOneOrFail(member_id);
        return member;
    }
    async createMember(first_name, last_name, email, phone_number, password, address, is_librarian) {
        const member = Members_1.Members.create({
            first_name,
            last_name,
            phone_number,
            email,
            password,
            address,
            is_librarian
        });
        return await member.save();
    }
    async updateMember(member_id, first_name, last_name, email, phone_number, password, address, is_librarian) {
        const member = await Members_1.Members.findOne(member_id);
        if (!member) {
            return null;
        }
        if (first_name)
            member.first_name = first_name;
        if (last_name)
            member.last_name = last_name;
        if (email)
            member.email = email;
        if (phone_number)
            member.phone_number = phone_number;
        if (password)
            member.password = password;
        if (address)
            member.address = address;
        if (is_librarian)
            member.is_librarian = is_librarian;
        await member.save();
        return member;
    }
    async DeleteMember(member_id) {
        const member = await Members_1.Members.findOne(member_id);
        if (!member) {
            return 'Not Found';
        }
        await member.remove();
        return 'Removed ';
    }
};
exports.MembersResolver = MembersResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [Members_1.Members]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MembersResolver.prototype, "getAllMembers", null);
__decorate([
    (0, type_graphql_1.Query)(() => Members_1.Members),
    __param(0, (0, type_graphql_1.Arg)('member_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MembersResolver.prototype, "getMembersById", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Members_1.Members),
    __param(0, (0, type_graphql_1.Arg)('first_name')),
    __param(1, (0, type_graphql_1.Arg)('last_name')),
    __param(2, (0, type_graphql_1.Arg)('Email')),
    __param(3, (0, type_graphql_1.Arg)('Phone_number')),
    __param(4, (0, type_graphql_1.Arg)('Password')),
    __param(5, (0, type_graphql_1.Arg)('Address')),
    __param(6, (0, type_graphql_1.Arg)('Is_Librarian')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, String, String, Boolean]),
    __metadata("design:returntype", Promise)
], MembersResolver.prototype, "createMember", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Members_1.Members),
    __param(0, (0, type_graphql_1.Arg)('member_id')),
    __param(1, (0, type_graphql_1.Arg)('first_name', { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)('last_name', { nullable: true })),
    __param(3, (0, type_graphql_1.Arg)('email', { nullable: true })),
    __param(4, (0, type_graphql_1.Arg)('phone_number', { nullable: true })),
    __param(5, (0, type_graphql_1.Arg)('password', { nullable: true })),
    __param(6, (0, type_graphql_1.Arg)('address', { nullable: true })),
    __param(7, (0, type_graphql_1.Arg)('is_librarian', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, Number, String, String, Boolean]),
    __metadata("design:returntype", Promise)
], MembersResolver.prototype, "updateMember", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)('member_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MembersResolver.prototype, "DeleteMember", null);
exports.MembersResolver = MembersResolver = __decorate([
    (0, type_graphql_1.Resolver)(Members_1.Members)
], MembersResolver);
//# sourceMappingURL=MembersResolver.js.map