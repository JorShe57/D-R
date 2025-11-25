/**
 * Interactive script to rename images based on category
 * Categories: driveways, patios, walkways, commercial
 * 
 * Usage: node rename-images.js
 * 
 * The script will prompt you to categorize each image.
 * You can open the image in another window to view it while categorizing.
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const imagesDir = path.join(__dirname, 'public', 'images');

// Valid categories
const validCategories = ['driveways', 'patios', 'walkways', 'commercial'];
const categoryShortcuts = {
  '1': 'driveways',
  '2': 'patios',
  '3': 'walkways',
  '4': 'commercial',
  'd': 'driveways',
  'p': 'patios',
  'w': 'walkways',
  'c': 'commercial',
};

// Counters for each category
const counters = {
  driveways: 0,
  patios: 0,
  walkways: 0,
  commercial: 0,
};

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Prompt user for input
 */
function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

/**
 * Get all JPG images from the directory
 */
function getImageFiles() {
  const files = fs.readdirSync(imagesDir);
  return files.filter(file => file.endsWith('.jpg')).sort();
}

/**
 * Prompt user to categorize an image
 */
async function categorizeImage(filename, index, total) {
  console.log(`\n📸 Image ${index + 1} of ${total}`);
  console.log(`   File: ${filename}`);
  console.log(`   Full path: ${path.join(imagesDir, filename)}`);
  console.log('\n   Categories:');
  console.log('   1 or d - driveways');
  console.log('   2 or p - patios');
  console.log('   3 or w - walkways');
  console.log('   4 or c - commercial');
  console.log('   s - skip this image');
  console.log('   q - quit (save progress)');
  
  while (true) {
    const answer = await question('\n   Enter category (1-4, d/p/w/c, s, or q): ');
    const input = answer.trim().toLowerCase();
    
    if (input === 'q' || input === 'quit') {
      return 'quit';
    }
    
    if (input === 's' || input === 'skip') {
      return 'skip';
    }
    
    if (categoryShortcuts[input]) {
      return categoryShortcuts[input];
    }
    
    if (validCategories.includes(input)) {
      return input;
    }
    
    console.log('   ❌ Invalid input. Please try again.');
  }
}

/**
 * Rename a single image file
 */
function renameImage(oldName, category) {
  counters[category]++;
  const newName = `${category}-${counters[category]}.jpg`;
  const oldPath = path.join(imagesDir, oldName);
  const newPath = path.join(imagesDir, newName);

  // Check if new name already exists
  if (fs.existsSync(newPath)) {
    console.log(`   ⚠️  Warning: ${newName} already exists. Skipping rename.`);
    return false;
  }

  try {
    fs.renameSync(oldPath, newPath);
    console.log(`   ✅ Renamed to: ${newName}`);
    return true;
  } catch (error) {
    console.error(`   ❌ Error renaming: ${error.message}`);
    return false;
  }
}

/**
 * Main function to interactively categorize and rename images
 */
async function interactiveRename() {
  console.log('🖼️  Image Categorization and Renaming Tool\n');
  console.log('This script will help you categorize and rename your images.');
  console.log('You can open images in another window to view them.\n');
  
  const imageFiles = getImageFiles();
  
  if (imageFiles.length === 0) {
    console.log('No JPG images found in the images directory.');
    rl.close();
    return;
  }
  
  console.log(`Found ${imageFiles.length} images to categorize.\n`);
  
  const categorized = [];
  const skipped = [];
  
  for (let i = 0; i < imageFiles.length; i++) {
    const filename = imageFiles[i];
    const category = await categorizeImage(filename, i, imageFiles.length);
    
    if (category === 'quit') {
      console.log('\n\n⏸️  Process stopped by user.');
      break;
    }
    
    if (category === 'skip') {
      skipped.push(filename);
      console.log(`   ⏭️  Skipped: ${filename}`);
      continue;
    }
    
    const renamed = renameImage(filename, category);
    if (renamed) {
      categorized.push({ old: filename, new: `${category}-${counters[category]}.jpg`, category });
    } else {
      skipped.push(filename);
    }
  }
  
  // Print summary
  console.log('\n\n📊 Summary:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`✅ Renamed: ${categorized.length} images`);
  console.log(`⏭️  Skipped: ${skipped.length} images`);
  console.log('\nCategory breakdown:');
  console.log(`   Driveways: ${counters.driveways}`);
  console.log(`   Patios: ${counters.patios}`);
  console.log(`   Walkways: ${counters.walkways}`);
  console.log(`   Commercial: ${counters.commercial}`);
  
  if (categorized.length > 0) {
    console.log('\n✅ Successfully renamed files:');
    categorized.forEach(({ old, new: newName }) => {
      console.log(`   ${old} → ${newName}`);
    });
  }
  
  if (skipped.length > 0) {
    console.log('\n⏭️  Skipped files:');
    skipped.forEach(file => {
      console.log(`   ${file}`);
    });
  }
  
  rl.close();
}

// Run the script
if (require.main === module) {
  interactiveRename().catch((error) => {
    console.error('\n❌ An error occurred:', error);
    rl.close();
    process.exit(1);
  });
}

module.exports = { interactiveRename };

