import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { PrismaService } from 'src/prisma.service';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService, private readonly db: PrismaService) {}

  @Post('api/members')
  create(@Body() createMemberDto: CreateMemberDto) {
    return this.memberService.create(createMemberDto);
  }

  /*@Post('/api/members/:id/pay')
  Pay(@Body() @Param('id') id: string) {
    return this.memberService.pay(+id)
  }*/

  @Get('/api/members')
  findAll() {
    return this.memberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memberService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto) {
    return this.memberService.update(+id, updateMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.memberService.remove(+id);
  }
}
