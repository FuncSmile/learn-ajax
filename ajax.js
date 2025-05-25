// bikin objek XMLHttpRequest, biar bisa nge-request data dari server gitu
const req = new XMLHttpRequest();

// kalo requestnya udah kelar, langsung eksekusi function ini
req.onload = function () {
    // parsing data dari JSON, biar bisa dipake di JS
    const data = JSON.parse(this.response);
    // nge-print id dari data yang udah diambil, biar tau hasilnya
    console.log(data.id);
};

// kalo requestnya error, langsung kasih tau errornya bro
req.onerror = function () {
    console.error("Error:", this.status);
};

// mulai request ke endpoint, pake method GET ke url yang dituju
req.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
// kirim requestnya, tinggal nunggu response deh
req.send();