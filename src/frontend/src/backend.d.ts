import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    id: bigint;
    fullName: string;
    isRead: boolean;
    email: string;
    message: string;
    timestamp: bigint;
    phone: string;
    program: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    deleteInquiry(id: bigint): Promise<void>;
    getAllInquiries(): Promise<Array<Inquiry>>;
    getCallerUserRole(): Promise<UserRole>;
    getUnreadInquiryCount(): Promise<bigint>;
    isCallerAdmin(): Promise<boolean>;
    markInquiryRead(id: bigint, isRead: boolean): Promise<void>;
    submitInquiry(fullName: string, email: string, phone: string, program: string, message: string): Promise<void>;
}
