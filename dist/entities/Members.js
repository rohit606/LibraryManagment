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
exports.Members = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const Checkout_1 = require("./Checkout");
const Fine_1 = require("./Fine");
let Members = class Members extends typeorm_1.BaseEntity {
};
exports.Members = Members;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_2.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Members.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_2.Column)(),
    __metadata("design:type", String)
], Members.prototype, "first_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_2.Column)(),
    __metadata("design:type", String)
], Members.prototype, "last_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_2.Column)(),
    __metadata("design:type", Number)
], Members.prototype, "phone_number", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_2.Column)(),
    __metadata("design:type", String)
], Members.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_2.Column)(),
    __metadata("design:type", String)
], Members.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_2.Column)(),
    __metadata("design:type", String)
], Members.prototype, "address", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_2.Column)(),
    __metadata("design:type", Boolean)
], Members.prototype, "is_librarian", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Fine_1.Fine]),
    (0, typeorm_1.OneToMany)(() => Fine_1.Fine, fine => fine.member),
    __metadata("design:type", Array)
], Members.prototype, "fine", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Checkout_1.Checkout]),
    (0, typeorm_1.OneToMany)(() => Checkout_1.Checkout, checkout => checkout.members),
    __metadata("design:type", Array)
], Members.prototype, "checkout", void 0);
exports.Members = Members = __decorate([
    (0, typeorm_2.Entity)(),
    (0, type_graphql_1.ObjectType)()
], Members);
//# sourceMappingURL=Members.js.map