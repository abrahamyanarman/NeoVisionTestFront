
export interface User {
  userId?: number;
   username?: string;
   firstName?: string;
   lastName?: string;
   address?: string;
   country?: string;
   password?: string;
   roles?: Array<string>;
   accountNonExpired?: boolean;
   accountNonLocked?: boolean;
   credentialsNonExpired?: boolean;
   enabled?: boolean;
   mail?: string;
   activated?: boolean;

}


export interface Role {
  name?: string;
}
