/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const yaml = require("js-yaml");
const path = require("path");

// Path to your YAML file
const yamlFilePath = path.join(process.cwd(), "public", "tools-data.yaml"); // Update with your actual YAML filename
// Path where you want to save the JSON file (in the public directory)
const jsonFilePath = path.join(process.cwd(), "public", "tools-data.json");
// Path where you want to save the CSV file (in the public directory)
const csvFilePath = path.join(process.cwd(), "public", "tools-data.csv");

try {
  // Make sure the YAML file exists
  if (!fs.existsSync(yamlFilePath)) {
    console.error(`YAML file not found at ${yamlFilePath}`);
    process.exit(1);
  }

  // Read the YAML file
  const yamlContent = fs.readFileSync(yamlFilePath, "utf8");

  // Convert YAML to JSON
  const jsonData = yaml.load(yamlContent);

  // Write the JSON to the public directory
  fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));

  console.log("Successfully converted YAML to JSON");
  console.log(`YAML file: ${yamlFilePath}`);
  console.log(`JSON file: ${jsonFilePath}`);

  // Collect all tags from all tools
  const allTags = new Set<string>();
  
  // Process each domain, category, and tool to collect all tags
  jsonData.domains.forEach((domain: any) => {
    domain.categories.forEach((category: any) => {
      if (category.tools && Array.isArray(category.tools)) {
        category.tools.forEach((tool: any) => {
          if (tool.tags && Array.isArray(tool.tags)) {
            tool.tags.forEach((tag: string) => {
              allTags.add(tag);
            });
          }
        });
      }
    });
  });
  
  // Convert to sorted array
  const sortedTags = Array.from(allTags).sort();
  
  console.log(`Found ${sortedTags.length} unique tags`);
  
  // Convert to CSV
  const csvRows = [];
  
  // Add CSV header row with base columns
  const baseColumns = [
    "Domain Name", "Domain Level", "Domain Description",
    "Category Name", "Category Level", "Category Description",
    "Tool Name", "Date Added", "Description", "Icon URL", "Website URL",
    "OSS", "Popular", "Verified", "Tags", "Keywords", "Social URLs"
  ];
  
  // Add a column for each tag
  const csvHeader = [...baseColumns, ...sortedTags];
  csvRows.push(csvHeader.join(","));

  // Process each domain, category, and tool to create CSV rows
  jsonData.domains.forEach((domain: any) => {
    domain.categories.forEach((category: any) => {
      if (category.tools && Array.isArray(category.tools)) {
        category.tools.forEach((tool: any) => {
          // Create base columns
          const baseRow = [
            // Domain info
            `"${escapeCSV(domain.name)}"`,
            domain.level,
            `"${escapeCSV(domain.description)}"`,
            // Category info
            `"${escapeCSV(category.name)}"`,
            category.level,
            `"${escapeCSV(category.description)}"`,
            // Tool info
            `"${escapeCSV(tool.name)}"`,
            `"${escapeCSV(tool.date_added)}"`,
            `"${escapeCSV(tool.description)}"`,
            `"${escapeCSV(tool.icon_url)}"`,
            `"${escapeCSV(tool.website_url)}"`,
            tool.oss || false,
            tool.popular || false,
            tool.verified || false,
            `"${escapeCSV(tool.tags ? tool.tags.join(';') : '')}"`,
            `"${escapeCSV(tool.keywords ? tool.keywords.join(';') : '')}"`,
            `"${escapeCSV(tool.social_urls ? tool.social_urls.join(';') : '')}"`,
          ];
          
          // Add boolean values for each tag
          const toolTags = tool.tags || [];
          const tagColumns = sortedTags.map(tag => toolTags.includes(tag));
          
          // Combine base columns and tag columns
          const csvRow = [...baseRow, ...tagColumns];
          csvRows.push(csvRow.join(","));
        });
      }
    });
  });

  // Write the CSV to the public directory
  fs.writeFileSync(csvFilePath, csvRows.join("\n"));
  
  console.log("Successfully converted YAML to CSV");
  console.log(`CSV file: ${csvFilePath}`);
} catch (error) {
  console.error("Error converting YAML:", error);
  process.exit(1);
}

// Helper function to escape CSV values
function escapeCSV(value: any): string {
  if (value === undefined || value === null) {
    return '';
  }
  // Replace double quotes with two double quotes and handle newlines
  return value.toString().replace(/"/g, '""').replace(/\n/g, ' ');
}
