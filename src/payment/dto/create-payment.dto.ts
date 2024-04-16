import { IsNotEmpty } from "class-validator";

export class CreatePaymentDto {

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  paid_at: string;
}
