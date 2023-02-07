export type User = {
    name: string;
    middlename: string;
    email: string;
    login: string;
    password: string;
    assignments: string;
    role: string;
    avatar: string;
}

export type TypeAuth = {
    user: User | null;
    signIn: (login: string, password: string) => Promise<boolean>;
    forgetPass: (login: string, email: string) => Promise<any>;
    logout: () => void;
}