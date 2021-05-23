/**
 * Open the sitemap.xml in the browser (https://www.your-site.com/sitemap.xml)
 * Open Chrome Developer Tools and run the script in the conolse or as a snippet
 */
var output = '';
var urls = document.getElementsByTagName('url');
    
for (var i = 0; i < urls.length; i++) {
  var urlElement = urls[i];
  var loc = urlElement.getElementsByTagName('loc')[0].textContent;

  output += `'${loc}',\n`;
}

// Remove comma and line-break from last item
output = output.replace(/,\n\s*$/, "");

// Copy output in Clickboard
console.log(output);