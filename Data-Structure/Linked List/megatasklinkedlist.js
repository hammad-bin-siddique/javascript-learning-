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
    };
};


class MusicPlaylist {
    constructor()  {
        this.head = null;
        this.tail = null;
        this.currentNode = null;  // Mean ke abhi kn sa song play ho raha ha 
        this.length = 0;
    };


    //? Ab Add Song Method Banai ge Mean ke Playlist ke end main node add karna or us ko link karna 


    addSong(title) {
        const newSong = new SongNode(title);
        // edge case agar playlist khali ho to head or tail dono same node ho ge 

        if(this.head === null) {
            this.head = newSong;
            this.tail = newSong;
            newSong.next = this.head;
            newSong.prev = this.head;
            this.currentNode = this.head;
            
            
        }

        else {

            this.tail.next = newSong;
            newSong.prev = this.tail;
            newSong.next = this.head;
            this.tail = newSong;
            this.head.prev = this.tail;
        };

        this.length++;
    };


    //? Ab yaha  play next method bane ga mean ke next song per move karna ho to phir 

    playNext() {
        if(this.currentNode === null) {
            console.log("Playlist is Empty");
            return; // function close
        };

        this.currentNode = this.currentNode.next;
    };

    //? Now play previous method Mean we have to shift to the previous song 

    playPrevious() {
        if(this.currentNode === null) {
            console.log("Playlist is Empty");
            return; // function close
        };

        this.currentNode = this.currentNode.prev;
    };

    //? Ab show current song method banai ge mean ke is waqt kn sa song play ho raha ha 

    showCurrentSong() {
        if(this.currentNode === null) {
            console.log("Playlist is Empty");
            return;
        };

        console.log(this.currentNode.title);
    };
}

const playlist = new MusicPlaylist();

console.log("===Check Add Song In PlayList===");
playlist.addSong("Let Me Love You");
playlist.addSong("Ride It");
playlist.addSong("Faded");

console.log(playlist.head.title); // Let Me Love You
console.log(playlist.head.next.title); // Ride it
console.log(playlist.tail.next.title); // Let Me Love You
console.log(playlist.head.next.next.title); // Faded


console.log("===Check Play Next in Playlist===");

playlist.playNext();
console.log(playlist.currentNode.title); // Ride it
playlist.playNext();
console.log(playlist.currentNode.title); // Faded

playlist.playNext();
console.log(playlist.currentNode.title); //! Let Me Love You  wapis Head per a gia ha 


console.log("===Check Play Previous Song in Playlist===");

playlist.playPrevious();

console.log(playlist.currentNode.title); // pehle Head per tha Mean ke let me love you wale per ab is se pitchla song Faded ha 

playlist.playPrevious();
console.log(playlist.currentNode.title); // ab faded se previous song Ride it ha


console.log("===Check Show Current Song===");
playlist.showCurrentSong(); // Ride It