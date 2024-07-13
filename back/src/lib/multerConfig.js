import multer from 'multer';
import path from 'path';

// // Configuración de almacenamiento de Multer
// const storage = multer.diskStorage({
//   destination: 'uploads/', // Carpeta donde se guardarán las imágenes
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
//   }
// });

// // Configuración de Multer con un límite de tamaño de archivo y filtro de tipo de archivo
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
//   fileFilter: (req, file, cb) => {
//     const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
//     allowedTypes.includes(file.mimetype) ? cb(null, true) : cb(new Error('Invalid file type'));
//   }
// });

// export default upload;

const storage = multer.diskStorage({
  destination: 'uploads/', // Carpeta donde se guardarán las imágenes
  filename: (req, file, cb) => {
    const title = req.body.title; // Asegúrate de que el título esté presente en el formulario
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const sanitizedTitle = title.replace(/[^a-z0-9]/gi, '_').toLowerCase(); // Sanea el título para usarlo en el nombre del archivo
    cb(null, sanitizedTitle + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    allowedTypes.includes(file.mimetype) ? cb(null, true) : cb(new Error('Invalid file type'));
  }
});

export default upload;