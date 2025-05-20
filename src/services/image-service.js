import { getTranslations } from 'next-intl/server';

import dbConnect from '@/lib/dbConnect';

import ImageAsset from '@/models/ImageAsset';

export const getImages = async (groupType, section) => {
  try {
    const t = await getTranslations('serviceError');
    await dbConnect();
    const images = await ImageAsset.find({
      section: section,
      type: groupType,
      isActive: true
    })
      .sort({ order: 1 })
      .exec();
    return images;
  } catch (error) {
    console.log('error', error);
    return { error: t('getImagesError') };
  }
};
