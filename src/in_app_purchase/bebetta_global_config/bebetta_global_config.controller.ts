import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { BebettaGlobalConfigService } from './bebetta_global_config.service';
import { CreateBebettaGlobalConfigDto } from './dto/create-bebetta_global_config.dto';
import { UpdateBebettaGlobalConfigDto } from './dto/update-bebetta_global_config.dto';
import{FilterBebettaGlobalConfigDto} from './dto/filter-bebetta_global_config.dto'

@Controller('bebetta-global-config')
export class BebettaGlobalConfigController {
  constructor(private readonly bebettaGlobalConfigService: BebettaGlobalConfigService) {}

  @Post()
  create(@Body() createBebettaGlobalConfigDto: CreateBebettaGlobalConfigDto) {
    return this.bebettaGlobalConfigService.create(createBebettaGlobalConfigDto);
  }

  @Get()
  findAll(@Query() query: FilterBebettaGlobalConfigDto) {
    return this.bebettaGlobalConfigService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bebettaGlobalConfigService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBebettaGlobalConfigDto: UpdateBebettaGlobalConfigDto) {
    return this.bebettaGlobalConfigService.update(+id, updateBebettaGlobalConfigDto);
  }

}
