export abstract class BaseService {
    handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
