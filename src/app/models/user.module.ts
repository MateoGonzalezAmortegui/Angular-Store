export interface User{
  id: string;
  email: string;
  password: number;
  name:string;
}

export interface CreateUserDTO extends Omit<User, 'id'>{

}
