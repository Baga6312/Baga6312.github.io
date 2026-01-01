"use client";
import { useState, useEffect } from "react";
import { FileText, Home, Search, Github, ChevronRight } from "lucide-react";

interface WriteupItem {
  name: string;
  path: string;
  category: string;
}

export default function Writeups() {
  const [writeups, setWriteups] = useState<WriteupItem[]>([]);
  const [selectedFile, setSelectedFile] = useState<{ name: string; path: string; content: string; category: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const GITHUB_REPO = "Baga6312/Writeups";
  const GITHUB_BRANCH = "main";

  useEffect(() => {
    fetchRepoStructure();
  }, []);

  const fetchRepoStructure = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${GITHUB_REPO}/git/trees/${GITHUB_BRANCH}?recursive=1`
      );
      const data = await response.json();
      
      const writeupsList: WriteupItem[] = [];
      
      data.tree.forEach((item: { type: string; path: string }) => {
        if (item.type === 'blob' && item.path.endsWith('.md')) {
          // Skip .obsidian and other hidden folders
          if (item.path.startsWith('.obsidian') || item.path.startsWith('.')) {
            return;
          }
          
          const parts = item.path.split('/');
          
          // Handle both root level files and nested files
          if (parts.length === 1) {
            // Root level markdown file
            const name = parts[0].replace('.md', '');
            if (name !== 'README') {
              writeupsList.push({
                name,
                path: item.path,
                category: 'root'
              });
            }
          } else if (parts.length >= 2) {
            // Nested files - use first folder as category
            const category = parts[0];
            const name = parts[parts.length - 1].replace('.md', '');
            writeupsList.push({
              name,
              path: item.path,
              category
            });
          }
        }
      });
      
      writeupsList.sort((a, b) => {
        if (a.category !== b.category) {
          return a.category.localeCompare(b.category);
        }
        return a.name.localeCompare(b.name);
      });
      
      setWriteups(writeupsList);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching repo structure:", error);
      setLoading(false);
    }
  };

  const fetchFileContent = async (path: string) => {
    try {
      const response = await fetch(
        `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/${path}`
      );
      return await response.text();
    } catch (error) {
      console.error("Error fetching file:", error);
      return "Error loading content";
    }
  };

  const handleFileClick = async (item: WriteupItem) => {
    const content = await fetchFileContent(item.path);
    setSelectedFile({ ...item, content });
  };

  const renderMarkdown = (markdown: string, filePath: string) => {
    let html = markdown;
    const dirPath = filePath.substring(0, filePath.lastIndexOf('/'));
    
    // Headers
    html = html.replace(/^#### (.*$)/gim, '<h4 class="text-lg font-bold mt-5 mb-2 text-white">$1</h4>');
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-6 mb-3 text-white">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4 text-white">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-10 mb-5 text-white">$1</h1>');
    
    // Obsidian-style image embeds ![[image.png]]
    html = html.replace(/!\[\[([^\]]+)\]\]/g, (match, filename) => {
      const imagePath = dirPath 
        ? `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/${dirPath}/${filename}`
        : `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/${filename}`;
      return `<img src="${imagePath}" alt="${filename}" class="rounded-lg my-4 max-w-full border border-gray-800 shadow-lg" />`;
    });
    
    // Standard markdown images ![alt](url)
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, url) => {
      if (!url.startsWith('http')) {
        url = dirPath
          ? `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/${dirPath}/${url}`
          : `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/${url}`;
      }
      return `<img src="${url}" alt="${alt}" class="rounded-lg my-4 max-w-full border border-gray-800 shadow-lg" />`;
    });
    
    // Code blocks
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-gray-950 border border-gray-800 rounded-lg p-4 my-4 overflow-x-auto"><code class="text-sm text-gray-300 font-mono">$2</code></pre>');
    
    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-800 px-2 py-1 rounded text-sm text-blue-400 font-mono">$1</code>');
    
    // Bold
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-white">$1</strong>');
    
    // Italic
    html = html.replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>');
    
    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">$1</a>');
    
    // Lists
    html = html.replace(/^\* (.*$)/gim, '<li class="ml-4 mb-2">$1</li>');
    html = html.replace(/^- (.*$)/gim, '<li class="ml-4 mb-2">$1</li>');
    html = html.replace(/^\d+\. (.*$)/gim, '<li class="ml-4 mb-2">$1</li>');
    
    // Paragraphs
    html = html.split('\n\n').map(para => {
      if (para.startsWith('<h') || para.startsWith('<pre') || para.startsWith('<li') || para.startsWith('<img')) {
        return para;
      }
      if (para.trim() === '') return '';
      return `<p class="mb-4 text-gray-300 leading-relaxed">${para}</p>`;
    }).join('\n');
    
    return html;
  };

  const filteredWriteups = writeups.filter(w => 
    w.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group by category
  const groupedWriteups = filteredWriteups.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, WriteupItem[]>);

  return (
    <div className="flex h-screen bg-gray-950 text-white">
      {/* Sidebar */}
      <aside className="w-80 bg-gray-900 border-r border-gray-800 flex flex-col overflow-hidden fixed left-0 top-0 h-screen">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg border border-gray-700 bg-green-500/10 flex items-center justify-center">
              <FileText className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h2 className="font-semibold text-white">HTB Writeups</h2>
              <p className="text-xs text-gray-500">HackTheBox Solutions</p>
            </div>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search writeups..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-950 border border-gray-800 rounded px-9 py-2 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Writeups List */}
        <div className="flex-1 overflow-y-auto py-4">
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="space-y-6">
              {Object.entries(groupedWriteups).map(([category, items]) => (
                <div key={category}>
                  <div className="px-4 mb-2">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {category === 'root' ? 'General' : category}
                    </h3>
                  </div>
                  <div className="space-y-1 px-2">
                    {items.map((item) => (
                      <div
                        key={item.path}
                        onClick={() => handleFileClick(item)}
                        className={`flex items-center gap-2 px-3 py-2 cursor-pointer rounded transition-colors ${
                          selectedFile?.path === item.path 
                            ? 'bg-blue-500/20 text-blue-400' 
                            : 'hover:bg-gray-800 text-gray-300'
                        }`}
                      >
                        <FileText className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm truncate">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-800">
          <a
            href={`https://github.com/${GITHUB_REPO}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>View on GitHub</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-80 flex-1 overflow-y-auto">
        {selectedFile ? (
          <div className="max-w-4xl mx-auto px-12 py-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Home className="w-4 h-4" />
              <ChevronRight className="w-4 h-4" />
              <span>{selectedFile.category === 'root' ? 'General' : selectedFile.category}</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-blue-400">{selectedFile.name}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold mb-8 text-white">
              {selectedFile.name}
            </h1>

            {/* Content */}
            <div 
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(selectedFile.content, selectedFile.path) }}
            />
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <FileText className="w-16 h-16 text-gray-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">
                Select a writeup to read
              </h3>
              <p className="text-gray-600">
                Choose a file from the sidebar to view its contents
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
