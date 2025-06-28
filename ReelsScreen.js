
// ReelsScreen React component
function ReelsScreen() {
    return React.createElement(
        'div',
        { className: 'screen' },
        React.createElement(
            'div',
            { className: 'p-4' },
            React.createElement('h1', { className: 'text-2xl font-semibold mb-4 text-white' }, 'Reels Screen')
        )
    );
}

// Make the component available globally
window.ReelsScreen = ReelsScreen;
