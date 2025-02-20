"use server";

import { client } from "@/sanity/lib/client";
import { formData } from "../../Typing";

export async function addComments(comment: formData, postId: string) {
  const { name, email, message } = comment;
  if (!name || !email || !message || !postId) {
    return { error: "All fields are required" };
  }

  try {
    await client.create({
      _type: "comment",
      name,
      email,
      message,
      product: {
        _type: "reference",
        _ref: postId,
      },
    });
    console.log("Comment added successfully");
    return { success: "Comment added successfully" };
  } catch (error) {
    console.log(error, " >> An error occurred while adding the comment");
  }
}

export async function getComments(postId: string) {
  try {
    const comments = await client.fetch(
      `*[_type == "comment" && product._ref == $postId] | order(_createdAt desc)`,
      { postId }
    );
    return comments;
  } catch (error) {
    console.log(error, " >> An error occurred while adding the comment");
  }
}
