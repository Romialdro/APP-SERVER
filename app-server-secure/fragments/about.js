export function loadAbout() {
    document.getElementById('content').insertAdjacentHTML('beforeend', `
        <section id="about">
            <h2>About Us</h2>
            <p>Welcome to our OWASP App. We are committed to providing secure web applications.</p>
        </section>
    `);
}
