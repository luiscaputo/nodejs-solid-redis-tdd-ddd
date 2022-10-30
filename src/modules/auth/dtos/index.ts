interface ILoginDTO {
  email: string;
  password: string;
}

interface IChangePasswordDTO {
  email: string;
  newPassword: string;
}

interface ICreateAccountDTO {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

export { ILoginDTO, IChangePasswordDTO, ICreateAccountDTO };
