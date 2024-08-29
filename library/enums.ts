export namespace enums {
    export enum UserRolesEnum {
        ADMIN = 'admin',
        EMPLOYER = 'employer',
        JOB_SEEKER = 'job_seeker',
        ALL = 'all',
    }

    export enum TokenEnum {
        ACCESS_TOKEN = 'x-access-token',
        TEMP_ACCESS_TOKEN = 'temp-access-token',
        REFRESH_TOKEN = 'x-refresh-token',
    }
    export enum CategoriesEnum {
        DRESS = 'Dress',
        BAGS = 'Bags',
        COATS = 'Coats',
        ACCESSORIES = 'Accessories',
        TOPS = 'Tops',
        BOTTOMS = 'Bottoms',
        SHOES = 'Shoes',
        CAPS = 'Caps',
    }

    export enum ApiModuleEnum {
        AUTH = 'auth',
    }
    export enum AdminApiModuleEnum {
        AUTH = 'auth',
    }
    export enum AdminRoleEnums {
        SUPER_ADMIN = 'super_admin',
        ADMIN = 'admin',
    }
}

export class CategoriesEnum {}
