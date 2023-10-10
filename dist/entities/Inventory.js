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
exports.Inventory = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Books_1 = require("./Books");
const Branches_1 = require("./Branches");
let Inventory = class Inventory extends typeorm_1.BaseEntity {
};
exports.Inventory = Inventory;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Inventory.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Inventory.prototype, "quantity", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Inventory.prototype, "date_added", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Inventory.prototype, "date_modified", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Books_1.Books, { nullable: true }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Inventory.prototype, "booksId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Books_1.Books, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => Books_1.Books, books => books.inventory),
    __metadata("design:type", Books_1.Books)
], Inventory.prototype, "books", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Branches_1.Branches]),
    (0, typeorm_1.OneToMany)(() => Branches_1.Branches, branches => branches.inventory),
    __metadata("design:type", Array)
], Inventory.prototype, "branches", void 0);
exports.Inventory = Inventory = __decorate([
    (0, typeorm_1.Entity)(),
    (0, type_graphql_1.ObjectType)()
], Inventory);
//# sourceMappingURL=Inventory.js.map