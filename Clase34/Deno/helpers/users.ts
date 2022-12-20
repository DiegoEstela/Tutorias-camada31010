import { Context, helpers } from "../devDepencies.ts";
import { User } from "../types/users.ts";

const arr: any = [];

export const findUserAll = (ctx: Context) => {
  try {
    ctx.response.body = arr;
  } catch (err) {
    ctx.response.status = 404;
    ctx.response.body = { message: err.message };
  }
};

export const findUserById = (ctx: Context) => {
  try {
    const {id} = helpers.getQuery(ctx, {mergeParams: true});
    const user: User = arr.find((user: any) => user.uid === id);
    ctx.response.body = user;
  } catch (err) {
    ctx.response.status = 404;
    ctx.response.body = { message: err.message };
  }
};

export const createUser = async (ctx: Context) => {
    try {
      const {name, birtData} = await ctx.request.body().value
      let userNew: User = {
        uid: (Math.random()).toString(),
        name,
        birtData
      }  
        arr.push(userNew);
        ctx.response.body = userNew;
    } catch (err) {
      ctx.response.status = 404;
      ctx.response.body = { message: err.message };
    }
  };
