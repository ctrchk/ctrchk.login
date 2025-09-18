// loginfunc.js
// Supabase client initialization and login handler

const SUPABASE_URL = 'https://mfhzbcaxlrrigtxnerzg.supabase.co/';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1maHpiY2F4bHJyaWd0eG5lcnpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3NjQ4MDQsImV4cCI6MjA3MzM0MDgwNH0.HAEoCY4dUpzd9HyuA6x3i657x88DfAsg37qkX6idVxA';

// Load Supabase JS client
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/dist/umd/supabase.min.js';
document.head.appendChild(script);

script.onload = () => {
    window.supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
};

// Login handler
async function handleLogin(event) {
    event.preventDefault();
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;
    
    // Supabase uses email for login, so treat username as email
    const { error, user, session } = await window.supabase.auth.signInWithPassword({
        email: username,
        password: password
    });
    if (error) {
        alert('Login failed: ' + error.message);
    } else {
        window.location.href = 'intranet.html';
        // Redirect or further logic here
    }
}

// Attach handler to form
window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', handleLogin);
    }
});
