import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { PrismaService } from 'src/prisma.service';
import { CreatePaymentDto } from 'src/payment/dto/create-payment.dto';
import { members_gender } from '@prisma/client';

@Injectable()
export class MemberService {

  constructor(private readonly db: PrismaService) {}

  create(createMemberDto: CreateMemberDto) {
    return this.db.members.create({
      data: {
        name: createMemberDto.name,
        gender: createMemberDto.gender,
        birth_date: createMemberDto.birth_date,
        created_at: new Date
      },
      select: {
        id: true,
        name: true,
        gender: true,
        birth_date: true,
        created_at: true
      }
    })
  }

  findAll() {
    return this.db.members.findMany({
      select: {
        id: true,
        name: true,
        gender: true,
        birth_date: true,
        created_at: true
      }
    })
  }

  /*pay(id: number){
    return this.db.payments.create({
      data:{
        amount: 5000,
        paid_at: new Date(),
        member_id: id,
        member: {connect: {id:id}}
      }
    })
  }*/

  findOne(id: number) {
    return `This action returns a #${id} member`;
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return `This action updates a #${id} member`;
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }
}
