import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UpdateCategoryDto } from './dto/update-category.dto';

import { Category } from './schemas/category.schema';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async getCategoryById(_id: string): Promise<Category> {
    return this.categoryRepository.findOne({ _id });
  }

  async getCategories(): Promise<Category[]> {
    return this.categoryRepository.find({});
  }

  async createCategory(
    name: string,
    is_show: boolean,
    image: string,
  ): Promise<Category> {
    return this.categoryRepository.create({
      name,
      is_show,
      image,
    });
  }

  async updateCategory(
    _id: string,
    categoryUpdates: UpdateCategoryDto,
  ): Promise<Category> {
    return this.categoryRepository.findOneAndUpdate({ _id }, categoryUpdates);
  }
}
