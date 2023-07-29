export default class UpdateUserDto {
  constructor(
    public firstName: string = '',
    public lastName: string = '',
    public email: string = ''
  ) {}
}
