"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_core_1 = require("apollo-server-core");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Books_1 = require("./entities/Books");
const Branches_1 = require("./entities/Branches");
const Checkout_1 = require("./entities/Checkout");
const Copies_1 = require("./entities/Copies");
const Fine_1 = require("./entities/Fine");
const Inventory_1 = require("./entities/Inventory");
const Members_1 = require("./entities/Members");
const Publication_1 = require("./entities/Publication");
const Bookresolver_1 = require("./resolver/Bookresolver");
const BranchesResolver_1 = require("./resolver/BranchesResolver");
const Checkout_2 = require("./resolver/Checkout");
const CopiesResolver_1 = require("./resolver/CopiesResolver");
const FineResolver_1 = require("./resolver/FineResolver");
const InventoryResolver_1 = require("./resolver/InventoryResolver");
const MembersResolver_1 = require("./resolver/MembersResolver");
const PublicationResolver_1 = require("./resolver/PublicationResolver");
const main = async () => {
    await (0, typeorm_1.createConnection)({
        type: 'postgres',
        database: 'Library',
        entities: [
            Books_1.Books,
            Copies_1.Copies,
            Branches_1.Branches,
            Checkout_1.Checkout,
            Fine_1.Fine,
            Inventory_1.Inventory,
            Members_1.Members,
            Publication_1.Publication
        ],
        logging: true,
        synchronize: true,
        url: 'postgresql://postgres:2a2gnRH9fpKrBHBOO8G2@containers-us-west-73.railway.app:5823/railway'
    });
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [
                Bookresolver_1.BooksResolver,
                MembersResolver_1.MembersResolver,
                CopiesResolver_1.CopiesResolver,
                BranchesResolver_1.BranchesResolver,
                Checkout_2.CheckoutResolver,
                FineResolver_1.FineResolver,
                InventoryResolver_1.InventoryResolver,
                PublicationResolver_1.PublicationResolver
            ],
            validate: false
        }),
        plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)()]
    });
    await apolloServer.start();
    const app = (0, express_1.default)();
    apolloServer.applyMiddleware({ app });
    app.get('/', (_req, res) => res.send('hello world'));
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
};
main().catch(err => console.error(err));
//# sourceMappingURL=index.js.map