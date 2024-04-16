import { members_gender } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsOptional } from "class-validator"

export class CreateMemberDto {

  @IsNotEmpty()
  name: string;

  @IsEnum(members_gender)
  @IsOptional()
  gender: members_gender;

  @IsNotEmpty()
  birth_date: string;

  banned: boolean;

  created_at: string = Date.now().toString();

  updated_at: string;
}
