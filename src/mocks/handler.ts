import { rest } from "msw";
import data from "../data/db.json";

export const handlers = [
  rest.get("http://localhost:3000/productTracker", (req, res, ctx) => {
    console.log(data.productTracker);
    return res(ctx.status(200), ctx.json(data.productTracker));
  }),
  rest.get("http://localhost:3000/overview/2", (req, res, ctx) => {
    console.log(data.overview[1]);
    return res(ctx.status(200), ctx.json(data.overview[1]));
  }),
];
