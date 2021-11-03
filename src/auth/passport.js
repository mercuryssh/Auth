import passport from 'passport'
import { Strategy } from 'passport-local'
import { compareSync } from 'bcrypt'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const customFields = {
  usernameField: 'email',
  passwordField: 'password',
}

const verifyCallback = async (email, password, done) => {
  const user = await prisma.auth.findUnique({ where: { email } })
  if (compareSync(password, user.password)) return done(null, user)
  return done(null, false)
}

const stragy = new Strategy(customFields, verifyCallback)
passport.use(stragy)

export default passport
