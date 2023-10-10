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
exports.CopiesResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Books_1 = require("../entities/Books");
const Branches_1 = require("../entities/Branches");
const Copies_1 = require("../entities/Copies");
let CopiesResolver = class CopiesResolver {
    async getBranchById(copies_id) {
        const copies = await Copies_1.Copies.findOneOrFail(copies_id);
        return copies;
    }
    async copies() {
        return await Copies_1.Copies.find();
    }
    async createCopy(status, due, booksId) {
        const books = await Books_1.Books.findOne(booksId);
        if (!books)
            throw new Error(`Books with ID ${booksId} not found.`);
        const copy = Copies_1.Copies.create({
            status,
            due,
            books
        });
        return await copy.save();
    }
    async bookOfCopy(id) {
        const copy = await Copies_1.Copies.findOne(id, { relations: ['books'] });
        return copy ? copy.books : null;
    }
    async branchOfCopy(id) {
        const copy = await Copies_1.Copies.findOne(id, { relations: ['branches'] });
        return copy ? copy.branches : null;
    }
};
exports.CopiesResolver = CopiesResolver;
__decorate([
    (0, type_graphql_1.Query)(() => Copies_1.Copies, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('copies_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CopiesResolver.prototype, "getBranchById", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Copies_1.Copies]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CopiesResolver.prototype, "copies", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Copies_1.Copies),
    __param(0, (0, type_graphql_1.Arg)('status')),
    __param(1, (0, type_graphql_1.Arg)('due')),
    __param(2, (0, type_graphql_1.Arg)('booksId', () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Date, Number]),
    __metadata("design:returntype", Promise)
], CopiesResolver.prototype, "createCopy", null);
__decorate([
    (0, type_graphql_1.Query)(() => Books_1.Books, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('id', () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CopiesResolver.prototype, "bookOfCopy", null);
__decorate([
    (0, type_graphql_1.Query)(() => Branches_1.Branches, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('id', () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CopiesResolver.prototype, "branchOfCopy", null);
exports.CopiesResolver = CopiesResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => Copies_1.Copies)
], CopiesResolver);
//# sourceMappingURL=CopiesResolver.js.map