<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gourmango</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/style3.css">
</head>
<body>
    <header>
        <div class="overlay"></div>
    
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
          <source src="/src/img/Video4.mp4" type="video/mp4">
        </video>
      
        <div class="container h-100">
          <div class="d-flex h-100 text-center align-items-center">
            <div class="w-100 text-white">
                <div class="cont d-flex justify-content-between">
                    <div>+4733378901  Email: food@restan.com</div>
                    <div>175 10h Street, Office 375 Berlin, De 21562</div>
                </div>
                <nav class="navbar navbar-expand-lg navbar-dark">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Главная</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Ссылка</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        CATÉGORIE
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Plats principaux</a></li>
                                        <li><a class="dropdown-item" href="#">Cuisine asiatique</a></li>
                                        <li><hr class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="#">Что-то еще здесь</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Recherche" aria-label="Recherche">
                                <button class="btn btn-outline-success " type="submit">
                                    Rechercher</button>
                            </form>
                        </div>
                    </div>
                </nav>
                
                <div id="content">
                <div id="logo" class="d-flex">
                    <img src="/src/img/logonoir-removebg-preview.png" alt="Logo">
                </div>
                <div class="promo-text">
                    <h2>Découvrez <span style="color: #50bda5;">Gourmango</span></h2>
                    <p>Savourez des moments délicieux</p> 
                </div>
                <div class="iconplat d-none d-md-block"><img src="/src/img/clean_logo_without_text (1).png"></div>
            </div>
            </div>
          </div>
        </div>
    </header>
    
    <section id="section1" data-speed="8" data-type="background" class="Catégorie parallax">
        <div class="container">
            <div class="row justify-content-center mb-4 title">
                <div class="col-12 d-flex align-items-center justify-content-center">
                    <span class="decorative-element me-2"></span>
                    <h3 class="category-title">Catégorie</h3>
                    <span class="decorative-element ms-2"></span>
                </div>
            </div>
            <div class="row justify-content-center mb-3">
                <div class="col-3 cath un">
                   <a href="/Platpprinc.html"><p>Plats principaux</p></a>
                </div>
                <div class="col-3 deux cath">
                    <p>Cuisine asiatique</p>
                </div>
                <div class="col-3 cath trois">
                    <p>Grillades</p>
                </div>
                <div class="col-3 cath quatre">
                    <p>Pizzas</p>
                </div>
                <div class="col-3 cath cinq">
                    <p>Végétarien</p>
                </div>
                <div class="col-3 cath six">
                    <p>Desserts</p>
                </div>
                <div class="col-3 cath quatre">
                    <p>Boissons</p>
                </div>
                <div class="col-3 cath cinq">
                    <p>Entrées</p>
                </div>
                <div class="col-3 cath six">
                    <p>Salades</p>
                </div>
            </div>
        </div>
    </section>
    
    <section class="plat-de-jour">
        <div class="justify-content-center mb-4">
            <div class="col-12 d-flex align-items-center justify-content-center">
                <span class="decorative-element me-2"></span>
                <h3 class="category-title">Plat de jour</h3>
                <span class="decorative-element ms-2"></span>
            </div>
        </div>
        <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/src/img/car1.jpg" class="d-block w-100 carousel-image" alt="Plat 1">
                        <div class="carousel-caption">
                            <h5>Plat 1</h5>
                            <p>Description du plat 1</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="/src/img/car2.jpg" class="d-block w-100 carousel-image" alt="Plat 2">
                        <div class="carousel-caption">
                            <h5>Plat 2</h5>
                            <p>Description du plat 2</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="/src/img/car3.jpg" class="d-block w-100 carousel-image" alt="Plat 3">
                        <div class="carousel-caption">
                            <h5>Plat 3</h5>
                            <p>Description du plat 3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
    <section id="team-carousel" class="carousel" id="section3" data-speed="2" data-type="background">
        <div class="row justify-content-center mb-4 title">
            <div class="col-12 d-flex align-items-center justify-content-center">
                <span class="decorative-element me-2"></span>
                <h3 class="category-title">Notre Équipe</h3>
                <span class="decorative-element ms-2"></span>
            </div>
        </div>
        <div class="carousel-coverflow-wrapper">
            <div class="carousel-coverflow-item">
                <img src="src/img/e1.jpg" class="team-image" alt="Team Member 1">
            </div>
            <div class="carousel-coverflow-item">
                <img src="src/img/e2.png" class="team-image" alt="Team Member 2">
            </div>
            <div class="carousel-coverflow-item">
                <img src="src/img/e3.jpg" class="team-image" alt="Team Member 3">
            </div>
            <div class="carousel-coverflow-item">
                <img src="src/img/e4.jpg" class="team-image" alt="Team Member 4">
            </div>
            <div class="carousel-coverflow-item">
                <img src="src/img/e5.jpg" class="team-image" alt="Team Member 5">
            </div>
            <div class="carousel-coverflow-item">
                <img src="src/img/e6.jpg" class="team-image" alt="Team Member 6">
            </div>
        </div>
        <button class="carousel-control-prev" type="button">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </section>
  

    <?php include 'footer.php'; ?>
</body>
</html>
