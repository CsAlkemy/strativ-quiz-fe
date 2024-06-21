import { UuidBaseEntity } from '../base/uuid-base.entity';

import { MessengerConversationEntity } from './messenger-conversation.entity';

export interface MessengerParticipantEntity extends UuidBaseEntity {
    messengerConversationId: string;
    participantId: string;
    oppositeUserId: string;
    title: string;

    messengerConversationInfo: MessengerConversationEntity;
    participantInfo: Record<string, any>;
    oppositeUserInfo: Record<string, any>;
}
