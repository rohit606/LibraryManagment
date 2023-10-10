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
exports.CheckoutResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Checkout_1 = require("../entities/Checkout");
const Copies_1 = require("../entities/Copies");
const Members_1 = require("../entities/Members");
let CheckoutResolver = class CheckoutResolver {
    async getBranchById(checkout_id) {
        const checkout = await Checkout_1.Checkout.findOneOrFail(checkout_id);
        return checkout;
    }
    async checkoutsAll() {
        return await Checkout_1.Checkout.find();
    }
    async createCheckout(checkoutDate, returnDate, dueDate, copyId, memberId) {
        const copy = await Copies_1.Copies.findOne(copyId);
        if (!copy)
            throw new Error(`Copy with ID ${copyId} not found.`);
        const member = await Members_1.Members.findOne(memberId);
        if (!member)
            throw new Error(`Member with ID ${memberId} not found.`);
        const checkout = Checkout_1.Checkout.create({
            checkout_Date: checkoutDate,
            return_Date: returnDate,
            due_Date: dueDate,
            copy,
            memberId,
            members: member
        });
        return await checkout.save();
    }
};
exports.CheckoutResolver = CheckoutResolver;
__decorate([
    (0, type_graphql_1.Query)(() => Checkout_1.Checkout, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('checkout_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CheckoutResolver.prototype, "getBranchById", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Checkout_1.Checkout]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CheckoutResolver.prototype, "checkoutsAll", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Checkout_1.Checkout),
    __param(0, (0, type_graphql_1.Arg)('checkoutDate')),
    __param(1, (0, type_graphql_1.Arg)('returnDate')),
    __param(2, (0, type_graphql_1.Arg)('dueDate')),
    __param(3, (0, type_graphql_1.Arg)('copyId', () => type_graphql_1.Int)),
    __param(4, (0, type_graphql_1.Arg)('memberId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date,
        Date,
        Date, Number, String]),
    __metadata("design:returntype", Promise)
], CheckoutResolver.prototype, "createCheckout", null);
exports.CheckoutResolver = CheckoutResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => Checkout_1.Checkout)
], CheckoutResolver);
//# sourceMappingURL=Checkout.js.map