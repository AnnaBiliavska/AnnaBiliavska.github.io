/* IN ORDER TO RUN SCRIPT:
1. Open console in Chrome Browser
2. Copy text below
3. Paste into console and click Enter
That's it. */

var library = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    status: 2
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    status: 0
  },
  {
    title: '1984',
    author: 'George Orwell',
    status: 2
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    status: 1
  },
  {
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    status: 0
  }];

function showStatus(){
  library.forEach((book) => {
    var output = "";
    if(book.status === 2){
      output = "Already read ";
    }
    else if(book.status === 1){
      output = "You're reading now ";
    }
    else{
      output = "You need to read ";
    }
    console.log(output  + "'" + book.title + "' by " + book.author);
  })
}

showStatus();
