export interface BlogPost {
  id: string;
  title: string;
  category: 'beginner' | 'advanced' | 'reviews' | 'diy';
  excerpt: string;
  content: string;
  imageUrl: string;
  date: string;
  author: string;
  readTime: string;
}

export interface Tool {
  id: string;
  name: string;
  category: 'power' | 'hand' | 'materials';
  description: string;
  imageUrl: string;
  price: number;
  affiliateUrl: string;
  brand: string;
}

export interface WoodworkingPlan {
  id: string;
  title: string;
  skillLevel: 'beginner' | 'intermediate' | 'advanced';
  timeEstimate: string;
  materials: string[];
  imageUrl: string;
  isPremium: boolean;
}