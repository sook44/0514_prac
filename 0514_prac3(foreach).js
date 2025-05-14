const songList = [
  "너에게 닿기를",
  "like JENNIE",
  "Drowning",
  "모르시나요(PROD.로코베리)",
  "TOO BAD",
  "HOME SWEET HOME",
  "나는 반딧불",
  "Whiplash",
  "REBEL HEART",
  "HOT",
];

const songDetails = {
  "너에게 닿기를": { artist: "10CM", likes: 58471 },
  "like JENNIE": { artist: "제니", likes: 76168 },
  "Drowning": { artist: "WOODZ", likes: 189248 },
  "모르시나요(PROD.로코베리)": { artist: "조째즈", likes: 70040 },
  "TOO BAD": { artist: "G-DRAGON", likes: 146178 },
  "HOME SWEET HOME": { artist: "G-DRAGON", likes: 211539 },
  "나는 반딧불": { artist: "황가람", likes: 141198 },
  "Whiplash": { artist: "aespa", likes: 132606 },
  "REBEL HEART": { artist: "IVE (아이브)", likes: 98429 },
  "HOT": { artist: "LE SSERAFIM (르세라핌)", likes: 35001 },
};



//최신 노래 리스트
const songListElement = document.getElementById("songList");

// console.log (songListElement)
songListElement.innerHTML = "";

for(let a = 0; a < songList.length; a++) {
  const listItem = document.createElement ("li");
  listItem.classList.add ("list-group-item");
  listItem.textContent = `${a + 1}. ${songList[a]}}`;
  songListElement.appendChild(listItem);
}


//노래 정보 리스트
const songDetailsElement =  document.getElementById("songInf");
songDetailsElement.innerHTML= "";


let a = 0; 
for (let key in songDetails) {
  const listItem = document.createElement("li");
  listItem.classList.add("list-group-item");
  listItem.textContent = `${a+1}. ${key} / ${songDetails[key].artist} / ${songDetails[key].likes}}`;
  a++ //새로운 위치 만들기 //${a+1}. => for in은 값을 알 수 없음 => let a로 값 지정 => 원하는 위치에 ${a+1}. 값을 넣어준다
     songDetailsElement.appendChild(listItem);
  //console.log ({key});
  console.log (songDetails[key])
}
 