import expressSession from 'express-session'
import { PrismaSessionStore } from '@quixo3/prisma-session-store'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const prismaSession = new PrismaSessionStore(prisma, {
  checkPeriod: 6.048e+8,
  dbRecordIdIsSessionId: true,
  dbRecordIdFunction: undefined,
})

export default expressSession({
  secret: process.env.SECRET_KEY || '',
  resave: false,
  saveUninitialized: true,
  store: prismaSession,
  cookie: {
    maxAge: 6.048e+8,
  },
})
