class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">حدث خطأ ما</h1>
            <p className="text-gray-600 mb-4">نعتذر، حدث خطأ غير متوقع</p>
            <button onClick={() => window.location.reload()} className="btn btn-primary">
              إعادة تحميل الصفحة
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    const [showServers, setShowServers] = React.useState(false);

    return (
      <div className="min-h-screen bg-gray-50" data-name="app" data-file="app.js">
        <Header />
        
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              احصل على روابط سيرفرات IPTV المجانية
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              اضغط على الزر أدناه للحصول على الروابط
            </p>
          </div>

          {!showServers ? (
            <CountdownButton onComplete={() => setShowServers(true)} />
          ) : (
            <ServerDisplay servers={getServersList()} />
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);