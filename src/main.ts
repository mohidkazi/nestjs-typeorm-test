import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'
import { ValidationPipe, BadRequestException } from '@nestjs/common'

declare const module: any
async function bootstrap() {
  const port: number = Number(process.env.PORT)
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bodyParser: true,
  })

  app.useGlobalPipes(
    new ValidationPipe({
      forbidUnknownValues: false,
      transform: true,
      whitelist: true,
      validationError: { target: true },
      validateCustomDecorators: true,
      exceptionFactory(error) {
        throw new BadRequestException(error)
      },
    }),
  )

  app.setGlobalPrefix('/api/v1')
  await app.listen(port || 3000)
  await app.init()
  console.info('api running on port ', port || 3000)
}
bootstrap()
