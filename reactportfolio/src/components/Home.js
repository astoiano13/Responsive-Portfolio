import React from 'react';
 
const home = () => {
    return (
        <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Aaron Stoiano</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-item nav-link active" href="index.html">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="portfolio.html">Portfolio</a>
                <a class="nav-item nav-link" href="contact.html">Contact</a>
                
              </div>
            </div>
          </nav>
    
          <br>
        
    <section class="container">
        <div class="row">
            <h1 class="display-3">The Biography of Aaron Stoiano</h1>
            <div class="col-sm-6">
                <p>
                   My name is Aaron Stoiano. I am currently 22 years old and I have a burning passion for building computers and gaming both alone and with my friends. Putting together my first computer is what sparked my interest in coding and web development and landed me here. This path is as rewarding as it is challenging, and I'm excited to keep pursuing it  
                </p>
                <p>
                    I love spending time with my friends when I'm not working or in class. We play sports and enjoy each other's company, and If we can't hang out in person, we love playing video games together online.  
                </p>
    
            </div>
            <div class="col-sm-6">
                <a href="file:///C:/Users/aaron/OneDrive/Documents/Aaron%20Stoiano%20Resume%202020.pdf">My Resume</a>
                <img src="Assets/Images/resume img.png" class="img-fluid" alt="resume">
            </div>
        </div>
      </section>
      
      
    
        
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
      </body>
    );
}
 
export default home;