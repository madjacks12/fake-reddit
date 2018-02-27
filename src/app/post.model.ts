export class Post {
  constructor(
    public author: string,
    public title: string,
    public summary: string,
    public content: string,
    public threadId: number
  ) {}
}
