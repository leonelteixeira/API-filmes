/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getModelForClass } from '@typegoose/typegoose';
import { Request, Response } from 'express'
import Movie from '../models/Movie'
import axios from 'axios';

class MovieController {
  async create (req: Request, res: Response) {
    const MovieModel = getModelForClass(Movie);
    return res.status(201).json("Movie Create");
  }

  async list (req: Request, res: Response) {
    const MovieModel = getModelForClass(Movie);
    let listMovie = await MovieModel.find();
    return res.status(200).json(listMovie);
  }


}

export default MovieController
