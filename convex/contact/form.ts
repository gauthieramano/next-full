import { mutation, query } from "../_generated/server";
import { v } from "convex/values";

export const fetchRecentOnes = query({
  args: {},

  handler: async (ctx) => {
    // Get most recent messages first
    const messages = await ctx.db.query("contacts").order("desc").take(20);

    return messages;
  },
});

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
