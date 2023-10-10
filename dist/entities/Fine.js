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
exports.Fine = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Copies_1 = require("./Copies");
const Members_1 = require("./Members");
let Fine = class Fine extends typeorm_1.BaseEntity {
};
exports.Fine = Fine;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Fine.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Fine.prototype, "fine_amount", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Fine.prototype, "fine_date", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Fine.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Fine.prototype, "copies_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Copies_1.Copies, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => Copies_1.Copies, copy => copy.fines),
    __metadata("design:type", Copies_1.Copies)
], Fine.prototype, "copy", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Members_1.Members, { nullable: true }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Fine.prototype, "memberId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Members_1.Members, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => Members_1.Members, member => member.fine),
    __metadata("design:type", Members_1.Members)
], Fine.prototype, "member", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Fine], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => Fine, fine => fine.id),
    __metadata("design:type", Array)
], Fine.prototype, "fines", void 0);
exports.Fine = Fine = __decorate([
    (0, typeorm_1.Entity)(),
    (0, type_graphql_1.ObjectType)()
], Fine);
//# sourceMappingURL=Fine.js.map