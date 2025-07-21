import { v } from "convex/values";
import { mutation } from "../_generated/server";

export const addOne = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },

  handler: async (ctx, args) => {
    await ctx.db.insert("contacts", args);
  },
});
