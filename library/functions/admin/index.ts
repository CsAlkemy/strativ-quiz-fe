import { enums } from '@library/enums';
import AdminRoleEnums = enums.AdminRoleEnums;

export const funcAdminGuardCheck = (guard: AdminRoleEnums, jwtUser: Record<string, any>) => {
    if (Object.keys(jwtUser).length === 0) return false;
    const role = jwtUser?.userType as AdminRoleEnums;
    if (!role) return false;
    let condition;
    switch (guard) {
        case AdminRoleEnums.SUPER_ADMIN:
            condition = role === AdminRoleEnums.SUPER_ADMIN;
            break;
        case AdminRoleEnums.ADMIN:
            condition = role === AdminRoleEnums.ADMIN;
            break;
        default:
            condition = false;
    }
    return condition;
};

interface DateRange {
    startDate: string;
    endDate: string;
}

const formatDateFunc = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
};
