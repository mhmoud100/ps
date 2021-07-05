import logo from './logo.svg';
import { useTranslation } from 'react-i18next';

// import './App.css';
// login

    function App() {
    


  return (
    <div className="App">
          {/* <!-- Loader Start --> */}
    <div class="css-loader">
        <div class="loader-inner line-scale d-flex align-items-center justify-content-center"></div>
    </div>
    {/* <!-- Loader End -->
    <!-- Header Start --> */}
    <header class="position-absolute w-100">
        <div class="container">
            <div class="top-header d-none d-sm-flex justify-content-between align-items-center">
                <div class="contact">
                    <a href="tel:+1234567890" class="tel"><i class="fa fa-phone" aria-hidden="true"></i>+966 507003003</a>
                    <a href="mailto:info@yourmail.com"><i class="fa fa-envelope"
                            aria-hidden="true"></i>info@alibrahim-group.com</a>
                </div>
                <nav class="d-flex aic">
                    {/* <a href="#" class="login"><i class="fa fa-user" aria-hidden="true"></i>Login</a> */}
                    <ul class="nav social d-none d-md-flex">
                        <li><a href="https://www.facebook.com" target="_blank"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    </ul>
                </nav>
            </div>
            <nav class="navbar navbar-expand-md navbar-light">
                <a class="navbar-brand" href="index.html"><img src="assets/images/04768d63-742e-4be7-a1b6-4cb3d540d597.png" alt="Multipurpose"/></a>
                <div class="group d-flex align-items-center">
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation"><span
                            class="navbar-toggler-icon"></span></button>
                    <a class="login-icon d-sm-none" href="#"><i class="fa fa-user"></i></a>
                    {/* <a class="cart" href="#"><i class="fa fa-shopping-cart"></i></a> */}
                </div>
                {/* <a class="search-icon d-none d-md-block" href="#"><i class="fa fa-search"></i></a> */}
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    {/* <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">About Us</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Portfolio</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Shop</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Contact Us</a></li>
                    </ul> */}
                    {/* <form class="bg-white search-form" method="get" id="searchform">
                        <div class="input-group">
                            <input class="field form-control" id="s" name="s" type="text" placeholder="Search"/>
                            <span class="input-group-btn">
                                <input class="submit btn btn-primary" id="searchsubmit" name="submit" type="submit"
                                    value="Search"/>
                            </span>
                        </div>
                    </form> */}
                </div>
            </nav>
        </div>
    </header>
    {/* <!-- Header End --> */}
    {/* <!-- Hero Start --> */}
    <section class="hero">
        <div class="container">
            <div class="row">
                <div class="col-12 offset-md-1 col-md-11">
                    <div class="swiper-container hero-slider">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide slide-content d-flex align-items-center">
                                <div class="single-slide">
                                    <h1 data-aos="fade-right" data-aos-delay="200">البيانات الشخصيه<br/> 
                                    </h1>
                                    <p data-aos="fade-right"  data-aos-delay="600"><h3>إبراهيم بن سليمان بن عبد الرحمن الراضي </h3> <br/> 
                                    مدينه بريده <br/> جامعة الإمام تخصص علوم إدارية
                                    </p>
                                    {/* <a data-aos="fade-right" data-aos-delay="900" href="#" class="btn btn-primary">See
                                        More</a>
                                    <a data-aos="fade-right" data-aos-delay="900" href="#" class="btn btn-primary">Get
                                        Now</a> */}
                                </div>
                            </div>
                            <div class="swiper-slide slide-content d-flex align-items-center">
                                <div class="single-slide">
                                <h1 data-aos="fade-right" data-aos-delay="200">البيانات الشخصيه<br/> 
                                    </h1>
                                    <p data-aos="fade-right"  data-aos-delay="600"><h3>إبراهيم بن سليمان بن عبد الرحمن الراضي </h3> <br/> 
                                 مدينه  بريده <br/> جامعة الإمام تخصص علوم إدارية
                                    </p>
                                    {/* <a data-aos="fade-right" data-aos-delay="900" href="#" class="btn btn-primary">See
                                        More</a>
                                    <a data-aos="fade-right" data-aos-delay="900" href="#" class="btn btn-primary">Get
                                        Now</a> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- Add Control --> */}
            <span class="arr-left"><i class="fa fa-angle-left"></i></span>
            <span class="arr-right"><i class="fa fa-angle-right"></i></span>
        </div>
        <div class="texture"></div>
        <div class="diag-bg"></div>
    </section>
    {/* <!-- Hero End --> */}
    {/* <!-- Call To Action Start --> */}
    {/* <section class="cta" data-aos="fade-up" data-aos-delay="0">
        <div class="container">
            <div class="cta-content d-xl-flex align-items-center justify-content-around text-center text-xl-left">
                <div class="content" data-aos="fade-right" data-aos-delay="200">
                    <h2>FOR BUILDING THE MODERN WEBSITE</h2>
                    <p>Packed with all the goodies you can get, Kallyas is our flagship premium template.</p>
                </div>
                <div class="subscribe-btn" data-aos="fade-left" data-aos-delay="400" data-aos-offset="0">
                    <a href="#" class="btn btn-primary">Join Newsletter</a>
                </div>
            </div>
        </div>
    </section> */}
    {/* <!-- Call To Action End --> */}
    {/* <!-- Services Start --> */}
    <section class="services">
        <div class="container">
            <div class="title text-center">
                <h6>متحدثنا</h6>
                <h1 class="title-blue">الخبرات العلميه</h1>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-lg-4">
                        <div class="media" data-aos="fade-up" data-aos-delay="200" data-aos-duration="400">
                            {/* <img class="mr-4" src="assets/images/service1.png" alt="Web Development"/> */}
                            <div class="media-body">
                                {/* <h5>Web Development</h5> */}
                                -العمل مع الوالد لي نتجارة المواد الغذائية للفترة  من عام 1405 هـ حتي 1410 هـ.<br/>
                              -إدارة شركة توزيع للعب والحلويات من 1410 هـ الي 1413 هـ.<br/>
                               -اداره مؤسسه في الاعاشه والتغذيه للمدارس.

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class="media" data-aos="fade-up" data-aos-delay="400" data-aos-duration="600">
                            {/* <img class="mr-4" src="assets/images/service2.png" alt="Web Development"/> */}
                            <div class="media-body">
                                {/* <h5>Testing for perfection</h5> */}
                                -اداره مؤسسه في النظافه والصيانه من عام  1414 هـ حتي عام 1417 هـ .<br/>
                                -اداره مؤسسه في مشاريع المقاولات والتشغيل من عام 1417 هـ حتي عام 1421 هـ.<br/>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class="media" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
                            {/* <img class="mr-4" src="assets/images/service3.png" alt="Web Development"/> */}
                            <div class="media-body">
                                {/* <h5>Discussion of the idea</h5> */}
                                {/* Donec volutpat tincidunt neque, vitae lobortis libero mattis sed tempus. */}
                                - اداره عدد ثلاث مؤسسات التشغيل والصيانه والاعاشه والتوريدات من عام 1421 هـ وحتي عام 1425 هـ.<br/>
                                -اداره ثلاث شركات تعمل في التشغيل والصيانه والاعاشه واستيراد المواشي والنقل البري والبحري من عام 1425 هـ وحتي 1433 هـ.<br/>
                                -اداره وامتلاك 94 % من شركه ابراهيم سليمان الراضي للتجاره والمقاولات والمصنفه درجه تالته صيانه ومصنفه كذلك في عشر مجالات اخري.  
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class="media" data-aos="fade-up" data-aos-delay="200" data-aos-duration="400">
                            {/* <img class="mr-4" src="assets/images/service4.png" alt="Web Development"/> */}
                            <div class="media-body">
                                {/* <h5>Modern style</h5> */}
                                {/* Donec volutpat tincidunt neque, vitae lobortis libero mattis sed tempus. */}
                                -اداره وامتلاك 40 % من شركه تشغيل السعوديه شركه مساهمه مغلقه براس مال 300 مليون ريال.<br/>
                                -اداره الشركه المتحده للخطوط البريه والبحريه والتي تمتلك عبارات تعمل بين مصر والسعوديه.
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class="media" data-aos="fade-up" data-aos-delay="400" data-aos-duration="600">
                            {/* <img class="mr-4" src="assets/images/service1.png" alt="Web Development"/> */}
                            <div class="media-body">
                                {/* <h5>Web Development</h5> */}
                                {/* Donec volutpat tincidunt neque, vitae lobortis libero mattis sed tempus. */}
                                -شريك شركه المسار المميز للنقل الدولي والتي تعمل داخل المملكه العربيه السعوديه.<br/>
                                -شريك في مؤسسه فراس عبد الرحمن الراضي للتجاره والمقاولات.<br/>
                                -شريك في مؤسسه سطام عبد الكريم الراضي التجاريه .
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class="media" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
                            {/* <img class="mr-4" src="assets/images/service5.png" alt="Web Development"/> */}
                            <div class="media-body">
                                {/* <h5>Elaboration of the core</h5> */}
                                {/* Donec volutpat tincidunt neque, vitae lobortis libero mattis sed tempus. */}
                                -شريك في مؤسسه محمد سليمان الرميح.<br/>
                                -اداره وتشغيل مصنع الروسي للحجز الرخام ببريده (انتر لوك).
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Services End --> */}
    {/* <!-- Featured Start --> */}
    <section class="featured">
        <div class="container">
            <div class="row">
                <div class="col-md-6" data-aos="fade-right" data-aos-delay="400" data-aos-duration="800">
                    <div class="title">
                        {/* <h6 class="title-primary">about Tamplate</h6> */}
                        <h1 class="title-blue">كلمه رئيس مجلس الاداره.</h1>
                    </div>
                    <p>منذ بدء تأسيس شركة إبراهيم سليمان الراضي. استطاعت الشركة إيجاد قيم ومفاهيم في مجال إدارة الأعمال واتخذت على مر العقد المنصرم الكثير من الخطوات الجريئة واستثمرت في العديد من مجالات
الأعمال إن التفكير العصري والابتكار من أهم الأسس التي بنيت عليها الشركة إن المصداقية هي المبدأ الأساس الذي يحكم أعمال الشركة وهو القاسم المشترك الذي يمكننا من الالتزام بشكل ثابت بوعدنا لعملائنا
وشركاثئنا وموظفينا.
                    <br/>
                    كشركة عائلية تملك استثمارات متنوعة فأن قوتنا هي نتيجة للمدي دائم الاتساع لنشاطنا الصناعية والتجارية والتي تديريها من خلال المجالات المختلفة كمجال المقاولات البناء الموصلات التجارة العامة والمدعومة
بخبرة مالية وإدارية وتشغيله طويلة..
                    </p>
                    <div class="media-element d-flex justify-content-between">
                        <div class="media">
                            {/* <i class="fa fa-magic mr-4"></i>
                            <div class="media-body">
                                <h5>any offer</h5>
                                New York, United States
                            </div> */}
                        </div>
                        <div class="media">
                            {/* <i class="fa fa-magic mr-4"></i>
                            <div class="media-body">
                                <h5>any offer</h5>
                                New York, United States
                            </div> */}
                        </div>
                    </div>
                    {/* <a href="#" class="btn btn-primary">See More</a> */}
                </div>
                <div class="col-md-6" data-aos="fade-left" data-aos-delay="400" data-aos-duration="800">
                    <div class="featured-img">
                        <img class="featured-big" src="assets/images/download.jpg" alt="Featured 1"/>
                        <img class="featured-small" src="assets/images/1549780793741.png" alt="Featured 2"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Featured End -->
    <!-- Recent Posts Start --> */}
    <section class="recent-posts">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="single-rpost d-sm-flex align-items-center" data-aos="fade-right"
                        data-aos-duration="800">
                        <div class="post-content text-sm-right">
                            {/* <time datetime="2019-04-06T13:53">15 Oct, 2019</time> */}
                            <h3><a href="#">المقاولات العامه والمباني</a></h3>
                            {/* <p><a href="#">Seanding</a>, <a href="#">Website</a>, <a href="#">E-commerce</a></p> */}
                            <a class="post-btn" href="#"><i class="fa fa-arrow-right"></i></a>
                        </div>
                        <div class="post-thumb">
                            <img class="img-fluid" src="assets/images/gd.png" alt="Post 1"/>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="single-rpost d-sm-flex align-items-center" data-aos="fade-left" data-aos-duration="800">
                        <div class="post-thumb">
                            <img class="img-fluid" src="assets/images/gg.png" alt="Post 1"/>
                        </div>
                        <div class="post-content">
                            {/* <time datetime="2019-04-06T13:53">15 Oct, 2019</time> */}
                            <h3><a href="#">اعمال المقاولات</a></h3>
                            {/* <p><a href="#">Seanding</a>, <a href="#">Website</a>, <a href="#">E-commerce</a></p> */}
                            {/* <a class="post-btn" href="#"><i class="fa fa-arrow-right"></i></a> */}
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="single-rpost d-sm-flex align-items-center" data-aos="fade-right" data-aos-delay="200"
                        data-aos-duration="800">
                        <div class="post-content text-sm-right">
                            {/* <time datetime="2019-04-06T13:53">15 Oct, 2019</time> */}
                            <h3><a href="#"> زراعه وتنسيق حدائق </a></h3>
                            {/* <p><a href="#">Seanding</a>, <a href="#">Website</a>, <a href="#">E-commerce</a></p> */}
                            <a class="post-btn" href="#"><i class="fa fa-arrow-right"></i></a>
                        </div>
                        <div class="post-thumb">
                            <img class="img-fluid" src="assets/images/ff.png" alt="Post 1"/>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="single-rpost d-sm-flex align-items-center" data-aos="fade-left" data-aos-delay="200"
                        data-aos-duration="800">
                        <div class="post-thumb">
                            <img class="img-fluid" src="assets/images/dd.png" alt="Post 1"/>
                        </div>
                        <div class="post-content">
                            {/* <time datetime="2019-04-06T13:53">15 Oct, 2019</time> */}
                            <h3><a href="#">اعمال الالكتروميكانيك </a></h3>
                            {/* <p><a href="#">Seanding</a>, <a href="#">Website</a>, <a href="#">E-commerce</a></p> */}
                            <a class="post-btn" href="#"><i class="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="single-rpost d-sm-flex align-items-center" data-aos="fade-right" data-aos-delay="200"
                        data-aos-duration="800">
                        <div class="post-content text-sm-right">
                            {/* <time datetime="2019-04-06T13:53">15 Oct, 2019</time> */}
                            <h3><a href="#">خدمات مسانده</a></h3>
                            {/* <p><a href="#">Seanding</a>, <a href="#">Website</a>, <a href="#">E-commerce</a></p> */}
                            <a class="post-btn" href="#"><i class="fa fa-arrow-right"></i></a>
                        </div>
                        <div class="post-thumb">
                            <img class="img-fluid" src="assets/images/ha.png" alt="Post 1"/>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="single-rpost d-sm-flex align-items-center" data-aos="fade-left" data-aos-delay="200"
                        data-aos-duration="800">
                        <div class="post-thumb">
                            <img class="img-fluid" src="assets/images/ga.png" alt="Post 1"/>
                        </div>
                        <div class="post-content">
                            {/* <time datetime="2019-04-06T13:53">15 Oct, 2019</time> */}
                            <h3><a href="#">اعمال النقل والشحن</a></h3>
                            {/* <p><a href="#">Seanding</a>, <a href="#">Website</a>, <a href="#">E-commerce</a></p> */}
                            <a class="post-btn" href="#"><i class="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center">
                <a href="#" class="btn btn-primary">رؤيه المزيد</a>
            </div>
        </div>
    </section>
    {/* <!-- Recent Posts End -->
    <!-- Trust Start --> */}
    {/* <section class="trust">
        <div class="container">
            <div class="row">
                <div class="offset-xl-1 col-xl-6" data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
                    <div class="title">
                        <h6 class="title-primary">about Tamplate</h6>
                        <h1>a rich featured, epic & premium work.</h1>
                    </div>
                    <p>Suspendisse facilisis commodo lobortis. Nullam mollis lobortis ex vel faucibus. Proin nec viverra
                        turpis. Nulla eget justo scelerisque, pretium purus vel, congue libero. Suspendisse potenti.
                    </p>
                    <h5>Web Design & Development</h5>
                    <ul class="list-unstyled">
                        <li>Web Content</li>
                        <li>Website other</li>
                        <li>Fashion</li>
                        <li>Moblie & Tablette</li>
                    </ul>
                </div>
                <div class="col-xl-5 gallery">
                    <div class="row no-gutters h-100" id="lightgallery">
                        <a href="https://lorempixel.com/600/400/" class="w-50 h-100 gal-img" data-aos="fade-up"
                            data-aos-delay="200" data-aos-duration="400">
                            <img class="img-fluid" src="assets/images/gallery1.jpg" alt="Gallery Image"/>
                            <i class="fa fa-caret-right"></i>
                        </a>
                        <a href="https://lorempixel.com/600/400/" class="w-50 h-50 gal-img" data-aos="fade-up"
                            data-aos-delay="400" data-aos-duration="600">
                            <img class="img-fluid" src="assets/images/gallery2.jpg" alt="Gallery Image"/>
                            <i class="fa fa-caret-right"></i>
                        </a>
                        <a href="https://lorempixel.com/600/400/" class="w-50 h-50 gal-img gal-img3" data-aos="fade-up"
                            data-aos-delay="0" data-aos-duration="600">
                            <img class="img-fluid" src="assets/images/gallery3.jpg" alt="Gallery Image"/>
                            <i class="fa fa-caret-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
    {/* <!-- Trust End -->
    <!-- Pricing Start --> */}
    {/* <section class="pricing-table">
        <div class="container">
            <div class="title text-center">
                <h6 class="title-primary">Our prices</h6>
                <h1 class="title-blue">Price Table List</h1>
            </div>
            <div class="row no-gutters">
                <div class="col-md-4">
                    <div class="single-pricing text-center" data-aos="fade-up" data-aos-delay="0"
                        data-aos-duration="600">
                        <span>Monthly</span>
                        <h2>Starter</h2>
                        <p class="desc">Here goes some description</p>
                        <p class="price">$39.00</p>
                        <p>Create excepteur sint occaecat cupidatat non proident</p>
                        <a href="#" class="btn btn-primary">Buy Now</a>
                        <svg viewBox="0 0 170 193">
                            <path fill-rule="evenodd" fill="rgb(238, 21, 21)"
                                d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z" />
                        </svg>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="single-pricing text-center" data-aos="fade-up" data-aos-delay="300"
                        data-aos-duration="600">
                        <span>Monthly</span>
                        <h2>Starter</h2>
                        <p class="desc">Here goes some description</p>
                        <p class="price">$39.00</p>
                        <p>5GB Storage Space</p>
                        <p>20GB Monthly Bandwidth</p>
                        <p>My SQL Databases</p>
                        <p>100 Email Account</p>
                        <a href="#" class="btn btn-primary">Buy Now</a>
                        <svg viewBox="0 0 170 193">
                            <path fill-rule="evenodd" fill="rgb(238, 21, 21)"
                                d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z" />
                        </svg>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="single-pricing text-center" data-aos="fade-up" data-aos-delay="600"
                        data-aos-duration="600">
                        <span>Monthly</span>
                        <h2>Starter</h2>
                        <p class="desc">Here goes some description</p>
                        <p class="price">$39.00</p>
                        <p>Create excepteur sint occaecat cupidatat non proident</p>
                        <a href="#" class="btn btn-primary">Buy Now</a>
                        <svg viewBox="0 0 170 193">
                            <path fill-rule="evenodd" fill="rgb(238, 21, 21)"
                                d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Pricing End --> */
    /* <!-- Testimonial and Clients Start --> */} 
    <section class="testimonial-and-clients">
        <div class="container">
            
            <div class="clients" data-aos="fade-up" data-aos-delay="200" data-aos-duration="600">
                <div class="swiper-container clients-slider">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="assets/images/Capture.png" alt="Client 1"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="assets/images/Capture1.png" alt="Client 2"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="assets/images/Capture3.png" alt="Client 3"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="assets/images/Capture2.png" alt="Client 4"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="assets/images/Capture4.png" alt="Client 5"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="assets/images/Capture6.png" alt="Client 5"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="assets/images/Capture5.png" alt="Client 5"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="assets/images/Capture7.png" alt="Client 5"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="assets/images/Capture8.png" alt="Client 5"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="assets/images/Capture9.png" alt="Client 5"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="assets/images/Capture10.png" alt="Client 5"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="assets/images/Capture11.png" alt="Client 5"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="assets/images/Capture12.png" alt="Client 5"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="assets/images/Capture13.png" alt="Client 5"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="assets/images/Capture15.png" alt="Client 5"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="assets/images/Capture14.png" alt="Client 5"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="assets/images/Capture16.png" alt="Client 5"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="assets/images/Capture17.png" alt="Client 5"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="assets/images/Capture18.png" alt="Client 5"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="assets/images/Capture19.png" alt="Client 5"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="assets/images/Capture20.png" alt="Client 5"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="assets/images/Capture21.png" alt="Client 5"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="assets/images/Capture22.png" alt="Client 5"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="assets/images/Capture23.png" alt="Client 5"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="assets/images/Capture24.png" alt="Client 5"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="assets/images/Capture25.png" alt="Client 5"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="assets/images/Capture26.png" alt="Client 5"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="assets/images/Capture27.png" alt="Client 5"/>
                        </div>
                    </div>
                    <div class="test-pagination"></div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Testimonial and Clients End -->
    <!-- Call To Action 2 Start --> */}
    <section class="cta cta2" data-aos="fade-up" data-aos-delay="0">
        <div class="container">
            <div class="cta-content d-xl-flex align-items-center justify-content-around text-center text-xl-left">
                <div class="content" data-aos="fade-right" data-aos-delay="200">
                    <h2>FOR BUILDING THE MODERN WEBSITE</h2>
                    <p>Packed with all the goodies you can get, Kallyas is our flagship premium template.</p>
                </div>
                <div class="subscribe-btn" data-aos="fade-left" data-aos-delay="400" data-aos-offset="0">
                    <a href="#" class="btn btn-primary">Join Newsletter</a>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Call To Action 2 End -->
    <!-- Footer Start --> */}
    <footer>
        {/* <!-- Widgets Start --> */}
        <div class="footer-widgets">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-xl-3">
                        <div class="single-widget contact-widget" data-aos="fade-up" data-aos-delay="0">
                            <h6 class="widget-tiltle">&nbsp;</h6>
                            <p>By subscribing to our mailing list you will always be update with the latest news from
                                us.
                            </p>
                            <div class="media">
                                <i class="fa fa-map-marker"></i>
                                <div class="media-body ml-3">
                                    <h6>Address</h6>
                                    Level 13, 2 Elizabeth St,<br/>
                                    Melbourne, Victoria 3000 Australia
                                </div>
                            </div>
                            <div class="media">
                                <i class="fa fa-envelope-o"></i>
                                <div class="media-body ml-3">
                                    <h6>Have any questions?</h6>
                                    <a href="mailto:support@steelthemes.com">Support@Steelthemes.com</a>
                                </div>
                            </div>
                            <div class="media">
                                <i class="fa fa-phone"></i>
                                <div class="media-body ml-3">
                                    <h6>Call us & Hire us</h6>
                                    <a href="tel:+610791803458"> +61 (0) 7 9180 3458</a>
                                </div>
                            </div>
                            <div class="media">
                                <i class="fa fa-fax"></i>
                                <div class="media-body ml-3">
                                    <h6>Fax</h6>
                                    <a href="fax:911889047521432">(91) 188904752 1432</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-3">
                        <div class="single-widget twitter-widget" data-aos="fade-up" data-aos-delay="200">
                            <h6 class="widget-tiltle">Fresh Tweets</h6>
                            <div class="media">
                                <i class="fa fa-twitter"></i>
                                <div class="media-body ml-3">
                                    <h6><a href="#">@Themes,</a> Html Version Out Now</h6>
                                    <span>10 Mins Ago</span>
                                </div>
                            </div>
                            <div class="media">
                                <i class="fa fa-twitter"></i>
                                <div class="media-body ml-3">
                                    <h6><a href="#">@Envato,</a> the best selling item of the day!</h6>
                                    <span>20 Mins Ago</span>
                                </div>
                            </div>
                            <div class="media">
                                <i class="fa fa-twitter"></i>
                                <div class="media-body ml-3">
                                    <h6><a href="#">@Collis,</a> We Planned to Update the Enavto Author Payment Method
                                        Soon!</h6>
                                    <span>10 Mins Ago</span>
                                </div>
                            </div>
                            <div class="media">
                                <i class="fa fa-twitter"></i>
                                <div class="media-body ml-3">
                                    <h6><a href="#">@SteelThemes,</a> Html Version Out Now</h6>
                                    <span>15 Mins Ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-3">
                        <div class="single-widget recent-post-widget" data-aos="fade-up" data-aos-delay="400">
                            <h6 class="widget-tiltle">Latest Updates</h6>
                            <div class="media">
                                <a class="rcnt-img" href="#"><img src="assets/images/rcnt-post1.png"
                                        alt="Recent Post"/></a>
                                <div class="media-body ml-3">
                                    <h6><a href="#">An engaging</a></h6>
                                    <p><i class="fa fa-user"></i>Mano <i class="fa fa-eye"></i> 202 Views</p>
                                </div>
                            </div>
                            <div class="media">
                                <a class="rcnt-img" href="#"><img src="assets/images/rcnt-post2.png"
                                        alt="Recent Post"/></a>
                                <div class="media-body ml-3">
                                    <h6><a href="#">Statistics and analysis. The key to succes.</a></h6>
                                    <p><i class="fa fa-user"></i>Rosias <i class="fa fa-eye"></i> 20 Views</p>
                                </div>
                            </div>
                            <div class="media">
                                <a class="rcnt-img" href="#"><img src="assets/images/rcnt-post3.png"
                                        alt="Recent Post"/></a>
                                <div class="media-body ml-3">
                                    <h6><a href="#">Envato Meeting turns into a photoshooting.</a></h6>
                                    <p><i class="fa fa-user"></i>Kien <i class="fa fa-eye"></i> 74 Views</p>
                                </div>
                            </div>
                            <div class="media">
                                <a class="rcnt-img" href="#"><img src="assets/images/rcnt-post4.png"
                                        alt="Recent Post"/></a>
                                <div class="media-body ml-3">
                                    <h6><a href="#">An engaging embedded the video posts</a></h6>
                                    <p><i class="fa fa-user"></i>Robert <i class="fa fa-eye"></i> 48 Views</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-3">
                        <div class="single-widget tags-widget" data-aos="fade-up" data-aos-delay="800">
                            <h6 class="widget-tiltle">Popular Tags</h6>
                            <a href="#">Amazing</a>
                            <a href="#">Design</a>
                            <a href="#">Photoshop</a>
                            <a href="#">Art</a>
                            <a href="#">Wordpress</a>
                            <a href="#">jQuery</a>
                        </div>
                        <div class="single-widget subscribe-widget" data-aos="fade-up" data-aos-delay="800">
                            <h6 class="widget-tiltle">Subscribe us</h6>
                            <p>Sign up for our mailing list to get latest updates and offers</p>
                            <form class="" method="get">
                                <div class="input-group">
                                    <input class="field form-control" name="subscribe" type="email"
                                        placeholder="Email Address"/>
                                    <span class="input-group-btn">
                                        <button type="submit" name="submit-mail"><i class="fa fa-check"></i></button>
                                    </span>
                                </div>
                            </form>
                            <p>We respect your privacy</p>
                            <ul class="nav social-nav">
                                <li><a href="https://www.facebook.com/fh5co" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Widgets End -->
        <!-- Foot Note Start --> */}
        <div class="foot-note">
            <div class="container">
                <div
                    class="footer-content text-center text-lg-left d-lg-flex justify-content-between align-items-center">
                    <p class="mb-0" data-aos="fade-right" data-aos-offset="0">&copy; 2019 All Rights Reserved. Design by <a href="https://freehtml5.co/multipurpose" target="_blank" class="fh5-link">FreeHTML5.co</a>.</p>
                    <p class="mb-0" data-aos="fade-left" data-aos-offset="0"><a href="#">Terms Of Use</a><a
                            href="#">Privacy & Security
                            Statement</a></p>
                </div>
            </div>
        </div>
        {/* <!-- Foot Note End --> */}
    </footer>
    </div>
  );
}

export default App;
