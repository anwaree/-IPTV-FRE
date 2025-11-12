function Header() {
  try {
    return (
      <header className="bg-white border-b border-[var(--border-color)] shadow-sm" data-name="header" data-file="components/Header.js">
        <div className="container mx-auto px-4 py-4 max-w-6xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[var(--secondary-color)]">
                <div className="icon-tv text-2xl text-[var(--primary-color)]"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[var(--primary-color)]">سيرفرات IPTV</h1>
                <p className="text-sm text-[var(--text-secondary)]">روابط مجانية</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}