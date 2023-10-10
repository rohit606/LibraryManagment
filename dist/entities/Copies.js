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
exports.Copies = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Books_1 = require("./Books");
const Branches_1 = require("./Branches");
const Checkout_1 = require("./Checkout");
const Fine_1 = require("./Fine");
let Copies = class Copies extends typeorm_1.BaseEntity {
};
exports.Copies = Copies;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Copies.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Copies.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(() => Date),
    __metadata("design:type", Date)
], Copies.prototype, "due", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Books_1.Books, { nullable: true }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Copies.prototype, "booksId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Books_1.Books, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => Books_1.Books, books => books.copies),
    __metadata("design:type", Books_1.Books)
], Copies.prototype, "books", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Branches_1.Branches, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => Branches_1.Branches, branches => branches.copies),
    __metadata("design:type", Branches_1.Branches)
], Copies.prototype, "branches", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Fine_1.Fine], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => Fine_1.Fine, fine => fine.copy),
    __metadata("design:type", Array)
], Copies.prototype, "fines", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Checkout_1.Checkout], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => Checkout_1.Checkout, checkout => checkout.copy),
    __metadata("design:type", Array)
], Copies.prototype, "checkout", void 0);
exports.Copies = Copies = __decorate([
    (0, typeorm_1.Entity)(),
    (0, type_graphql_1.ObjectType)()
], Copies);
//# sourceMappingURL=Copies.js.map