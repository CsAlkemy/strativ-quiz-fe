import { BanglaTalentBaseEntity } from './base.entity';

export interface JobBaseEntity extends BanglaTalentBaseEntity {
    id: string;
    jobNumber: number;
}
