interface IFindUserDTO {
  email: string;
}

interface IFindUserByIdDTO {
  id: string;
}

interface IUpdateUserDTO {
  id: string;
  name?: string;
  email?: string;
  admin?: boolean;
  password?: string;
}

export { IFindUserDTO, IUpdateUserDTO, IFindUserByIdDTO };
