export interface IEmail {
  to_name: string
  to_email: string
  token_link: string
}

export default class EmailDto implements IEmail {
  constructor(
    public to_name: string = '',
    public to_email: string = '',
    public token_link: string = ''
  ) {}
}
