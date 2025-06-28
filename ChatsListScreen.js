
// ChatsListScreen React component
function ChatsListScreen() {
    return React.createElement(
        'div',
        { className: 'screen' },
        React.createElement(
            'div',
            { className: 'p-4' },
            React.createElement('h1', { className: 'text-2xl font-semibold mb-4 text-white' }, 'Chats'),
            
            React.createElement(
                'div',
                { className: 'space-y-4' },
                
                // Chat item 1 - Sophia
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
                    ),
                    React.createElement(
                        'div',
                        { className: 'text-right' },
                        React.createElement('p', { className: 'text-sm text-gray-400' }, '2m ago'),
                        React.createElement(
                            'span',
                            { className: 'inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full' },
                            '2'
                        )
                    )
                ),
                
                // Chat item 2 - Michael
                React.createElement(
                    'div',
                    { className: 'flex items-center justify-between bg-gray-800 rounded-lg p-3 shadow' },
                    React.createElement(
                        'div',
                        { className: 'flex items-center space-x-3' },
                        React.createElement('img', {
                            src: 'https://randomuser.me/api/portraits/men/2.jpg',
                            alt: 'Avatar',
                            className: 'w-12 h-12 rounded-full'
                        }),
                        React.createElement(
                            'div',
                            null,
                            React.createElement('p', { className: 'font-semibold text-white' }, 'Michael'),
                            React.createElement('p', { className: 'text-sm text-gray-400' }, 'I sent the files. Let me know!')
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'text-right' },
                        React.createElement('p', { className: 'text-sm text-gray-400' }, '5m ago')
                    )
                ),
                
                // Chat item 3 - Amara
                React.createElement(
                    'div',
                    { className: 'flex items-center justify-between bg-gray-800 rounded-lg p-3 shadow' },
                    React.createElement(
                        'div',
                        { className: 'flex items-center space-x-3' },
                        React.createElement('img', {
                            src: 'https://randomuser.me/api/portraits/women/3.jpg',
                            alt: 'Avatar',
                            className: 'w-12 h-12 rounded-full'
                        }),
                        React.createElement(
                            'div',
                            null,
                            React.createElement('p', { className: 'font-semibold text-white' }, 'Amara'),
                            React.createElement('p', { className: 'text-sm text-gray-400' }, 'Let\'s meet tomorrow at 3?')
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'text-right' },
                        React.createElement('p', { className: 'text-sm text-gray-400' }, '10m ago'),
                        React.createElement(
                            'span',
                            { className: 'inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full' },
                            '1'
                        )
                    )
                )
            )
        )
    );
}

// Make the component available globally
window.ChatsListScreen = ChatsListScreen;
