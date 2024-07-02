export class CreateCurrencyDto {
    type: 'coin' | 'key';
    name: string;
    display_name: string;
    is_active?: boolean;
  }
  