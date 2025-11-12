function CountdownButton({ onComplete }) {
  try {
    const [countdown, setCountdown] = React.useState(null);
    const [isStarted, setIsStarted] = React.useState(false);

    React.useEffect(() => {
      if (countdown === null || countdown === 0) return;
      
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }, [countdown]);

    React.useEffect(() => {
      if (countdown === 0) {
        onComplete();
      }
    }, [countdown, onComplete]);

    const handleClick = () => {
      setIsStarted(true);
      setCountdown(5);
    };

    return (
      <div className="card text-center max-w-md mx-auto" data-name="countdown-button" data-file="components/CountdownButton.js">
        {!isStarted ? (
          <button 
            onClick={handleClick}
            className="btn btn-primary text-lg px-8 py-4 w-full"
          >
            <span className="flex items-center justify-center gap-3">
              <div className="icon-download text-2xl"></div>
              احصل على الروابط
            </span>
          </button>
        ) : countdown > 0 ? (
          <div className="py-8">
            <div className="text-6xl font-bold text-[var(--primary-color)] mb-4">
              {countdown}
            </div>
            <p className="text-[var(--text-secondary)] text-lg">
              جاري تحميل الروابط...
            </p>
          </div>
        ) : null}
      </div>
    );
  } catch (error) {
    console.error('CountdownButton component error:', error);
    return null;
  }
}