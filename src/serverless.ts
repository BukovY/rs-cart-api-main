import { NestFactory } from '@nestjs/core';

import serverlessExpress from '@vendia/serverless-express';

import { AppModule } from './app.module';
import {Callback, Context, Handler} from "aws-lambda";

const port = process.env.PORT || 4000;

let server: Handler;
async function bootstrap() {

    const app = await NestFactory.create(AppModule);

    // app.enableCors({
    //     origin: (req, callback) => callback(null, true),
    // });
    // app.use(helmet());

    await app.init()

    const expressApp = app.getHttpAdapter().getInstance()

    return serverlessExpress({app:expressApp});
}


export const handler: Handler = async ( event: any, context: Context, callback: Callback) => {
    server = server ?? (await bootstrap())
    return server(event, context, callback)

}