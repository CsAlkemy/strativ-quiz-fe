import { UuidBaseEntity } from '../base/uuid-base.entity';

export interface MessengerMessagesEntity extends UuidBaseEntity {
    messengerConversationId: string;
    userId: string;
    message: string;
    document: string[];
}
