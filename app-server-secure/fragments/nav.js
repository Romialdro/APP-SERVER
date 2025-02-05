export function loadNav() {
    document.getElementById('nav').innerHTML = `
      <nav class="navbar navbar-secondary-subtle bg-secondary-subtle p-2">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Mi Sitio</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" id="home-link">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" id="products-link">Productos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" id="about-link">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
  
