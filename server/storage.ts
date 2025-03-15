import { users, type User, type InsertUser } from "@shared/schema";
import { 
  type BlogPost, 
  type InsertBlogPost, 
  type BlogCategory, 
  type InsertBlogCategory 
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Blog methods
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  listBlogPosts(published?: boolean): Promise<BlogPost[]>;
  createBlogCategory(category: InsertBlogCategory): Promise<BlogCategory>;
  getBlogCategory(id: number): Promise<BlogCategory | undefined>;
  listBlogCategories(): Promise<BlogCategory[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private blogPosts: Map<number, BlogPost>;
  private blogCategories: Map<number, BlogCategory>;
  currentId: number;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.blogCategories = new Map();
    this.currentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Blog methods
  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentId++;
    const now = new Date();
    const post: BlogPost = {
      ...insertPost,
      id,
      createdAt: now,
      updatedAt: now,
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(
      (post) => post.slug === slug,
    );
  }

  async listBlogPosts(published?: boolean): Promise<BlogPost[]> {
    const posts = Array.from(this.blogPosts.values());
    if (published !== undefined) {
      return posts.filter(post => post.published === published);
    }
    return posts;
  }

  async createBlogCategory(insertCategory: InsertBlogCategory): Promise<BlogCategory> {
    const id = this.currentId++;
    const category: BlogCategory = { ...insertCategory, id };
    this.blogCategories.set(id, category);
    return category;
  }

  async getBlogCategory(id: number): Promise<BlogCategory | undefined> {
    return this.blogCategories.get(id);
  }

  async listBlogCategories(): Promise<BlogCategory[]> {
    return Array.from(this.blogCategories.values());
  }
}

export const storage = new MemStorage();