
// LoginPage React component
function LoginPage() {
    const handleLogin = () => {
        console.log('Login function called');
        // Add your login logic here
    };

    return React.createElement(
        'div',
        {
            className: 'flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat',
            style: {
                backgroundImage: "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1400&q=80')",
                backdropFilter: 'blur(8px)'
            }
        },
        React.createElement(
            'div',
            { className: 'bg-black bg-opacity-70 p-8 rounded-xl shadow-lg w-full max-w-sm' },
            React.createElement('h1', { className: 'text-3xl font-bold text-white text-center mb-6' }, 'Makkaa'),
            
            // Username input with icon
            React.createElement(
                'div',
                { className: 'mb-4 relative' },
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Username',
                    className: 'w-full py-3 pl-4 pr-10 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500'
                }),
                React.createElement(
                    'span',
                    { className: 'absolute right-4 top-3 text-gray-400' },
                    React.createElement('i', { className: 'fas fa-user' })
                )
            ),
            
            // Password input with icon
            React.createElement(
                'div',
                { className: 'mb-4 relative' },
                React.createElement('input', {
                    type: 'password',
                    placeholder: 'Password',
                    className: 'w-full py-3 pl-4 pr-10 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500'
                }),
                React.createElement(
                    'span',
                    { className: 'absolute right-4 top-3 text-gray-400' },
                    React.createElement('i', { className: 'fas fa-lock' })
                )
            ),
            
            // Remember me and forgot password
            React.createElement(
                'div',
                { className: 'flex justify-between items-center text-sm text-gray-300 mb-6' },
                React.createElement(
                    'label',
                    { className: 'flex items-center' },
                    React.createElement('input', { type: 'checkbox', className: 'mr-2' }),
                    'Remember me'
                ),
                React.createElement(
                    'a',
                    { href: '#', className: 'hover:underline' },
                    'Forgot Password?'
                )
            ),
            
            // Login button
            React.createElement(
                'button',
                {
                    onClick: handleLogin,
                    className: 'w-full py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition'
                },
                'Login'
            ),
            
            // Register link
            React.createElement(
                'p',
                { className: 'text-center text-sm text-gray-300 mt-6' },
                "Don't have an account? ",
                React.createElement(
                    'a',
                    { href: '#', className: 'text-white font-semibold hover:underline' },
                    'Register'
                )
            )
        )
    );
}

// Make the component available globally
window.LoginPage = LoginPage;
