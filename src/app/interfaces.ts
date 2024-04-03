export interface CardComponentProps {
  title: string
  description: string
  icon: string[]
  image: string[]
  bgcolor: string[]
  
}

export interface SlideShowProps {
  images: string[]
}

export interface FancyScrollProps{
  image: string
  title : string[]
  heading : string[]
  description: string[]
}

export interface RechartProps{
  data: {
    name: string;
    level: number;
  }[];
}