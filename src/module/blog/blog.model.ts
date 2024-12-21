import mongoose, { Schema } from 'mongoose';

const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Blog = mongoose.model('Blog', BlogSchema);
export default Blog;