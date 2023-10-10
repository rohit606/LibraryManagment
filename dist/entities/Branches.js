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
exports.Branches = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Copies_1 = require("./Copies");
const Inventory_1 = require("./Inventory");
let Branches = class Branches extends typeorm_1.BaseEntity {
};
exports.Branches = Branches;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Branches.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Branches.prototype, "branch", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Branches.prototype, "address", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Branches.prototype, "phone_Number", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Branches.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Branches.prototype, "inventoryId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Inventory_1.Inventory, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => Inventory_1.Inventory, inventory => inventory.branches),
    __metadata("design:type", Inventory_1.Inventory)
], Branches.prototype, "inventory", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Copies_1.Copies], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => Copies_1.Copies, copies => copies.branches),
    __metadata("design:type", Array)
], Branches.prototype, "copies", void 0);
exports.Branches = Branches = __decorate([
    (0, typeorm_1.Entity)(),
    (0, type_graphql_1.ObjectType)()
], Branches);
//# sourceMappingURL=Branches.js.map