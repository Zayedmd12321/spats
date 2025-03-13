// The list of books in json format 
const books = [
  {
    "title": "Fantastic Beasts",
    "author": "J.K. Rowling",
    "about": "Set in the magical world of wizards, this story follows Newt Scamander, a magizoologist who embarks on a thrilling adventure. As Newt travels the globe, he encounters various magical creatures and uncovers dark secrets hidden within the wizarding world. Along the way, he faces numerous challenges and allies, ultimately playing a key role in shaping the future of magic. The book explores themes of acceptance, responsibility, and the struggle between good and evil. It introduces a new generation to the rich lore of the Wizarding World, with deep connections to familiar characters and places.",
    "price": "599",
    "image": "images/books/book18.jpg",
    "category": "Fantasy"
  },
  {
    "title": "His Majesty's Dragon",
    "author": "Naomi Novik",
    "about": "In this historical fantasy novel, the Napoleonic Wars take a magical turn when Captain William Laurence of the British Navy discovers a dragon egg. The egg hatches, and Laurence is thrust into an entirely new world, where dragons are used as military assets. He is assigned to train and command the dragon Temeraire, and together, they navigate the complexities of war, loyalty, and friendship. As the two face enemies both on the battlefield and within their own ranks, Laurence and Temeraire develop a deep bond that transcends human and animal. The novel explores themes of duty, honor, and the unexpected alliances formed in times of war.",
    "price": "599",
    "image": "images/books/book11.jpeg",
    "category": "Fantasy"
  },
  {
    "title": "Psycho",
    "author": "Robert Bloch",
    "about": "A classic psychological thriller that delves deep into the disturbed mind of Norman Bates, a seemingly mild-mannered man who runs a small motel. When a young woman, Marion Crane, steals a large sum of money and checks into Bates' motel, she disappears without a trace. As a detective and Marion's sister search for her, the dark secrets of Bates' past are slowly revealed. The story explores themes of identity, obsession, and the chilling effects of mental illness. It remains one of the most influential horror novels, setting the stage for future psychological thrillers and horror films.",
    "price": "350",
    "image": "images/books/book12.jpg",
    "category": "Horror"
  },
  {
    "title": "The Cold Dish",
    "author": "Craig Johnson",
    "about": "Set in the remote town of Durant, Wyoming, this mystery novel follows Sheriff Walt Longmire as he investigates the murder of a young man. The crime is tied to an old injustice, and Longmire must navigate the complexities of small-town justice and family loyalty. As the investigation unfolds, it becomes clear that the murder is just one piece of a larger puzzle, with deep-seated resentment and unresolved tensions at its core. The novel delves into themes of justice, morality, and the burdens of leadership. Longmire’s quiet wisdom and sharp instincts make him an unforgettable protagonist in this gripping tale of revenge and redemption.",
    "price": "450",
    "image": "images/books/book10.jpeg",
    "category": "Fiction"
  },
  {
    "title": "We Do Not Part",
    "author": "Hang Kung",
    "about": "This poignant and heart-wrenching novel explores the complexities of love and separation. The story follows two people deeply connected by a bond that defies time and distance. Through the course of their lives, they face numerous challenges, including personal sacrifices, societal pressures, and inevitable separations. Yet, their connection endures, proving that love is not bound by physical presence. The novel is a reflection on the enduring power of emotional ties and the ways in which relationships evolve, adapt, and sometimes even survive the passage of time. It captures the beauty of quiet devotion and the heartbreak of letting go.",
    "price": "499",
    "image": "images/books/book1.jpeg",
    "category": "Fiction"
  },
  {
    "title": "River Sing Me Home",
    "author": "Amanda",
    "about": "Set against the backdrop of colonialism and its lasting impacts, this novel tells the story of a mother's desperate search for her children. After being separated from them during the brutal history of slavery, the protagonist embarks on a journey filled with danger and heartbreak to reclaim what was lost. Along the way, she faces the horrors of a society built on injustice, yet she remains resolute in her quest for family and freedom. The novel explores themes of resilience, hope, and the indomitable strength of the human spirit in the face of overwhelming adversity. It also serves as a powerful reminder of the human cost of historical wrongs and the enduring power of love.",
    "price": "550",
    "image": "images/books/book2.jpeg",
    "category": "Fiction"
  },
  {
    "title": "City of Orange",
    "author": "David Yoon",
    "about": "In a world shattered by catastrophe, a man wakes up in a desert city with no memory of his past. As he struggles to piece together the fragments of his life, he discovers a world of survival, loss, and hope. The novel takes place in a post-apocalyptic landscape, where humanity is trying to rebuild and adapt to a new way of life. Through the protagonist's journey, the book explores the fragility of memory and the ways in which individuals cope with trauma. It’s a meditation on what it means to survive, to remember, and to hope for a future in a broken world.",
    "price": "699",
    "image": "images/books/book4.jpeg",
    "category": "Science"
  },
  {
    "title": "The Otherwhere Post",
    "author": "John C. Hall",
    "about": "This science fiction novel takes readers on an exhilarating journey through alternate realities. The protagonist, a seemingly ordinary person, is suddenly thrust into a world where multiple versions of themselves exist, each facing different challenges and dilemmas. As they navigate these realities, the character uncovers the truth about the nature of existence, identity, and the delicate balance between fate and free will. The novel explores complex themes such as the consequences of choices, the meaning of self, and the interconnectedness of all things. It's a mind-bending exploration of the multiverse and the infinite possibilities that lie beyond our perception.",
    "price": "399",
    "image": "images/books/book5.jpeg",
    "category": "Science"
  },
  {
    "title": "Autocracy, Inc.",
    "author": "Anna D. Bostwick",
    "about": "In this in-depth exploration, the author examines the inner workings of autocratic regimes and their far-reaching impact on societies and economies. Drawing on historical examples and modern case studies, the book provides a detailed analysis of how autocracies rise, consolidate power, and maintain control. It explores the mechanisms of propaganda, surveillance, and political repression, offering a critical look at the ways in which authoritarian leaders manipulate public opinion and suppress dissent. The book also delves into the economic consequences of living under such regimes, shedding light on the challenges faced by ordinary citizens and the broader global implications of autocratic governance.",
    "price": "799",
    "image": "images/books/book6.jpeg",
    "category": "Non-Fiction"
  },
  {
    "title": "The New Map",
    "author": "Daniel Yergin",
    "about": "This comprehensive exploration of the global energy landscape examines the shifting dynamics of power, resources, and geopolitics in the modern world. As countries vie for control over energy sources and technologies, the book provides insight into how these forces are reshaping international relations. The author takes readers through the history of energy production, from oil to renewable sources, and how these changes are influencing global politics. It also looks at the role of emerging technologies and the rise of new economic players in the energy sector. The book highlights the intricate connections between energy, security, and the future of the planet, offering a thorough understanding of the energy landscape.",
    "price": "850",
    "image": "images/books/book7.jpeg",
    "category": "Non-Fiction"
  },
  {
    "title": "The Bluest Eye",
    "author": "Toni Morrison",
    "about": "This powerful and haunting novel explores the themes of race, beauty, and identity in America. Set during the Great Depression, the story follows Pecola Breedlove, a young African American girl who longs for blue eyes, believing that they would make her beautiful and give her the acceptance she craves. As the narrative unfolds, the novel delves into the societal pressures and racial prejudices that shape Pecola's self-worth. Morrison uses rich, evocative language to depict the trauma and violence experienced by Pecola and other characters, highlighting the devastating effects of systemic racism. The book ultimately examines the complexities of beauty, identity, and belonging in a racially divided society.",
    "price": "499",
    "image": "images/books/book8.jpeg",
    "category": "Fiction"
  },
  {
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "about": "A beloved classic of English literature, 'Pride and Prejudice' is a timeless exploration of love, social class, and personal growth. The novel centers on Elizabeth Bennet, a witty and independent young woman, and her evolving relationship with the aloof and seemingly arrogant Mr. Darcy. Set in the early 19th century, the story explores the complexities of courtship, marriage, and societal expectations, as Elizabeth and Darcy navigate their misunderstandings and prejudices. As the characters grow and learn from their mistakes, the novel highlights themes of self-awareness, personal transformation, and the importance of mutual respect in relationships. Austen’s sharp social commentary and humor continue to resonate with readers today.",
    "price": "299",
    "image": "images/books/book3.jpeg",
    "category": "Fiction"
  },
  {
    "title": "Trash",
    "author": "Andy Mulligan",
    "about": "Set in a sprawling garbage dump in a third-world country, 'Trash' tells the gripping story of three boys who stumble upon a bag of money hidden among the refuse. As they attempt to uncover the mystery behind the money, they find themselves embroiled in a complex web of corruption, greed, and injustice. The novel follows the boys’ journey as they uncover secrets about the world of politics, crime, and exploitation that affect their impoverished community. With themes of survival, hope, and moral courage, 'Trash' sheds light on the lives of marginalized people and their fight for justice in an unjust world. The book highlights the resilience of youth and the power of friendship in the face of adversity.",
    "price": "399",
    "image": "images/books/book9.jpeg",
    "category": "Ficition"
  },
  {
    "title": "The Godfather",
    "author": "Mario Puzo",
    "about": "A landmark work of crime fiction, 'The Godfather' follows the rise and fall of the Corleone family, one of the most powerful mafia families in New York. The novel centers on Vito Corleone, the family patriarch, and his efforts to maintain control of his criminal empire while protecting his loved ones. The story delves into themes of loyalty, power, and family, examining the sacrifices made by those within the mafia to preserve their honor and influence. As Vito’s son, Michael, is drawn deeper into the family business, the novel explores the moral dilemmas of crime and retribution. 'The Godfather' is a gripping and multi-layered tale of crime, betrayal, and the pursuit of power.",
    "price": "499",
    "image": "images/books/book13.jpg",
    "category": "Ficition"
  },
  {
    "title": "The Maiden",
    "author": "J.R. Towns",
    "about": "In this epic fantasy novel, a young woman embarks on a dangerous journey to save her kingdom from a dark and powerful curse. The Maiden, the chosen one, is tasked with overcoming numerous trials and adversaries as she searches for a way to break the curse that threatens to destroy everything she holds dear. Along the way, she forms alliances with unlikely companions, including a wise mentor and a group of rebels fighting for justice. The story is filled with magic, intrigue, and political machinations as the heroine learns about her true destiny and the sacrifices required to save her people. Themes of courage, self-discovery, and sacrifice resonate throughout the novel.",
    "price": "399",
    "image": "images/books/book14.jpg",
    "category": "Fantasy"
  },
  {
    "title": "Jaws",
    "author": "Peter Benchley",
    "about": "Set on the fictional island of Amity, 'Jaws' tells the chilling story of a giant great white shark that terrorizes a small beach town. As the shark kills several residents and tourists, the local police chief, a marine biologist, and a grizzled fisherman band together to hunt down the creature. The novel explores the fear and paranoia that grip the community, as well as the dangers of human hubris and the natural world’s power. Benchley’s vivid descriptions and tense narrative create an atmosphere of suspense and horror, making 'Jaws' a landmark in both thriller and horror fiction. The novel delves into themes of courage, community, and the primal fear of the unknown.",
    "price": "499",
    "image": "images/books/book15.jpg",
    "category": "Horror"
  },
  {
    "title": "Get in Trouble",
    "author": "Kelly Link",
    "about": "A collection of short stories that blur the lines between fantasy, horror, and magical realism, 'Get in Trouble' features a wide array of strange and captivating tales. The stories explore themes of loss, desire, and the supernatural, often with a darkly humorous twist. Link’s unique voice combines elements of the surreal with the everyday, creating worlds where the ordinary becomes extraordinary. From a woman who can control time to a girl who befriends a ghost, each story challenges readers’ perceptions of reality and the possibilities of the unknown. The collection is a fascinating exploration of the strange and the mysterious, with a strong focus on human emotions and relationships.",
    "price": "550",
    "image": "images/books/book16.jpg",
    "category": "Fantasy"
  },
  {
    "title": "The Divine Comedy",
    "author": "Dante Alighieri",
    "about": "One of the most important works in Western literature, 'The Divine Comedy' is an epic poem that tells the journey of the soul through three realms: Hell, Purgatory, and Paradise. The protagonist, Dante, is guided by the Roman poet Virgil through the terrifying and morally complex landscape of Hell, where souls are punished for their sins. In Purgatory, Dante learns about redemption and the purification of the soul, while in Paradise, he experiences the divine presence of God. Through this allegorical journey, Dante explores themes of sin, virtue, and the ultimate quest for salvation. The work is a profound meditation on the human condition and the eternal struggle between good and evil.",
    "price": "799",
    "image": "images/books/book17.jpg",
    "category": "Fiction"
  }
]

