import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";

@Catch()
export class HttpError implements ExceptionFilter{
    catch(exception: HttpException, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const request = context.getRequest();
        const response = context.getResponse();

        let status: number;
        let message: string;

        if (exception instanceof HttpException) {
            status = exception.getStatus();
            message = exception.message || null;
        }else{
            status = 500;
            message = 'Internal Server Error';
        }

        const errorRespon = {
            code: status,
            timeStamp: new Date().toLocaleDateString(),
            message: message,
            path: request.url,
            method: request.method
        }
        response.status(status).json(errorRespon);
    }
}