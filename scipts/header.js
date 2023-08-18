document.querySelector(".js-header-container").innerHTML = ` 
    <div class="container-fluid">
    <a class="navbar-brand text-white" href="../../../index.html"><img src="../../../images/logo.png" width="70px" alt="" class="img-fluid rounded"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link active  text-white" aria-current="page" href="../../../index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#about-us">About Us</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Departments
                </a>
                <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href="#bsccsit">Science & Technology</a></li>
                    <li><a class="dropdown-item" href="#">Engineering</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Management</a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#">Contact Us</a>
            </li>
        </ul>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
</div>
    `;
