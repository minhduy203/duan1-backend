import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

import { Category } from './schemas/category.schema';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get(':_id')
  async getCategory(@Param('_id') _id: string): Promise<Category> {
    return this.categoryService.getCategoryById(_id);
  }

  @Get()
  async getCategories(): Promise<Category[]> {
    return this.categoryService.getCategories();
  }

  @Post()
  async createCategory(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return this.categoryService.createCategory(
      createCategoryDto.name,
      createCategoryDto.is_show,
      createCategoryDto.image,
    );
  }

  @Delete(':_id')
  async deleteCategory(@Param('_id') _id: string): Promise<Category> {
    return this.categoryService.deleteCategory(_id);
  }

  @Patch(':_id')
  async updateCategory(
    @Param('_id') categoryId: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    return this.categoryService.updateCategory(categoryId, updateCategoryDto);
  }
}
