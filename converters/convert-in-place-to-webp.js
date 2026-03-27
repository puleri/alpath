const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT_DIR = path.resolve("./public/wp-content/uploads");
const QUALITY = 100;
const DELETE_ORIGINALS = true; // set to false if you want to keep jpg/png files
const SUPPORTED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);

async function getAllFiles(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  const results = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        return getAllFiles(fullPath);
      }

      return fullPath;
    })
  );

  return results.flat();
}

async function convertFile(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const dir = path.dirname(inputPath);
  const base = path.basename(inputPath, ext);
  const outputPath = path.join(dir, `${base}.webp`);

  if (path.resolve(inputPath) === path.resolve(outputPath)) {
    return;
  }

  await sharp(inputPath)
    .webp({ quality: QUALITY })
    .toFile(outputPath);

  if (DELETE_ORIGINALS) {
    await fs.promises.unlink(inputPath);
  }

  console.log(
    `${DELETE_ORIGINALS ? "Replaced" : "Converted"}: ${path.relative(ROOT_DIR, inputPath)} -> ${path.relative(ROOT_DIR, outputPath)}`
  );
}

async function main() {
  try {
    const allFiles = await getAllFiles(ROOT_DIR);

    const imageFiles = allFiles.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return SUPPORTED_EXTENSIONS.has(ext);
    });

    if (imageFiles.length === 0) {
      console.log("No supported image files found.");
      return;
    }

    console.log(`Found ${imageFiles.length} image(s).\n`);

    for (const file of imageFiles) {
      try {
        await convertFile(file);
      } catch (error) {
        console.error(`Failed: ${path.relative(ROOT_DIR, file)}`);
        console.error(error.message);
      }
    }

    console.log("\nDone.");
  } catch (error) {
    console.error("Unexpected error:");
    console.error(error);
    process.exit(1);
  }
}

main();