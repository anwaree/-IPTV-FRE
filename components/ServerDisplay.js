function ServerDisplay({ servers }) {
  try {
    const handleDownload = (server) => {
      const content = `#EXTM3U
#EXTINF:-1,${server.name}
${server.url}`;
      
      const blob = new Blob([content], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${server.name}.m3u`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    };

    return (
      <div className="card" data-name="server-display" data-file="components/ServerDisplay.js">
        <h2 className="text-2xl font-bold mb-6 text-[var(--primary-color)] text-center">
          روابط السيرفرات المتاحة ({servers.length})
        </h2>
        
        <div className="space-y-4">
          {servers.map((server, index) => (
            <div 
              key={index} 
              className="border border-[var(--border-color)] rounded-lg p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                    {server.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] break-all bg-gray-50 p-3 rounded">
                    {server.url}
                  </p>
                </div>
              </div>
              
              <button 
                onClick={() => handleDownload(server)} 
                className="btn btn-success text-sm w-full mt-3"
              >
                <span className="flex items-center justify-center gap-2">
                  <div className="icon-download text-base"></div>
                  تحميل ملف M3U
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('ServerDisplay component error:', error);
    return null;
  }
}