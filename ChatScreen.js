// ChatScreen React component
function ChatScreen() {
    return React.createElement(
        'div',
        { id: 'screen-chats', className: 'screen' },
        React.createElement(
            'div',
            { className: 'p-4' },
            React.createElement('h1', { className: 'text-2xl font-semibold mb-4' }, 'Chats'),

            React.createElement(
                'div',
                { className: 'space-y-4' },
                React.createElement(
                    'div',
                    { className: 'flex items-center justify-between bg-gray-800 rounded-lg p-3 shadow' },
                    React.createElement(
                        'div',
                        { className: 'flex items-center space-x-3' },
                        React.createElement('img', {
                            src: 'https://randomuser.me/api/portraits/women/1.jpg',
                            alt: 'Avatar',
                            className: 'w-12 h-12 rounded-full'
                        }),
                        React.createElement(
                            'div',
                            null,
                            React.createElement('p', { className: 'font-semibold text-white' }, 'Sophia'),
                            React.createElement('p', { className: 'text-sm text-gray-400' }, 'Hey! Are we still on for tonight?')
                        )
                    )
                )
            )
        )
    );
}

// Make the component available globally
window.ChatScreen = ChatScreen;