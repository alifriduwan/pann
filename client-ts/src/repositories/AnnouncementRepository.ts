// import { config } from "process";
import Announcement from "../models/Announcement"; 
import { IRepository } from "./IRepository";
import { ax } from "../config";
import config from "../config";


export interface AnnouncementFilter {
    keyword?: string
}


export class AnnouncementRepository implements IRepository<Announcement> {
    get(id: string | number): Promise<Announcement | null> {
        throw new Error("Method not implemented.");
    }
    create(entity: Partial<Announcement>): Promise<Announcement | null> {
        throw new Error("Method not implemented.");
    }
    update(entity: Partial<Announcement>): Promise<Announcement | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: string | number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    urlPrefix = config.remoteRepositoryUrlPrefix

    async getAll(filter: AnnouncementFilter): Promise<Announcement[] | null> {
        const params = {...filter}
        const resp = await ax.get<Announcement[]>(`${this.urlPrefix}/announcement`,{params})
        return resp.data

    }
}
