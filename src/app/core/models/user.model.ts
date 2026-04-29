export type UserRole = 'car-owner' | 'garage-admin' | 'system-admin' | 'mechanic';
export interface CurrentUser {
    id: number;
    name: string;
    email: string;
    role: UserRole;
    garageId?: string;
}

//raw shape from the JWT string
export interface JwtPayload {
  sub: string;      // Usually the User ID
  email: string;
  name: string;
  role: UserRole;  
  garage_id?: string;
  iat:number;
  exp: number;
}

//auth response shape. What the backend sends back from login and register

export interface SignInResponse{
    access_token: string;
}
 export interface SignUpResponse {
    message: string;
 }

