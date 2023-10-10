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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Books = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Copies_1 = require("./Copies");
const Inventory_1 = require("./Inventory");
const Publication_1 = require("./Publication");
let Books = class Books extends typeorm_1.BaseEntity {
};
exports.Books = Books;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Books.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Books.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Books.prototype, "author", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Books.prototype, "genre", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Books.prototype, "isbn", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Publication_1.Publication, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => Publication_1.Publication, publication => publication.books),
    (0, typeorm_1.JoinColumn)({ name: 'publicationId' }),
    __metadata("design:type", Publication_1.Publication)
], Books.prototype, "publication", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Inventory_1.Inventory], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => Inventory_1.Inventory, inventory => inventory.books),
    __metadata("design:type", Array)
], Books.prototype, "inventory", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Copies_1.Copies], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => Copies_1.Copies, copies => copies.books),
    __metadata("design:type", Array)
], Books.prototype, "copies", void 0);
exports.Books = Books = __decorate([
    (0, typeorm_1.Entity)(),
    (0, type_graphql_1.ObjectType)()
], Books);
//# sourceMappingURL=Books.js.map