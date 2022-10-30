import multer from 'multer';
import path from 'node:path';
import shell from 'shelljs';

export function storage(dir: string) {
  return multer.diskStorage({
    destination(_: any, __: any, cb: any) {
      const year = new Date().getFullYear();
      const month = new Date().getMonth() + 1;

      const uploadFolder = 'uploads';
      const buildFolder = `${uploadFolder}/${dir}/${year}/${month}`;
      try {
        shell.mkdir('-p', buildFolder);

        cb(null, buildFolder);
      } catch (err) {
        cb(null, uploadFolder);
      }
    },
    filename(_, file, cb) {
      cb(null, new Date().toISOString() + path.extname(file.originalname));
    },
  });
}

export const filePath = (path: string) => {
  if (path.includes('http://') || path.includes('https://')) {
    return path;
  }

  const dir = path.endsWith('default.png') ? 'storage' : 'uploads';

  return `${process.env.STORAGE_URL}/${dir}${
    path.startsWith('/') ? path : `/${path}`
  }`;
};
