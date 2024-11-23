export interface GenericOperationRes {
    statusCode: number;
    message: string;
    resData?: { [key: string]: any} | null;
    errors?: { [key: string]: any } | null;
}