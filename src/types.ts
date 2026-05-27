export interface Lead {
  id: string;
  name: string;
  whatsapp: string;
  email: string;
  createdAt: string;
  downloadedEbookId?: string;
}

export interface Ebook {
  id: string;
  title: string;
  description: string;
  pages: number;
  badge: string;
  image: string;
  filePdfSimulated: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface BookFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
