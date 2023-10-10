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
exports.PublicationResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Books_1 = require("../entities/Books");
const Publication_1 = require("../entities/Publication");
let PublicationResolver = class PublicationResolver {
    async getBranchById(publication_id) {
        const publication = await Publication_1.Publication.findOneOrFail(publication_id);
        return publication;
    }
    async publications() {
        return await Publication_1.Publication.find();
    }
    async createPublication(publicationYear, publisher, description) {
        const publication = Publication_1.Publication.create({
            publication_year: publicationYear,
            publisher,
            description
        });
        return await publication.save();
    }
    async booksOfPublication(id) {
        const publication = await Publication_1.Publication.findOne(id, { relations: ['books'] });
        return publication && publication.books ? publication.books : [];
    }
};
exports.PublicationResolver = PublicationResolver;
__decorate([
    (0, type_graphql_1.Query)(() => Publication_1.Publication, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('publication_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PublicationResolver.prototype, "getBranchById", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Publication_1.Publication]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PublicationResolver.prototype, "publications", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Publication_1.Publication),
    __param(0, (0, type_graphql_1.Arg)('publicationYear')),
    __param(1, (0, type_graphql_1.Arg)('publisher')),
    __param(2, (0, type_graphql_1.Arg)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], PublicationResolver.prototype, "createPublication", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Books_1.Books]),
    __param(0, (0, type_graphql_1.Arg)('id', () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PublicationResolver.prototype, "booksOfPublication", null);
exports.PublicationResolver = PublicationResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => Publication_1.Publication)
], PublicationResolver);
//# sourceMappingURL=PublicationResolver.js.map