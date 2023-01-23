import { IRepository } from "./IRepository";
import UserResult from "../models/UserResult";
import config, { ax } from "../config";

export interface UserResultFilter {
    keyword?: string
    isPinned? : boolean
}


export class UserResultRepotiory implements IRepository<UserResult> {
    get(id: string | number): Promise<UserResult | null> {
        throw new Error("Method not implemented.");
    }
    create(entity: Partial<UserResult>): Promise<UserResult | null> {
        throw new Error("Method not implemented.");
    }
    update(entity: Partial<UserResult>): Promise<UserResult | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: string | number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    urlPrefix = config.remoteRepositoryUrlPrefix

    async getAll(filter: UserResultFilter): Promise<UserResult[] | null> {
        const params = {...filter}
        const resp = await ax.get<UserResult[]>(`${this.urlPrefix}/userResult`,{ params })
        
        return resp.data

    }
}
