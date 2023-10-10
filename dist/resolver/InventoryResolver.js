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
exports.InventoryResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Books_1 = require("../entities/Books");
const Branches_1 = require("../entities/Branches");
const Inventory_1 = require("../entities/Inventory");
let InventoryResolver = class InventoryResolver {
    async getBranchById(inventory_id) {
        const inventory = await Inventory_1.Inventory.findOneOrFail(inventory_id);
        return inventory;
    }
    async inventories() {
        return await Inventory_1.Inventory.find();
    }
    async createInventory(quantity, dateAdded, dateModified, booksId) {
        const books = await Books_1.Books.findOne(booksId);
        if (!books)
            throw new Error(`Books with ID ${booksId} not found.`);
        const inventory = Inventory_1.Inventory.create({
            quantity,
            date_added: dateAdded,
            date_modified: dateModified,
            books
        });
        return await inventory.save();
    }
    async booksOfInventory(id) {
        const inventory = await Inventory_1.Inventory.findOne(id, { relations: ['books'] });
        return inventory ? inventory.books : null;
    }
    async branchesOfInventory(id) {
        const inventory = await Inventory_1.Inventory.findOne(id, { relations: ['branches'] });
        return inventory ? inventory.branches : [];
    }
};
exports.InventoryResolver = InventoryResolver;
__decorate([
    (0, type_graphql_1.Query)(() => Inventory_1.Inventory, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('inventory_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InventoryResolver.prototype, "getBranchById", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Inventory_1.Inventory]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InventoryResolver.prototype, "inventories", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Inventory_1.Inventory),
    __param(0, (0, type_graphql_1.Arg)('quantity')),
    __param(1, (0, type_graphql_1.Arg)('dateAdded')),
    __param(2, (0, type_graphql_1.Arg)('dateModified')),
    __param(3, (0, type_graphql_1.Arg)('booksId', () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Date,
        Date, Number]),
    __metadata("design:returntype", Promise)
], InventoryResolver.prototype, "createInventory", null);
__decorate([
    (0, type_graphql_1.Query)(() => Books_1.Books, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('id', () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InventoryResolver.prototype, "booksOfInventory", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Branches_1.Branches]),
    __param(0, (0, type_graphql_1.Arg)('id', () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InventoryResolver.prototype, "branchesOfInventory", null);
exports.InventoryResolver = InventoryResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => Inventory_1.Inventory)
], InventoryResolver);
//# sourceMappingURL=InventoryResolver.js.map