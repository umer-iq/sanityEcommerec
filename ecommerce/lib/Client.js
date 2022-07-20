import sanityClient from '@sanity/client';
import imageURLBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:'373sg3on',
    dataset:'production',
    apiVersion:'2022-07-19',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageURLBuilder(client);
export const urlFor = (source) => builder.image(source);
