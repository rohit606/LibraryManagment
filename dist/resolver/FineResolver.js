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
exports.FineResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Copies_1 = require("../entities/Copies");
const Fine_1 = require("../entities/Fine");
const Members_1 = require("../entities/Members");
let FineResolver = class FineResolver {
    async getBranchById(fine_id) {
        const fine = await Fine_1.Fine.findOneOrFail(fine_id);
        return fine;
    }
    async fines() {
        return await Fine_1.Fine.find();
    }
    async createFine(fineAmount, fineDate, status, copyId, memberId) {
        const copy = await Copies_1.Copies.findOne(copyId);
        if (!copy)
            throw new Error(`Copy with ID ${copyId} not found.`);
        const member = await Members_1.Members.findOne(memberId);
        if (!member)
            throw new Error(`Member with ID ${memberId} not found.`);
        const fine = Fine_1.Fine.create({
            fine_amount: fineAmount,
            fine_date: fineDate,
            status,
            copy,
            member
        });
        return await fine.save();
    }
    async copyOfFine(id) {
        const fine = await Fine_1.Fine.findOne(id, { relations: ['copy'] });
        return fine ? fine.copy : null;
    }
    async memberOfFine(id) {
        const fine = await Fine_1.Fine.findOne(id, { relations: ['member'] });
        return fine ? fine.member : null;
    }
};
exports.FineResolver = FineResolver;
__decorate([
    (0, type_graphql_1.Query)(() => Fine_1.Fine, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('fine_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FineResolver.prototype, "getBranchById", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Fine_1.Fine]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FineResolver.prototype, "fines", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Fine_1.Fine),
    __param(0, (0, type_graphql_1.Arg)('fineAmount')),
    __param(1, (0, type_graphql_1.Arg)('fineDate')),
    __param(2, (0, type_graphql_1.Arg)('status')),
    __param(3, (0, type_graphql_1.Arg)('copyId', () => type_graphql_1.Int)),
    __param(4, (0, type_graphql_1.Arg)('memberId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Date, String, Number, String]),
    __metadata("design:returntype", Promise)
], FineResolver.prototype, "createFine", null);
__decorate([
    (0, type_graphql_1.Query)(() => Copies_1.Copies, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('id', () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FineResolver.prototype, "copyOfFine", null);
__decorate([
    (0, type_graphql_1.Query)(() => Members_1.Members, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('id', () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FineResolver.prototype, "memberOfFine", null);
exports.FineResolver = FineResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => Fine_1.Fine)
], FineResolver);
//# sourceMappingURL=FineResolver.js.map