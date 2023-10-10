import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-express'
import express, { Express } from 'express'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { createConnection } from 'typeorm'
import { Books } from './entities/Books'
import { Branches } from './entities/Branches'
import { Checkout } from './entities/Checkout'
import { Copies } from './entities/Copies'
import { Fine } from './entities/Fine'
import { Inventory } from './entities/Inventory'
import { Members } from './entities/Members'
import { Publication } from './entities/Publication'
import { BooksResolver } from './resolver/Bookresolver'
import { BranchesResolver } from './resolver/BranchesResolver'
import { CheckoutResolver } from './resolver/Checkout'
import { CopiesResolver } from './resolver/CopiesResolver'
import { FineResolver } from './resolver/FineResolver'
import { InventoryResolver } from './resolver/InventoryResolver'
import { MembersResolver } from './resolver/MembersResolver'
import { PublicationResolver } from './resolver/PublicationResolver'

const main = async () => {
  await createConnection({
    type: 'postgres',
    database: 'Library',
    entities: [
      Books,
      Copies,
      Branches,
      Checkout,
      Fine,
      Inventory,
      Members,
      Publication
    ],
    logging: true,
    synchronize: true,
    url: 'postgresql://postgres:2a2gnRH9fpKrBHBOO8G2@containers-us-west-73.railway.app:5823/railway'
  })

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      //graphql schema
      resolvers: [
        BooksResolver,
        MembersResolver,
        CopiesResolver,
        BranchesResolver,
        CheckoutResolver,
        FineResolver,
        InventoryResolver,
        PublicationResolver
      ],
      validate: false
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
  })
  await apolloServer.start()
  const app: Express = express()

  apolloServer.applyMiddleware({ app })

  app.get('/', (_req, res) => res.send('hello world'))
  const PORT = process.env.PORT || 8000
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}

main().catch(err => console.error(err))
