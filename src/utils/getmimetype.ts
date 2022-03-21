import getExtension from './getextension';

const WOFF = 'application/font-woff';
const JPEG = 'image/jpeg';
const mimes: { [key: string]: string } = {
  woff: WOFF,
  woff2: WOFF,
  ttf: 'application/font-truetype',
  eot: 'application/vnd.ms-fontobject',
  png: 'image/png',
  jpg: JPEG,
  jpeg: JPEG,
  gif: 'image/gif',
  tiff: 'image/tiff',
  svg: 'image/svg+xml',
};

function getMimeType(url: string): string {
  const extension = getExtension(url).toLowerCase();
  return mimes[extension] || '';
}

export default getMimeType;
