// Your code here
$(document).ready(function () {
    
    const movies = [
      {
        id: 1,
        title: "Inception",
        runtime: 148,
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
        showtime: "7:00 PM",
        remainingTickets: 10,
        poster: "assets/inception.jpg", 

      },

      {
        id: 2,
        title: "The Matrix",
        runtime: 136,
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        showtime: "9:00 PM",
        remainingTickets: 5,
        poster: "assets/the_matrix.jpg",

      },
  
      {
        id: 3,
        title: "Interstellar",
        runtime: 169,
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        showtime: "8:00 PM",
        remainingTickets: 20,
        poster: "assets/interstellar.jpg", 

      },
      {
        id: 4,
        title: "The Dark Knight",
        runtime: 152,
        description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        showtime: "6:00 PM",
        remainingTickets: 8,
        poster: "assets/dark_knight.jpg", 
        
      },

      {
        id: 5,
        title: "Avatar",
        runtime: 162,
        description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        showtime: "7:30 PM",
        remainingTickets: 12,
        poster: "assets/avatar.jpg", 
      },

      {
        id: 6,
        title: "Titanic",
        runtime: 195,
        description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        showtime: "5:00 PM",
        remainingTickets: 15,
        poster: "assets/titanic.jpg",
      },
      {
        id: 7,
        title: "The Lord of the Rings: The Return of the King",
        runtime: 201,
        description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        showtime: "4:30 PM",
        remainingTickets: 7,
        poster: "assets/lotr_return_king.jpg",
      },
      {
        id: 8,
        title: "Star Wars: Episode IV - A New Hope",
        runtime: 121,
        description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle station.",
        showtime: "3:00 PM",
        remainingTickets: 18,
        poster: "assets/.jpg",
      },
      {
        id: 9,
        title: "Jurassic Park",
        runtime: 127,
        description: "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
        showtime: "6:30 PM",
        remainingTickets: 22,
        poster: "assets/jurassic_park.jpg",
      },

      {
        id: 10,
        title: "Pulp Fiction",
        runtime: 154,
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        showtime: "9:30 PM",
        remainingTickets: 14,
        poster: "assets/pulp_fiction.jpg",
      },

    ];
  
  
    movies.forEach((movie) => {
      $("#films").append(
        `<li class="film item" data-id="${movie.id}">${movie.title}</li>`
      );
    });
  
    $(".film.item").on("click", function () {
      const movieId = $(this).data("id");
      const selectedMovie = movies.find((movie) => movie.id === movieId);
  
      if (selectedMovie) {
        // Update poster and movie details
        $("#poster").attr("src", selectedMovie.poster);
        $("#title").text(selectedMovie.title);
        $("#runtime").text(`${selectedMovie.runtime} minutes`);
        $("#film-info").text(selectedMovie.description);
        $("#showtime").text(selectedMovie.showtime);
        $("#ticket-num").text(`${selectedMovie.remainingTickets}`);
        $("#buy-ticket").data("id", movieId).prop("disabled", selectedMovie.remainingTickets === 0);
      }
    });
  
    $("#buy-ticket").on("click", function () {
      const movieId = $(this).data("id");
      const selectedMovie = movies.find((movie) => movie.id === movieId);
  
      if (selectedMovie && selectedMovie.remainingTickets > 0) {
        selectedMovie.remainingTickets -= 1; // Decrease ticket count
        $("#ticket-num").text(`${selectedMovie.remainingTickets}`);
  
      
        if (selectedMovie.remainingTickets === 0) {
          alert(`Tickets for ${selectedMovie.title} are sold out!`);
          $(this).prop("disabled", true);
        } else {
          alert(`You have purchased a ticket for ${selectedMovie.title}!`);
        }
      }
    });
  });
  