// Select the container where the books will be displayed
const booksContainer = document.getElementById('card-section');
const body = document.querySelector('body');

function addBook(val){
  
  let i = 0
  books.forEach(book => {
  // Create a div for each book
  // console.log(book)
  let category = book.category
  if (val == category || val=="Categories"){
    const bookDiv = document.createElement('div');
    if(window.innerWidth<=770)
      bookDiv.className = i%2==0?'card left-fade-in':'card right-fade-in';
    else
      bookDiv.className = ((i+1)%4==1||(i+1)%4==2)?'card left-fade-in':'card right-fade-in';

    // Add book details to the div
    bookDiv.innerHTML = `
          
                  <div class="book-image">
                    <img src="${book.image}" alt="">
                    <p class="price">₹${book.price}</p>
                  </div>
                  <div class="description">
                  <div class="about">
                      <span class="book-name">${book.title}</span>
                      <span class="author-name">-${book.author}</span>
                  </div>
                      
                          <button class="wishlist">
                              <div class="mybtn">
                              <span class="text">Add to Wishlist</span>
                              <span class="btn-img1"><svg xmlns="http://www.w3.org/2000/svg" height="1.3rem" viewBox="0 -960 960 960"
                                  width="24px" fill="#fff">
                                  <path
                                      d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                              </svg></span>
                              </div>
                          </button>
                          <button class="buy">
                              <div class="mybtn">
                              <span class="text">Buy now</span>
                              <span class="btn-img2"><svg xmlns="http://www.w3.org/2000/svg" height="1.3rem" viewBox="0 -960 960 960"
                                  width="24px" fill="#fff">
                                  <path
                                      d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
                              </svg></span>
                              </div>
                          </button>
                          <button class="read-more" id=${i}>
                              <div class="mybtn">
                              <span class="text">Read More</span>
                              <span class="btn-img3"><svg xmlns="http://www.w3.org/2000/svg" height="1.3rem" viewBox="0 -960 960 960" 
                                width="24px" fill="#fff">
                                <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/>
                                </svg></span>
                              </div>
                          </button>
                      
                  </div>
              
        `;

    //Adding html
    booksContainer.appendChild(bookDiv);
  }
  i++;
});
}

