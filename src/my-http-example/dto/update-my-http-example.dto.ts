import { PartialType } from '@nestjs/mapped-types';
import { CreateMyHttpExampleDto } from './create-my-http-example.dto.js';

export class UpdateMyHttpExampleDto extends PartialType(CreateMyHttpExampleDto) {}
