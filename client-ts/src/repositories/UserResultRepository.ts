import { IRepository } from "./IRepository";
import UserResult from "../models/UserResult";

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
    async getAll(): Promise<UserResult[] | null> {
        return [
            {
                id: 3,
                announcement: {
                    id: 2,
                    topic: "ทุนเรียนดีประจำปี 2566",
                    description: "test",
                    remarkIfPositive: "ขอแสดงความยินดีกับผุ้ได้รับทุนเรียนดีทุกคนด้วย",
                    pubDateTime:new Date("2022-09-09 08:00:00")
                },
                result: "ได้รับทุน",
                resultType: 1,
                remark: "",
                isPinned: false,
                viewDateTime: new Date('2022-09-08 14:12:31'),
                ackDateTime: new Date('2022-09-08 14:13:31'),
                updateDateTime: new Date('2022-09-07 09:12:31'),
                expireDateTime: new Date('2022-09-15 14:12:31'),
                userCode: '6210110227'
            }
        ]
    }
}
