import { UuidBaseEntity } from '../base/uuid-base.entity';

export interface MessengerConversationEntity extends UuidBaseEntity {
    lastMessageSenderId: string;
    title: string;
    lastMessage: string;
    type: string;
}
