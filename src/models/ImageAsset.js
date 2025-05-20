import mongoose, { Schema } from 'mongoose';

import { IMAGE_GROUP_TYPES, IMAGE_RATIOS, IMAGE_SECTIONS } from '@/constants/enum';

import toJSON from './plugins';

const imageAssetSchema = new Schema(
  {
    url: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: IMAGE_GROUP_TYPES,
      required: true
    },
    section: {
      type: String,
      enum: IMAGE_SECTIONS,
      required: true
    },
    order: {
      type: Number,
      default: 1
    },
    alt: {
      type: String
    },
    isActive: {
      type: Boolean,
      default: true
    },
    ratio: {
      type: String,
      enum: IMAGE_RATIOS,
      default: '16/9'
    }
  },
  {
    timestamps: true,
    collection: 'image_assets'
  }
);

imageAssetSchema.plugin(toJSON);
const ImageAsset = mongoose?.models?.ImageAsset || mongoose?.model('ImageAsset', imageAssetSchema);
export default ImageAsset;
