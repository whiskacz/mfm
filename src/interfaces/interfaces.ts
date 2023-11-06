export interface LoginType {
    username: string;
    password: string;   
}
export type DataContextType = {
    children: React.ReactNode
}
export interface LoginAddProps {
    handleLoginAdd: () => void;
    dataUpdate: (newState: LoginType[]) => void;
}

// export interface MovieDetails {

// }