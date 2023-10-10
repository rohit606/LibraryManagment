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
exports.BranchesResolver = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Branches_1 = require("../entities/Branches");
let BranchesResolver = class BranchesResolver extends typeorm_1.BaseEntity {
    async getAllBranches() {
        return await Branches_1.Branches.find();
    }
    async getBranchById(branch_id) {
        const branch = await Branches_1.Branches.findOneOrFail(branch_id);
        return branch;
    }
    async createBranch(branch, address, phone_Number, email, inventoryId) {
        const branches = Branches_1.Branches.create({
            branch,
            address,
            phone_Number,
            email,
            inventoryId
        });
        return await branches.save();
    }
    async updateBranch(branch_id, branch, address, phone_Number, email) {
        const branches = await Branches_1.Branches.findOne(branch_id);
        if (!branches) {
            return null;
        }
        if (branch)
            branches.branch = branch;
        if (address)
            branches.address = address;
        if (phone_Number)
            branches.phone_Number = phone_Number;
        if (email)
            branches.email = email;
        await branches.save();
        return branches;
    }
    async deleteBranch(branch_id) {
        const branch = await Branches_1.Branches.findOne(branch_id);
        if (!branch) {
            return 'Branch not found';
        }
        await branch.remove();
        return 'Branch deleted successfully';
    }
};
exports.BranchesResolver = BranchesResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [Branches_1.Branches]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BranchesResolver.prototype, "getAllBranches", null);
__decorate([
    (0, type_graphql_1.Query)(() => Branches_1.Branches, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('branch_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BranchesResolver.prototype, "getBranchById", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Branches_1.Branches),
    __param(0, (0, type_graphql_1.Arg)('branch')),
    __param(1, (0, type_graphql_1.Arg)('address')),
    __param(2, (0, type_graphql_1.Arg)('phone_Number')),
    __param(3, (0, type_graphql_1.Arg)('email')),
    __param(4, (0, type_graphql_1.Arg)('inventoryId', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, String, Number]),
    __metadata("design:returntype", Promise)
], BranchesResolver.prototype, "createBranch", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Branches_1.Branches),
    __param(0, (0, type_graphql_1.Arg)('branch_id')),
    __param(1, (0, type_graphql_1.Arg)('branch', { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)('address', { nullable: true })),
    __param(3, (0, type_graphql_1.Arg)('phone_Number', { nullable: true })),
    __param(4, (0, type_graphql_1.Arg)('email', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, Number, String]),
    __metadata("design:returntype", Promise)
], BranchesResolver.prototype, "updateBranch", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)('branch_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BranchesResolver.prototype, "deleteBranch", null);
exports.BranchesResolver = BranchesResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], BranchesResolver);
//# sourceMappingURL=BranchesResolver.js.map