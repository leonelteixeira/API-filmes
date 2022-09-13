import { prop } from "@typegoose/typegoose";

class Movie {
  @prop()
  public title: string;

  @prop()
  public year: string;

  @prop()
  public genre: string;

  @prop()
  public runtime: string;
}
export default Movie
