export declare const createUser: (data: any) => Promise<{
    id: string;
    name: string;
    email: string;
    createdAt: Date;
}>;
export declare const authenticateUser: (data: any) => Promise<string>;
export declare const getUserById: (id: string) => Promise<{
    id: string;
    name: string;
    email: string;
    createdAt: Date;
} | null>;
export declare const updateUser: (id: string, data: any) => Promise<{
    id: string;
    name: string;
    email: string;
}>;
export declare const deleteUser: (id: string) => Promise<{
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    password: string;
}>;
