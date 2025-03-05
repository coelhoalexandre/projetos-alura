export default interface Project {
  id: number;
  slug: string;
  name: string;
  description?: string;
  tags: string[];
  homepage?: string;
}
