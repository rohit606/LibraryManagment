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
exports.BooksResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Books_1 = require("../entities/Books");
let BooksResolver = class BooksResolver {
    async getAllBooks() {
        return await Books_1.Books.find();
    }
    async getBookById(book_id) {
        const book = await Books_1.Books.findOne(book_id);
        return book || null;
    }
    async createBook(title, author, genre, isbn) {
        const book = Books_1.Books.create({
            title,
            author,
            genre,
            isbn
        });
        return await book.save();
    }
    async updateBook(book_id, title, author, genre, isbn) {
        const book = await Books_1.Books.findOne(book_id);
        if (!book) {
            return null;
        }
        if (title)
            book.title = title;
        if (author)
            book.author = author;
        if (genre)
            book.genre = genre;
        if (isbn)
            book.isbn = isbn;
        await book.save();
        return book;
    }
    async deleteBook(book_id) {
        const book = await Books_1.Books.findOne(book_id);
        if (!book) {
            return 'not found';
        }
        await book.remove();
        return 'removed';
    }
};
exports.BooksResolver = BooksResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [Books_1.Books]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BooksResolver.prototype, "getAllBooks", null);
__decorate([
    (0, type_graphql_1.Query)(() => Books_1.Books, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('book_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BooksResolver.prototype, "getBookById", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Books_1.Books),
    __param(0, (0, type_graphql_1.Arg)('title')),
    __param(1, (0, type_graphql_1.Arg)('author')),
    __param(2, (0, type_graphql_1.Arg)('genre')),
    __param(3, (0, type_graphql_1.Arg)('isbn')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number]),
    __metadata("design:returntype", Promise)
], BooksResolver.prototype, "createBook", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Books_1.Books),
    __param(0, (0, type_graphql_1.Arg)('book_id')),
    __param(1, (0, type_graphql_1.Arg)('title', { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)('author', { nullable: true })),
    __param(3, (0, type_graphql_1.Arg)('genre', { nullable: true })),
    __param(4, (0, type_graphql_1.Arg)('isbn', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, Number]),
    __metadata("design:returntype", Promise)
], BooksResolver.prototype, "updateBook", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)('book_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BooksResolver.prototype, "deleteBook", null);
exports.BooksResolver = BooksResolver = __decorate([
    (0, type_graphql_1.Resolver)(Books_1.Books)
], BooksResolver);
//# sourceMappingURL=Bookresolver.js.map