// This function dynamically imports images from the src/assets/images directory.
// It uses Webpack's require.context to handle dynamic paths at build time.

// Create a context for the images directory.
// The parameters are:
// 1. The directory to search.
// 2. A boolean indicating whether to search subdirectories.
// 3. A regular expression to match files against.
const imageContext = require.context('../assets', true, /\.(png|jpe?g|svg|gif)$/);

export const loadImage = (imagePath) => {
  try {
    // The path needs to be prefixed with './' to match the context keys.
    return imageContext(`./${imagePath}`);
  } catch (err) {
    console.error(`Failed to load image: ${imagePath}`, err);
    // Return a placeholder or null if the image is not found.
    return null;
  }
};