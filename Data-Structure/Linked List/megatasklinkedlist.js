//! Mega Task Music Playlist Manager 🎵

// Mega Task Requirements

// Tumhari MusicPlaylist class mein ye operations honge:

// Method	Kaam
// addSong(title)	Playlist ke end mein naya song add karo
// removeSong(title)	Song ko naam se dhoondh ke remove karo
// playNext()	Current song se agla song par jao (circular — end pe first pe wapis)
// playPrevious()	Current song se pichla song par jao (circular — start pe last pe wapis)
// showCurrentSong()	Abhi konsa song "play" ho raha hai, wo dikhao
// showPlaylist()	Poori playlist print karo, current song ko highlight karke

class SongNode {
  constructor(title) {
    this.title = title;
    this.next = null;
    this.prev = null;
  }
}

class MusicPlaylist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.currentNode = null; // Mean ke abhi kn sa song play ho raha ha
    this.length = 0;
  }

  //? Ab Add Song Method Banai ge Mean ke Playlist ke end main node add karna or us ko link karna

  addSong(title) {
    const newSong = new SongNode(title);
    // edge case agar playlist khali ho to head or tail dono same node ho ge

    if (this.head === null) {
      this.head = newSong;
      this.tail = newSong;
      newSong.next = this.head;
      newSong.prev = this.head;
      this.currentNode = this.head;
    } else {
      this.tail.next = newSong;
      newSong.prev = this.tail;
      newSong.next = this.head;
      this.tail = newSong;
      this.head.prev = this.tail;
    }

    this.length++;
  }

  //? Ab yaha  play next method bane ga mean ke next song per move karna ho to phir

  playNext() {
    if (this.currentNode === null) {
      console.log("Playlist is Empty");
      return; // function close
    }

    this.currentNode = this.currentNode.next;
  }

  //? Now play previous method Mean we have to shift to the previous song

  playPrevious() {
    if (this.currentNode === null) {
      console.log("Playlist is Empty");
      return; // function close
    }

    this.currentNode = this.currentNode.prev;
  }

  //? Ab show current song method banai ge mean ke is waqt kn sa song play ho raha ha

  showCurrentSong() {
    if (this.currentNode === null) {
      console.log("Playlist is Empty");
      return;
    }

    console.log(this.currentNode.title);
  }

  //? now make remove song method in this method we will remove song from the circular playlist and also we will check edge case like there is only one song in the playlist or no song in the playlist or more song as well

  removeSong(title) {
    // Case 1 if the playlist is empty

    if (this.head === null) {
      console.log("Playlist is Empty");
      return;
    }

    let current = this.head; // First Node ko current variable main save kia

    do {
      // case 2 mean ke 1 he son ho or wo current bhi ho to phir head bhi null ho ga tail bhi null ho or current node bhi null ho ga

      if (current.title === title) {
        if (current.next === current) {
          this.head = null;
          this.tail = null;
          this.currentNode = null;
          this.length--;
          return;
        }

        // Normal Case mean ke agar kahi nodes ho to phir

        current.prev.next = current.next; // Pehle jo song remove ho ga us ke next ka reference save kare ge

        current.next.prev = current.prev; // or phir is ke previous song ka reference bhi save kare ge

        if (current === this.head) {
          this.head = current.next;
        } // agar remove jo ham song kare ge wo head hua to head ke agle ko head bana de ga

        if (current === this.tail) {
          this.tail = current.prev;
        } // agar remove hone wala song tail hua to tail se pitcle wale ko tail banai ge

        if (this.currentNode === current) {
          this.currentNode = current.next;
        } // agar current song ko he remove karna hua to phir current se agle node ko ham current bana de ge

        this.length--;

        return; // agar song mil jata ha to phir function ko rok do
      }
      current = current.next; // warna node ko age barhate jao
    } while (current !== this.head); // mean ke 1 circle complete ho kar wapis head per a jai to loop rok do

    console.log("Song Not Found"); // or print karo ke song not found
  }
  //? Now we make show playlist method

  showPlaylist() {
    if (this.head === null) {
      console.log("Playlist is Empty");
      return;
    };

    let current = this.head;

    do {
      if (current === this.currentNode) {
        console.log("Playing:", this.currentNode.title); // yani agar current node he current song ha to Playing Mark karo
      } else {
        console.log("Title:", current.title); // warna khali title print karo
      }
      current = current.next; // loop ko agey barhao
    } while (current !== this.head); // or tab tak loop ko chalate raho jab tak head wapis nahi a jata 1 chakar laga kar
  };
};

const playlist = new MusicPlaylist();
playlist.addSong("Let Me Love You");
playlist.addSong("Ride It");
playlist.addSong("Faded");
playlist.addSong("Perfect");

console.log("=== Initial Playlist ===");
playlist.showPlaylist(); // sab show ho ge 4 or Let me love you playing ho ga 

playlist.playNext(); // Ride it
playlist.playNext(); // Faded
console.log("=== After 2x playNext ===");
playlist.showPlaylist(); // puri play list show ho gi or Faded Playing ho raha ho ga

console.log("=== Remove 'Ride It' ===");
playlist.removeSong("Ride It"); 
playlist.showPlaylist(); // faded playing or ride nahi ho ga ab total 3 

console.log("=== Try removing currentNode's song ===");
playlist.showCurrentSong(); // Faded
playlist.removeSong(playlist.currentNode.title); //  Faded Remove ho gia 
playlist.showPlaylist(); // ab sirf perfect or let me love you ho ga or playing perfect ho ga 
