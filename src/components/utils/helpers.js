import { execSync } from 'child_process';

import fs from 'fs';

export function getWordCountFromFile(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const wordCount = fileContent.split(/\s+/).filter((word) => word.length > 0).length;
    return wordCount;
  } catch (error) {
    console.error(`Error reading file at ${filePath}:`, error);
    return 0
  }
}

export function getGitInfo(filePath) {
  try {
    const commitHash = execSync(`git log -1 --format="%h" -- ${filePath}`).toString().trim();
    const commitDate = execSync(`git log -1 --format="%ai" -- ${filePath}`).toString().trim();
    return { commitHash, commitDate };
  } catch (error) {
    console.error(`Error fetching git info for file ${filePath}:`, error);
    return { commitHash: 'unknown', commitDate: 'unknown' };
  }
}