let category = document.getElementById('Categories').innerText;
addBook(category);


//Creating a dropdown in Categories
document.getElementsByClassName('Categories')[0].addEventListener('click', function (e) {
  e.preventDefault();
  const dropdownMenu = document.querySelector('.dropdown-menu');
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

//Changing the Category types when clicked in the dropdown menu
function changeCategory(event) {
  let new_category = event.id;
  document.getElementById('Categories').innerText = new_category;
}

//Adding the Desired book in the desired clicked category
let catag = document.querySelectorAll('.categories')
catag.forEach(cat=>{
  cat.addEventListener("click",function(event ){
    let clickedElement = event.target;
    let elementId = clickedElement.id;
    document.getElementById('Categories').innerText = elementId;
    document.getElementById('cat_head').innerText = `${elementId} Books`
    document.getElementById('card-section').innerHTML = ""
    addBook(elementId)
    add_read_more();
  })
})

//Adding hamberger menu
function openModal(index) {
  document.getElementsByClassName("modal")[index].style.display = "flex";
};

function closeModal(index) {
  document.getElementsByClassName("modal")[index].style.display = "none";
}

function hamberger() {
  document.getElementsByClassName('dropdown-menu')[0].style.display = "none";
  if(window.innerWidth<=770){
      const bars = document.getElementsByClassName('bars')[0];
      const cross = document.getElementsByClassName('close')[0];
      const link = document.getElementById('link');
      const nav = document.getElementsByClassName('nav');
      if (bars.style.display === "none") {
          cross.style.display = "none";
          bars.style.display = "block";
          link.style.display = "none";
      }
      else {
          bars.style.display = "none";
          cross.style.display = "block";
          link.style.display = "flex";
          link.style.justifyContent = "flex-end";
          link.style.position = "absolute";
          link.style.height = "100vh";
          link.style.background = "rgba(0, 0, 0, 0.8)";
          document.getElementsByClassName('dropdown-menu')[0].style.display = "block";
      }
  }
}

//Adding Animations cascading effect
const nav_item = document.getElementsByClassName('fade-in');
for (let i = 0; i < nav_item.length; i++) {
  const element = nav_item[i];
  element.style.animationDelay = (i<3)?`${(i+1)/10}s`:'0.3s';
} 

function add_read_more() {
  const read_more_btn = document.getElementsByClassName('read-more');
  for (let i = 0; i < read_more_btn.length; i++) {
    const element = read_more_btn[i];
    element.addEventListener('click',()=>{
      let book = books[element.id];
      console.log(book) 
      const modal = document.createElement('div');
      modal.className = 'modal';

      modal.innerHTML = `
          <div class="modal-content">
                <div class="modal-book-image">
                    <img src="${book.image}" alt="">
                </div>
                <div class="modal-desc">
                    <h2 class="modal-title">${book.title}</h2>
                    <h4 class="modal-author">${book.author}</h4>
                    <p class="modal-book-desc">${book.about}</p>
                </div>
                <div class="close-modal">
                    <span onclick="closeModal()">&times;</span>
                </div>
            </div>
          `;

      body.append(modal);
      modal.style.display = 'flex';
    })
  }
};

add_read_more()

function closeModal() {
  const modal = document.querySelector('.modal');
  modal.style.display = 'none';
  modal.remove()
}